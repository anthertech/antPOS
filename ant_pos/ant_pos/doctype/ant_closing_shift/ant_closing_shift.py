import frappe
from frappe.model.document import Document


class AntClosingShift(Document):
    def validate(self):
        if not self.ant_opening_shift:
            self.ant_opening_shift = self.get_opening_shift()

        opening_shift_doc = frappe.get_doc("Ant Opening Shift", self.ant_opening_shift)

        self.opening_start_date = opening_shift_doc.period_start_date
        self.opening_end_date = frappe.utils.now()
        self.posting_date = frappe.utils.today()
        self.company = opening_shift_doc.company
        self.user = opening_shift_doc.cashier

        self.pos_transactions = []
        self.pos_payments = []
        self.taxes = []
        self.grand_total = 0
        self.net_total = 0
        self.total_quantity = 0 
        tax_map = {}

        pos_transactions = self.get_pos_transactions()
        if pos_transactions:
            self.process_pos_transactions(pos_transactions, tax_map)

        for tax_row in tax_map.values():
            self.append("taxes", tax_row)

        for payment in self.get_pos_payments():
            self.append("pos_payments", payment)

    def get_opening_shift(self):
        shift = frappe.db.get_value(
            "Ant Opening Shift",
            filters={"user": self.user, "docstatus": 1,"status":"Open"},
            fieldname="name",
            order_by="creation desc"
        )
        if not shift:
            frappe.throw("No opening shift found for this user.")
        return shift

    def get_pos_transactions(self):
        return frappe.db.sql("""
            SELECT
                si.name AS pos_invoice, si.customer, si.net_total, si.total_qty,
                si.posting_date, si.grand_total, si.return_against, si.is_return,
                si.outstanding_amount, st.account_head, st.charge_type, st.rate,
                st.tax_amount, st.description
            FROM
                `tabSales Invoice` si
            LEFT JOIN
                `tabSales Taxes and Charges` st ON si.name = st.parent
            WHERE
                si.custom_ant_opening = %s AND si.docstatus = 1
        """, (self.ant_opening_shift,), as_dict=True)

    def get_pos_payments(self):
        return frappe.get_all(
            "Payment Entry",
            filters={"reference_no": self.ant_opening_shift, "docstatus": 1},
            fields=["name as payment_entry", "posting_date", "paid_amount", "payment_type"]
        )

    def process_pos_transactions(self, pos_transactions, tax_map):
        seen_invoices = set()

        for tx in pos_transactions:
            invoice_name = tx["pos_invoice"]

            if invoice_name not in seen_invoices:
                seen_invoices.add(invoice_name)
                self.append("pos_transactions", {
                    "pos_invoice": tx["pos_invoice"],
                    "customer": tx["customer"],
                    "net_total": tx["net_total"],
                    "posting_date": tx["posting_date"],
                    "grand_total": tx["grand_total"],
                    "return_against": tx["return_against"],
                    "is_return": tx["is_return"],
                })

                self.grand_total += tx["grand_total"] or 0
                self.net_total += tx["net_total"] or 0
                self.total_quantity += tx["total_qty"] or 0

            if tx.get("account_head") and tx["tax_amount"]:
                try:
                    rate_percentage = round((tx["tax_amount"] / tx["net_total"]) * 100, 2) if tx["net_total"] else 0
                except ZeroDivisionError:
                    rate_percentage = 0

                key = (tx["account_head"], rate_percentage)

                if key in tax_map:
                    tax_map[key]["amount"] += tx["tax_amount"] or 0
                else:
                    tax_map[key] = {
                        "account_head": tx["account_head"],
                        "rate": rate_percentage,
                        "amount": tx["tax_amount"] or 0,
                    }

    def before_submit(self):
        if self.ant_opening_shift:
            frappe.db.set_value('Ant Opening Shift', self.ant_opening_shift, 'status', 'Closed')
        else:
            frappe.throw("No opening shift found for this user.")