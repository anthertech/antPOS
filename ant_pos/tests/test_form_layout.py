# Copyright (c) 2026, Anther Technologies Pvt. Ltd. and Contributors
# See license.txt

import json

import frappe
from frappe.tests.utils import FrappeTestCase

from ant_pos.ant_pos.api.form_layout import (
	create_from_quick_entry,
	get_form_layout,
	normalize_layout,
	validate_layout,
)


def fields_of(layout):
	return {
		f["fieldname"]: f
		for t in layout["tabs"]
		for s in t["sections"]
		for c in s["columns"]
		for f in c["fields"]
	}


class TestFormLayout(FrappeTestCase):
	"""Server-driven POS forms (Antpos Fields Layout)."""

	def setUp(self):
		frappe.set_user("Administrator")
		frappe.db.delete("Antpos Fields Layout", {"dt": ["in", ["Customer", "Sales Invoice Item"]]})

	def save_layout(self, dt, type, layout):
		doc = frappe.new_doc("Antpos Fields Layout")
		doc.update({"dt": dt, "type": type, "layout": json.dumps(layout)})
		return doc.insert()

	def test_default_customer_layout_matches_the_old_form(self):
		fields = fields_of(get_form_layout("Customer", "Quick Entry"))
		for name in ("customer_name", "mobile_no", "email_id", "customer_group", "territory", "gender"):
			self.assertIn(name, fields)
		self.assertEqual(fields["customer_type"]["default"], "Individual")
		# Contact fields are read-only on Customer but are inputs in quick entry.
		self.assertEqual(fields["mobile_no"]["read_only"], 0)
		self.assertEqual(fields["mobile_no"]["fieldtype"], "Data")

	def test_saved_layout_overrides_and_required_fields(self):
		self.save_layout(
			"Customer",
			"Quick Entry",
			[{"label": "Main", "columns": [[{"fieldname": "tax_id", "label": "GSTIN", "reqd": 1}]]}],
		)
		layout = get_form_layout("Customer", "Quick Entry")
		fields = fields_of(layout)
		self.assertEqual(fields["tax_id"]["label"], "GSTIN")
		self.assertEqual(fields["tax_id"]["reqd"], 1)
		# The DocType's own mandatory field is added so the form can be submitted.
		self.assertIn("customer_name", fields)
		self.assertEqual(layout["tabs"][0]["sections"][0]["label"], "Main")

	def test_required_field_without_default_cannot_be_hidden(self):
		self.save_layout(
			"Customer", "Quick Entry", [{"columns": [[{"fieldname": "customer_name", "hidden": 1}]]}]
		)
		self.assertEqual(fields_of(get_form_layout("Customer", "Quick Entry"))["customer_name"]["hidden"], 0)

	def test_read_only_override_never_unlocks(self):
		self.save_layout(
			"Sales Invoice Item", "Grid Row", [{"columns": [[{"fieldname": "amount", "read_only": 0}]]}]
		)
		fields = fields_of(get_form_layout("Sales Invoice Item", "Grid Row", "Sales Invoice"))
		self.assertEqual(fields["amount"]["read_only"], 1)

	def test_grid_row_does_not_mark_server_filled_fields_required(self):
		fields = fields_of(get_form_layout("Sales Invoice Item", "Grid Row", "Sales Invoice"))
		self.assertEqual(fields["rate"]["reqd"], 0)

	def test_child_table_needs_its_parent(self):
		with self.assertRaises(frappe.PermissionError):
			get_form_layout("Sales Invoice Item", "Grid Row")
		with self.assertRaises(frappe.PermissionError):
			get_form_layout("Sales Invoice Item", "Grid Row", "Customer")

	def test_unknown_fields_are_rejected_on_save(self):
		with self.assertRaises(frappe.ValidationError):
			validate_layout("Customer", [{"columns": [["not_a_field"]]}])

	def test_normalize_reads_old_and_tabbed_shapes(self):
		old = normalize_layout([{"label": "A", "columns": [["customer_name"]]}])
		self.assertEqual(len(old), 1)
		self.assertEqual(old[0]["label"], "")
		section = old[0]["sections"][0]
		self.assertEqual(section["label"], "A")
		self.assertEqual(section["columns"][0]["fields"], ["customer_name"])
		self.assertTrue(section["opened"])
		self.assertFalse(section["collapsible"])

		tabbed = normalize_layout(
			[
				{
					"name": "t1",
					"label": "Details",
					"sections": [
						{
							"name": "s1",
							"label": "B",
							"collapsible": 1,
							"hideBorder": 1,
							"columns": [{"name": "c1", "fields": ["tax_id"]}],
						}
					],
				}
			]
		)
		self.assertEqual(tabbed[0]["name"], "t1")
		self.assertEqual(tabbed[0]["label"], "Details")
		self.assertTrue(tabbed[0]["sections"][0]["collapsible"])
		self.assertTrue(tabbed[0]["sections"][0]["hideBorder"])
		self.assertEqual(tabbed[0]["sections"][0]["columns"][0], {"name": "c1", "fields": ["tax_id"]})
		# Same input, same names: dirty checks in the editor stay stable.
		self.assertEqual(normalize_layout([{"columns": [["x"]]}]), normalize_layout([{"columns": [["x"]]}]))

	def test_tabs_and_section_options_reach_the_pos(self):
		self.save_layout(
			"Customer",
			"Quick Entry",
			[
				{"label": "Main", "sections": [{"label": "A", "columns": [["customer_name"]]}]},
				{
					"label": "More",
					"sections": [{"label": "B", "collapsible": 1, "columns": [["tax_id"], []]}],
				},
			],
		)
		tabs = get_form_layout("Customer", "Quick Entry")["tabs"]
		self.assertEqual([t["label"] for t in tabs], ["Main", "More"])
		more = tabs[1]["sections"][0]
		self.assertTrue(more["collapsible"])
		# Empty columns keep their place in the design.
		self.assertEqual(len(more["columns"]), 2)

	def test_quick_entry_only_takes_layout_fields(self):
		doc = create_from_quick_entry(
			"Customer",
			json.dumps({"customer_name": "_Test Layout Customer", "is_frozen": 1, "disabled": 1}),
		)
		self.assertEqual(doc["customer_type"], "Individual")
		self.assertFalse(doc.get("is_frozen"))
		self.assertFalse(doc.get("disabled"))

	def test_quick_entry_reports_missing_required_fields(self):
		# ERPNext's Customer.autoname used to crash on a missing name.
		with self.assertRaises(frappe.MandatoryError):
			create_from_quick_entry("Customer", json.dumps({"customer_name": "   "}))

	def test_quick_entry_is_limited_to_known_doctypes(self):
		with self.assertRaises(frappe.PermissionError):
			create_from_quick_entry("Item", "{}")


class TestFormLayoutEditorApi(FrappeTestCase):
	"""Endpoints behind the /antPOS/layouts editor."""

	def setUp(self):
		frappe.set_user("Administrator")
		frappe.db.delete("Antpos Fields Layout", {"dt": ["in", ["Customer", "Sales Invoice Item"]]})

	def tearDown(self):
		frappe.set_user("Administrator")

	def test_save_preview_and_reset(self):
		from ant_pos.ant_pos.api.form_layout import (
			get_layout_for_editing,
			preview_form_layout,
			reset_form_layout,
			save_form_layout,
		)

		layout = [{"label": "Main", "columns": [["tax_id"]]}]
		preview = preview_form_layout("Customer", "Quick Entry", json.dumps(layout))
		self.assertIn("tax_id", fields_of(preview))
		# Previewing stores nothing.
		self.assertFalse(frappe.db.exists("Antpos Fields Layout", {"dt": "Customer", "type": "Quick Entry"}))

		save_form_layout("Customer", "Quick Entry", json.dumps(layout))
		self.assertTrue(get_layout_for_editing("Customer", "Quick Entry")["customised"])
		self.assertIn("tax_id", fields_of(get_form_layout("Customer", "Quick Entry")))

		reset_form_layout("Customer", "Quick Entry")
		self.assertNotIn("tax_id", fields_of(get_form_layout("Customer", "Quick Entry")))

	def test_only_pos_forms_can_be_edited(self):
		from ant_pos.ant_pos.api.form_layout import save_form_layout

		with self.assertRaises(frappe.ValidationError):
			save_form_layout("Item", "Quick Entry", "[]")

	def test_editor_is_admin_only(self):
		from ant_pos.ant_pos.api.form_layout import get_layout_for_editing, save_form_layout

		frappe.set_user("Guest")
		with self.assertRaises(frappe.PermissionError):
			get_layout_for_editing("Customer", "Quick Entry")
		with self.assertRaises(frappe.PermissionError):
			save_form_layout("Customer", "Quick Entry", "[]")
