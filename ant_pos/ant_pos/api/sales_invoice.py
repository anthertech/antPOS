import frappe
from frappe import _
from frappe.model.document import Document
from erpnext.stock.get_item_details import get_price_list_rate, get_price_list_rate_for

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
    if not invoice.ignore_pricing_rule:
        for item in invoice.items:
            data=get_price_list_rate_for(
                {
                    'price_list': 'Standard Selling', 
                    "customer": invoice.customer,
                    "uom":item.uom,
                    "transaction_date": invoice.posting_date,
                    "batch_no": item.batch_no,
                },
                item.item_code
            )
            item.price_list_rate=data
    return invoice.as_dict()