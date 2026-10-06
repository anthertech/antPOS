# Copyright (c) 2026, Anther Technologies Pvt. Ltd. and Contributors
# See license.txt

"""A POS sale saved and submitted for real, through every hook.

The other tests mock the database to keep them fast. These do not: they catch
the cases mocks hide, such as a rule that only fails once ERPNext has
recalculated the document.
"""

import frappe
from frappe.tests.utils import FrappeTestCase
from frappe.utils import today

from ant_pos.ant_pos.api.item import items as item_details


class TestPosSaleFlow(FrappeTestCase):
	def setUp(self):
		import json

		self.profile_name = frappe.db.get_value("POS Profile", {"disabled": 0}, "name")
		self.customer = frappe.db.get_value("Customer", {"disabled": 0}, "name")
		self.shift = frappe.db.get_value(
			"Ant Opening Shift",
			{"status": "Open", "docstatus": 1, "cashier": frappe.session.user},
			"name",
		)
		if not (self.profile_name and self.customer and self.shift):
			self.skipTest("needs a POS Profile, a customer and an open shift")

		self.profile = frappe.get_doc("POS Profile", self.profile_name)
		if not self.profile.payments:
			self.skipTest("the POS Profile has no payment methods")
		self.mode = self.profile.payments[0].mode_of_payment

		item = frappe.db.get_value(
			"Item",
			{"disabled": 0, "is_sales_item": 1, "has_serial_no": 0, "has_batch_no": 0, "has_variants": 0},
			["name", "stock_uom"],
			as_dict=True,
		)
		if not item:
			self.skipTest("needs a plain sales item")

		frappe.db.begin()
		self.addCleanup(frappe.db.rollback)

		details = item_details(
			self.profile_name,
			json.dumps({"item": {"item_code": item.name, "stock_uom": item.stock_uom}}),
			self.customer,
		)
		self.line = {
			key: details.get(key)
			for key in ("item_code", "uom", "conversion_factor", "rate", "warehouse")
			if details.get(key) is not None
		}
		self.line["qty"] = 1

	def invoice(self, **values):
		doc = frappe.get_doc(
			{
				"doctype": "Sales Invoice",
				"customer": self.customer,
				"company": self.profile.company,
				"pos_profile": self.profile_name,
				"is_pos": 1,
				"update_stock": 1,
				"custom_ant_opening": self.shift,
				"selling_price_list": self.profile.selling_price_list,
				"items": [dict(self.line)],
				**values,
			}
		)
		return doc

	def paid(self, doc, amount=None):
		doc.append("payments", {"mode_of_payment": self.mode, "amount": 0})
		doc.insert()
		doc.payments[0].amount = amount if amount is not None else (doc.rounded_total or doc.grand_total)
		doc.save()
		return doc

	def test_a_cash_sale_goes_through(self):
		doc = self.paid(self.invoice())
		doc.submit()
		self.assertEqual(doc.docstatus, 1)
		self.assertEqual(doc.outstanding_amount, 0)
		self.assertEqual(doc.custom_ant_opening, self.shift)

	def test_change_is_worked_out(self):
		doc = self.invoice()
		doc = self.paid(doc, amount=(self.line["rate"] or 0) + 50)
		doc.submit()
		self.assertEqual(doc.change_amount, 50)

	def test_a_sale_covered_by_customer_credit_goes_through(self):
		"""ERPNext's "paid in full" check counts only the payment table, and a
		sale settled from credit has none."""
		frappe.db.set_value("POS Profile", self.profile_name, "allow_partial_payment", 0)
		frappe.clear_cache(doctype="POS Profile")

		advance = frappe.get_doc(
			{
				"doctype": "Payment Entry",
				"payment_type": "Receive",
				"party_type": "Customer",
				"party": self.customer,
				"company": self.profile.company,
				"mode_of_payment": self.mode,
				"paid_amount": 500,
				"received_amount": 500,
				"reference_no": self.shift,
				"reference_date": today(),
				"posting_date": today(),
			}
		)
		advance.insert()
		advance.submit()

		doc = self.invoice(is_pos=0)
		doc.insert()
		doc.set_advances()
		for row in doc.advances:
			row.allocated_amount = min(row.advance_amount, doc.grand_total)
		doc.save()
		doc.submit()

		self.assertEqual(doc.docstatus, 1)
		self.assertEqual(doc.outstanding_amount, 0)

	def test_an_unpaid_sale_is_refused_when_partial_payment_is_off(self):
		frappe.db.set_value("POS Profile", self.profile_name, "allow_partial_payment", 0)
		frappe.clear_cache(doctype="POS Profile")

		doc = self.paid(self.invoice(), amount=0)
		with self.assertRaises(frappe.ValidationError):
			doc.submit()

	def test_a_sale_cannot_be_submitted_into_a_closed_shift(self):
		doc = self.paid(self.invoice())
		frappe.db.set_value("Ant Opening Shift", self.shift, "status", "Closed")
		frappe.clear_cache()
		with self.assertRaises(frappe.ValidationError):
			doc.submit()

	def test_a_sale_in_a_closed_shift_cannot_be_cancelled(self):
		doc = self.paid(self.invoice())
		doc.submit()
		frappe.db.set_value("Ant Opening Shift", self.shift, "status", "Closed")
		frappe.clear_cache()
		with self.assertRaises(frappe.ValidationError):
			doc.cancel()

	def test_the_shift_totals_include_this_sale(self):
		from ant_pos.ant_pos.api.payment_entry import shift_payment_totals

		before = shift_payment_totals(self.shift).get(self.mode, 0)
		doc = self.paid(self.invoice())
		doc.submit()
		after = shift_payment_totals(self.shift).get(self.mode, 0)

		self.assertAlmostEqual(after - before, doc.paid_amount)
