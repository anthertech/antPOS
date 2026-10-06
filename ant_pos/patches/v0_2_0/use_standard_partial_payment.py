"""Use ERPNext's own "Allow Partial Payment" setting.

antPOS shipped two custom POS Profile settings, "Allow Credit" and "Allow
Partial Payments". ERPNext already has `allow_partial_payment` and enforces it
in `POSInvoice.validate_full_payment`, so the custom pair only meant the rule
could never be applied server-side.

A profile that allowed either of them allows partial payment now.
"""

import frappe

OLD_FIELDS = ("custom_allow_credit", "custom_allow_partial_payments")


def execute():
	columns = frappe.db.get_table_columns("POS Profile")
	present = [field for field in OLD_FIELDS if field in columns]
	if present:
		condition = " or ".join(f"ifnull(`{field}`, 0) = 1" for field in present)
		frappe.db.sql(f"update `tabPOS Profile` set allow_partial_payment = 1 where {condition}")

	for field in OLD_FIELDS:
		name = f"POS Profile-{field}"
		if frappe.db.exists("Custom Field", name):
			frappe.delete_doc("Custom Field", name, ignore_permissions=True, force=True)

	frappe.clear_cache(doctype="POS Profile")
