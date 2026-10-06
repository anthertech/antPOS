"""Server-driven forms for the POS.

The POS does not hard-code which fields its forms show. It asks for a layout
here and renders whatever comes back. A layout is stored per (DocType, type)
in "Antpos Fields Layout"; without one, the defaults below (which match the
forms the POS always had) are used.

The format:

    [                                        # tabs
      {
        "name": "tab_1", "label": "",        # one unlabelled tab = no tab bar
        "sections": [
          {
            "name": "section_1", "label": "Contact",
            "hideLabel": false, "hideBorder": false,
            "collapsible": false, "opened": true,
            "columns": [
              {"name": "column_1", "fields": [
                "customer_name",
                {"fieldname": "customer_type", "default": "Individual"}
              ]}
            ]
          }
        ]
      }
    ]

A field entry is a fieldname or an object with "fieldname" and optional
overrides: label, default, description, placeholder, reqd, read_only, hidden.
Overrides can only make a field stricter where it matters (a field required
by the DocType stays required).

Older layouts (a plain list of sections, or columns as plain lists) are still
read and are stored in this shape the next time they are saved.
"""

import json

import frappe
from frappe import _
from frappe.utils import cint

LAYOUT_DOCTYPE = "Antpos Fields Layout"

QUICK_ENTRY = "Quick Entry"
GRID_ROW = "Grid Row"

SECTION_FLAGS = ("hideLabel", "hideBorder", "collapsible")

# Forms the POS renders from a layout, with the layout used when none is saved.
DEFAULT_LAYOUTS = {
	("Customer", QUICK_ENTRY): [
		{
			"columns": [
				[
					"customer_name",
					{"fieldname": "customer_type", "default": "Individual"},
					"mobile_no",
					"email_id",
				],
				["customer_group", "territory", "gender"],
			]
		}
	],
	("Sales Invoice Item", GRID_ROW): [
		{
			"columns": [
				[{"fieldname": "qty", "label": "Quantity"}],
				["rate"],
				[{"fieldname": "discount_percentage", "label": "Discount (%)"}],
				[{"fieldname": "discount_amount", "label": "Discount amount"}],
			]
		}
	],
}

# The POS forms an admin can design in place (the pencil button in each).
EDITABLE_FORMS = {
	("Customer", QUICK_ENTRY): None,
	("Sales Invoice Item", GRID_ROW): "Sales Invoice",
}

# Doctypes the POS may create through create_from_quick_entry.
QUICK_ENTRY_DOCTYPES = {"Customer"}

# ERPNext shows these as read-only on the saved Customer, but reads them on
# insert to create the primary contact, which is what its own quick entry does.
QUICK_ENTRY_INPUTS = {("Customer", "mobile_no"), ("Customer", "email_id")}

# Field types the POS can render. Layout entries of other types are dropped.
SUPPORTED_FIELDTYPES = {
	"Data",
	"Phone",
	"Int",
	"Float",
	"Currency",
	"Percent",
	"Check",
	"Select",
	"Link",
	"Date",
	"Small Text",
	"Text",
	"Long Text",
	"Text Editor",
	"Read Only",
}

OVERRIDE_KEYS = ("label", "default", "description", "placeholder", "reqd", "read_only", "hidden")

FIELD_KEYS = (
	"fieldname",
	"label",
	"fieldtype",
	"options",
	"default",
	"description",
	"reqd",
	"read_only",
	"hidden",
	"depends_on",
	"mandatory_depends_on",
	"read_only_depends_on",
	"precision",
	"non_negative",
	"length",
)


# ---------------------------------------------------------------------------
# Reading (every POS user)
# ---------------------------------------------------------------------------


@frappe.whitelist()
def get_form_layout(doctype: str, type: str, parent_doctype: str | None = None) -> dict:
	"""The form the POS should render for `doctype` in the given context."""
	_check_read(doctype, parent_doctype)
	return {"doctype": doctype, "type": type, "tabs": _resolve(doctype, type, parent_doctype)}


@frappe.whitelist(methods=["POST"])
def create_from_quick_entry(doctype: str, doc: str | dict) -> dict:
	"""Create a record from the POS quick entry form.

	Only the fields the layout shows are taken from the request, so the form
	(not the caller) decides what a cashier can set.
	"""
	if doctype not in QUICK_ENTRY_DOCTYPES:
		frappe.throw(_("Quick entry is not available for {0}").format(doctype), frappe.PermissionError)
	frappe.has_permission(doctype, "create", throw=True)

	values = frappe.parse_json(doc) if isinstance(doc, str) else (doc or {})
	fields = [f for f in iter_fields(_resolve(doctype, QUICK_ENTRY)) if not f["read_only"]]

	data = {"doctype": doctype}
	for field in fields:
		value = values.get(field["fieldname"])
		if isinstance(value, str):
			value = value.strip()
		if value in (None, "") and field.get("default") not in (None, ""):
			value = field["default"]
		if value not in (None, ""):
			data[field["fieldname"]] = value

	# Check required fields here: ERPNext names a Customer before Frappe's own
	# mandatory check runs, so a missing name crashed with an AttributeError.
	missing = [
		field["label"]
		for field in fields
		if field["reqd"] and not field["hidden"] and data.get(field["fieldname"]) in (None, "")
	]
	if missing:
		frappe.throw(
			_("Please fill in: {0}").format(", ".join(missing)),
			frappe.MandatoryError,
			title=_("Missing values"),
		)

	_apply_create_defaults(doctype, data)

	new_doc = frappe.get_doc(data)
	new_doc.insert()
	return new_doc.as_dict()


# ---------------------------------------------------------------------------
# Editing (System Manager)
# ---------------------------------------------------------------------------


@frappe.whitelist()
def get_layout_for_editing(doctype: str, type: str, default: int = 0) -> dict:
	"""The stored layout (or the built-in one) with raw field entries, plus the
	fields the editor can offer."""
	frappe.only_for("System Manager")
	stored = None if cint(default) else _stored(doctype, type)
	tabs = normalize_layout(stored) if stored else normalize_layout(get_default_layout(doctype, type))

	meta = frappe.get_meta(doctype)
	fields = []
	for df in meta.fields:
		if df.fieldtype not in SUPPORTED_FIELDTYPES:
			continue
		contact_input = _is_quick_entry_input(doctype, type, df.fieldname)
		fields.append(
			{
				"fieldname": df.fieldname,
				"label": _(df.label) if df.label else df.fieldname,
				# Contact fields are inputs in quick entry (see QUICK_ENTRY_INPUTS).
				"fieldtype": "Data" if contact_input else df.fieldtype,
				"reqd": cint(df.reqd) if type == QUICK_ENTRY else 0,
				"read_only": 0 if contact_input else cint(df.read_only or df.fieldtype == "Read Only"),
				"default": df.default,
			}
		)
	return {
		"tabs": tabs,
		"fields": fields,
		"customised": bool(stored),
		"has_default": (doctype, type) in DEFAULT_LAYOUTS,
	}


@frappe.whitelist(methods=["POST"])
def save_form_layout(doctype: str, type: str, layout: str | list) -> dict:
	"""Store a layout from the POS editor."""
	frappe.only_for("System Manager")
	_check_editable(doctype, type)
	text = layout if isinstance(layout, str) else json.dumps(layout)

	name = frappe.db.get_value(LAYOUT_DOCTYPE, {"dt": doctype, "type": type})
	doc = frappe.get_doc(LAYOUT_DOCTYPE, name) if name else frappe.new_doc(LAYOUT_DOCTYPE)
	doc.update({"dt": doctype, "type": type, "layout": text})
	doc.save()
	return {"tabs": normalize_layout(doc.layout), "modified": doc.modified}


@frappe.whitelist(methods=["POST"])
def reset_form_layout(doctype: str, type: str) -> dict:
	"""Drop the stored layout, so the POS uses the built-in one again."""
	frappe.only_for("System Manager")
	_check_editable(doctype, type)
	name = frappe.db.get_value(LAYOUT_DOCTYPE, {"dt": doctype, "type": type})
	if name:
		frappe.delete_doc(LAYOUT_DOCTYPE, name)
	return {"tabs": normalize_layout(get_default_layout(doctype, type))}


@frappe.whitelist(methods=["POST"])
def preview_form_layout(
	doctype: str, type: str, layout: str | list, parent_doctype: str | None = None
) -> dict:
	"""Resolve an unsaved layout exactly as get_form_layout would."""
	frappe.only_for("System Manager")
	_check_editable(doctype, type)
	tabs = validate_layout(doctype, layout)
	return {"doctype": doctype, "type": type, "tabs": _resolve(doctype, type, parent_doctype, tabs=tabs)}


# ---------------------------------------------------------------------------
# Format
# ---------------------------------------------------------------------------


def get_default_layout(doctype: str, type: str) -> list:
	return normalize_layout(json.loads(json.dumps(DEFAULT_LAYOUTS.get((doctype, type), []))))


def normalize_layout(layout) -> list:
	"""Any stored shape to tabs -> sections -> columns -> fields.

	Missing names are filled in by position, so the same input always gives
	the same output.
	"""
	if isinstance(layout, str):
		layout = json.loads(layout) if layout.strip() else []
	if isinstance(layout, dict):
		layout = [layout]
	if not isinstance(layout, list):
		frappe.throw(_("Layout must be a list of tabs or sections"))

	if not layout:
		return []
	for block in layout:
		if not isinstance(block, dict):
			frappe.throw(_("Each tab or section must be an object"))

	is_tabs = any("sections" in block for block in layout)
	raw_tabs = layout if is_tabs else [{"label": "", "sections": layout}]

	tabs = []
	for t, raw_tab in enumerate(raw_tabs):
		if "sections" not in raw_tab:
			frappe.throw(_("Do not mix tabs and sections at the top level"))
		sections = []
		for s, raw_section in enumerate(raw_tab.get("sections") or []):
			sections.append(_normalize_section(raw_section, t, s))
		tabs.append(
			{
				"name": raw_tab.get("name") or f"tab_{t + 1}",
				"label": raw_tab.get("label") or "",
				"sections": sections,
			}
		)
	return tabs


def _normalize_section(raw, t, s):
	if not isinstance(raw, dict):
		frappe.throw(_("Each section must be an object"))

	raw_columns = raw.get("columns") or []
	if not raw_columns and "fields" in raw:  # a section with a flat field list
		raw_columns = [raw["fields"]]

	columns = []
	for c, raw_column in enumerate(raw_columns):
		if isinstance(raw_column, dict):
			name, entries = raw_column.get("name"), raw_column.get("fields") or []
		else:
			name, entries = None, raw_column
		if not isinstance(entries, list):
			frappe.throw(_("Each column must have a list of fields"))
		columns.append({"name": name or f"column_{t + 1}_{s + 1}_{c + 1}", "fields": entries})

	section = {
		"name": raw.get("name") or f"section_{t + 1}_{s + 1}",
		"label": raw.get("label") or "",
		"columns": columns,
		"opened": bool(raw.get("opened", True)),
	}
	for flag in SECTION_FLAGS:
		section[flag] = bool(raw.get(flag))
	return section


def iter_entries(tabs):
	for tab in tabs:
		for section in tab["sections"]:
			for column in section["columns"]:
				yield from column["fields"]


def iter_fields(tabs):
	"""Resolved field dicts, in layout order."""
	yield from iter_entries(tabs)


def validate_layout(doctype: str, layout) -> list:
	"""Raise if the layout names fields the DocType does not have."""
	meta = frappe.get_meta(doctype)
	tabs = normalize_layout(layout)
	unknown = []
	for entry in iter_entries(tabs):
		fieldname = _entry_fieldname(entry)
		if not fieldname:
			frappe.throw(_("Every field entry needs a fieldname"))
		if not meta.get_field(fieldname):
			unknown.append(fieldname)
	if unknown:
		frappe.throw(
			_("{0} has no field(s): {1}").format(doctype, ", ".join(sorted(set(unknown)))),
			title=_("Invalid layout"),
		)
	return tabs


# ---------------------------------------------------------------------------
# Resolving
# ---------------------------------------------------------------------------


def _stored(doctype, type):
	text = frappe.db.get_value(LAYOUT_DOCTYPE, {"dt": doctype, "type": type}, "layout")
	return text if text and text.strip() else None


def _resolve(doctype: str, type: str, parent_doctype: str | None = None, tabs: list | None = None) -> list:
	if tabs is None:
		stored = _stored(doctype, type)
		tabs = normalize_layout(stored) if stored else []
	if not any(True for _entry in iter_entries(tabs)):
		tabs = get_default_layout(doctype, type)

	meta = frappe.get_meta(doctype)
	quick_entry = type == QUICK_ENTRY
	perms = _permlevels(doctype, parent_doctype)
	seen = set()

	resolved = []
	for tab in tabs:
		sections = []
		for section in tab["sections"]:
			columns = []
			for column in section["columns"]:
				fields = []
				for entry in column["fields"]:
					field = _build_field(meta, entry, quick_entry, perms)
					if field and field["fieldname"] not in seen:
						seen.add(field["fieldname"])
						fields.append(field)
				# Empty columns keep their place: they are part of the design.
				columns.append({**column, "fields": fields})
			if any(column["fields"] for column in columns):
				sections.append({**section, "columns": columns})
		if sections:
			resolved.append({**tab, "sections": sections})

	if quick_entry:
		_append_missing_mandatory(meta, resolved, seen, perms)

	return resolved


def _build_field(meta, entry, quick_entry: bool, perms) -> dict | None:
	fieldname = _entry_fieldname(entry)
	df = meta.get_field(fieldname) if fieldname else None
	if not df or df.fieldtype not in SUPPORTED_FIELDTYPES:
		return None

	field = {key: df.get(key) for key in FIELD_KEYS}
	field["label"] = _(df.label) if df.label else fieldname
	for key in ("reqd", "read_only", "hidden", "non_negative"):
		field[key] = cint(field[key])
	if not quick_entry:
		# On an existing record (a cart line) the server fills what the DocType
		# requires (rate, item name, accounts); only a layout can ask for more.
		field["reqd"] = 0

	if (meta.name, fieldname) in QUICK_ENTRY_INPUTS and quick_entry:
		field["fieldtype"] = "Data"
		field["read_only"] = 0
	elif df.fieldtype == "Read Only":
		field["read_only"] = 1

	if isinstance(entry, dict):
		for key in OVERRIDE_KEYS:
			if key not in entry:
				continue
			if key == "reqd":
				field["reqd"] = cint(field["reqd"] or entry["reqd"])
			elif key == "read_only":
				# Can lock a field for the POS, never unlock one.
				field["read_only"] = cint(field["read_only"] or entry["read_only"])
			elif key != "hidden":
				field[key] = entry[key]

		# Hidden with a default means "always set this"; a required field
		# without a value to fall back on must stay visible.
		if "hidden" in entry:
			has_default = field.get("default") not in (None, "")
			field["hidden"] = cint(entry["hidden"]) if (has_default or not field["reqd"]) else 0

	if field["fieldtype"] == "Select":
		field["options"] = [o for o in (df.options or "").split("\n")]

	# Permission levels: read-only without write access, hidden without read.
	if df.permlevel:
		if df.permlevel not in perms["write"]:
			field["read_only"] = 1
		if df.permlevel not in perms["read"]:
			field["hidden"] = 1

	return field


def _append_missing_mandatory(meta, tabs, seen, perms):
	"""A quick entry form must be submittable: add required fields the layout
	left out, unless the DocType fills them itself."""
	missing = []
	for df in meta.fields:
		if not df.reqd or df.fieldname in seen or df.default or df.read_only or df.hidden:
			continue
		if df.fieldtype not in SUPPORTED_FIELDTYPES or df.fieldname == "naming_series":
			continue
		field = _build_field(meta, df.fieldname, True, perms)
		if field:
			missing.append(field)
			seen.add(df.fieldname)

	if not missing:
		return
	if not tabs:
		tabs.append({"name": "tab_1", "label": "", "sections": []})
	sections = tabs[0]["sections"]
	if not sections:
		sections.append(_normalize_section({"columns": [[]]}, 0, 0))
	sections[-1]["columns"][-1]["fields"].extend(missing)


def _apply_create_defaults(doctype: str, data: dict):
	if doctype == "Customer":
		meta = frappe.get_meta("Customer")
		# India Compliance: a walk-in customer is unregistered unless told otherwise.
		if meta.get_field("gst_category") and not data.get("gst_category"):
			data["gst_category"] = "Unregistered"


def _check_editable(doctype, type):
	if (doctype, type) not in EDITABLE_FORMS:
		frappe.throw(_("{0} / {1} is not a POS form").format(doctype, type))


def _is_quick_entry_input(doctype, type, fieldname):
	return type == QUICK_ENTRY and (doctype, fieldname) in QUICK_ENTRY_INPUTS


def _entry_fieldname(entry):
	if isinstance(entry, str):
		return entry.strip()
	if isinstance(entry, dict):
		return (entry.get("fieldname") or "").strip()
	return None


def _check_read(doctype: str, parent_doctype: str | None):
	meta = frappe.get_meta(doctype)
	if meta.istable:
		if not parent_doctype or not any(
			df.options == doctype for df in frappe.get_meta(parent_doctype).get_table_fields()
		):
			frappe.throw(_("A parent DocType is required for {0}").format(doctype), frappe.PermissionError)
		frappe.has_permission(parent_doctype, "read", throw=True)
	else:
		frappe.has_permission(doctype, "read", throw=True)


def _permlevels(doctype: str, parent_doctype: str | None) -> dict:
	meta = frappe.get_meta(parent_doctype if frappe.get_meta(doctype).istable and parent_doctype else doctype)
	roles = set(frappe.get_roles())
	levels = {"read": {0}, "write": {0}}
	for perm in meta.permissions:
		if perm.role not in roles:
			continue
		if perm.get("read"):
			levels["read"].add(perm.permlevel)
		if perm.get("write"):
			levels["write"].add(perm.permlevel)
	return levels
