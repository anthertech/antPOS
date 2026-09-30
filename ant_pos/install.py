"""Roles and permissions for antPOS.

antPOS adds two roles, POS Billing and POS Cash, and grants them what the POS
needs on ERPNext doctypes.

How the grants are made matters. Once a doctype has any "Custom DocPerm" row,
Frappe ignores its standard DocPerms entirely. The first version of this file
inserted only the POS rows, so every other role (Accounts User, Sales User,
even System Manager) lost access to Sales Invoice, Customer, Item and more.
Grants now go through Frappe's `setup_custom_perms`, which first copies the
standard rules, exactly as the Role Permission Manager does.
"""

import frappe
from frappe.permissions import setup_custom_perms

POS_ROLES = ("POS Billing", "POS Cash")

# Doctypes the old installer touched that antPOS no longer grants anything on.
RETIRED_DOCTYPES = ("GL Entry", "Sales Partner", "POS Opening Entry", "POS Opening Shift", "POS Invoice")

R = "read"
S = "select"

# (doctype, role, rights). Anything not listed is 0. Masters are read-only:
# the POS never edits items, groups or tax setup.
PERMISSIONS = [
	# POS Cash: sells, takes payments, closes shifts.
	(
		"Sales Invoice",
		"POS Cash",
		{R, S, "write", "create", "submit", "cancel", "amend", "print", "report", "if_owner"},
	),
	# Own documents only: a cashier has no business reading the company's
	# supplier payments or every sales order.
	("Sales Order", "POS Cash", {R, S, "write", "create", "submit", "print", "report", "if_owner"}),
	("Payment Entry", "POS Cash", {R, S, "write", "create", "submit", "if_owner"}),
	("Customer", "POS Cash", {R, S, "write", "create"}),
	("Item", "POS Cash", {R, S}),
	("Batch", "POS Cash", {R, S}),
	("Serial No", "POS Cash", {R, S}),
	("Warehouse", "POS Cash", {R, S}),
	("POS Profile", "POS Cash", {R, S}),
	("Company", "POS Cash", {R, S}),
	("Account", "POS Cash", {R, S}),
	("Mode of Payment", "POS Cash", {R, S}),
	("Customer Group", "POS Cash", {R, S}),
	("Territory", "POS Cash", {R, S}),
	("Address", "POS Cash", {R}),
	("Item Tax Template", "POS Cash", {R, S}),
	("Sales Taxes and Charges Template", "POS Cash", {R, S}),
	("Tax Category", "POS Cash", {R, S}),
	("Stock Settings", "POS Cash", {R}),
	# POS Billing: prepares sales for the cashier.
	("Sales Invoice", "POS Billing", {R, S, "create", "print"}),
	("Customer", "POS Billing", {R, S, "write", "create"}),
	("Item", "POS Billing", {R, S}),
	("Batch", "POS Billing", {R, S}),
	("Serial No", "POS Billing", {R, S}),
	("Warehouse", "POS Billing", {R, S}),
	("POS Profile", "POS Billing", {R}),
	("POS Settings", "POS Billing", {R}),
	("Account", "POS Billing", {R, S}),
	("Customer Group", "POS Billing", {R, S}),
	("Territory", "POS Billing", {R}),
	("Country", "POS Billing", {R}),
	("Address", "POS Billing", {R}),
	("Item Tax Template", "POS Billing", {R, S}),
	("Sales Taxes and Charges Template", "POS Billing", {R, S}),
	("Tax Category", "POS Billing", {R, S}),
]

# The rights on a permission rule (Frappe 15 has no set_user_permissions).
RIGHTS = (
	"select",
	"read",
	"write",
	"create",
	"delete",
	"submit",
	"cancel",
	"amend",
	"print",
	"email",
	"report",
	"import",
	"export",
	"share",
)


def after_install():
	create_roles()
	apply_permissions()


def before_uninstall():
	remove_permissions()


def create_roles():
	for role in POS_ROLES:
		if not frappe.db.exists("Role", role):
			frappe.get_doc({"doctype": "Role", "role_name": role, "desk_access": 0}).insert(
				ignore_permissions=True
			)


def apply_permissions():
	"""Grant the POS roles their rights, keeping every other role's."""
	for doctype, role, rights in PERMISSIONS:
		if not frappe.db.exists("DocType", doctype):
			continue
		# Copies the standard rules first if this doctype has no custom ones.
		setup_custom_perms(doctype)

		if_owner = 1 if "if_owner" in rights else 0
		values = {right: 1 if right in rights else 0 for right in RIGHTS}

		# One row per (doctype, role, level 0), whatever its if_owner flag was.
		existing = frappe.get_all(
			"Custom DocPerm", filters={"parent": doctype, "role": role, "permlevel": 0}, pluck="name"
		)
		if existing:
			frappe.db.set_value("Custom DocPerm", existing[0], {**values, "if_owner": if_owner})
			for extra in existing[1:]:
				frappe.delete_doc("Custom DocPerm", extra, ignore_permissions=True)
		else:
			frappe.get_doc(
				{
					"doctype": "Custom DocPerm",
					"parent": doctype,
					"parenttype": "DocType",
					"parentfield": "permissions",
					"role": role,
					"permlevel": 0,
					"if_owner": if_owner,
					**values,
				}
			).insert(ignore_permissions=True)

	for doctype in RETIRED_DOCTYPES:
		_drop_pos_rows(doctype)

	frappe.clear_cache()


def remove_permissions():
	"""Take the POS roles off every doctype and restore untouched standard rules."""
	for doctype in {dt for dt, _role, _rights in PERMISSIONS} | set(RETIRED_DOCTYPES):
		_drop_pos_rows(doctype)
	frappe.clear_cache()


def restore_standard_permissions():
	"""Repair sites set up by the old installer.

	A doctype whose custom rules are *all* POS rows can only have come from it
	(the Role Permission Manager always copies the standard rules first), so
	its standard rules are copied back. Doctypes an admin has customised are
	left alone.
	"""
	parents = frappe.get_all("Custom DocPerm", pluck="parent", distinct=True)
	for doctype in parents:
		roles = set(frappe.get_all("Custom DocPerm", filters={"parent": doctype}, pluck="role"))
		if not roles or not roles.issubset(POS_ROLES):
			continue
		for perm in frappe.get_all("DocPerm", filters={"parent": doctype}, fields="*"):
			if perm.role in POS_ROLES:
				continue
			exists = frappe.db.exists(
				"Custom DocPerm",
				{
					"parent": doctype,
					"role": perm.role,
					"permlevel": perm.permlevel,
					"if_owner": perm.if_owner,
				},
			)
			if exists:
				continue
			row = frappe.new_doc("Custom DocPerm")
			row.update(
				{
					k: v
					for k, v in perm.items()
					if k not in ("name", "creation", "modified", "owner", "modified_by")
				}
			)
			row.insert(ignore_permissions=True)
	frappe.clear_cache()


def _drop_pos_rows(doctype):
	frappe.db.delete("Custom DocPerm", {"parent": doctype, "role": ["in", POS_ROLES]})
	if not frappe.db.exists("DocType", doctype):
		frappe.db.delete("Custom DocPerm", {"parent": doctype})
		return
	# If what is left is just the copied standard rules, drop them too so the
	# doctype follows its standard permissions (and future ERPNext changes).
	if _custom_matches_standard(doctype):
		frappe.db.delete("Custom DocPerm", {"parent": doctype})


def _custom_matches_standard(doctype):
	def key(p):
		return (p.role, p.permlevel, p.if_owner, *(p.get(r) or 0 for r in RIGHTS))

	fields = ["role", "permlevel", "if_owner", *RIGHTS]
	custom = sorted(
		key(p) for p in frappe.get_all("Custom DocPerm", filters={"parent": doctype}, fields=fields)
	)
	standard = sorted(key(p) for p in frappe.get_all("DocPerm", filters={"parent": doctype}, fields=fields))
	return custom == standard
