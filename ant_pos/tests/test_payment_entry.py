# Copyright (c) 2026, Anther Technologies Pvt. Ltd. and Contributors
# See license.txt

import frappe
from frappe.tests.utils import FrappeTestCase
from frappe.utils import today

from ant_pos.ant_pos.api.payment_entry import get_mode_of_payment_account


class TestPosPaymentEntry(FrappeTestCase):
	"""The POS sends Payment Entries with no accounts or exchange rates."""

	def setUp(self):
		frappe.db.begin()
		row = frappe.db.sql(
			"""select mpa.parent as mode, mpa.company
			from `tabMode of Payment Account` mpa
			join `tabMode of Payment` mp on mp.name = mpa.parent
			where ifnull(mpa.default_account, '') != '' and mp.enabled = 1
			limit 1""",
			as_dict=True,
		)
		customer = frappe.db.get_value("Customer", {"disabled": 0}, "name")
		if not (row and customer):
			self.skipTest("needs a mode of payment with an account and a customer")
		self.mode, self.company, self.customer = row[0].mode, row[0].company, customer

	def tearDown(self):
		frappe.db.rollback()

	def test_accounts_and_exchange_rates_are_filled_in(self):
		# The same fields Payments > Record payment sends.
		pe = frappe.get_doc(
			{
				"doctype": "Payment Entry",
				"payment_type": "Receive",
				"posting_date": today(),
				"party_type": "Customer",
				"party": self.customer,
				"mode_of_payment": self.mode,
				"company": self.company,
				"paid_amount": 10,
				"received_amount": 10,
				"reference_no": "antpos-test",
				"reference_date": today(),
			}
		)
		pe.insert(ignore_permissions=True)

		self.assertEqual(pe.paid_to, get_mode_of_payment_account(self.mode, self.company))
		self.assertTrue(pe.paid_from)
		self.assertTrue(pe.source_exchange_rate)
		self.assertTrue(pe.target_exchange_rate)

	def test_hook_runs_before_erpnext_validation(self):
		# ERPNext works out exchange rates in its validate from paid_to, so the
		# accounts must be set before that runs.
		hooks = frappe.get_hooks("doc_events")["Payment Entry"]
		self.assertIn("ant_pos.ant_pos.api.payment_entry.validate", hooks.get("before_validate", []))
		self.assertNotIn("ant_pos.ant_pos.api.payment_entry.validate", hooks.get("validate", []))


class TestShiftPaymentTotals(FrappeTestCase):
	def test_change_is_taken_off_the_cash_total(self):
		"""Payment rows hold what was tendered: 120 for a 100 sale with 20 change."""
		from unittest.mock import patch

		from ant_pos.ant_pos.api import payment_entry

		tendered = [frappe._dict(mode_of_payment="Cash", total=120)]
		with (
			patch("frappe.has_permission", return_value=True),
			patch("frappe.db.sql", side_effect=[[], tendered]),
			patch.object(payment_entry, "_change_given", return_value={"Cash": 20.0}),
		):
			totals = payment_entry.get_payments("SHIFT-1")

		self.assertEqual(
			totals,
			[{"mode_of_payment": "Cash", "total": 100.0}, {"mode_of_payment": "Total", "total": 100.0}],
		)


class TestWhatAShiftTook(FrappeTestCase):
	"""One calculation for what a shift took, used by the Close Shift screen
	and by the closing document."""

	def totals(self, invoice_rows=(), entry_rows=(), change=None):
		from unittest.mock import patch

		from ant_pos.ant_pos.api import payment_entry

		with (
			patch("frappe.db.sql", side_effect=[list(invoice_rows), list(entry_rows)]),
			patch.object(payment_entry, "_change_given", return_value=change or {}),
		):
			return payment_entry.shift_payment_totals("SHIFT-A")

	def test_invoice_payments_count(self):
		rows = [frappe._dict(mode_of_payment="Cash", total=300)]
		self.assertEqual(self.totals(invoice_rows=rows), {"Cash": 300})

	def test_payments_taken_in_the_shift_count_even_with_no_invoice(self):
		"""An advance settles no invoice; the old query counted it nowhere."""
		entries = [frappe._dict(mode_of_payment="Cash", total=50)]
		self.assertEqual(self.totals(entry_rows=entries), {"Cash": 50})

	def test_a_settlement_and_a_sale_add_up(self):
		invoices = [frappe._dict(mode_of_payment="Cash", total=100)]
		entries = [frappe._dict(mode_of_payment="Cash", total=40)]
		self.assertEqual(self.totals(invoice_rows=invoices, entry_rows=entries), {"Cash": 140})

	def test_change_is_taken_off(self):
		invoices = [frappe._dict(mode_of_payment="Cash", total=120)]
		self.assertEqual(self.totals(invoice_rows=invoices, change={"Cash": 20}), {"Cash": 100})

	def test_returns_reduce_the_total(self):
		invoices = [frappe._dict(mode_of_payment="Cash", total=-50)]
		self.assertEqual(self.totals(invoice_rows=invoices), {"Cash": -50})

	def test_payments_are_read_by_the_shift_they_were_taken_in(self):
		"""Not by the shift of the invoice they pay: cash collected today for
		last week's invoice belongs in today's drawer."""
		import inspect

		from ant_pos.ant_pos.api import payment_entry

		source = inspect.getsource(payment_entry.shift_payment_totals)
		self.assertIn("reference_no = %s", source)
		self.assertNotIn("tabPayment Entry Reference", source)


class TestRecordPayment(FrappeTestCase):
	"""Payment Entries are built by ERPNext's own get_payment_entry; antPOS
	says who paid, how much, against what, and in which shift."""

	def setUp(self):
		frappe.db.begin()
		self.addCleanup(frappe.db.rollback)

	def test_an_amount_is_required(self):
		from ant_pos.ant_pos.api.payment_entry import record_payment

		with self.assertRaises(frappe.ValidationError):
			record_payment(mode_of_payment="Cash", amount=0, customer="A")

	def test_allocations_must_add_up_to_the_amount_paid(self):
		from ant_pos.ant_pos.api.payment_entry import _entry_for_invoices

		with self.assertRaises(frappe.ValidationError):
			_entry_for_invoices([{"invoice": "SINV-1", "allocated_amount": 40}], 100)

	def test_settling_nothing_is_refused(self):
		from ant_pos.ant_pos.api.payment_entry import _entry_for_invoices

		with self.assertRaises(frappe.ValidationError):
			_entry_for_invoices([{"invoice": "SINV-1", "allocated_amount": 0}], 0)

	def test_a_payment_belongs_to_the_users_own_shift(self):
		from unittest.mock import patch

		from ant_pos.ant_pos.api import payment_entry

		with (
			patch("ant_pos.ant_pos.api.pos_invoice_rules._open_shift_for", return_value="SHIFT-A"),
			patch(
				"ant_pos.ant_pos.doctype.ant_opening_shift.ant_opening_shift.is_shift_manager",
				return_value=False,
			),
		):
			self.assertEqual(payment_entry._shift_for_payment(None), "SHIFT-A")
			self.assertEqual(payment_entry._shift_for_payment("SHIFT-A"), "SHIFT-A")
			with self.assertRaises(frappe.PermissionError):
				payment_entry._shift_for_payment("SHIFT-B")

	def test_the_client_no_longer_builds_payment_entries(self):
		"""Both screens used to assemble the whole document and post it through
		savedocs, guessing accounts, currencies and exchange rates."""
		import os

		app_root = os.path.dirname(frappe.get_app_path("ant_pos"))
		app = os.path.join(app_root, "AntPos", "src", "components")
		for screen in ("Invoice.vue", "Payment.vue"):
			with open(f"{app}/{screen}") as source:
				text = source.read()
			self.assertIn("record_payment", text, screen)
			self.assertNotIn("doctype: 'Payment Entry'", text, screen)
