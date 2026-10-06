"""The signed-in user's own profile, for antPOS Settings > Profile.

A cashier usually has no write access to the User doctype, so these
endpoints act only on the session user and only on the fields below.
"""

import frappe
from frappe import _
from frappe.auth import LoginAttemptTracker
from frappe.rate_limiter import rate_limit
from frappe.utils.password import check_password, update_password

PROFILE_FIELDS = (
	"name",
	"email",
	"first_name",
	"last_name",
	"full_name",
	"user_image",
	"mobile_no",
	"phone",
	"language",
	"time_zone",
	"last_login",
)

# Fields a user may change on their own profile here.
EDITABLE_FIELDS = ("first_name", "last_name", "user_image", "mobile_no", "phone", "language", "time_zone")


def _session_user():
	user = frappe.session.user
	if user == "Guest":
		frappe.throw(_("You must be logged in."), frappe.AuthenticationError)
	return user


@frappe.whitelist()
def get_profile() -> dict:
	user = _session_user()
	profile = frappe.db.get_value("User", user, PROFILE_FIELDS, as_dict=True) or {}
	profile["roles"] = sorted(r for r in frappe.get_roles(user) if r not in ("All", "Guest", "Desk User"))
	return profile


@frappe.whitelist(methods=["POST"])
def update_profile(profile: str | dict) -> dict:
	"""Update the session user's own profile; other fields are ignored."""
	user = _session_user()
	values = frappe.parse_json(profile) if isinstance(profile, str) else (profile or {})

	doc = frappe.get_doc("User", user)
	for field in EDITABLE_FIELDS:
		if field not in values:
			continue
		value = values.get(field)
		doc.set(field, value.strip() if isinstance(value, str) else value)

	if not (doc.first_name or "").strip():
		frappe.throw(_("First name is required."))
	if doc.language and not frappe.db.exists("Language", doc.language):
		frappe.throw(_("Unknown language {0}").format(doc.language))

	# The user edits their own record; access is limited to EDITABLE_FIELDS.
	doc.save(ignore_permissions=True)
	return get_profile()


@frappe.whitelist(methods=["POST"])
@rate_limit(limit=5, seconds=300)
def change_password(old_password: str, new_password: str) -> str:
	"""Change the session user's password."""
	user = _session_user()

	tracker = LoginAttemptTracker(user)
	if not tracker.is_user_allowed():
		frappe.throw(_("Too many failed attempts. Please try again after some time."))

	if old_password == new_password:
		frappe.throw(_("The new password must be different from the current one."))

	try:
		check_password(user, old_password)
	except frappe.AuthenticationError:
		tracker.add_failure_attempt()
		frappe.throw(_("The current password is incorrect."))
	else:
		tracker.add_success_attempt()

	from frappe.core.doctype.user.user import test_password_strength

	# Follows the site's password policy. With the policy off Frappe returns
	# no result at all; treating that as "too weak" would
	# reject every password.
	result = test_password_strength(new_password) or {}
	feedback = result.get("feedback") or {}
	if result and not feedback.get("password_policy_validation_passed", False):
		suggestions = " ".join(feedback.get("suggestions") or [])
		frappe.throw(_("The new password is too weak. {0}").format(suggestions).strip())

	update_password(user=user, pwd=new_password, logout_all_sessions=False)
	return _("Password updated")
