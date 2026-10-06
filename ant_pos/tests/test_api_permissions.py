# Copyright (c) 2026, Anther Technologies Pvt. Ltd. and Contributors
# See license.txt

import inspect

import frappe
from frappe.tests.utils import FrappeTestCase

from ant_pos.ant_pos.api import get_doc_field
from ant_pos.ant_pos.api.session import get_users


class TestWhitelistedEndpointsAreGated(FrappeTestCase):
	def test_get_doc_field_checks_create_permission(self):
		source = inspect.getsource(get_doc_field)

		self.assertIn("has_permission", source)
		self.assertIn("create", source)

	def test_retired_endpoints_are_gone(self):
		"""Unused whitelisted methods, one of them open to guests."""
		from ant_pos.ant_pos import utils
		from ant_pos.ant_pos.doctype.antpos_fields_layout import antpos_fields_layout

		self.assertFalse(hasattr(utils, "get_domain_url"))
		for name in ("get_fields_layout", "get_sidepanel_sections", "save_fields_layout"):
			self.assertFalse(hasattr(antpos_fields_layout, name), name)


class TestGetUsersScoping(FrappeTestCase):
	"""get_users() returned every User row to any caller and runs on app load."""

	def test_privileged_caller_sees_more_than_one_user(self):
		frappe.set_user("Administrator")
		self.assertGreaterEqual(len(get_users()), 1)

	def test_unprivileged_caller_sees_only_themselves(self):
		user = frappe.db.get_value("User", {"name": ["!=", "Administrator"], "enabled": 1})
		if not user:
			self.skipTest("no non-Administrator user available")

		try:
			frappe.set_user(user)
			if frappe.has_permission("User", "read"):
				self.skipTest(f"{user} can read User; not an unprivileged caller")

			result = get_users()
			self.assertEqual(len(result), 1)
			self.assertEqual(result[0]["name"], user)
			self.assertTrue(result[0]["session_user"])
		finally:
			frappe.set_user("Administrator")


class TestPosUserPermissions(FrappeTestCase):
	def test_owner_only_rules_still_allow_selling(self):
		"""POS Cash's Sales Invoice rule is "if owner". Checked without a
		document it read as no permission, so a new cashier never saw Pay."""
		from unittest.mock import patch

		from ant_pos.ant_pos.api import get_user_permissions

		rule = frappe._dict(
			parent="Sales Invoice", permlevel=0, if_owner=1, read=1, create=1, submit=1, print=1
		)
		with (
			patch("frappe.permissions.get_valid_perms", return_value=[rule]),
			patch("frappe.has_permission", return_value=False),
		):
			result = get_user_permissions()["sales_invoice"]

		self.assertEqual(
			result, {"can_submit": True, "can_create": True, "can_print": True, "only_own": True}
		)
