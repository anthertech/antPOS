# Copyright (c) 2024, Anther Technologies Pvt. Ltd. and Contributors
# See license.txt

from contextlib import contextmanager, nullcontext
from unittest.mock import patch

import frappe
from frappe.tests.utils import FrappeTestCase

from ant_pos.ant_pos.doctype.ant_opening_shift.ant_opening_shift import AntOpeningShift


def make_opening_shift(**kwargs):
	doc = frappe.new_doc("Ant Opening Shift")
	doc.update(
		{
			"company": kwargs.get("company") or frappe.defaults.get_defaults().get("company"),
			"pos_profile": kwargs["pos_profile"],
			"cashier": kwargs.get("cashier") or frappe.session.user,
			"status": "Open",
			"period_start_date": kwargs.get("period_start_date") or frappe.utils.today(),
			"opening_balance_details": kwargs.get("opening_balance_details") or [],
		}
	)
	for field, value in kwargs.get("extra", {}).items():
		doc.set(field, value)
	return doc


# A cashier with no shifts: tests must not depend on whether the site's own
# users (e.g. Administrator) have a shift open.
CASHIER = "antpos-shift-test@example.com"
MODULE = "ant_pos.ant_pos.doctype.ant_opening_shift.ant_opening_shift"


def as_user(test, user):
	"""Run as `user` until the test ends (the session is not patchable)."""
	previous = frappe.session.user
	frappe.set_user(user)
	test.addCleanup(frappe.set_user, previous)
	return nullcontext()


class TestAntOpeningShift(FrappeTestCase):
	"""Dates and the one-open-shift rule. Cashier and profile checks are
	covered in TestShiftOwnership."""

	def setUp(self):
		for check in ("validate_cashier", "validate_pos_profile"):
			patcher = patch.object(AntOpeningShift, check)
			patcher.start()
			self.addCleanup(patcher.stop)

	def test_posting_date_defaults_to_today(self):
		"""posting_date is mandatory and was previously stamped unconditionally."""
		doc = frappe.new_doc("Ant Opening Shift")
		doc.cashier = CASHIER
		doc.period_start_date = frappe.utils.today()
		doc.validate()

		self.assertEqual(frappe.utils.getdate(doc.posting_date), frappe.utils.getdate())

	def test_explicit_posting_date_is_preserved(self):
		"""With set_posting_date, the operator's dates must survive validate()."""
		yesterday = frappe.utils.add_days(frappe.utils.today(), -1)

		doc = frappe.new_doc("Ant Opening Shift")
		doc.cashier = CASHIER
		doc.set_posting_date = 1
		doc.posting_date = yesterday
		doc.period_start_date = yesterday
		doc.validate()

		self.assertEqual(frappe.utils.getdate(doc.posting_date), frappe.utils.getdate(yesterday))
		self.assertEqual(frappe.utils.getdate(doc.period_start_date), frappe.utils.getdate(yesterday))

	def test_period_end_before_start_is_rejected(self):
		"""This check was guarded on posting_date and so never ran on a new doc."""
		doc = frappe.new_doc("Ant Opening Shift")
		doc.cashier = CASHIER
		doc.set_posting_date = 1
		doc.period_start_date = frappe.utils.today()
		doc.period_end_date = frappe.utils.add_days(frappe.utils.today(), -2)

		with self.assertRaises(frappe.ValidationError):
			doc.validate()

	def test_period_end_after_start_is_accepted(self):
		doc = frappe.new_doc("Ant Opening Shift")
		doc.cashier = CASHIER
		doc.set_posting_date = 1
		doc.period_start_date = frappe.utils.today()
		doc.period_end_date = frappe.utils.add_days(frappe.utils.today(), 1)

		doc.validate()  # must not raise

	def test_duplicate_check_ignores_self(self):
		"""An existing doc must not trip its own open-shift check on re-validate."""
		doc = frappe.get_doc(
			{"doctype": "Ant Opening Shift", "name": "ANT-OPEN-TEST-0001", "cashier": CASHIER}
		)
		self.assertFalse(doc.is_new())

		with patch("frappe.db.exists", return_value=None) as exists:
			doc.get_openingshift_for_user(CASHIER)
		filters = exists.call_args.args[1]
		self.assertEqual(filters["name"], ["!=", "ANT-OPEN-TEST-0001"])

	def test_duplicate_check_on_new_doc_looks_at_all_open_shifts(self):
		doc = frappe.new_doc("Ant Opening Shift")
		with patch("frappe.db.exists", return_value=None) as exists:
			doc.get_openingshift_for_user(CASHIER)
		self.assertNotIn("name", exists.call_args.args[1])

	def test_second_open_shift_is_refused(self):
		doc = frappe.new_doc("Ant Opening Shift")
		doc.cashier = CASHIER
		with patch("frappe.db.exists", return_value="ANT-OPEN-EXISTING"):
			with self.assertRaises(frappe.ValidationError):
				doc.validate()


class TestShiftOwnership(FrappeTestCase):
	def shift(self, cashier=CASHIER):
		doc = frappe.new_doc("Ant Opening Shift")
		doc.update({"cashier": cashier, "company": "Company A", "pos_profile": "Till 1"})
		return doc

	@contextmanager
	def profile(self, company="Company A", disabled=0):
		with (
			patch("frappe.db.get_value", return_value=frappe._dict(company=company, disabled=disabled)),
			patch("frappe.get_roles", return_value=["All"]),
		):
			yield

	def test_cashier_cannot_open_a_shift_for_someone_else(self):
		with (
			as_user(self, "cashier-a@example.com"),
			patch(f"{MODULE}.is_shift_manager", return_value=False),
		):
			with self.assertRaises(frappe.PermissionError):
				self.shift(cashier="cashier-b@example.com").validate_cashier()

	def test_manager_can_open_a_shift_for_someone_else(self):
		doc = self.shift(cashier="cashier-b@example.com")
		with (
			as_user(self, "manager@example.com"),
			patch(f"{MODULE}.is_shift_manager", return_value=True),
			patch("frappe.db.get_value", return_value=1),
		):
			doc.validate_cashier()

	def test_disabled_cashier_is_refused(self):
		doc = self.shift(cashier="Administrator")
		with patch("frappe.db.get_value", return_value=0):
			with self.assertRaises(frappe.ValidationError):
				doc.validate_cashier()

	def test_profile_of_another_company_is_refused(self):
		doc = self.shift()
		with self.profile(company="Company B"), patch(f"{MODULE}.profile_users", return_value=[]):
			with self.assertRaises(frappe.ValidationError):
				doc.validate_pos_profile()

	def test_disabled_profile_is_refused(self):
		doc = self.shift()
		with self.profile(disabled=1), patch(f"{MODULE}.profile_users", return_value=[]):
			with self.assertRaises(frappe.ValidationError):
				doc.validate_pos_profile()

	def test_profile_users_are_enforced(self):
		doc = self.shift()
		with self.profile(), patch(f"{MODULE}.profile_users", return_value=["someone@example.com"]):
			with self.assertRaises(frappe.PermissionError):
				doc.validate_pos_profile()
		with self.profile(), patch(f"{MODULE}.profile_users", return_value=[CASHIER]):
			doc.validate_pos_profile()

	def test_profile_without_users_is_closed_to_cashiers(self):
		doc = self.shift()
		with self.profile(), patch(f"{MODULE}.profile_users", return_value=[]):
			with self.assertRaises(frappe.PermissionError):
				doc.validate_pos_profile()

	def test_system_manager_may_use_any_profile(self):
		doc = self.shift(cashier="Administrator")
		with self.profile(), patch(f"{MODULE}.profile_users", return_value=[]):
			doc.validate_pos_profile()

	def test_create_opening_ignores_client_cashier_and_status(self):
		from ant_pos.ant_pos.api.pos_profile import create_opening

		created = {}

		def capture(doc):
			created.update(cashier=doc.cashier, status=doc.status, owner_field=doc.get("amended_from"))

		with (
			patch.object(AntOpeningShift, "insert", capture),
			patch.object(AntOpeningShift, "submit"),
			patch("ant_pos.ant_pos.api.pos_profile.profile_payment_modes", return_value=["Cash"]),
		):
			create_opening(
				{
					"company": "Company A",
					"pos_profile": "Till 1",
					"cashier": "someone-else@example.com",
					"status": "Closed",
					"amended_from": "X",
					"opening_balance_details": [{"mode_of_payment": "Cash", "opening_amount": 5}],
				}
			)
		self.assertEqual(created, {"cashier": frappe.session.user, "status": "Open", "owner_field": None})

	def test_create_opening_refuses_foreign_payment_modes(self):
		from ant_pos.ant_pos.api.pos_profile import create_opening

		with patch("ant_pos.ant_pos.api.pos_profile.profile_payment_modes", return_value=["Cash"]):
			with self.assertRaises(frappe.ValidationError):
				create_opening(
					{
						"company": "Company A",
						"pos_profile": "Till 1",
						"opening_balance_details": [{"mode_of_payment": "Bank", "opening_amount": 5}],
					}
				)


class TestOneShiftAtATime(FrappeTestCase):
	def test_the_cashier_record_is_locked_before_the_check(self):
		"""Two quick taps on Confirm each checked before either was written,
		so both opened a shift."""
		import inspect

		source = inspect.getsource(AntOpeningShift.validate_no_open_shift)
		self.assertIn("for_update=True", source)

	def test_a_shift_can_be_cancelled_by_a_manager(self):
		"""A shift opened by mistake could only be undone by Administrator."""
		roles = {p.role: p for p in frappe.get_meta("Ant Opening Shift").permissions}
		for role in ("System Manager", "Sales Manager"):
			self.assertTrue(roles[role].cancel, role)
		for role in ("POS Cash", "POS Billing"):
			self.assertFalse(roles[role].cancel, role)
