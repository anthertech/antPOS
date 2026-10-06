# Copyright (c) 2026, Anther Technologies Pvt. Ltd. and Contributors
# See license.txt

from unittest.mock import patch

import frappe
from frappe.tests.utils import FrappeTestCase

from ant_pos import install

DOCTYPE = "Brand"  # an ERPNext doctype antPOS does not grant anything on


def custom_roles():
	return sorted(frappe.get_all("Custom DocPerm", filters={"parent": DOCTYPE}, pluck="role"))


def standard_roles():
	return sorted(frappe.get_all("DocPerm", filters={"parent": DOCTYPE}, pluck="role"))


class TestInstallPermissions(FrappeTestCase):
	def setUp(self):
		frappe.set_user("Administrator")
		install.create_roles()
		frappe.db.delete("Custom DocPerm", {"parent": DOCTYPE})
		self.assertTrue(standard_roles(), "Brand should have standard permissions")

	def add_pos_row_only(self):
		"""What the old installer did."""
		frappe.get_doc(
			{
				"doctype": "Custom DocPerm",
				"parent": DOCTYPE,
				"parenttype": "DocType",
				"parentfield": "permissions",
				"role": "POS Cash",
				"permlevel": 0,
				"read": 1,
			}
		).insert(ignore_permissions=True)

	def test_grant_keeps_standard_roles(self):
		with patch.object(install, "PERMISSIONS", [(DOCTYPE, "POS Cash", {"read", "select"})]):
			install.apply_permissions()
		roles = custom_roles()
		self.assertIn("POS Cash", roles)
		for role in standard_roles():
			self.assertIn(role, roles)

	def test_grant_is_idempotent_and_updates_rights(self):
		with patch.object(install, "PERMISSIONS", [(DOCTYPE, "POS Cash", {"read", "write"})]):
			install.apply_permissions()
		with patch.object(install, "PERMISSIONS", [(DOCTYPE, "POS Cash", {"read"})]):
			install.apply_permissions()
		rows = frappe.get_all(
			"Custom DocPerm", filters={"parent": DOCTYPE, "role": "POS Cash"}, fields=["read", "write"]
		)
		self.assertEqual(len(rows), 1)
		self.assertEqual((rows[0].read, rows[0].write), (1, 0))

	def test_repair_restores_standard_roles_after_old_installer(self):
		self.add_pos_row_only()
		self.assertEqual(custom_roles(), ["POS Cash"])
		install.restore_standard_permissions()
		for role in standard_roles():
			self.assertIn(role, custom_roles())

	def test_repair_leaves_admin_customisations_alone(self):
		self.add_pos_row_only()
		frappe.get_doc(
			{
				"doctype": "Custom DocPerm",
				"parent": DOCTYPE,
				"parenttype": "DocType",
				"parentfield": "permissions",
				"role": "Sales User",
				"permlevel": 0,
				"read": 1,
			}
		).insert(ignore_permissions=True)
		install.restore_standard_permissions()
		self.assertEqual(custom_roles(), ["POS Cash", "Sales User"])

	def test_uninstall_returns_to_standard_rules(self):
		with patch.object(install, "PERMISSIONS", [(DOCTYPE, "POS Cash", {"read"})]):
			install.apply_permissions()
			install.remove_permissions()
		self.assertEqual(custom_roles(), [])

	def test_missing_doctypes_are_skipped(self):
		with patch.object(install, "PERMISSIONS", [("No Such Doctype", "POS Cash", {"read"})]):
			install.apply_permissions()  # must not raise
		self.assertFalse(frappe.db.exists("Custom DocPerm", {"parent": "No Such Doctype"}))

	def test_matrix_names_real_doctypes(self):
		for doctype, role, _rights in install.PERMISSIONS:
			self.assertTrue(frappe.db.exists("DocType", doctype), doctype)
			self.assertIn(role, install.POS_ROLES)


class TestCashierSeesOwnDocumentsOnly(FrappeTestCase):
	"""POS Cash could read every Payment Entry and Sales Order in the company,
	supplier payments included."""

	def rights(self, doctype):
		from ant_pos.install import PERMISSIONS

		for entry_doctype, role, rights in PERMISSIONS:
			if entry_doctype == doctype and role == "POS Cash":
				return rights
		return set()

	def test_payments_and_orders_are_limited_to_the_cashier(self):
		for doctype in ("Payment Entry", "Sales Order", "Sales Invoice"):
			self.assertIn("if_owner", self.rights(doctype), doctype)

	def test_master_data_is_not_owner_restricted(self):
		"""Items and customers are shared; if_owner there would hide them."""
		for doctype in ("Item", "Customer", "Batch", "Warehouse"):
			self.assertNotIn("if_owner", self.rights(doctype), doctype)
