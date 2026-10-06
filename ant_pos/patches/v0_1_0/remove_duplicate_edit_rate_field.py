"""Drop the custom "Allow user to edit Rate" check from POS Profile.

It duplicated ERPNext's own "Allow User to Edit Rate" (allow_rate_change),
which is the one the POS reads; the custom field did nothing. Profiles that
ticked only the custom box keep that intent: it is copied to the standard
field before the custom field is removed. Removing it from the fixture alone
would leave the field on existing sites.
"""

import frappe

CUSTOM_FIELD = "POS Profile-custom_edit_rate"


def execute():
	if frappe.db.has_column("POS Profile", "custom_edit_rate"):
		frappe.db.sql(
			"""
			UPDATE `tabPOS Profile`
			SET allow_rate_change = 1
			WHERE custom_edit_rate = 1 AND IFNULL(allow_rate_change, 0) = 0
			"""
		)

	if frappe.db.exists("Custom Field", CUSTOM_FIELD):
		frappe.delete_doc("Custom Field", CUSTOM_FIELD, ignore_permissions=True, force=True)

	frappe.clear_cache(doctype="POS Profile")
