import frappe
from frappe import _

def validate(doc,method):
    if not doc.paid_to:
        doc.paid_to = frappe.db.get_value('Mode of Payment Account',{'parent' :doc.mode_of_payment},'default_account')
    if not doc.paid_to_account_currency:
        doc.paid_to_account_currency = frappe.db.get_value('Account',doc.paid_from,'account_currency')