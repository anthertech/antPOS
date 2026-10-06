# Copyright (c) 2026, Anther Technologies Pvt. Ltd. and Contributors
# See license.txt

import json

import frappe
from frappe.tests.utils import FrappeTestCase
from frappe.utils.password import check_password

from ant_pos.ant_pos.api.user import change_password, get_profile, update_profile

TEST_USER = "antpos-profile-test@example.com"


class TestUserProfile(FrappeTestCase):
	"""Settings > Profile: the session user's own details and password."""

	def setUp(self):
		frappe.set_user("Administrator")
		if not frappe.db.exists("User", TEST_USER):
			frappe.get_doc(
				{
					"doctype": "User",
					"email": TEST_USER,
					"first_name": "Profile",
					"last_name": "Test",
					"send_welcome_email": 0,
					"new_password": "Old-pass-9Xy!",
				}
			).insert(ignore_permissions=True)
		frappe.set_user(TEST_USER)

	def tearDown(self):
		frappe.set_user("Administrator")

	def test_profile_is_the_session_users(self):
		profile = get_profile()
		self.assertEqual(profile["name"], TEST_USER)
		self.assertEqual(profile["first_name"], "Profile")

	def test_update_only_touches_allowed_fields(self):
		before = frappe.db.get_value("User", TEST_USER, ["enabled", "user_type"], as_dict=True)
		update_profile(
			json.dumps(
				{
					"first_name": " Renamed ",
					"mobile_no": "9000000999",
					"enabled": 0,
					"user_type": "System User",
				}
			)
		)
		user = frappe.db.get_value(
			"User", TEST_USER, ["first_name", "mobile_no", "enabled", "user_type"], as_dict=True
		)
		self.assertEqual(user.first_name, "Renamed")
		self.assertEqual(user.mobile_no, "9000000999")
		self.assertEqual(user.enabled, before.enabled)
		self.assertEqual(user.user_type, before.user_type)

	def test_first_name_is_required(self):
		with self.assertRaises(frappe.ValidationError):
			update_profile(json.dumps({"first_name": "  "}))

	def test_change_password_checks_the_current_one(self):
		with self.assertRaises(frappe.ValidationError):
			change_password("wrong-password", "New-pass-7Qz!")
		change_password("Old-pass-9Xy!", "New-pass-7Qz!")
		check_password(TEST_USER, "New-pass-7Qz!")

	def test_guest_is_refused(self):
		frappe.set_user("Guest")
		with self.assertRaises(frappe.AuthenticationError):
			get_profile()
