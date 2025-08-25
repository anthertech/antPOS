import frappe
from frappe.core.page.permission_manager.permission_manager import add, update

def before_install():
    create_roles_and_permissions()
    set_custom_permissions(permission_matrix)
    
def set_custom_permissions(permission_matrix):
    """
    Set Custom DocPerms for all entries in permission_matrix.
    Each entry is a tuple: (doctype, role, permissions_dict)
    """
    for doctype, role, perms in permission_matrix:
        permlevel = perms.get("permlevel", 0)
        filters = {
            "parent": doctype,
            "role": role,
            "permlevel": permlevel
        }
        # Check if a Custom DocPerm already exists for this tuple
        custom_perm_name = frappe.db.exists("Custom DocPerm", filters)
        perms_for_doc = {
            "doctype": "Custom DocPerm",
            "parent": doctype,
            "parenttype": "DocType",
            "parentfield": "permissions",
            "role": role,
            "permlevel": permlevel,
        }
        perms_for_doc.update(perms)
        # Don't set permlevel twice
        del perms_for_doc["permlevel"]
        
        if not custom_perm_name:
            # Create new Custom DocPerm
            frappe.get_doc(perms_for_doc).insert(ignore_permissions=True)
        else:
            # Update existing Custom DocPerm
            doc = frappe.get_doc("Custom DocPerm", custom_perm_name)
            for k, v in perms_for_doc.items():
                setattr(doc, k, v)
            doc.save(ignore_permissions=True)
        frappe.db.commit()
    # Always clear cache so permission map is updated immediately
    frappe.clear_cache()

def create_roles_and_permissions():
    roles = [
        {"role_name": "POS Billing", "desk_access": 0},
        {"role_name": "POS Cash", "desk_access": 0},
    ]

    # Create roles if not exist
    for role in roles:
        if not frappe.db.exists("Role", role["role_name"]):
            frappe.get_doc({"doctype": "Role", **role}).insert()

    
permission_matrix = [
        # POS Cash user permission in Doctype
        ("POS Invoice", "POS Cash", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":1,"create":0, "delete":0, "submit": 1, "cancel":0, "amend":0, "print":1, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Customer", "POS Cash", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":1,"create":1, "delete":0, "submit": 0, "cancel":0, "amend":0, "print":0, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Customer Group", "POS Cash", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":1,"create":1, "delete":0, "submit": 0, "cancel":0, "amend":0, "print":0, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Territory", "POS Cash", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":1,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print":0, "email":0, "report":0, "import":0, "export": 1, "set_user_permissions":0, "share":0}),
        ("Batch", "POS Cash", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print":0, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Item Tax Template", "POS Cash", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":0,"create":1, "delete":0, "submit": 0, "cancel":0, "amend":0, "print": 0, "email":0, "report":0, "import":0, "export": 0, "set_user_permissions":0, "share":0}),
        ("Account", "POS Cash", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print":0, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Mode of Payment", "POS Cash", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print": 0, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Company", "POS Cash", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print":0, "email":0, "report":1, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("POS Profile", "POS Cash", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print":0, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Sales Invoice", "POS Cash", {"permlevel":0, "if_owner":1, "select":1, "read":1, "write":1,"create":1, "delete":0, "submit": 1, "cancel":1, "amend":1, "print":1, "email":0, "report":1, "import":0, "export":0, "set_user_permissions":0, "share":0}),
        ("POS Opening Shift", "POS Cash", {"permlevel":0, "if_owner":1, "select":1, "read":1, "write":1,"create":1, "delete":0, "submit": 1, "cancel":0, "amend":0, "print":0, "email":0, "report":1, "import":0, "export":0, "set_user_permissions":0, "share":0}),
        ("POS Opening Entry", "POS Cash", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":1,"create":1, "delete":0, "submit": 1, "cancel":0, "amend":0, "print":1, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Payment Entry", "POS Cash", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":1,"create":1, "delete":0, "submit": 1, "cancel":0, "amend":0, "print":0, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Address", "POS Cash", {"permlevel":0, "if_owner":0, "select":0, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print":0, "email":0, "report":1, "import":0, "export":0, "set_user_permissions":0, "share":0}),
        ("Item", "POS Cash", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":1,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print":0, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("GL Entry", "POS Cash", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print":0, "email":0, "report":0, "import":0, "export":0, "set_user_permissions":0, "share":0}),
        ("Serial No", "POS Cash", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print":0, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Stock Settings", "POS Cash", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print":0, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Warehouse", "POS Cash", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print":0, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Sales Partner", "POS Cash", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":1,"create":1, "delete":0, "submit": 0, "cancel":0, "amend":0, "print":0, "email":0, "report":1, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Sales Taxes and Charges Template", "POS Cash", {"permlevel": 0, "if_owner":0, "select":1, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print":0, "email":1, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Tax Category", "POS Cash", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print":0, "email":0, "report":1, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Sales Order", "POS Cash", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":1,"create":1, "delete":0, "submit": 0, "cancel":0, "amend":0, "print":1, "email":0, "report":1, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        
        # POS Billing user permission in Doctype
        ("POS Invoice", "POS Billing", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":1,"create":1, "delete":0, "submit": 0, "cancel":0, "amend":0, "print": 1, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Customer", "POS Billing", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":1,"create":1, "delete":0, "submit": 0, "cancel":0, "amend":0, "print": 0, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Item", "POS Billing", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":0,"create":1, "delete":0, "submit": 0, "cancel":0, "amend":0, "print": 0, "email":0, "report":1, "import":0, "export":0, "set_user_permissions":0, "share":0}),
        ("Territory", "POS Billing", {"permlevel":0, "if_owner":0, "select":0, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print": 0, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Batch", "POS Billing", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print": 0, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Customer Group", "POS Billing", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print": 0, "email":0, "report":0, "import":0, "export":0, "set_user_permissions":0, "share":0}),
        ("Item Tax Template", "POS Billing", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print": 0, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Country", "POS Billing", {"permlevel":0, "if_owner":0, "select":0, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print": 0, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Account", "POS Billing", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print": 0, "email":0, "report":0, "import":0, "export":0, "set_user_permissions":0, "share":0}),
        ("POS Settings", "POS Billing", {"permlevel":0, "if_owner":0, "select":0, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print": 0, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("POS Profile", "POS Billing", {"permlevel":0, "if_owner":0, "select":0, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print": 0, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Sales Invoice", "POS Billing", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":0,"create":1, "delete":0, "submit": 0, "cancel":0, "amend":0, "print": 1, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Address", "POS Billing", {"permlevel":0, "if_owner":0, "select":0, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print": 0, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Serial No", "POS Billing", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print": 0, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Warehouse", "POS Billing", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print": 0, "email":0, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Sales Taxes and Charges Template", "POS Billing", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print": 0, "email":1, "report":0, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        ("Tax Category", "POS Billing", {"permlevel":0, "if_owner":0, "select":1, "read":1, "write":0,"create":0, "delete":0, "submit": 0, "cancel":0, "amend":0, "print": 0, "email":0, "report":1, "import":0, "export":1, "set_user_permissions":0, "share":0}),
        
    ]
