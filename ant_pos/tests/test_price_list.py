# Copyright (c) 2026, Anther Technologies Pvt. Ltd. and Contributors
# See license.txt

import json

import frappe
from frappe.tests.utils import FrappeTestCase

from ant_pos.ant_pos.api.item import items
from ant_pos.ant_pos.api.sales_invoice import calculate_invoice_item_taxes

PRICE_LIST = "antPOS Test Price List"
RATE = 123.45


class TestProfilePriceList(FrappeTestCase):
	"""Prices came from "Standard Selling" whatever the POS Profile said."""

	def setUp(self):
		frappe.db.begin()
		self.addCleanup(frappe.db.rollback)

		profile = frappe.db.get_value("POS Profile", {"disabled": 0}, ["name", "company"], as_dict=True)
		item = frappe.db.get_value(
			"Item",
			{"disabled": 0, "is_sales_item": 1, "has_serial_no": 0, "has_batch_no": 0, "has_variants": 0},
			["name", "stock_uom"],
			as_dict=True,
		)
		customer = frappe.db.get_value("Customer", {"disabled": 0}, "name")
		if not (profile and item and customer):
			self.skipTest("needs a POS Profile, a plain sales item and a customer")
		self.profile, self.item, self.customer = profile, item, customer

		currency = frappe.get_cached_value("Company", profile.company, "default_currency")
		frappe.get_doc(
			{"doctype": "Price List", "price_list_name": PRICE_LIST, "selling": 1, "currency": currency}
		).insert(ignore_permissions=True)
		frappe.get_doc(
			{
				"doctype": "Item Price",
				"price_list": PRICE_LIST,
				"item_code": item.name,
				"uom": item.stock_uom,
				"price_list_rate": RATE,
			}
		).insert(ignore_permissions=True)
		frappe.db.set_value("POS Profile", profile.name, "selling_price_list", PRICE_LIST)

	def test_scanned_item_uses_profile_price_list(self):
		search = {"item": {"item_code": self.item.name, "stock_uom": self.item.stock_uom}}
		details = items(self.profile.name, json.dumps(search), self.customer)

		self.assertEqual(details["price_list_rate"], RATE)
		self.assertEqual(details["rate"], RATE)

	def test_cart_is_priced_from_profile_price_list(self):
		invoice = calculate_invoice_item_taxes(
			json.dumps(
				{
					"doctype": "Sales Invoice",
					"is_pos": 1,
					"pos_profile": self.profile.name,
					"company": self.profile.company,
					"customer": self.customer,
					"items": [
						{
							"item_code": self.item.name,
							"qty": 2,
							"uom": self.item.stock_uom,
							"conversion_factor": 1,
							"rate": RATE,
						}
					],
				}
			)
		)

		self.assertEqual(invoice["selling_price_list"], PRICE_LIST)
		self.assertEqual(invoice["items"][0]["price_list_rate"], RATE)
		self.assertAlmostEqual(invoice["net_total"], RATE * 2)
