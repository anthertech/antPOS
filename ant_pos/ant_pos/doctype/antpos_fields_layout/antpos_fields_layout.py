# Copyright (c) 2025, Anther Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

import json

import frappe
from frappe import _
from frappe.model.document import Document


class AntposFieldsLayout(Document):
	def autoname(self):
		# "<DocType>-<Type>"; a clash with an older record gets a number, so
		# it can never block saving the layout the POS looks for.
		from frappe.model.naming import append_number_if_name_exists

		self.name = append_number_if_name_exists(self.doctype, f"{self.dt}-{self.type}")

	def validate(self):
		# The POS looks a layout up by (DocType, Type): one record each.
		duplicate = frappe.db.get_value(
			self.doctype, {"dt": self.dt, "type": self.type, "name": ["!=", self.name]}
		)
		if duplicate:
			frappe.throw(
				_("{0} / {1} already has a layout: {2}").format(self.dt, self.type, duplicate),
				frappe.DuplicateEntryError,
			)

		if not (self.layout or "").strip():
			return
		from ant_pos.ant_pos.api.form_layout import validate_layout

		try:
			sections = validate_layout(self.dt, self.layout)
		except json.JSONDecodeError as e:
			frappe.throw(_("Layout is not valid JSON: {0}").format(e), title=_("Invalid layout"))
		# Store it in one normalised shape, so the desk editor can read it back.
		self.layout = json.dumps(sections, indent=2)
