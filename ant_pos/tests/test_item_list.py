# Copyright (c) 2026, Anther Technologies Pvt. Ltd. and Contributors
# See license.txt

import frappe
from frappe.tests.utils import FrappeTestCase

from ant_pos.ant_pos.api import item_list


class TestItemListSettings(FrappeTestCase):
	def test_defaults_when_fields_missing(self):
		"""A site that has not synced the custom fields must still work."""
		s = item_list.get_list_settings(frappe._dict())
		self.assertEqual(
			(s.show, s.limit, s.cache, s.cache_minutes, s.most_moving_count, s.most_moving_days),
			(1, 50, 1, 10, 8, 30),
		)

	def test_values_are_clamped(self):
		s = item_list.get_list_settings(
			frappe._dict(
				custom_item_list_limit=100000,
				custom_item_list_cache_minutes=0,
				custom_most_moving_count=-3,
				custom_most_moving_days=9999,
			)
		)
		self.assertEqual(
			(s.limit, s.cache_minutes, s.most_moving_count, s.most_moving_days), (500, 1, 0, 365)
		)

	def test_zero_is_respected_where_allowed(self):
		s = item_list.get_list_settings(frappe._dict(custom_show_item_list=0, custom_cache_item_list=0))
		self.assertEqual((s.show, s.cache), (0, 0))

	def test_standard_profile_options_are_read(self):
		s = item_list.get_list_settings(frappe._dict(hide_unavailable_items=1, hide_images=1))
		self.assertEqual((s.hide_unavailable, s.hide_images), (1, 1))


class TestItemListCache(FrappeTestCase):
	def test_cache_key_is_per_profile(self):
		self.assertNotEqual(item_list.cache_key("A"), item_list.cache_key("B"))
		self.assertTrue(item_list.cache_key("A").startswith(item_list.CACHE_PREFIX))

	def test_clear_removes_every_profile(self):
		cache = frappe.cache()
		for name in ("A", "B"):
			cache.set_value(item_list.cache_key(name), {"x": 1}, expires_in_sec=60)
		item_list.clear_item_list_cache()
		for name in ("A", "B"):
			self.assertIsNone(cache.get_value(item_list.cache_key(name), expires=True))

	def test_clear_does_not_scan_keys(self):
		"""delete_keys scans Redis, once per Item saved during an import."""
		from unittest.mock import patch

		before = item_list.cache_key("A")
		with patch.object(type(frappe.cache()), "delete_keys") as delete_keys:
			item_list.clear_item_list_cache()
		delete_keys.assert_not_called()
		self.assertNotEqual(item_list.cache_key("A"), before)

	def test_hooks_clear_the_cache_on_changes(self):
		events = frappe.get_hooks("doc_events")
		target = "ant_pos.ant_pos.api.item_list.clear_item_list_cache"
		for doctype, event in (
			("Item", "on_update"),
			("Item Price", "on_update"),
			("POS Profile", "on_update"),
		):
			self.assertIn(target, events.get(doctype, {}).get(event, []), f"{doctype}.{event}")


class TestItemListEndpoint(FrappeTestCase):
	"""Needs a POS Profile with a warehouse; skipped on a bare site."""

	@classmethod
	def setUpClass(cls):
		super().setUpClass()
		cls.profile_name = frappe.db.get_value("POS Profile", {"disabled": 0, "warehouse": ["is", "set"]})

	def setUp(self):
		if not self.profile_name:
			self.skipTest("no POS Profile with a warehouse")
		frappe.set_user("Administrator")
		item_list.clear_item_list_cache()

	def tearDown(self):
		item_list.clear_item_list_cache()

	def test_second_call_is_served_from_cache(self):
		first = item_list.get_item_list(self.profile_name)
		second = item_list.get_item_list(self.profile_name)
		profile = frappe.get_doc("POS Profile", self.profile_name)
		if not item_list.get_list_settings(profile).cache:
			self.skipTest("caching is off on this profile")
		self.assertFalse(first["cached"])
		self.assertTrue(second["cached"])
		self.assertGreaterEqual(second["age_seconds"], 0)

	def test_refresh_bypasses_cache(self):
		item_list.get_item_list(self.profile_name)
		self.assertFalse(item_list.get_item_list(self.profile_name, refresh=1)["cached"])

	def test_search_is_never_cached(self):
		item_list.get_item_list(self.profile_name)
		self.assertFalse(item_list.get_item_list(self.profile_name, search_text="a")["cached"])

	def test_limit_is_applied(self):
		profile = frappe.get_doc("POS Profile", self.profile_name)
		settings = item_list.get_list_settings(profile)
		settings.limit = 1
		self.assertLessEqual(len(item_list._query_items(profile, settings)), 1)

	def test_rows_carry_what_the_cart_needs(self):
		rows = item_list.get_item_list(self.profile_name)["items"]
		if not rows:
			self.skipTest("profile lists no items")
		for key in (
			"item_code",
			"item_name",
			"stock_uom",
			"has_batch_no",
			"has_serial_no",
			"rate",
			"actual_qty",
		):
			self.assertIn(key, rows[0])

	def test_most_moving_counts_sales_only(self):
		profile = frappe.get_doc("POS Profile", self.profile_name)
		settings = item_list.get_list_settings(profile)
		settings.most_moving_count = 50
		rows = item_list._query_items(profile, settings, limit=2)
		if len(rows) < 2:
			self.skipTest("needs two listed items")
		sold, issued = rows[0].item_code, rows[1].item_code

		# Compare against what the site has already sold, so real sales of
		# these items do not affect the result.
		def moved():
			return {r.item_code: r.moved_qty for r in item_list._most_moving(profile, settings)}

		before = moved()

		def movement(item_code, qty, voucher_type):
			frappe.db.sql(
				"""INSERT INTO `tabStock Ledger Entry`
				(name, item_code, warehouse, actual_qty, voucher_type, voucher_no,
				 posting_date, is_cancelled, docstatus, company)
				VALUES (%s, %s, %s, %s, %s, 'TEST-ITEM-LIST', CURDATE(), 0, 1, %s)""",
				(
					frappe.generate_hash(length=10),
					item_code,
					profile.warehouse,
					-qty,
					voucher_type,
					profile.company,
				),
			)

		movement(sold, 5, "Sales Invoice")
		movement(issued, 500, "Stock Entry")  # internal issue: not a sale

		after = moved()
		self.assertEqual(after.get(sold, 0), before.get(sold, 0) + 5)
		self.assertEqual(after.get(issued, 0), before.get(issued, 0))

		settings.most_moving_count = 0
		self.assertEqual(item_list._most_moving(profile, settings), [])

	def test_unlisted_user_is_refused(self):
		frappe.set_user("Guest")
		try:
			with self.assertRaises(frappe.PermissionError):
				item_list.get_item_list(self.profile_name)
		finally:
			frappe.set_user("Administrator")


class TestListPrices(FrappeTestCase):
	"""The grid shows list prices; a price agreed with one customer is not one."""

	def test_party_and_batch_prices_are_excluded(self):
		import inspect

		source = inspect.getsource(item_list._attach_prices_and_stock)
		for field in ("customer", "supplier", "batch_no"):
			self.assertIn(f'"{field}": ["in", ["", None]]', source)

	def test_the_price_list_falls_back_to_selling_settings(self):
		from unittest.mock import patch

		profile = frappe._dict(selling_price_list=None)
		with patch("frappe.db.get_single_value", return_value="Standard Selling"):
			self.assertEqual(item_list._price_list(profile), "Standard Selling")
		self.assertEqual(item_list._price_list(frappe._dict(selling_price_list="Shop")), "Shop")
