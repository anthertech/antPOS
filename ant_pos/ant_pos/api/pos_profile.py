import frappe
from frappe import _
from ant_pos.ant_pos.doctype.ant_opening_shift.ant_opening_shift import AntOpeningShift

@frappe.whitelist()
def get_openingshift():
    user = frappe.session.user
    open_vouchers = frappe.db.get_all(
        "Ant Opening Shift",
        filters={
            "cashier": user,
            "ant_closing_shift_detail": ["in", ["", None]],
            "docstatus": 1,
            "status": "Open",
        },
        fields=["name", "pos_profile"],
        order_by="period_start_date desc",
    )
    if open_vouchers:
        data = {
            "Ant_Opening_Shift": frappe.get_doc(
                "Ant Opening Shift", open_vouchers[0]["name"]
            ),
            "pos_profile": get_pos_profile(
                open_vouchers[0]["pos_profile"]
            )
        }
    else:
        data = {}
    return data


def get_pos_profile(profile):
    pos = frappe.get_doc("POS Profile", profile)
    return pos


@frappe.whitelist()
def get_pos_profiles_by_company():
    # Fetch POS Profiles with associated company respecting permissions
    pos_profiles = frappe.get_list(
        "POS Profile",
        fields=["name", "company"],
        order_by="company ASC",
        ignore_permissions=False
    )

    company_profiles = {}

    for profile in pos_profiles:
        company = profile["company"]
        pos_name = profile["name"]

        if company not in company_profiles:
            company_profiles[company] = []

        # Fetch modes of payment (this is safe as it's a child table or linked with parent)
        modes_of_payment = frappe.get_all(
            "POS Payment Method",
            filters={"parent": pos_name},
            fields=["mode_of_payment"],
        )

        company_profiles[company].append({
            "name": pos_name,
            "modes_of_payment": [mop["mode_of_payment"] for mop in modes_of_payment],
        })

    return company_profiles


@frappe.whitelist()
def create_opening(values):
    """
    Creates a new Ant Opening Shift document with the given values.

    Args:
        values (dict): A dictionary containing the field names and their respective values.

    Returns:
        str: The name of the newly created Ant Opening Shift document.
    """
    try:
        # Validate input
        if not isinstance(values, dict):
            frappe.throw("Invalid data format. Expected a dictionary.")

        # Create a new Ant Opening Shift document
        ant_opening_shift = frappe.new_doc("Ant Opening Shift")
        
        # Set field values from the `values` dictionary
        for field, value in values.items():
            ant_opening_shift.set(field, value)

        # Insert the document into the database
        ant_opening_shift.insert()

        ant_opening_shift.submit()

        return ant_opening_shift.name

    except Exception as e:
        frappe.log_error(message=frappe.get_traceback(), title="Ant Opening Shift Creation Error")
        frappe.throw(str(e))