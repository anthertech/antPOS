# Copyright (c) 2026, Anther Technologies Pvt. Ltd. and Contributors
# See license.txt

from unittest.mock import patch

import frappe
from erpnext.accounts.doctype.pos_invoice.pos_invoice import POSInvoice
from frappe.tests.utils import FrappeTestCase

from ant_pos.ant_pos.api import pos_invoice_rules

MODULE = "ant_pos.ant_pos.api.pos_invoice_rules"


class TestErpnextChecksExist(FrappeTestCase):
	"""The rules are ERPNext's, called with our document. If ERPNext renames
	or drops one, this fails instead of the check quietly not running."""

	def test_every_check_is_an_erpnext_method(self):
		for name, _needs_payments in pos_invoice_rules.ERPNEXT_CHECKS:
			self.assertTrue(callable(getattr(POSInvoice, name, None)), name)

	def test_skipped_checks_are_named_and_still_exist(self):
		for name, reason in pos_invoice_rules.SKIPPED.items():
			self.assertTrue(callable(getattr(POSInvoice, name, None)), name)
			self.assertTrue(reason)

	def test_the_class_swap_is_gone(self):
		"""before_save assigned POSInvoice to doc.__class__, which changed the
		class every later hook in the save saw."""
		import inspect

		from ant_pos.ant_pos.api import sales_invoice

		for module in (sales_invoice, pos_invoice_rules):
			self.assertNotIn("__class__ =", inspect.getsource(module), module.__name__)

	def test_hook_runs_on_validate(self):
		hooks = frappe.get_hooks("doc_events")["Sales Invoice"]
		self.assertIn(f"{MODULE}.validate", hooks.get("validate", []))


class TestRulesApplyToPosSalesOnly(FrappeTestCase):
	def invoice(self, **values):
		doc = frappe.new_doc("Sales Invoice")
		doc.update({"pos_profile": "Till 1", "company": "Company A", **values})
		return doc

	def test_invoices_without_a_pos_profile_are_untouched(self):
		doc = self.invoice(pos_profile=None)
		with (
			patch.object(POSInvoice, "validate_payment_amount") as check,
			patch(f"{MODULE}.validate_shift") as shift_check,
		):
			pos_invoice_rules.validate(doc)
		check.assert_not_called()
		shift_check.assert_not_called()

	def test_pos_sales_run_the_erpnext_checks(self):
		doc = self.invoice()
		doc.append("payments", {"mode_of_payment": "Cash", "amount": 100})
		called = []
		with patch(f"{MODULE}._prepare_tracked_rows"), patch(f"{MODULE}.validate_shift"):
			for name, _needs in pos_invoice_rules.ERPNEXT_CHECKS:
				patcher = patch.object(POSInvoice, name, lambda d, n=name: called.append(n))
				patcher.start()
				self.addCleanup(patcher.stop)
			pos_invoice_rules.validate(doc)

		self.assertEqual(called, [name for name, _needs in pos_invoice_rules.ERPNEXT_CHECKS])

	def test_payment_checks_are_skipped_without_a_payment_table(self):
		"""A sale settled from customer credit is saved with is_pos = 0 and no
		payment rows; ERPNext would refuse it for having no mode of payment."""
		doc = self.invoice()
		called = []
		with patch(f"{MODULE}._prepare_tracked_rows"), patch(f"{MODULE}.validate_shift"):
			for name, _needs in pos_invoice_rules.ERPNEXT_CHECKS:
				patcher = patch.object(POSInvoice, name, lambda d, n=name: called.append(n))
				patcher.start()
				self.addCleanup(patcher.stop)
			pos_invoice_rules.validate(doc)

		self.assertNotIn("validate_mode_of_payment", called)
		self.assertIn("validate_payment_amount", called)


class TestPaymentRules(FrappeTestCase):
	"""The rules themselves are ERPNext's; these confirm they now bite."""

	def invoice(self, is_return=0):
		doc = frappe.new_doc("Sales Invoice")
		doc.update(
			{
				"pos_profile": "Till 1",
				"company": "Company A",
				"is_pos": 1,
				"is_return": is_return,
				"docstatus": 0,
			}
		)
		return doc

	def test_a_sale_cannot_be_paid_with_a_negative_amount(self):
		doc = self.invoice()
		doc.append("payments", {"mode_of_payment": "Cash", "amount": -100})
		with self.assertRaises(frappe.ValidationError):
			POSInvoice.validate_payment_amount(doc)

	def test_a_return_cannot_be_paid_with_a_positive_amount(self):
		doc = self.invoice(is_return=1)
		doc.append("payments", {"mode_of_payment": "Cash", "amount": 100})
		with self.assertRaises(frappe.ValidationError):
			POSInvoice.validate_payment_amount(doc)

	def test_change_needs_an_account_to_book_it_to(self):
		doc = self.invoice()
		doc.update({"grand_total": 100, "rounded_total": 100, "paid_amount": 120})
		with self.assertRaises(frappe.ValidationError):
			POSInvoice.validate_change_amount(doc)
		self.assertEqual(doc.change_amount, 20)


class TestTrackingFlags(FrappeTestCase):
	"""Sales Invoice Item has no has_serial_no / has_batch_no field, so
	ERPNext's serial and batch check would pass on every line without this."""

	def test_flags_come_from_the_item(self):
		doc = frappe.new_doc("Sales Invoice")
		row = doc.append("items", {"item_code": "ITEM-X"})
		with patch(
			"frappe.get_cached_value",
			return_value=frappe._dict(has_serial_no=1, has_batch_no=0),
		):
			pos_invoice_rules._prepare_tracked_rows(doc)

		self.assertEqual(row.get("has_serial_no"), 1)
		self.assertEqual(row.get("has_batch_no"), 0)

	def test_plain_serial_and_batch_fields_are_marked_as_such(self):
		"""ERPNext sets this flag itself, but only on submit; the check runs
		long before that."""
		doc = frappe.new_doc("Sales Invoice")
		row = doc.append("items", {"item_code": "ITEM-X", "serial_no": "SN001"})
		with patch(
			"frappe.get_cached_value",
			return_value=frappe._dict(has_serial_no=1, has_batch_no=0),
		):
			pos_invoice_rules._prepare_tracked_rows(doc)

		self.assertEqual(row.use_serial_batch_fields, 1)

	def test_a_row_with_a_bundle_is_left_alone(self):
		doc = frappe.new_doc("Sales Invoice")
		row = doc.append(
			"items", {"item_code": "ITEM-X", "serial_no": "SN001", "serial_and_batch_bundle": "BUNDLE-1"}
		)
		with patch(
			"frappe.get_cached_value",
			return_value=frappe._dict(has_serial_no=1, has_batch_no=0),
		):
			pos_invoice_rules._prepare_tracked_rows(doc)

		self.assertFalse(row.use_serial_batch_fields)

	def test_rows_without_an_item_are_left_alone(self):
		doc = frappe.new_doc("Sales Invoice")
		doc.append("items", {})
		pos_invoice_rules._prepare_tracked_rows(doc)  # must not raise


class TestShiftBinding(FrappeTestCase):
	"""A POS sale belongs to one open shift, the seller's own."""

	CASHIER = "cashier-a@example.com"

	def invoice(self, docstatus=0, **values):
		doc = frappe.new_doc("Sales Invoice")
		doc.update(
			{
				"pos_profile": "Till 1",
				"company": "Company A",
				"custom_ant_opening": "SHIFT-A",
				"docstatus": docstatus,
				**values,
			}
		)
		return doc

	def shift(self, **values):
		return frappe._dict(
			{
				"name": "SHIFT-A",
				"status": "Open",
				"docstatus": 1,
				"cashier": self.CASHIER,
				"pos_profile": "Till 1",
				"company": "Company A",
				**values,
			}
		)

	def setUp(self):
		previous = frappe.session.user
		frappe.set_user(self.CASHIER)
		self.addCleanup(frappe.set_user, previous)

	def run_with(self, doc, shift, open_shift="SHIFT-A", manager=False):
		with (
			patch("frappe.db.get_value", return_value=shift),
			patch(f"{MODULE}._open_shift_for", return_value=open_shift),
			patch(f"{MODULE}.is_shift_manager", return_value=manager),
		):
			pos_invoice_rules.validate_shift(doc)

	def test_a_submitted_sale_cannot_use_a_closed_shift(self):
		doc = self.invoice(docstatus=1)
		with self.assertRaises(frappe.ValidationError):
			self.run_with(doc, self.shift(status="Closed"), open_shift=None)

	def test_a_submitted_sale_cannot_use_a_draft_shift(self):
		doc = self.invoice(docstatus=1)
		with self.assertRaises(frappe.ValidationError):
			self.run_with(doc, self.shift(docstatus=0), open_shift=None)

	def test_another_cashiers_shift_is_refused(self):
		doc = self.invoice(docstatus=1)
		with self.assertRaises(frappe.PermissionError):
			self.run_with(doc, self.shift(cashier="someone-else@example.com"))

	def test_a_manager_may_sell_into_another_cashiers_shift(self):
		doc = self.invoice(docstatus=1)
		self.run_with(doc, self.shift(cashier="someone-else@example.com"), manager=True)

	def test_a_shift_on_another_profile_is_refused(self):
		doc = self.invoice(docstatus=1)
		with self.assertRaises(frappe.ValidationError):
			self.run_with(doc, self.shift(pos_profile="Till 2"))

	def test_a_shift_of_another_company_is_refused(self):
		doc = self.invoice(docstatus=1)
		with self.assertRaises(frappe.ValidationError):
			self.run_with(doc, self.shift(company="Company B"))

	def test_a_new_draft_gets_the_cashiers_open_shift(self):
		doc = self.invoice(custom_ant_opening=None)
		self.run_with(doc, self.shift(), open_shift="SHIFT-A")
		self.assertEqual(doc.custom_ant_opening, "SHIFT-A")

	def test_a_held_draft_moves_to_the_current_shift(self):
		"""A sale held in a shift that has since closed is picked up later in
		the cashier's new shift; a draft carries no accounting."""
		doc = self.invoice(custom_ant_opening="SHIFT-OLD")
		usable = {"SHIFT-OLD": False, "SHIFT-B": True}
		with (
			patch(f"{MODULE}._is_usable", side_effect=lambda s, d: usable[s]),
			patch(f"{MODULE}._open_shift_for", return_value="SHIFT-B"),
			patch("frappe.db.get_value", return_value=self.shift(name="SHIFT-B")),
			patch(f"{MODULE}.is_shift_manager", return_value=False),
		):
			pos_invoice_rules.validate_shift(doc)

		self.assertEqual(doc.custom_ant_opening, "SHIFT-B")

	def test_selling_without_any_shift_is_refused(self):
		doc = self.invoice(custom_ant_opening=None)
		with (
			patch(f"{MODULE}._open_shift_for", return_value=None),
		):
			with self.assertRaises(frappe.ValidationError):
				pos_invoice_rules.validate_shift(doc)

	def test_the_shift_field_is_not_copied(self):
		"""Duplicating an invoice used to carry its shift onto the new sale."""
		self.assertTrue(frappe.get_meta("Sales Invoice").get_field("custom_ant_opening").no_copy)
