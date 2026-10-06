# Copyright (c) 2025, Anther Technologies Pvt. Ltd. and Contributors
# See license.txt

from contextlib import nullcontext
from unittest.mock import patch

import frappe
from frappe.tests.utils import FrappeTestCase

MODULE = "ant_pos.ant_pos.doctype.ant_closing_shift.ant_closing_shift"

from ant_pos.ant_pos.doctype.ant_closing_shift import ant_closing_shift


def as_user(test, user):
	"""Run as `user` until the test ends (the session is not patchable)."""
	previous = frappe.session.user
	frappe.set_user(user)
	test.addCleanup(frappe.set_user, previous)
	return nullcontext()


def opening(**values):
	return frappe._dict(
		{"name": "SHIFT-1", "docstatus": 1, "status": "Open", "cashier": "cashier-a@example.com", **values}
	)


class TestAntClosingShift(FrappeTestCase):
	def test_amended_from_declared_once(self):
		"""The shipped JSON declared amended_from twice, which breaks migrate."""
		fieldnames = [f.fieldname for f in frappe.get_meta("Ant Closing Shift").fields]

		duplicates = {name for name in fieldnames if fieldnames.count(name) > 1}
		self.assertEqual(duplicates, set(), f"duplicate fieldnames: {duplicates}")

	def test_mandatory_fields_are_populated_by_validate(self):
		"""pos_profile is reqd but validate() never set it, so no shift could close."""
		meta = frappe.get_meta("Ant Closing Shift")
		mandatory = {f.fieldname for f in meta.fields if f.reqd}

		# Everything mandatory is either sent by the client or derived in validate().
		derived = {
			"opening_start_date",
			"opening_end_date",
			"posting_date",
			"company",
			"pos_profile",
			"user",
		}
		client_supplied = {"ant_opening_shift"}

		self.assertTrue(
			mandatory <= (derived | client_supplied),
			f"unhandled mandatory fields: {mandatory - derived - client_supplied}",
		)

	def test_opening_shift_lookup_uses_cashier_field(self):
		"""get_opening_shift() filtered on `user`, a column that does not exist."""
		opening_fields = {f.fieldname for f in frappe.get_meta("Ant Opening Shift").fields}

		self.assertIn("cashier", opening_fields)
		self.assertNotIn("user", opening_fields)

	def test_return_rows_link_to_sales_invoice(self):
		"""antPOS returns are Sales Invoices. return_against linked to POS
		Invoice, so any shift containing a return failed to close with
		"Could not find Return Against"."""
		field = frappe.get_meta("Ant Sales invoice Reference").get_field("return_against")
		self.assertEqual(field.options, "Sales Invoice")

		original = frappe.get_all("Sales Invoice", filters={"docstatus": 1}, pluck="name", limit=1)
		if not original:
			self.skipTest("needs a submitted Sales Invoice")
		shift = frappe.new_doc("Ant Closing Shift")
		row = shift.append("pos_transactions", {"return_against": original[0]})
		invalid, _cancelled = row.get_invalid_links()
		self.assertEqual(invalid, [])


class TestClosingOwnership(FrappeTestCase):
	def closing(self):
		return frappe.new_doc("Ant Closing Shift")

	def test_only_an_open_submitted_shift_can_be_closed(self):
		for shift in (opening(docstatus=0), opening(status="Closed"), opening(docstatus=2)):
			with self.assertRaises(frappe.ValidationError):
				self.closing().validate_opening_shift(shift)

	def test_cashier_cannot_close_another_users_shift(self):
		with (
			as_user(self, "cashier-b@example.com"),
			patch(f"{MODULE}.is_shift_manager", return_value=False),
		):
			with self.assertRaises(frappe.PermissionError):
				self.closing().validate_opening_shift(opening())

	def test_cashier_can_close_own_shift(self):
		doc = self.closing()
		with (
			as_user(self, "cashier-a@example.com"),
			patch(f"{MODULE}.is_shift_manager", return_value=False),
			patch("frappe.db.get_value", return_value=None),
		):
			doc.validate_opening_shift(opening())

	def test_shift_cannot_be_closed_twice(self):
		doc = self.closing()
		with (
			as_user(self, "cashier-a@example.com"),
			patch("frappe.db.get_value", return_value="CLOSE-OTHER"),
		):
			with self.assertRaises(frappe.ValidationError):
				doc.validate_opening_shift(opening())

	def test_cancel_does_not_reopen_next_to_a_newer_shift(self):
		doc = frappe.get_doc(
			{"doctype": "Ant Closing Shift", "name": "CLOSE-1", "ant_opening_shift": "SHIFT-1"}
		)
		linked = frappe._dict(cashier="cashier-a@example.com", ant_closing_shift_detail="CLOSE-1")
		with (
			patch("frappe.db.get_value", return_value=linked),
			patch("frappe.db.exists", return_value="SHIFT-2"),
			patch("frappe.db.set_value") as set_value,
		):
			with self.assertRaises(frappe.ValidationError):
				doc.on_cancel()
		set_value.assert_not_called()

	def test_cancel_reopens_only_its_own_shift(self):
		doc = frappe.get_doc(
			{"doctype": "Ant Closing Shift", "name": "CLOSE-1", "ant_opening_shift": "SHIFT-1"}
		)
		with patch("frappe.db.set_value") as set_value:
			other = frappe._dict(cashier="cashier-a@example.com", ant_closing_shift_detail="CLOSE-9")
			with patch("frappe.db.get_value", return_value=other):
				doc.on_cancel()
			set_value.assert_not_called()

			linked = frappe._dict(cashier="cashier-a@example.com", ant_closing_shift_detail="CLOSE-1")
			with (
				patch("frappe.db.get_value", return_value=linked),
				patch("frappe.db.exists", return_value=None),
			):
				doc.on_cancel()
			set_value.assert_called_once()


class TestCashCount(FrappeTestCase):
	"""The screen used to send the opening, expected and difference amounts
	along with the count, and they were stored as sent."""

	def closing(self, counted, opening_rows, taken):
		doc = frappe.new_doc("Ant Closing Shift")
		doc.ant_opening_shift = "SHIFT-A"
		for mode, amount in counted.items():
			doc.append(
				"payment_reconciliation",
				{"mode_of_payment": mode, "closing": amount, "expected": amount, "difference": 0},
			)
		opening_shift = frappe._dict(
			pos_profile="Till 1",
			opening_balance_details=[
				frappe._dict(mode_of_payment=mode, opening_amount=amount)
				for mode, amount in opening_rows.items()
			],
		)
		order = list(dict.fromkeys([*opening_rows, *taken, *counted]))
		with (
			patch(
				"ant_pos.ant_pos.api.payment_entry.shift_payment_totals",
				return_value=taken,
			),
			patch(f"{MODULE}._ordered_modes", return_value=order),
		):
			doc.reconcile_payments(opening_shift)
		return {row.mode_of_payment: row for row in doc.payment_reconciliation}

	def test_expected_is_the_float_plus_what_was_taken(self):
		rows = self.closing({"Cash": 500}, {"Cash": 100}, {"Cash": 400})
		self.assertEqual(rows["Cash"].opening, 100)
		self.assertEqual(rows["Cash"].expected, 500)
		self.assertEqual(rows["Cash"].difference, 0)

	def test_a_shortage_cannot_be_hidden(self):
		"""The cashier counts 450 and claims it matches; it does not."""
		rows = self.closing({"Cash": 450}, {"Cash": 100}, {"Cash": 400})
		self.assertEqual(rows["Cash"].expected, 500)
		self.assertEqual(rows["Cash"].closing, 450)
		self.assertEqual(rows["Cash"].difference, -50)

	def test_a_method_with_no_count_still_gets_a_row(self):
		rows = self.closing({}, {"Cash": 100}, {"Cash": 0, "Card": 250})
		self.assertEqual(rows["Card"].expected, 250)
		self.assertEqual(rows["Card"].closing, 0)
		self.assertEqual(rows["Card"].difference, -250)


class TestPaymentMethodOrder(FrappeTestCase):
	def test_the_profiles_own_order_comes_first(self):
		opening_shift = frappe._dict(pos_profile="Till 1")
		frappe.get_meta("Ant Closing Shift")  # warm the cache before patching
		with patch("frappe.get_all", return_value=["Cash", "Card"]):
			modes = ant_closing_shift._ordered_modes(opening_shift, {"Voucher": 1}, {"Card": 2})

		self.assertEqual(modes, ["Cash", "Card", "Voucher"])
