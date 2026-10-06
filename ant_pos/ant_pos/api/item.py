import json
from typing import Any

import frappe
from erpnext.setup.utils import get_exchange_rate
from erpnext.stock.get_item_details import get_item_details
from frappe import _
from frappe.utils import flt

from ant_pos.ant_pos.api.item_list import _get_permitted_profile

BarcodeScanResult = dict[str, str | None]

# Explicit projection for the scan payload. Never use ["*"] here: the Item table
# carries valuation_rate / last_purchase_rate / standard_rate, and this endpoint is
# reachable by every cashier.
ITEM_SCAN_FIELDS = [
	"name as item_code",
	"item_name",
	"description",
	"item_group",
	"image",
	"stock_uom",
	"has_batch_no",
	"has_serial_no",
	"is_stock_item",
	"disabled",
]


def _get_scan_item(item_code: str) -> dict | None:
	"""Fetch the whitelisted subset of Item fields used by the POS scan flow."""
	return frappe.db.get_value("Item", item_code, ITEM_SCAN_FIELDS, as_dict=True)


def _as_serial_no_string(value) -> str:
	"""Normalise a serial-no value to the newline-separated string ERPNext expects.

	Callers hand us None (item has no serials), a single serial as a string, or a
	list of serials.
	"""
	if not value:
		return ""
	if isinstance(value, str):
		return value
	return "\n".join(str(v) for v in value)


def _available_batches(item_code: str, warehouse: str) -> list[dict]:
	"""Batches of an item with stock in a warehouse, soonest expiry first.

	Returns [{batch_no, expiry_date, stock_qty}]. Quantities come from erpnext's
	get_batch_qty, which reads Serial and Batch Bundles. On v15 the stock ledger's
	own batch_no column is always empty -- batch movement is recorded in bundles --
	so the raw `tabStock Ledger Entry.batch_no` joins this module used before found
	nothing, and no batched item could ever be sold.
	"""
	from erpnext.stock.doctype.batch.batch import get_batch_qty
	from frappe.utils import getdate, nowdate

	today = getdate(nowdate())
	batches = []
	for row in get_batch_qty(item_code=item_code, warehouse=warehouse) or []:
		qty = flt(row.get("qty"))
		expiry = row.get("expiry_date")
		if qty <= 0 or (expiry and getdate(expiry) < today):
			continue
		batches.append(frappe._dict(batch_no=row.get("batch_no"), expiry_date=expiry, stock_qty=qty))

	batches.sort(key=lambda b: (b.expiry_date is None, b.expiry_date or today))
	return batches


def _update_item_info(scan_result: dict[str, str | None]) -> dict[str, str | None]:
	if item_code := scan_result.get("item_code"):
		if item_info := frappe.get_cached_value(
			"Item",
			item_code,
			["has_batch_no", "has_serial_no"],
			as_dict=True,
		):
			scan_result.update(item_info)
	return scan_result


@frappe.whitelist()
def scan_barcode(search_value: str, search_itemname: bool) -> dict[str, Any]:
	"""Scans barcode, serial no, batch no, or item code and returns item details with HTTP status codes."""
	# Checked before the cache, which is shared between users.
	frappe.has_permission("Item", "read", throw=True)

	def set_cache(data: dict[str, Any]):
		"""Stores barcode scan data in cache for 2 minutes."""
		frappe.cache().set_value(f"ant_pos:barcode_scan:{search_value}", data, expires_in_sec=120)

	def get_cache() -> dict[str, Any] | None:
		"""Retrieves cached barcode scan data."""
		return frappe.cache().get_value(f"ant_pos:barcode_scan:{search_value}")

	if scan_data := get_cache():
		frappe.local.response["http_status_code"] = 200  # OK
		scan_data["message"] = _("Data fetched from cache.")
		return scan_data

	# Search by barcode
	barcode_data = frappe.db.get_value(
		"Item Barcode",
		{"barcode": search_value},
		["barcode", "parent as item_code", "uom"],
		as_dict=True,
	)
	if barcode_data:
		barcode_data["item"] = _get_scan_item(barcode_data["item_code"])
		_update_item_info(barcode_data)
		barcode_data["message"] = _("Item found using Barcode.")
		frappe.local.response["http_status_code"] = 200  # OK
		set_cache(barcode_data)
		return barcode_data

	# Search by serial number
	serial_no_data = frappe.db.get_value(
		"Serial No",
		{"name": search_value, "status": "Active"},
		["name as serial_no", "item_code", "batch_no"],
		as_dict=True,
	)
	if serial_no_data:
		serial_no_data["item"] = _get_scan_item(serial_no_data["item_code"])
		_update_item_info(serial_no_data)
		serial_no_data["message"] = _("Item found using Serial Number.")
		frappe.local.response["http_status_code"] = 200  # OK
		set_cache(serial_no_data)
		return serial_no_data

	# Search by batch number
	batch_no_data = frappe.db.get_value(
		"Batch",
		search_value,
		["name as batch_no", "item as item_code"],
		as_dict=True,
	)
	if batch_no_data:
		batch_no_data["item"] = _get_scan_item(batch_no_data["item_code"])
		_update_item_info(batch_no_data)
		batch_no_data["message"] = _("Item found using Batch Number.")
		frappe.local.response["http_status_code"] = 200  # OK
		set_cache(batch_no_data)
		return batch_no_data

	# Search by item code
	item_data = frappe.db.get_value(
		"Item",
		search_value,
		["name as item_code"],
		as_dict=True,
	)

	# Search by item name only if it's search_itemname
	if search_itemname and not item_data:
		item_data = frappe.db.get_value(
			"Item", {"item_name": search_value}, ["name as item_code"], as_dict=True
		)

	if item_data:
		item_data["item"] = _get_scan_item(item_data["item_code"])
		_update_item_info(item_data)
		item_data["message"] = _("Item found using Item Code.")
		frappe.local.response["http_status_code"] = 200  # OK
		set_cache(item_data)
		return item_data

	# If nothing is found
	frappe.throw(
		_("No matching item found. Please check the barcode, serial number, batch number, or item code."),
		frappe.DoesNotExistError,
	)


@frappe.whitelist()
def items(pos_profile, search_value, customer):
	if not customer:
		frappe.throw(_("Please select the customer"))

	if not search_value:
		frappe.throw(_("Search value is required"))

	try:
		search_values = frappe._dict(json.loads(search_value))
	except json.JSONDecodeError:
		frappe.throw(_("Invalid search value format"))

	frappe.has_permission("Item", "read", throw=True)
	frappe.has_permission("Customer", "read", doc=customer, throw=True)
	pos_profile_doc = _get_permitted_profile(pos_profile)

	item = search_values.get("item", {})
	item_code = item.get("item_code")
	has_serial_no = item.get("has_serial_no")
	has_batch_no = item.get("has_batch_no")
	selected_batch_no = search_values.get("batch_no")
	selected_serial_no = search_values.get("serial_no")

	serial_nos = []
	batch_nos = []

	# If either serial or batch info is needed, fetch serials with batch info
	if has_serial_no:
		serial_nos = frappe.get_all(
			"Serial No",
			filters={"item_code": item_code, "warehouse": pos_profile_doc.warehouse},
			fields=["name as serial_no", "batch_no"],
			order_by="creation",
		)

	if has_batch_no:
		batch_nos = _available_batches(item_code, pos_profile_doc.warehouse)

	# Condition 2: No batch with stock exists
	if has_batch_no and not selected_batch_no:
		if not batch_nos:
			frappe.throw(
				_("No batch with available stock found for item {0} in warehouse {1}").format(
					item_code, pos_profile_doc.warehouse
				)
			)
		# Soonest-expiring first, so stock rotates.
		selected_batch_no = batch_nos[0].batch_no

	# Condition 1: Check if batch exists but no matching serial no in that batch
	if has_serial_no and has_batch_no and selected_batch_no:
		serials_for_batch = [s["serial_no"] for s in serial_nos if s["batch_no"] == selected_batch_no]
		if serials_for_batch:
			if not selected_serial_no:
				selected_serial_no = serials_for_batch[0]
		else:
			frappe.throw(
				_("No serial numbers found in warehouse {0} for batch {1}").format(
					pos_profile_doc.warehouse, selected_batch_no
				)
			)
	company = frappe.db.get_value(
		"Company", pos_profile_doc.company, ["default_currency", "name"], as_dict=True
	)
	price_list = pos_profile_doc.selling_price_list or frappe.db.get_single_value(
		"Selling Settings", "selling_price_list"
	)
	price_list_currency = (
		frappe.db.get_value("Price List", price_list, "currency") if price_list else None
	) or company.default_currency
	plc_conversion_rate = (
		1
		if price_list_currency == company.default_currency
		else get_exchange_rate(price_list_currency, company.default_currency)
	)
	item_args = {
		"item_code": item_code,
		"barcode": search_values.get("barcode"),
		"customer": customer,
		"currency": company.default_currency,
		"price_list": price_list,
		"price_list_currency": price_list_currency,
		"plc_conversion_rate": plc_conversion_rate,
		"conversion_rate": 1,
		"qty": 1,
		"company": company.name,
		"ignore_pricing_rule": pos_profile_doc.ignore_pricing_rule,
		"doctype": "Sales Invoice",
		"stock_uom": item.get("stock_uom"),
		"pos_profile": pos_profile_doc.name,
		"cost_center": pos_profile_doc.cost_center,
		"tax_category": pos_profile_doc.tax_category,
		"batch_no": selected_batch_no,
		"serial_no": _as_serial_no_string(selected_serial_no),
		"warehouse": pos_profile_doc.warehouse,
		"is_pos": 1,
	}

	item_details = get_item_details(item_args, doc=None, overwrite_warehouse=False)

	# Assign fetched serial/batch lists
	item_details["batch_nos"] = batch_nos

	# Selected serial/batch
	item_details["selected_serial_no"] = [selected_serial_no] if has_serial_no and selected_serial_no else []
	item_details["selected_batch_no"] = selected_batch_no if has_batch_no and selected_batch_no else None

	# Check if selected serial is valid
	if has_serial_no and selected_serial_no:
		available_serials = {s["serial_no"] for s in serial_nos}
		if selected_serial_no not in available_serials:
			frappe.throw(
				_("Serial No {0} not available in warehouse {1}").format(
					selected_serial_no, pos_profile_doc.warehouse
				)
			)

	# Check if selected batch has stock
	if has_batch_no and selected_batch_no:
		if not any(b.batch_no == selected_batch_no for b in batch_nos):
			frappe.throw(
				_("Batch No {0} for item {1} is not available in warehouse {2}").format(
					selected_batch_no, item_code, pos_profile_doc.warehouse
				)
			)
	item_details["serial_no"] = selected_serial_no if has_serial_no else None
	item_details["serial_no_options"] = [s["serial_no"] for s in serial_nos] if has_serial_no else []
	item_details["rate"] = item_details["price_list_rate"]
	return item_details


@frappe.whitelist()
def get_batches_list(item_code, warehouse):
	"""Batches of an item that still have stock in a warehouse.

	Returns {batch_no, expiry_date, stock_qty} -- the same shape items() returns
	in `batch_nos`, so the client has one contract for batches rather than two.
	erpnext's get_batches() returns {batch_id, qty} and no expiry date at all,
	which is why the client read the wrong keys.
	"""
	frappe.has_permission("Batch", "read", throw=True)

	return _available_batches(item_code, warehouse)
