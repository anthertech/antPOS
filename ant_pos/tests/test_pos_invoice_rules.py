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
			if name in pos_invoice_rules.OURS:
				self.assertTrue(callable(pos_invoice_rules.OURS[name]), name)
				continue
			self.assertTrue(callable(getattr(POSInvoice, name, None)), name)

	def test_our_replacements_say_why_they_exist(self):
		for name, replacement in pos_invoice_rules.OURS.items():
			self.assertTrue((replacement.__doc__ or "").strip(), name)

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
		doc.update({"pos_profile": "Till 1", "company": "Company A", "is_pos": 1, **values})
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
		with (
			patch(f"{MODULE}._prepare_tracked_rows"),
			patch(f"{MODULE}.validate_shift"),
			patch(f"{MODULE}.validate_customer_group"),
		):
			for name, _needs in pos_invoice_rules.ERPNEXT_CHECKS:
				target = (
					patch.dict(pos_invoice_rules.OURS, {name: lambda d, n=name: called.append(n)})
					if name in pos_invoice_rules.OURS
					else patch.object(POSInvoice, name, lambda d, n=name: called.append(n))
				)
				target.start()
				self.addCleanup(target.stop)
			pos_invoice_rules.validate(doc)

		self.assertEqual(called, [name for name, _needs in pos_invoice_rules.ERPNEXT_CHECKS])

	def test_payment_checks_are_skipped_without_a_payment_table(self):
		"""A sale settled from customer credit is saved with is_pos = 0 and no
		payment rows; ERPNext would refuse it for having no mode of payment."""
		doc = self.invoice()
		called = []
		with (
			patch(f"{MODULE}._prepare_tracked_rows"),
			patch(f"{MODULE}.validate_shift"),
			patch(f"{MODULE}.validate_customer_group"),
		):
			for name, _needs in pos_invoice_rules.ERPNEXT_CHECKS:
				target = (
					patch.dict(pos_invoice_rules.OURS, {name: lambda d, n=name: called.append(n)})
					if name in pos_invoice_rules.OURS
					else patch.object(POSInvoice, name, lambda d, n=name: called.append(n))
				)
				target.start()
				self.addCleanup(target.stop)
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


class TestPartialPayment(FrappeTestCase):
	"""antPOS had its own credit settings; ERPNext's allow_partial_payment now
	decides, and ERPNext's own check enforces it."""

	def invoice(self, paid, total=100, is_return=0):
		doc = frappe.new_doc("Sales Invoice")
		doc.update(
			{
				"pos_profile": "Till 1",
				"company": "Company A",
				"is_pos": 1,
				"is_return": is_return,
				"docstatus": 1,
				"grand_total": total,
				"rounded_total": total,
				"paid_amount": paid,
			}
		)
		return doc

	def test_the_check_is_wired_in(self):
		self.assertIn(("validate_full_payment", False), pos_invoice_rules.ERPNEXT_CHECKS)
		self.assertNotIn("validate_full_payment", pos_invoice_rules.SKIPPED)

	def test_an_unpaid_sale_is_refused_when_partial_payment_is_off(self):
		doc = self.invoice(paid=40)
		with patch("frappe.db.get_value", return_value=0):
			with self.assertRaises(frappe.ValidationError):
				POSInvoice.validate_full_payment(doc)

	def test_an_unpaid_sale_is_allowed_when_partial_payment_is_on(self):
		doc = self.invoice(paid=40)
		with patch("frappe.db.get_value", return_value=1):
			POSInvoice.validate_full_payment(doc)

	def test_the_custom_settings_are_gone(self):
		import json

		with open(frappe.get_app_path("ant_pos", "fixtures", "custom_field.json")) as fixture:
			fields = {f["name"] for f in json.load(fixture)}

		self.assertNotIn("POS Profile-custom_allow_credit", fields)
		self.assertNotIn("POS Profile-custom_allow_partial_payments", fields)


class TestCancelGuard(FrappeTestCase):
	"""Four sales in a shift, the shift is closed, the cashier is now in
	another one: cancelling one of those sales is refused."""

	def closed(self, closing="CLOSE-1"):
		return frappe._dict(status="Closed", ant_closing_shift_detail=closing)

	def invoice(self, shift="SHIFT-A"):
		doc = frappe.new_doc("Sales Invoice")
		doc.custom_ant_opening = shift
		return doc

	def test_cancelling_a_sale_from_a_closed_shift_is_refused(self):
		with (
			patch("frappe.db.exists", return_value=True),
			patch("frappe.db.get_value", return_value=self.closed()),
		):
			with self.assertRaises(frappe.ValidationError) as caught:
				pos_invoice_rules.before_cancel(self.invoice())

		message = str(caught.exception)
		self.assertIn("CLOSE-1", message)
		self.assertIn("return", message.lower())

	def test_cancelling_a_sale_from_an_open_shift_is_allowed(self):
		with (
			patch("frappe.db.exists", return_value=True),
			patch("frappe.db.get_value", return_value=frappe._dict(status="Open")),
		):
			pos_invoice_rules.before_cancel(self.invoice())

	def test_an_invoice_with_no_shift_is_untouched(self):
		pos_invoice_rules.before_cancel(self.invoice(shift=None))

	def test_payments_taken_in_a_closed_shift_cannot_be_cancelled(self):
		entry = frappe.new_doc("Payment Entry")
		entry.reference_no = "SHIFT-A"
		with (
			patch("frappe.db.exists", return_value=True),
			patch("frappe.db.get_value", return_value=self.closed()),
		):
			with self.assertRaises(frappe.ValidationError):
				pos_invoice_rules.before_cancel_payment_entry(entry)

	def test_a_reference_that_is_not_a_shift_is_ignored(self):
		"""Payment Entries elsewhere in ERPNext use reference_no for cheque
		numbers and the like."""
		entry = frappe.new_doc("Payment Entry")
		entry.reference_no = "CHQ-99"
		with patch("frappe.db.exists", return_value=False):
			pos_invoice_rules.before_cancel_payment_entry(entry)

	def test_both_guards_are_wired_in(self):
		events = frappe.get_hooks("doc_events")
		self.assertIn(f"{MODULE}.before_cancel", events["Sales Invoice"].get("before_cancel", []))
		self.assertIn(
			f"{MODULE}.before_cancel_payment_entry",
			events["Payment Entry"].get("before_cancel", []),
		)


class TestOurReplacements(FrappeTestCase):
	"""Where ERPNext's rule cannot run on a Sales Invoice, ours stands in."""

	def invoice(self, **values):
		doc = frappe.new_doc("Sales Invoice")
		doc.update({"pos_profile": "Till 1", "company": "Company A", **values})
		return doc

	def test_credit_counts_towards_paying_in_full(self):
		"""A POS Invoice cannot hold advances, so ERPNext's check ignores them."""
		doc = self.invoice(grand_total=100, rounded_total=100, paid_amount=0, total_advance=100, docstatus=1)
		with patch.object(POSInvoice, "validate_full_payment") as erpnext_check:
			pos_invoice_rules._full_payment_counting_credit(doc)
		erpnext_check.assert_not_called()

	def test_a_shortfall_still_goes_to_erpnext(self):
		doc = self.invoice(grand_total=100, rounded_total=100, paid_amount=20, total_advance=30, docstatus=1)
		with patch.object(POSInvoice, "validate_full_payment") as erpnext_check:
			pos_invoice_rules._full_payment_counting_credit(doc)
		erpnext_check.assert_called_once()

	def test_a_positive_line_on_a_return_is_refused(self):
		"""ERPNext's Sales Invoice return check skips such rows instead."""
		doc = self.invoice(is_return=1)
		doc.append("items", {"item_code": "ITEM-A", "qty": -1})
		doc.append("items", {"item_code": "ITEM-B", "qty": 1})
		with self.assertRaises(frappe.ValidationError):
			pos_invoice_rules.validate_return_line_signs(doc)

	def test_an_ordinary_return_passes(self):
		doc = self.invoice(is_return=1)
		doc.append("items", {"item_code": "ITEM-A", "qty": -2})
		pos_invoice_rules.validate_return_line_signs(doc)

	def test_a_back_office_invoice_is_left_alone(self):
		"""A desk invoice may name a POS Profile without being a shift sale."""
		doc = self.invoice(is_pos=0)
		with patch(f"{MODULE}.validate_shift") as shift_check:
			pos_invoice_rules.validate(doc)
		shift_check.assert_not_called()

	def test_customers_outside_the_profiles_groups_are_refused(self):
		doc = self.invoice(is_pos=1, customer="Someone")
		with (
			patch("frappe.get_all", return_value=["Retail"]),
			patch("frappe.db.get_value", return_value="Wholesale"),
			patch("frappe.utils.nestedset.get_descendants_of", return_value=[]),
		):
			with self.assertRaises(frappe.ValidationError):
				pos_invoice_rules.validate_customer_group(doc)

	def test_a_profile_with_no_groups_sells_to_anyone(self):
		doc = self.invoice(is_pos=1, customer="Someone")
		with patch("frappe.get_all", return_value=[]):
			pos_invoice_rules.validate_customer_group(doc)
