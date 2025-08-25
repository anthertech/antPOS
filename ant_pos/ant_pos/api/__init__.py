import frappe
from frappe.translate import get_all_translations


def user_has_posprofile(user=None):
    user = user or frappe.session.user

    child_records = frappe.get_all(
        'POS Profile User',  
        filters={'user': user},
        fields=['parent']
    )

    pos_profiles = [record['parent'] for record in child_records]

    return len(pos_profiles) > 0



def posprofile_user_query_conditions(user=None):
    """
    Returns SQL condition to restrict POS Profiles list to those
    where the given user exists in the 'Applicable for Users' child table.
    System Managers and Administrators get access to all POS Profiles.
    """
    if not user:
        user = frappe.session.user

    if user == "Guest":
        return "FALSE"

    roles = frappe.get_roles(user)
    if "System Manager" in roles or "Administrator" in roles:
        return "1=1"  # full access

    return f"""
        name IN (
            SELECT parent FROM `tabPOS Profile User`
            WHERE user = {frappe.db.escape(user)}
        )
    """

@frappe.whitelist()
def get_user_permissions():
    user = frappe.session.user

    permissions = {}

    for doctype in ["Sales Invoice", "Payment Entry", "Sales Order"]:
        permissions[doctype.lower().replace(" ", "_")] = {
            "can_submit": frappe.has_permission(doctype, doc=None, ptype="submit", user=user),
            "can_create": frappe.has_permission(doctype, doc=None, ptype="create", user=user),
            "can_print": frappe.has_permission(doctype, doc=None, ptype="print", user=user),
        }

    return permissions

@frappe.whitelist(allow_guest=True)
def get_translations():
	if frappe.session.user != "Guest":
		language = frappe.db.get_value("User", frappe.session.user, "language")
	else:
		language = frappe.db.get_single_value("System Settings", "language")

	return get_all_translations(language)