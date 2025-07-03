import frappe
from frappe import _
from frappe.model.document import Document

@frappe.whitelist()
def calculate_invoice_item_taxes(doc):
    import json

    try:
        if isinstance(doc, str):
            doc = frappe.parse_json(doc)
    except Exception as e:
        frappe.throw(f"Invalid JSON input: {e}")
    invoice = frappe.get_doc(doc)
    invoice.flags.ignore_permissions = True
    invoice.set_missing_values()
    invoice.calculate_taxes_and_totals()
    return invoice.as_dict()