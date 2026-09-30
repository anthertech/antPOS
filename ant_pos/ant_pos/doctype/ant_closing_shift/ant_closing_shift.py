import frappe
from frappe import _
from frappe.model.document import Document
from frappe.utils import flt

from ant_pos.ant_pos.doctype.ant_opening_shift.ant_opening_shift import is_shift_manager


class AntClosingShift(Document):
	def validate(self):
		if not self.ant_opening_shift:
			self.ant_opening_shift = self.get_opening_shift()

		opening_shift_doc = frappe.get_doc("Ant Opening Shift", self.ant_opening_shift)
		self.validate_opening_shift(opening_shift_doc)

		self.opening_start_date = opening_shift_doc.period_start_date
		self.opening_end_date = frappe.utils.now()
		self.posting_date = frappe.utils.today()
		self.company = opening_shift_doc.company
		self.pos_profile = opening_shift_doc.pos_profile
		self.user = opening_shift_doc.cashier

		self.pos_transactions = []
		self.pos_payments = []
		self.taxes = []
		self.grand_total = 0
		self.net_total = 0
		self.total_quantity = 0

		for tx in self.get_pos_transactions():
			self.append(
				"pos_transactions",
				{
					"pos_invoice": tx["pos_invoice"],
					"customer": tx["customer"],
					"net_total": tx["net_total"],
					"posting_date": tx["posting_date"],
					"grand_total": tx["grand_total"],
					"return_against": tx["return_against"],
					"is_return": tx["is_return"],
				},
			)
			self.grand_total += tx["grand_total"] or 0
			self.net_total += tx["net_total"] or 0
			self.total_quantity += tx["total_qty"] or 0

		for tax_row in self.get_pos_taxes():
			self.append("taxes", tax_row)

		for payment in self.get_pos_payments():
			self.append("pos_payments", payment)

		self.reconcile_payments(opening_shift_doc)

	def reconcile_payments(self, opening_shift_doc):
		"""Work out the cash count here rather than trusting the screen.

		The Close Shift screen used to send the opening float, the expected amount
		and the difference along with what the cashier counted, and all four were
		stored as sent, so a shortage could be hidden by sending an expected amount
		that matched the count.

		Only `closing`, the counted amount, comes from the cashier now. This
		mirrors ERPNext's POS Closing Entry, which builds its reconciliation from
		the opening entry and the invoices
		(pos_closing_entry.make_closing_entry_from_opening).
		"""
		from ant_pos.ant_pos.api.payment_entry import shift_payment_totals

		counted = {row.mode_of_payment: flt(row.closing) for row in self.payment_reconciliation}
		opening = {
			row.mode_of_payment: flt(row.opening_amount) for row in opening_shift_doc.opening_balance_details
		}
		taken = shift_payment_totals(self.ant_opening_shift)

		self.payment_reconciliation = []
		for mode in _ordered_modes(opening_shift_doc, opening, taken, counted):
			expected = flt(opening.get(mode, 0)) + flt(taken.get(mode, 0))
			closing = flt(counted.get(mode, 0))
			self.append(
				"payment_reconciliation",
				{
					"mode_of_payment": mode,
					"opening": flt(opening.get(mode, 0)),
					"expected": expected,
					"closing": closing,
					"difference": closing - expected,
				},
			)

	def validate_opening_shift(self, opening):
		"""Only an open, submitted shift can be closed, once, by its cashier
		(or a shift manager)."""
		if opening.docstatus != 1 or opening.status != "Open":
			frappe.throw(
				_("Shift {0} is not open.").format(frappe.bold(opening.name)),
				title=_("Shift Not Open"),
			)
		if opening.cashier != frappe.session.user and not is_shift_manager():
			frappe.throw(_("You can only close your own shift."), frappe.PermissionError)

		filters = {"ant_opening_shift": opening.name, "docstatus": ["<", 2]}
		if not self.is_new():
			filters["name"] = ["!=", self.name]
		other = frappe.db.get_value("Ant Closing Shift", filters, "name")
		if other:
			frappe.throw(
				_("Shift {0} is already being closed in {1}.").format(
					frappe.bold(opening.name), frappe.bold(other)
				),
				title=_("Already Closing"),
			)

	def get_opening_shift(self):
		# Ant Opening Shift stores the operator in `cashier`, not `user`.
		shift = frappe.db.get_value(
			"Ant Opening Shift",
			filters={
				"cashier": self.user or frappe.session.user,
				"docstatus": 1,
				"status": "Open",
			},
			fieldname="name",
			order_by="creation desc",
		)
		if not shift:
			frappe.throw(_("No open shift found for this user."))
		return shift

	def get_pos_transactions(self):
		"""Invoices in this shift, one row each."""
		return frappe.db.sql(
			"""
            SELECT
                si.name AS pos_invoice, si.customer, si.net_total, si.total_qty,
                si.posting_date, si.grand_total, si.return_against, si.is_return,
                si.outstanding_amount
            FROM
                `tabSales Invoice` si
            WHERE
                si.custom_ant_opening = %s AND si.docstatus = 1
        """,
			(self.ant_opening_shift,),
			as_dict=True,
		)

	def get_pos_taxes(self):
		"""Tax totals for this shift, grouped by account head and rate.

		The rate comes from the tax row, as ERPNext's own POS Closing Entry
		takes it (`make_closing_entry_from_opening` groups on `t.rate`). It used
		to be derived as tax_amount / net_total, which is only right for a
		single tax applied to the whole invoice: item-wise taxes, "Actual"
		charges and taxes on a previous row's total all came out as rates that
		were never charged.
		"""
		return frappe.db.sql(
			"""
            SELECT
                account_head,
                rate,
                SUM(amount) AS amount
            FROM (
                SELECT
                    st.account_head AS account_head,
                    st.rate AS rate,
                    st.tax_amount AS amount
                FROM
                    `tabSales Taxes and Charges` st
                JOIN
                    `tabSales Invoice` si ON si.name = st.parent
                WHERE
                    si.custom_ant_opening = %s
                    AND si.docstatus = 1
                    AND st.tax_amount != 0
                    AND st.account_head IS NOT NULL
            ) per_invoice
            GROUP BY
                account_head, rate
        """,
			(self.ant_opening_shift,),
			as_dict=True,
		)

	def get_pos_payments(self):
		# The aliases matter: Ant Payment Entry Reference has date / amount /
		# mode_of_payment. Selecting posting_date, paid_amount and payment_type
		# meant Document.append() silently dropped all three, leaving every row
		# in the closing shift's payment table blank but for the reference.
		return frappe.get_all(
			"Payment Entry",
			filters={"reference_no": self.ant_opening_shift, "docstatus": 1},
			fields=[
				"name as payment_entry",
				"party as customer",
				"posting_date as date",
				"paid_amount as amount",
				"mode_of_payment",
			],
		)

	def before_submit(self):
		if not self.ant_opening_shift:
			frappe.throw(_("No open shift found for this user."))

		# Record the link in both directions: get_openingshift() filters on
		# ant_closing_shift_detail as well as status, and without this the audit
		# trail from opening to closing document is lost.
		frappe.db.set_value(
			"Ant Opening Shift",
			self.ant_opening_shift,
			{"status": "Closed", "ant_closing_shift_detail": self.name},
		)

	def on_cancel(self):
		"""Reopen the shift so it can be closed again."""
		if not self.ant_opening_shift:
			return
		opening = frappe.db.get_value(
			"Ant Opening Shift",
			self.ant_opening_shift,
			["cashier", "ant_closing_shift_detail"],
			as_dict=True,
		)
		# Only undo what this closing did.
		if not opening or opening.ant_closing_shift_detail != self.name:
			return
		# A cashier has one open shift at a time; reopening this one next to a
		# newer shift would give them two.
		other = frappe.db.exists(
			"Ant Opening Shift",
			{
				"cashier": opening.cashier,
				"docstatus": 1,
				"status": "Open",
				"name": ["!=", self.ant_opening_shift],
			},
		)
		if other:
			frappe.throw(
				_("{0} has since opened shift {1}. Close it before cancelling this closing.").format(
					frappe.bold(opening.cashier), frappe.bold(other)
				),
				title=_("Shift Already Open"),
			)
		frappe.db.set_value(
			"Ant Opening Shift",
			self.ant_opening_shift,
			{"status": "Open", "ant_closing_shift_detail": None},
		)


def _ordered_modes(opening_shift_doc, *sources):
	"""Every payment method of the shift, in the profile's own order."""
	modes = []
	profile_modes = frappe.get_all(
		"POS Payment Method",
		filters={"parent": opening_shift_doc.pos_profile},
		pluck="mode_of_payment",
		order_by="idx asc",
	)
	for mode in profile_modes:
		if mode not in modes:
			modes.append(mode)
	for source in sources:
		for mode in source:
			if mode and mode not in modes:
				modes.append(mode)
	return modes
