import frappe
from frappe import _

def validate(doc,method):
    if not doc.paid_to:
        doc.paid_to = frappe.db.get_value('Mode of Payment Account',{'parent' :doc.mode_of_payment},'default_account')
    if not doc.paid_to_account_currency:
        doc.paid_to_account_currency = frappe.db.get_value('Account',doc.paid_from,'account_currency')
        
@frappe.whitelist()
def get_payments(shift):
    # Query 1: Payment Entry Reference
    payment_entry = frappe.db.sql("""
        SELECT 
            pe.mode_of_payment,
            SUM(per.allocated_amount) AS total
        FROM `tabPayment Entry Reference` per
        JOIN `tabSales Invoice` si ON per.reference_name = si.name
        JOIN `tabPayment Entry` pe ON per.parent = pe.name
        WHERE per.reference_doctype = 'Sales Invoice'
          AND si.custom_ant_opening = %s
        GROUP BY pe.mode_of_payment
    """, (shift,), as_dict=True)

    # Query 2: Sales Invoice Payment
    sales_payment = frappe.db.sql("""
        SELECT
            p.mode_of_payment,
            SUM(p.amount) AS total
        FROM `tabSales Invoice Payment` p
        JOIN `tabSales Invoice` si ON p.parent = si.name
        WHERE si.custom_ant_opening = %s
          AND p.docstatus = 1
        GROUP BY p.mode_of_payment
    """, (shift,), as_dict=True)

    # Merge and calculate totals
    result_map = {}

    for entry in payment_entry:
        mop = entry["mode_of_payment"]
        result_map[mop] = float(entry["total"] or 0)

    for payment in sales_payment:
        mop = payment["mode_of_payment"]
        result_map[mop] = result_map.get(mop, 0) + float(payment["total"] or 0)

    result_list = []
    grand_total = 0.0

    for mop, total in result_map.items():
        result_list.append({
            "mode_of_payment": mop,
            "total": total
        })
        grand_total += total

    # Add grand total row
    result_list.append({
        "mode_of_payment": "Total",
        "total": grand_total
    })

    return result_list
    # invoice = frappe.db.get_all('Sales Invoice', filters={'custom_ant_opening': shift},fields=['name', 'is_pos',])
    # for inv in invoice:
    #     inv['payments'] = []
    #     payments = frappe.db.get_all('Payment Entry', filters={'shift': shift}, fields=['name', 'paid_from', 'paid_to', 'paid_from_account_currency', 'paid_to_account_currency', 'amount', 'amount_in_account_currency'])
    #     for payment in payments:
    #         inv['payments'].append(payment)
def get_payment_entry(invoice):
    
    # payments = frappe.db.sql("""
    #     SELECT 
    #         name, 
    #         paid_from, 
    #         paid_to, 
    #         paid_from_account_currency, 
    #         paid_to_account_currency, 
    #         amount, 
    #         amount_in_account_currency
    #     FROM `tabPayment Entry`
    #     WHERE shift = %s
    # """, (shift,), as_dict=True)
    
    return invoice
