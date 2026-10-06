# Copyright (c) 2024, Anther Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document
from frappe.utils import cint, date_diff, today

# Roles that may open or close a shift on behalf of another user. They match
# the roles with unrestricted access on the shift doctypes.
SHIFT_MANAGER_ROLES = ("System Manager", "Sales Manager")


def is_shift_manager(user=None):
	user = user or frappe.session.user
	return user == "Administrator" or bool(set(SHIFT_MANAGER_ROLES) & set(frappe.get_roles(user)))


def profile_users(pos_profile):
	return frappe.get_all("POS Profile User", filters={"parent": pos_profile}, pluck="user")


def can_use_profile(pos_profile, user=None):
	"""The same rule as the POS Profile list (posprofile_user_query_conditions):
	System Managers may use any profile, everyone else only those listing them."""
	user = user or frappe.session.user
	if user == "Administrator" or "System Manager" in frappe.get_roles(user):
		return True
	return user in profile_users(pos_profile)


class AntOpeningShift(Document):
	def validate(self):
		if not self.cashier:
			self.cashier = frappe.session.user

		# `set_posting_date` means "I will supply the dates myself".
		if not self.set_posting_date:
			self.period_start_date = today()

		if not self.posting_date:
			self.posting_date = today()

		self.validate_cashier()
		self.validate_pos_profile()
		self.validate_period()
		self.validate_no_open_shift()

	def validate_cashier(self):
		if self.cashier != frappe.session.user and not is_shift_manager():
			frappe.throw(_("You can only open a shift for yourself."), frappe.PermissionError)
		if not cint(frappe.db.get_value("User", self.cashier, "enabled")):
			frappe.throw(_("User {0} is disabled.").format(frappe.bold(self.cashier)))

	def validate_pos_profile(self):
		profile = frappe.db.get_value("POS Profile", self.pos_profile, ["company", "disabled"], as_dict=True)
		if not profile:
			frappe.throw(_("POS Profile {0} does not exist.").format(frappe.bold(self.pos_profile)))
		if profile.disabled:
			frappe.throw(_("POS Profile {0} is disabled.").format(frappe.bold(self.pos_profile)))
		if profile.company != self.company:
			frappe.throw(
				_("POS Profile {0} belongs to company {1}, not {2}.").format(
					frappe.bold(self.pos_profile), frappe.bold(profile.company), frappe.bold(self.company)
				)
			)
		if not can_use_profile(self.pos_profile, self.cashier):
			frappe.throw(
				_("{0} is not a user of POS Profile {1}.").format(
					frappe.bold(self.cashier), frappe.bold(self.pos_profile)
				),
				frappe.PermissionError,
			)

	def validate_period(self):
		"""A shift cannot end before it starts."""
		if not (self.period_start_date and self.period_end_date):
			return

		# The previous check was guarded on `self.posting_date`, which is always
		# empty on a new document, so it never ran on the path that mattered.
		if date_diff(self.period_end_date, self.period_start_date) < 0:
			frappe.throw(
				_("Period End Date cannot be earlier than Period Start Date."),
				title=_("Invalid Period"),
			)

	def validate_no_open_shift(self):
		# Two quick taps on Confirm used to open two shifts: both checked before
		# either was written. Locking the cashier's own record makes the second
		# one wait for the first.
		if self.is_new() and self.cashier:
			frappe.db.get_value("User", self.cashier, "name", for_update=True)

		if self.get_openingshift_for_user(self.cashier):
			frappe.throw(
				_("{0} already has an open shift. Close it before opening another.").format(
					frappe.bold(self.cashier)
				),
				title=_("Shift Already Open"),
			)

	def get_openingshift_for_user(self, user):
		filters = {"cashier": user, "docstatus": 1, "status": "Open"}

		# Without this the document trips over itself on any re-validate
		# (amend, or a save after submit).
		if not self.is_new():
			filters["name"] = ["!=", self.name]

		return frappe.db.exists("Ant Opening Shift", filters)
