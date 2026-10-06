"""Stop a duplicated invoice from inheriting the shift it was copied from.

`custom_ant_opening` ties a sale to the shift that sold it. The field shipped
without `no_copy`, so "Duplicate" in the desk, and amended documents, carried
the old shift onto a new sale.
"""

import frappe


def execute():
	name = "Sales Invoice-custom_ant_opening"
	if frappe.db.exists("Custom Field", name):
		frappe.db.set_value("Custom Field", name, "no_copy", 1)
		frappe.clear_cache(doctype="Sales Invoice")
