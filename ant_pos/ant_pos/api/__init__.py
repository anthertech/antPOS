import frappe

def user_has_posprofile(user=None):
    user = user or frappe.session.user
    
    # Query POS Profile where 'applicable_for_users' (example field) includes this user
    # Adjust field name based on your POS Profile doctype field for users
    profiles = frappe.get_all('POS Profile', 
        filters={'applicable_for_users': ['like', f'%{user}%']},
        fields=['name'])
    
    return len(profiles) > 0


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