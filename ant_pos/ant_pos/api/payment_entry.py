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
	_check_shift_access(shift)

	totals = shift_payment_totals(shift)
	rows = [{"mode_of_payment": mode, "total": total} for mode, total in totals.items()]
	rows.append({"mode_of_payment": "Total", "total": sum(totals.values())})
	return rows


def _check_shift_access(shift):
	"""The shift's cashier, or a manager, may see its totals.

	Not `has_permission` on the document: the POS roles are limited to records
	they own, and `owner` is whoever created the shift, so a shift opened for a
	cashier by a manager would be hidden from the cashier closing it.
	"""
	from ant_pos.ant_pos.doctype.ant_opening_shift.ant_opening_shift import is_shift_manager

	cashier = frappe.db.get_value("Ant Opening Shift", shift, "cashier")
	if not cashier:
		frappe.throw(_("Shift {0} does not exist.").format(frappe.bold(shift)))
	if cashier != frappe.session.user and not is_shift_manager():
		frappe.throw(
			_("Shift {0} belongs to {1}.").format(frappe.bold(shift), frappe.bold(cashier)),
			frappe.PermissionError,
		)


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


@frappe.whitelist(methods=["POST"])
def record_payment(mode_of_payment, amount, customer=None, references=None, shift=None):
	"""Take money from a customer, using ERPNext's own Payment Entry builder.

	The POS used to assemble the whole Payment Entry in the browser and post it
	through `savedocs`: accounts, currencies, exchange rates and reference rows
	were all the client's guess, and every ERPNext fix in that area passed
	antPOS by. `get_payment_entry` does the work here instead.

	`references` settle invoices ([{"invoice": name, "allocated_amount": x}]);
	without them the money sits on the customer's account as an advance.
	"""
	frappe.has_permission("Payment Entry", "create", throw=True)

	amount = flt(amount)
	if amount <= 0:
		frappe.throw(_("Enter an amount to record."))

	references = frappe.parse_json(references) if isinstance(references, str) else (references or [])
	shift = _shift_for_payment(shift)

	if references:
		entry = _entry_for_invoices(references, amount)
	else:
		if not customer:
			frappe.throw(_("Select a customer."))
		entry = frappe.new_doc("Payment Entry")
		entry.update(
			{
				"payment_type": "Receive",
				"party_type": "Customer",
				"party": customer,
				"paid_amount": amount,
				"received_amount": amount,
			}
		)

	entry.mode_of_payment = mode_of_payment
	# get_payment_entry defaults to the company's bank account; money taken in
	# the POS belongs to the account behind the payment method used.
	mode_account = get_mode_of_payment_account(mode_of_payment, entry.company)
	if mode_account:
		entry.paid_to = mode_account
		entry.paid_to_account_currency = frappe.db.get_value("Account", mode_account, "account_currency")
	entry.posting_date = frappe.utils.today()
	# Ant Closing Shift reads payments by reference_no, so the money is counted
	# in the shift it was taken in.
	entry.reference_no = shift
	entry.reference_date = frappe.utils.today()
	entry.insert()
	entry.submit()
	return entry.name


def _entry_for_invoices(references, amount):
	from erpnext.accounts.doctype.payment_entry.payment_entry import get_payment_entry

	rows = [
		frappe._dict(invoice=row.get("invoice"), allocated_amount=flt(row.get("allocated_amount")))
		for row in references
		if row.get("invoice") and flt(row.get("allocated_amount")) > 0
	]
	if not rows:
		frappe.throw(_("Nothing to settle."))
	if abs(sum(row.allocated_amount for row in rows) - amount) > 0.005:
		frappe.throw(_("The amounts allocated to invoices must add up to the amount paid."))

	# Built from the first invoice, which gives ERPNext the party and accounts.
	entry = get_payment_entry("Sales Invoice", rows[0].invoice, party_amount=amount)
	entry.set("references", [])
	for row in rows:
		# get_payment_entry only checks Payment Entry create, so each invoice is
		# checked here: a cashier limited to their own invoices must not be able
		# to settle, or read the customer of, anyone else's.
		frappe.has_permission("Sales Invoice", "read", doc=row.invoice, throw=True)
		invoice = frappe.db.get_value("Sales Invoice", row.invoice, ["customer", "due_date"], as_dict=True)
		if invoice.customer != entry.party:
			frappe.throw(_("Settle one customer's invoices at a time."))
		entry.append(
			"references",
			{
				"reference_doctype": "Sales Invoice",
				"reference_name": row.invoice,
				"due_date": invoice.due_date,
				"allocated_amount": row.allocated_amount,
			},
		)
	entry.paid_amount = amount
	entry.received_amount = amount
	return entry


def _shift_for_payment(shift):
	"""Payments belong to the shift taking them, which must be open.

	Without a shift the money would be counted in nobody's drawer, and a closed
	shift's totals are already submitted, so both are refused.
	"""
	from ant_pos.ant_pos.api.pos_invoice_rules import _open_shift_for
	from ant_pos.ant_pos.doctype.ant_opening_shift.ant_opening_shift import is_shift_manager

	shift = shift or _open_shift_for(frappe.session.user)
	if not shift:
		frappe.throw(_("Open a shift before taking payments."), title=_("No Open Shift"))

	details = frappe.db.get_value(
		"Ant Opening Shift", shift, ["status", "docstatus", "cashier"], as_dict=True
	)
	if not details:
		frappe.throw(_("Shift {0} does not exist.").format(frappe.bold(shift)))
	if details.docstatus != 1 or details.status != "Open":
		frappe.throw(_("Shift {0} is not open.").format(frappe.bold(shift)), title=_("Shift Not Open"))
	if details.cashier != frappe.session.user and not is_shift_manager():
		frappe.throw(
			_("Shift {0} belongs to {1}.").format(frappe.bold(shift), frappe.bold(details.cashier)),
			frappe.PermissionError,
		)
	return shift
