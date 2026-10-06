"""Back-fill fields that Ant Closing Shift never populated.

`pos_profile` is mandatory on Ant Closing Shift but was never set by the
controller, and `Ant Opening Shift.ant_closing_shift_detail` was never written
even though get_openingshift() filters on it. Existing records therefore have
both fields empty.
"""

import frappe


def execute():
	closing_shifts = frappe.get_all(
		"Ant Closing Shift",
		filters={"docstatus": ["<", 2]},
		fields=["name", "ant_opening_shift", "pos_profile", "docstatus"],
	)

	if not closing_shifts:
		return

	opening_names = {c.ant_opening_shift for c in closing_shifts if c.ant_opening_shift}
	if not opening_names:
		return

	openings = {
		o.name: o
		for o in frappe.get_all(
			"Ant Opening Shift",
			filters={"name": ["in", list(opening_names)]},
			fields=["name", "pos_profile", "ant_closing_shift_detail"],
		)
	}

	for closing in closing_shifts:
		opening = openings.get(closing.ant_opening_shift)
		if not opening:
			continue

		if not closing.pos_profile and opening.pos_profile:
			frappe.db.set_value(
				"Ant Closing Shift",
				closing.name,
				"pos_profile",
				opening.pos_profile,
				update_modified=False,
			)

		# Only submitted closings actually closed a shift.
		if closing.docstatus == 1 and not opening.ant_closing_shift_detail:
			frappe.db.set_value(
				"Ant Opening Shift",
				opening.name,
				"ant_closing_shift_detail",
				closing.name,
				update_modified=False,
			)
