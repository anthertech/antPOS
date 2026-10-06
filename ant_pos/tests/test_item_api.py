# Copyright (c) 2026, Anther Technologies Pvt. Ltd. and Contributors
# See license.txt

import frappe
from frappe.tests.utils import FrappeTestCase

from ant_pos.ant_pos.api.item import ITEM_SCAN_FIELDS, _as_serial_no_string


class TestSerialNoNormalisation(FrappeTestCase):
	"""items() built item_args with "\\n".join(selected_serial_no).

	That value is a string or None, never a list, so a plain item scan raised
	TypeError (HTTP 500) and a serial scan exploded "SN001" into "S\\nN\\n0\\n0\\n1".
	"""

	def test_none_becomes_empty_string(self):
		self.assertEqual(_as_serial_no_string(None), "")

	def test_empty_string_stays_empty(self):
		self.assertEqual(_as_serial_no_string(""), "")

	def test_single_serial_is_not_split_into_characters(self):
		self.assertEqual(_as_serial_no_string("SN001"), "SN001")

	def test_list_is_newline_joined(self):
		self.assertEqual(_as_serial_no_string(["SN001", "SN002"]), "SN001\nSN002")

	def test_single_element_list(self):
		self.assertEqual(_as_serial_no_string(["SN001"]), "SN001")


class TestItemScanProjection(FrappeTestCase):
	"""scan_barcode used frappe.db.get_value("Item", ..., ["*"]), which handed
	every cashier the item's valuation and purchase rates."""

	FORBIDDEN = frozenset(
		{
			"valuation_rate",
			"last_purchase_rate",
			"standard_rate",
			"is_purchase_item",
		}
	)

	def test_projection_excludes_cost_fields(self):
		requested = {f.split(" as ")[0].strip() for f in ITEM_SCAN_FIELDS}

		leaked = requested & self.FORBIDDEN
		self.assertEqual(leaked, set(), f"scan payload leaks cost fields: {leaked}")

	def test_projection_is_not_a_wildcard(self):
		self.assertNotIn("*", ITEM_SCAN_FIELDS)

	def test_projection_covers_what_items_needs(self):
		"""items() reads these four keys off the scan payload's `item` dict."""
		requested = {f.split(" as ")[-1].strip() for f in ITEM_SCAN_FIELDS}

		for field in ("item_code", "stock_uom", "has_batch_no", "has_serial_no"):
			self.assertIn(field, requested)

	def test_projection_fields_exist_on_item(self):
		meta_fields = {f.fieldname for f in frappe.get_meta("Item").fields} | {"name"}

		for field in ITEM_SCAN_FIELDS:
			source = field.split(" as ")[0].strip()
			self.assertIn(source, meta_fields, f"Item has no field {source}")


class TestItemApiPermissions(FrappeTestCase):
	def tearDown(self):
		frappe.set_user("Administrator")

	def test_scan_needs_item_read(self):
		from ant_pos.ant_pos.api.item import scan_barcode

		frappe.set_user("Guest")
		with self.assertRaises(frappe.PermissionError):
			scan_barcode("anything", False)

	def test_items_checks_the_pos_profile(self):
		from unittest.mock import patch

		from ant_pos.ant_pos.api.item import items

		with (
			patch("frappe.has_permission", return_value=True),
			patch("frappe.get_list", return_value=[]),
		):
			with self.assertRaises(frappe.PermissionError):
				items("Someone Else's Till", '{"item": {}}', "Any Customer")
