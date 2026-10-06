// Copyright (c) 2025, Anther Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

// Layouts are designed where they are used: in antPOS, a
// System Manager opens the form and clicks the pencil button.
//   Customer / Quick Entry         -> the "New customer" dialog
//   Sales Invoice Item / Grid Row  -> a cart line's details
// This form only shows the stored JSON (under "Layout JSON (advanced)").

const POS_FORMS = {
	"Customer|Quick Entry": __("open the New customer dialog"),
	"Sales Invoice Item|Grid Row": __("expand a line in the cart"),
};

frappe.ui.form.on("Antpos Fields Layout", {
	refresh(frm) {
		show_hint(frm);
		frm.add_custom_button(__("Open antPOS"), () => window.open("/antPOS", "_blank"));
	},
	dt: show_hint,
	type: show_hint,
});

function show_hint(frm) {
	const wrapper = frm.get_field("layout_builder")?.$wrapper;
	if (!wrapper) return;
	const where = POS_FORMS[`${frm.doc.dt}|${frm.doc.type}`];
	const message = where
		? __(
				"Design this layout in antPOS: {0} and click the pencil button (System Managers only). Tabs, sections, columns and fields are dragged into place there, with a preview.",
				[where]
		  )
		: __("antPOS only uses layouts for Customer / Quick Entry and Sales Invoice Item / Grid Row.");
	wrapper.html(`<div class="alert alert-info small mb-0">${frappe.utils.escape_html(message)}</div>`);
}
