"""Index the columns the shift-close and payments screens join on.

`Sales Invoice.custom_ant_opening` is a Custom Field and so has no index by
default, yet it is the sole predicate for both get_payments() and
AntClosingShift.get_pos_transactions(). `Payment Entry.reference_no` carries the
opening-shift name for the same reason. Without these, closing a shift scans
both tables in full.

The fixture now ships search_index=1 for custom_ant_opening; this patch covers
sites that already have the field, and adds the Payment Entry index that a
fixture cannot express (reference_no is a core ERPNext field).
"""

import frappe


def execute():
	for doctype, fieldname in (
		("Sales Invoice", "custom_ant_opening"),
		("Payment Entry", "reference_no"),
	):
		if not frappe.db.has_column(doctype, fieldname):
			continue

		try:
			frappe.db.add_index(doctype, [fieldname])
		except Exception:
			# Index already present, or the column type cannot take one.
			frappe.log_error(frappe.get_traceback(), f"ant_pos: could not index {doctype}.{fieldname}")
