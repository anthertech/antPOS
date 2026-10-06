import frappe
from frappe import _

from ant_pos.ant_pos.doctype.ant_opening_shift.ant_opening_shift import can_use_profile


@frappe.whitelist()
def get_openingshift():
	user = frappe.session.user
	open_vouchers = frappe.db.get_all(
		"Ant Opening Shift",
		filters={
			"cashier": user,
			"ant_closing_shift_detail": ["in", ["", None]],
			"docstatus": 1,
			"status": "Open",
		},
		fields=["name", "pos_profile"],
		order_by="period_start_date desc",
	)
	if open_vouchers:
		data = {
			"Ant_Opening_Shift": frappe.get_doc("Ant Opening Shift", open_vouchers[0]["name"]),
			"pos_profile": get_pos_profile(open_vouchers[0]["pos_profile"]),
		}
	else:
		data = {}
	return data


def get_pos_profile(profile):
	pos = frappe.get_doc("POS Profile", profile)
	return pos


@frappe.whitelist()
def get_pos_profiles_by_company():
	# Fetch POS Profiles with associated company respecting permissions
	pos_profiles = [
		p
		for p in frappe.get_list(
			"POS Profile",
			filters={"disabled": 0},
			fields=["name", "company"],
			order_by="company ASC",
		)
		if can_use_profile(p["name"])
	]

	if not pos_profiles:
		return {}

	# One query for every profile's payment methods rather than one per profile.
	modes_by_profile = {}
	for row in frappe.get_all(
		"POS Payment Method",
		filters={"parent": ["in", [p["name"] for p in pos_profiles]]},
		fields=["parent", "mode_of_payment"],
		order_by="idx asc",
	):
		modes_by_profile.setdefault(row["parent"], []).append(row["mode_of_payment"])

	company_profiles = {}
	for profile in pos_profiles:
		company_profiles.setdefault(profile["company"], []).append(
			{
				"name": profile["name"],
				"modes_of_payment": modes_by_profile.get(profile["name"], []),
			}
		)

	return company_profiles


# What the Open Shift dialog may set. Cashier, dates and status are decided
# here and in the doctype, not by the client.
OPENING_FIELDS = ("company", "pos_profile")
OPENING_DETAIL_FIELDS = ("mode_of_payment", "opening_amount")


def profile_payment_modes(pos_profile):
	return frappe.get_all("POS Payment Method", filters={"parent": pos_profile}, pluck="mode_of_payment")


@frappe.whitelist(methods=["POST"])
def create_opening(values):
	"""Open a shift for the signed-in user and return its name."""
	values = frappe.parse_json(values)
	if not isinstance(values, dict):
		frappe.throw(_("Invalid data format. Expected a dictionary."))

	shift = frappe.new_doc("Ant Opening Shift")
	shift.update({field: values.get(field) for field in OPENING_FIELDS})
	shift.cashier = frappe.session.user
	shift.status = "Open"
	allowed_modes = set(profile_payment_modes(shift.pos_profile))
	for row in values.get("opening_balance_details") or []:
		if row.get("mode_of_payment") not in allowed_modes:
			frappe.throw(
				_("{0} is not a payment method of POS Profile {1}.").format(
					frappe.bold(row.get("mode_of_payment")), frappe.bold(shift.pos_profile)
				)
			)
		shift.append("opening_balance_details", {f: row.get(f) for f in OPENING_DETAIL_FIELDS})

	shift.insert()
	shift.submit()
	return shift.name
