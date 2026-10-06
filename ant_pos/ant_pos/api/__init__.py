import frappe
from frappe import _
from frappe.translate import get_all_translations


def user_has_posprofile(user=None):
	"""Whether antPOS appears for this user on /apps (add_to_apps_screen).

	Cashiers see it when they are listed on an enabled POS Profile. System
	Managers always see it, since they are the ones who set the profiles up.
	"""
	user = user or frappe.session.user
	if user == "Guest":
		return False
	if "System Manager" in frappe.get_roles(user):
		return True

	profile_user = frappe.qb.DocType("POS Profile User")
	profile = frappe.qb.DocType("POS Profile")
	match = (
		frappe.qb.from_(profile_user)
		.join(profile)
		.on(profile.name == profile_user.parent)
		.select(profile_user.name)
		.where(profile_user.user == user)
		.where(profile_user.parenttype == "POS Profile")
		.where(profile.disabled == 0)
		.limit(1)
		.run()
	)
	return bool(match)


def posprofile_user_query_conditions(user=None):
	"""
	Returns SQL condition to restrict POS Profiles list to those
	where the given user exists in the 'Applicable for Users' child table.
	System Managers and Administrators get access to all POS Profiles.
	"""
	if not user:
		user = frappe.session.user

	if user == "Guest":
		return "FALSE"

	roles = frappe.get_roles(user)
	if "System Manager" in roles or "Administrator" in roles:
		return "1=1"  # full access

	return f"""
        name IN (
            SELECT parent FROM `tabPOS Profile User`
            WHERE user = {frappe.db.escape(user)}
        )
    """


@frappe.whitelist()
def get_user_permissions():
	"""What the POS may offer this user on the documents it creates.

	A right counts if any of the user's rules grants it, including rules
	limited to the user's own documents ("if owner"): the POS only submits and
	prints invoices the cashier created. Checking without a document treated
	those rules as no permission, so a new POS Cash user never saw Pay.
	"""
	from frappe.permissions import get_valid_perms

	user = frappe.session.user
	user_roles = frappe.get_roles(user)
	permissions = {}

	for doctype in ("Sales Invoice", "Payment Entry", "Sales Order"):
		# Standard or custom rules, whichever applies to this doctype.
		rules = [p for p in get_valid_perms(doctype, user) if not p.permlevel]

		def allowed(ptype):
			return bool(frappe.has_permission(doctype, ptype=ptype, user=user)) or any(
				p.get(ptype) for p in rules
			)

		readers = [p for p in rules if p.get("read")]
		permissions[doctype.lower().replace(" ", "_")] = {
			"can_submit": allowed("submit"),
			"can_create": allowed("create"),
			"can_print": allowed("print"),
			# Lists (Held, Return) show only the user's own documents.
			"only_own": bool(readers) and all(p.if_owner for p in readers),
		}

	# Form layouts decide what every cashier sees (api/form_layout.py).
	permissions["can_manage_layouts"] = "System Manager" in user_roles
	# Brand settings and other site-wide options.
	permissions["is_system_manager"] = "System Manager" in user_roles

	return permissions


@frappe.whitelist(allow_guest=True)
def get_translations():
	if frappe.session.user != "Guest":
		language = frappe.db.get_value("User", frappe.session.user, "language")
	else:
		language = frappe.db.get_single_value("System Settings", "language")

	return get_all_translations(language)


@frappe.whitelist()
def get_doc_field():
	"""Return a blank document (with defaults applied) for the given doctype."""
	doctype = frappe.form_dict.get("doctype")

	if not doctype:
		frappe.throw(_("Missing 'doctype' parameter"))

	# Returns server-side defaults, so require the same permission as actually
	# creating the document.
	frappe.has_permission(doctype, "create", throw=True)

	try:
		return frappe.new_doc(doctype).as_dict()
	except Exception:
		frappe.log_error(frappe.get_traceback(), "get_doc_field error")
		frappe.throw(_("Unable to create doc for {0}").format(doctype))
