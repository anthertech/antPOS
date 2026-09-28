import frappe
from erpnext.accounts.party import get_party_account
from frappe import _
from frappe.utils import flt


def get_mode_of_payment_account(mode_of_payment: str, company: str) -> str | None:
	"""Default account for a mode of payment, scoped to the company.

	Mode of Payment Account is a per-company child table, so an unscoped lookup
	returns whichever company happens to sort first.
	"""
	if not (mode_of_payment and company):
		return None

	return frappe.db.get_value(
		"Mode of Payment Account",
		{"parent": mode_of_payment, "company": company},
		"default_account",
	)


def validate(doc, method=None):
	"""Resolve the accounts the POS deliberately leaves blank.

	Which ledger a POS payment hits is company-specific, so the client sends the
	mode of payment and the party and lets the server decide. Every branch is
	guarded on the field being empty, so Payment Entries created anywhere else
	are untouched.
	"""
	if not doc.paid_to:
		doc.paid_to = get_mode_of_payment_account(doc.mode_of_payment, doc.company)

	if not doc.paid_from and doc.payment_type == "Receive" and doc.party_type == "Customer" and doc.party:
		doc.paid_from = get_party_account("Customer", doc.party, doc.company)

	# The original read the currency of paid_from and stored it against paid_to.
	if not doc.paid_to_account_currency and doc.paid_to:
		doc.paid_to_account_currency = frappe.db.get_value("Account", doc.paid_to, "account_currency")

	if not doc.paid_from_account_currency and doc.paid_from:
		doc.paid_from_account_currency = frappe.db.get_value("Account", doc.paid_from, "account_currency")

	# ERPNext requires a reference date whenever a reference number is present.
	if doc.reference_no and not doc.reference_date:
		doc.reference_date = doc.posting_date or frappe.utils.today()


@frappe.whitelist()
def get_payments(shift):
	"""What one shift took, per mode of payment, for the Close Shift screen."""
	frappe.has_permission("Ant Opening Shift", "read", doc=shift, throw=True)

	totals = shift_payment_totals(shift)
	rows = [{"mode_of_payment": mode, "total": total} for mode, total in totals.items()]
	rows.append({"mode_of_payment": "Total", "total": sum(totals.values())})
	return rows


def shift_payment_totals(shift) -> dict:
	"""Money taken during a shift, per mode of payment.

	The one source used by both the Close Shift screen and the closing document
	itself. They used to disagree: the screen credited a payment to the shift of
	the *invoice* it paid, so cash collected today against last week's invoice
	landed in a shift that was already closed, and a payment on account, which
	settles no invoice at all, was counted nowhere.

	A payment belongs to the shift it was taken in, which antPOS records in the
	Payment Entry's `reference_no`, exactly as the closing document reads it.

	Counted here:

	- payment rows on the shift's invoices (an ordinary POS sale, and returns,
	  which carry negative amounts and net off);
	- submitted Payment Entries received during the shift, whether they settle
	  an invoice or sit on the customer's account;
	- less change handed back, which is not in the drawer any more.

	An opening float is not included; the closing document adds it.
	"""
	totals = {}

	invoice_payments = frappe.db.sql(
		"""
		SELECT p.mode_of_payment, SUM(p.amount) AS total
		FROM `tabSales Invoice Payment` p
		JOIN `tabSales Invoice` si ON p.parent = si.name
		WHERE si.custom_ant_opening = %s AND si.docstatus = 1
		GROUP BY p.mode_of_payment
		""",
		(shift,),
		as_dict=True,
	)
	for row in invoice_payments:
		totals[row.mode_of_payment] = totals.get(row.mode_of_payment, 0) + flt(row.total)

	entries = frappe.db.sql(
		"""
		SELECT mode_of_payment, SUM(paid_amount) AS total
		FROM `tabPayment Entry`
		WHERE reference_no = %s AND docstatus = 1 AND payment_type = 'Receive'
		GROUP BY mode_of_payment
		""",
		(shift,),
		as_dict=True,
	)
	for row in entries:
		totals[row.mode_of_payment] = totals.get(row.mode_of_payment, 0) + flt(row.total)

	for mode, change in _change_given(shift, list(totals)).items():
		totals[mode] = totals.get(mode, 0) - change

	return totals


def _change_given(shift, modes):
	"""Change handed back during the shift, per mode of payment."""
	company = frappe.db.get_value("Ant Opening Shift", shift, "company")
	rows = frappe.db.sql(
		"""
		SELECT account_for_change_amount AS account, SUM(change_amount) AS total
		FROM `tabSales Invoice`
		WHERE custom_ant_opening = %s AND docstatus = 1 AND change_amount != 0
		GROUP BY account_for_change_amount
		""",
		(shift,),
		as_dict=True,
	)
	change = {}
	for row in rows:
		mode = _mode_for_account(row.account, company, modes)
		if mode:
			change[mode] = change.get(mode, 0) + float(row.total or 0)
	return change


def _mode_for_account(account, company, modes):
	"""The shift's payment method that pays from `account`, else its cash one."""
	candidates = frappe.get_all(
		"Mode of Payment Account",
		filters={"company": company, "default_account": account, "parent": ["in", modes or [""]]},
		pluck="parent",
	)
	if candidates:
		return candidates[0]
	cash = frappe.get_all(
		"Mode of Payment", filters={"name": ["in", modes or [""]], "type": "Cash"}, pluck="name"
	)
	return cash[0] if cash else None
