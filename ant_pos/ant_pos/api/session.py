import frappe

# Fields the POS shell needs to render an avatar / name. Deliberately excludes
# anything that would turn this endpoint into a user directory dump.
USER_FIELDS = [
	"name",
	"email",
	"enabled",
	"user_image",
	"first_name",
	"last_name",
	"full_name",
	"user_type",
]


@frappe.whitelist()
def get_users():
	"""Return users visible to the caller.

	A POS cashier has no read access to User, and the UI only ever looks up the
	session user, so the unprivileged path returns just that one record. Callers
	that genuinely can read User (System Manager and friends) still get the list.
	"""
	if not frappe.has_permission("User", "read"):
		user = frappe.db.get_value("User", frappe.session.user, USER_FIELDS, as_dict=True)
		if not user:
			return []
		user.session_user = True
		return [user]

	users = frappe.qb.get_query(
		"User",
		fields=USER_FIELDS,
		order_by="full_name asc",
		distinct=True,
	).run(as_dict=1)

	for user in users:
		if frappe.session.user == user.name:
			user.session_user = True

	return users
