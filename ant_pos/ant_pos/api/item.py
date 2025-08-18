import frappe
from frappe import _
import json
from typing import Dict, Any
from erpnext.stock.get_item_details import get_item_details  
from frappe.utils import flt
from datetime import datetime
from erpnext.stock.doctype.batch.batch import get_batches

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

    if not search_value:
        frappe.throw(_("Search value is required"))

    try:
        search_values = frappe._dict(json.loads(search_value))
    except json.JSONDecodeError:
        frappe.throw(_("Invalid search value format"))

    pos_profile_doc = frappe.get_doc('POS Profile', pos_profile)


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
            fields=["name as serial_no", "batch_no"]
        )

    # If batch info is needed
    if has_batch_no:
        batch_nos = frappe.db.sql("""
            SELECT 
                b.name AS batch_no,
                b.expiry_date,
                IFNULL(SUM(sle.actual_qty), 0) AS stock_qty
            FROM `tabBatch` b
            LEFT JOIN `tabStock Ledger Entry` sle 
                ON sle.batch_no = b.name 
                AND sle.item_code = %s 
                AND sle.warehouse = %s
            WHERE b.item = %s
            GROUP BY b.name, b.expiry_date
            HAVING stock_qty > 0
        """, (item_code, pos_profile_doc.warehouse, item_code), as_dict=True)

    # Condition 1: Check if batch exists but no matching serial no in that batch
    if has_serial_no and has_batch_no and selected_batch_no:
        serials_for_batch = any(s["batch_no"] == selected_batch_no for s in serial_nos)
        if not serials_for_batch:
            frappe.throw(_("No serial numbers found in warehouse {0} for batch {1}").format(
                pos_profile_doc.warehouse, selected_batch_no
            ))

    # Condition 2: No batch with stock exists
    if has_batch_no and not selected_batch_no:
        batches_with_qty = frappe.db.sql("""
            SELECT sle.batch_no
            FROM `tabStock Ledger Entry` sle
            WHERE sle.item_code = %s
              AND sle.warehouse = %s
              AND sle.batch_no IS NOT NULL
            GROUP BY sle.batch_no
            HAVING SUM(sle.actual_qty) > 0
        """, (item_code, pos_profile_doc.warehouse), as_dict=True)

        if not batches_with_qty:
            frappe.throw(_("No batch with available stock found for item {0} in warehouse {1}").format(
                item_code, pos_profile_doc.warehouse
            ))

    company = frappe.db.get_value('Company', pos_profile_doc.company, ['default_currency', 'name'], as_dict=True)

    item_args = {
        "item_code": item_code,
        "barcode": search_values.get("barcode"),
        "customer": customer,
        "currency": company.default_currency,
        "price_list": "Standard Selling",
        "price_list_currency": company.default_currency,
        "company": company.name,
        "ignore_pricing_rule": pos_profile_doc.ignore_pricing_rule,
        "doctype": "Sales Invoice",
        "stock_uom": item.get("stock_uom"),
        "pos_profile": pos_profile_doc.name,
        "cost_center": pos_profile_doc.cost_center,
        "tax_category": pos_profile_doc.tax_category,
        "batch_no": selected_batch_no,
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
            frappe.throw(_("Serial No {0} not available in warehouse {1}").format(
                selected_serial_no, pos_profile_doc.warehouse
            ))


    # Check if selected batch has stock
    if has_batch_no and selected_batch_no:
        qty = frappe.db.sql("""
            SELECT SUM(actual_qty) FROM `tabStock Ledger Entry`
            WHERE item_code = %s AND batch_no = %s AND warehouse = %s
        """, (item_code, selected_batch_no, pos_profile_doc.warehouse))[0][0]

        if not qty or qty <= 0:
            frappe.throw(_("Batch No {0} for item {1} is not available in warehouse {2}").format(
                selected_batch_no, item_code, pos_profile_doc.warehouse
            ))
    item_details["serial_no"] = selected_serial_no if has_serial_no else None
    item_details["serial_no_options"] = [s["serial_no"] for s in serial_nos] if has_serial_no else []
    return item_details

@frappe.whitelist()
def get_batches_list(item_code, warehouse):
    """
    Fetches batch numbers for a given item code and warehouse.
    Returns a list of batch numbers with their expiry dates and stock quantities.
    """
    return get_batches(item_code, warehouse)