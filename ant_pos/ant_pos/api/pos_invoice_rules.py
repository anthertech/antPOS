"""ERPNext's POS checks, applied to the Sales Invoices antPOS writes.

antPOS sells with ordinary Sales Invoices instead of POS Invoices, so none of
the checks ERPNext runs on a POS Invoice applied to a POS sale: payment rows
could have the wrong sign, change could be handed out with no account to book
it to, and an invoice could be written against a different company than its POS
Profile.

Rather than copy those rules, the same `POSInvoice` methods are called with our
document, so ERPNext's fixes and improvements reach antPOS with `bench update`.
The document stays a Sales Invoice: the old code assigned `POSInvoice` to
`doc.__class__`, which left every later hook in the save running against a
different class than the rest of the site expects.

Not every POS Invoice check fits a Sales Invoice. Those are listed in
SKIPPED below, with the reason and what covers them instead.
"""

import frappe
from erpnext.accounts.doctype.pos_invoice.pos_invoice import POSInvoice
from frappe import _
from frappe.utils import cint, get_link_to_form

from ant_pos.ant_pos.doctype.ant_opening_shift.ant_opening_shift import is_shift_manager

# ERPNext methods run against our invoice, in ERPNext's own order.
# `needs_payments` ones are skipped when the invoice carries no payment table
# (a sale settled from customer credit is saved with is_pos = 0).
ERPNEXT_CHECKS = (
	("validate_company_with_pos_company", False),
	("validate_mode_of_payment", True),
	("validate_payment_amount", False),
	("validate_change_amount", True),
	("validate_change_account", True),
	("validate_full_payment", False),
	("validate_serialised_or_batched_item", False),
	("validate_stock_availablility", False),
)

# POS Invoice checks deliberately not called:
SKIPPED = {
	# Queries `tabPOS Invoice Item` for the serials of the original invoice, so
	# it rejects every antPOS return. ERPNext's own Sales Invoice return
	# validation (controllers/sales_and_purchase_return.py) covers return
	# quantities and serials for us.
	"validate_return_items_qty": "reads POS Invoice Item; Sales Invoice returns are validated by ERPNext already",
	# Looks for a POS Opening Entry. antPOS has its own shift documents.
	"validate_pos_opening_entry": "antPOS uses Ant Opening Shift",
	# Loyalty programs are not offered by the POS screens.
	"validate_loyalty_transaction": "loyalty is not part of antPOS",
}


def validate(doc, method=None):
	"""Run ERPNext's POS checks on a POS sale, and tie it to a shift."""
	if not doc.get("pos_profile"):
		return

	validate_shift(doc)
	_prepare_tracked_rows(doc)
	has_payments = bool(doc.get("payments"))

	for name, needs_payments in ERPNEXT_CHECKS:
		if needs_payments and not has_payments:
			continue
		getattr(POSInvoice, name)(doc)


def _prepare_tracked_rows(doc):
	"""Describe serial and batch tracking the way ERPNext's check expects.

	Two things are missing on a Sales Invoice row:

	- `has_serial_no` / `has_batch_no`. POS Invoice Item carries them, Sales
	  Invoice Item does not, so without them the check passes on every line.
	- `use_serial_batch_fields`, which says the row gives its serials and
	  batches in the plain fields instead of a Serial and Batch Bundle.
	  ERPNext sets it itself in stock_controller.make_bundle_using_old_serial_
	  batch_fields, but only on submit, long after this check runs. Applying
	  the same rule here keeps the check honest: it then only complains about a
	  tracked item with no serial or batch at all.
	"""
	for item in doc.get("items") or []:
		if not item.item_code:
			continue
		tracking = frappe.get_cached_value(
			"Item", item.item_code, ["has_serial_no", "has_batch_no"], as_dict=True
		)
		if not tracking:
			continue
		item.set("has_serial_no", cint(tracking.has_serial_no))
		item.set("has_batch_no", cint(tracking.has_batch_no))

		if (item.get("serial_no") or item.get("batch_no")) and not item.get("serial_and_batch_bundle"):
			item.use_serial_batch_fields = 1


def validate_shift(doc):
	"""A POS sale belongs to one open shift, the seller's own.

	ERPNext does the same for POS Invoices in
	`POSInvoice.validate_pos_opening_entry`; antPOS keeps its own shift
	documents, so the rule lives here.

	Drafts carry no accounting, so a sale held in a shift that has since closed
	moves to the cashier's current shift instead of being refused.
	"""
	if doc.get("is_consolidated"):
		return

	shift = doc.get("custom_ant_opening")
	open_shift = _open_shift_for(frappe.session.user)

	if doc.docstatus == 0 and (not shift or not _is_usable(shift, doc)):
		# Held sales and new drafts follow the cashier to their current shift.
		doc.custom_ant_opening = open_shift or shift

	shift = doc.get("custom_ant_opening")
	if not shift:
		frappe.throw(
			_("Open a shift before selling."),
			title=_("No Open Shift"),
		)

	details = frappe.db.get_value(
		"Ant Opening Shift",
		shift,
		["name", "status", "docstatus", "cashier", "pos_profile", "company"],
		as_dict=True,
	)
	if not details:
		frappe.throw(_("Shift {0} does not exist.").format(frappe.bold(shift)))

	if details.docstatus != 1 or details.status != "Open":
		frappe.throw(
			_("Shift {0} is not open. Open a new shift to keep selling.").format(frappe.bold(shift)),
			title=_("Shift Not Open"),
		)

	if details.cashier != frappe.session.user and not is_shift_manager():
		frappe.throw(
			_("Shift {0} belongs to {1}.").format(frappe.bold(shift), frappe.bold(details.cashier)),
			frappe.PermissionError,
		)

	if details.pos_profile != doc.pos_profile:
		frappe.throw(
			_("Shift {0} is open on POS Profile {1}, not {2}.").format(
				frappe.bold(shift), frappe.bold(details.pos_profile), frappe.bold(doc.pos_profile)
			)
		)

	if details.company != doc.company:
		frappe.throw(
			_("Shift {0} belongs to company {1}, not {2}.").format(
				frappe.bold(shift), frappe.bold(details.company), frappe.bold(doc.company)
			)
		)


def _open_shift_for(user):
	return frappe.db.get_value(
		"Ant Opening Shift",
		{"cashier": user, "status": "Open", "docstatus": 1},
		"name",
		order_by="creation desc",
	)


def _is_usable(shift, doc):
	details = frappe.db.get_value(
		"Ant Opening Shift", shift, ["status", "docstatus", "cashier", "pos_profile"], as_dict=True
	)
	if not details or details.docstatus != 1 or details.status != "Open":
		return False
	if details.pos_profile != doc.pos_profile:
		return False
	return details.cashier == frappe.session.user or is_shift_manager()


def before_cancel(doc, method=None):
	"""A sale in a closed shift cannot be cancelled.

	The shift's closing recorded this invoice, the expected cash and what the
	cashier counted; cancelling afterwards would leave a submitted closing that
	no longer matches its invoices. ERPNext refuses the same way for an invoice
	already pulled into a POS Closing Entry
	(`POSInvoice.before_cancel`): cancel the closing first.

	Day to day the answer is a return in the current shift, which takes the
	refund out of today's drawer instead of rewriting a counted one.
	"""
	_refuse_if_shift_closed(doc.get("custom_ant_opening"), _("invoice"))


def before_cancel_payment_entry(doc, method=None):
	"""Payments are tied to a shift by reference_no, and count in its cash."""
	_refuse_if_shift_closed(doc.get("reference_no"), _("payment"))


def _refuse_if_shift_closed(shift, what):
	if not shift or not frappe.db.exists("Ant Opening Shift", shift):
		return

	details = frappe.db.get_value(
		"Ant Opening Shift", shift, ["status", "ant_closing_shift_detail"], as_dict=True
	)
	if details.status != "Closed":
		return

	closing = details.ant_closing_shift_detail
	where = (
		_("Cancel closing shift {0} first.").format(get_link_to_form("Ant Closing Shift", closing))
		if closing
		else _("Reopen shift {0} first.").format(frappe.bold(shift))
	)
	frappe.throw(
		_(
			"This {0} belongs to shift {1}, which is closed. {2} To refund a customer, take a return instead."
		).format(what, frappe.bold(shift), where),
		title=_("Shift Closed"),
	)
