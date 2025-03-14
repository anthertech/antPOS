import frappe
from frappe import _
import json
from typing import Dict, Any
from erpnext.stock.get_item_details import get_item_details  

BarcodeScanResult = dict[str, str | None]


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
def scan_barcode(search_value: str) -> Dict[str, Any]:
    """Scans barcode, serial no, batch no, or item code and returns item details with HTTP status codes."""

    def set_cache(data: Dict[str, Any]):
        """Stores barcode scan data in cache for 2 minutes."""
        frappe.cache().set_value(f"ant_pos:barcode_scan:{search_value}", data, expires_in_sec=120)

    def get_cache() -> Dict[str, Any] | None:
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
        barcode_data["item"] = frappe.db.get_value("Item", barcode_data["item_code"], ["*"], as_dict=True)
        _update_item_info(barcode_data)
        barcode_data["message"] = _("Item found using Barcode.")
        frappe.local.response["http_status_code"] = 200  # OK
        set_cache(barcode_data)
        return barcode_data

    # Search by serial number
    serial_no_data = frappe.db.get_value(
        "Serial No",
        {'name' :search_value ,'status': 'Active'},
        ["name as serial_no", "item_code", "batch_no"],
        as_dict=True,
    )
    if serial_no_data:
        serial_no_data["item"] = frappe.db.get_value("Item", serial_no_data["item_code"], ["*"], as_dict=True)
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
        batch_no_data["item"] = frappe.db.get_value("Item", batch_no_data["item_code"], ["*"], as_dict=True)
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
    if item_data:
        item_data["item"] = frappe.db.get_value("Item", item_data["item_code"], ["*"], as_dict=True)
        _update_item_info(item_data)
        item_data["message"] = _("Item found using Item Code.")
        frappe.local.response["http_status_code"] = 200  # OK
        set_cache(item_data)
        return item_data

    # If nothing is found
    frappe.local.response["http_status_code"] = 404  # Not Found
    return "No matching item found. Please check the barcode, serial number, batch number, or item code.",


@frappe.whitelist()
def items(pos_profile, search_value, customer):
    if not customer:
        frappe.throw(_("Please select the customer"))

    # Check if search_value is empty or not a valid JSON string
    if not search_value:
        frappe.throw(_("Search value is required"))

    try:
        search_values = frappe._dict(json.loads(search_value))
    except json.JSONDecodeError:
        frappe.throw(_("Invalid search value format"))

    pos_profile_data = frappe._dict(json.loads(pos_profile))
    company = frappe.db.get_value('Company', pos_profile_data.company, ['default_currency', 'name'], as_dict=True)
    customer_doc = frappe.db.get_value('Customer', customer, ['is_internal_customer'], as_dict=True)
    item = search_values.item

    serial_nos = []
    batch_nos = []

    if item['has_serial_no']:
        serial_filters = {"item_code": item["item_code"], "warehouse": pos_profile_data.warehouse}
        serial_nos = frappe.get_all("Serial No", filters=serial_filters, fields=["name as serial_no", "batch_no"])

    if item['has_batch_no']:
        batch_nos = frappe.get_all("Batch", filters={"item": item["item_code"]}, fields=["name as batch_no", "expiry_date"])
    items = {
        "item_code": item["item_code"],
        "barcode": search_values.barcode,
        "customer": customer,
        "currency": company.default_currency,
        "price_list": "Standard Selling",
        "price_list_currency": company.default_currency,
        "company": company.name,
        "ignore_pricing_rule": 0,
        "doctype": "Sales Invoice",
        "stock_uom": item['stock_uom'],
        "pos_profile": pos_profile_data.name,
        "cost_center": pos_profile_data.cost_center,
        "tax_category": pos_profile_data.tax_category,
        "batch_no": search_values.batch_no,
        "warehouse": pos_profile_data.warehouse,
        "is_pos": 1
    }

    # Fetch item details
    values = get_item_details(items, doc=None, overwrite_warehouse=False)
    values["serial_no"] = serial_nos
    values["batch_nos"] = batch_nos
    values["selected_serial_no"] = [search_values.serial_no] if item['has_serial_no'] and search_values.serial_no else []
    values["selected_batch_no"] = batch_nos if item['has_batch_no'] and batch_nos else None
    


    return values

