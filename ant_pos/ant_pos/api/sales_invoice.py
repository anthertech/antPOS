import frappe
from erpnext.stock.get_item_details import get_price_list_rate_for
from frappe import _
from frappe.utils import flt


@frappe.whitelist()
def calculate_invoice_item_taxes(doc):
	"""Price an in-progress cart without persisting it.

	Returns the invoice as ERPNext would compute it (taxes, totals, pricing
	rules) so the POS can show live figures.
	"""
	try:
		if isinstance(doc, str):
			doc = frappe.parse_json(doc)
	except Exception as e:
		frappe.throw(_("Invalid JSON input: {0}").format(e))

	if not isinstance(doc, dict):
		frappe.throw(_("Invalid document payload"))

	# The caller controls this payload, so pin the doctype rather than letting it
	# instantiate an arbitrary controller, and keep the normal permission check.
	doc["doctype"] = "Sales Invoice"
	frappe.has_permission("Sales Invoice", "create", throw=True)

	invoice = frappe.get_doc(doc)
	# Fills selling_price_list from the POS Profile and the exchange rates.
	invoice.set_missing_values()
	if not invoice.ignore_pricing_rule:
		refresh_price_list_rates(invoice)
	invoice.calculate_taxes_and_totals()
	return invoice.as_dict()


def refresh_price_list_rates(invoice):
	"""List price of each line, from the invoice's price list, in the invoice
	currency. Done before the totals so a changed UOM or quantity is priced
	the way ERPNext prices it."""
	price_list = invoice.selling_price_list
	if not price_list:
		return
	uom_dependant = not frappe.get_cached_value("Price List", price_list, "price_not_uom_dependent")
	to_invoice_currency = flt(invoice.plc_conversion_rate or 1) / flt(invoice.conversion_rate or 1)
	for item in invoice.items:
		rate = get_price_list_rate_for(
			{
				"price_list": price_list,
				"customer": invoice.customer,
				"uom": item.uom,
				"stock_uom": item.stock_uom,
				"conversion_factor": item.conversion_factor,
				"price_list_uom_dependant": uom_dependant,
				# Without a quantity, customer-specific prices are skipped.
				"qty": abs(flt(item.qty)) or 1,
				"transaction_date": invoice.posting_date,
				"batch_no": item.batch_no,
			},
			item.item_code,
		)
		item.price_list_rate = flt(rate) * to_invoice_currency
