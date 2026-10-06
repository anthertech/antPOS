# Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and Contributors
# GNU GPLv3 License. See license.txt


import html
from urllib.parse import urlencode

import frappe
from frappe.utils import cint, get_system_timezone

no_cache = 1


def get_context():
	if frappe.session.user == "Guest":
		# Sign in on Frappe's login page, then come back here.
		frappe.local.flags.redirect_location = "/login?" + urlencode(
			{"redirect-to": frappe.local.request.full_path.rstrip("?")}
		)
		raise frappe.Redirect(302)

	context = frappe._dict()
	context.boot = get_boot()
	# Rendered onto <html> so the page paints in the right theme before any JS
	# runs, the same way the desk does.
	context.theme_mode = context.boot.desk_theme.lower()
	# The brand is rendered into the page (tab title, favicon) and handed to
	# the app, so nothing flips from the antPOS defaults once it loads.
	context.brand = get_brand()
	context.brand_name = context.brand["name"]
	return context


DEFAULT_ICON = "/assets/ant_pos/antPOS.png"


def get_brand():
	def value(field):
		return frappe.db.get_single_value("AntPOS Settings", field, cache=True) or ""

	return {
		# Frappe stores Data fields HTML-escaped ("Tom &amp; Jerry"); the
		# template escapes once itself, so hand it the plain text.
		"name": html.unescape(value("brand_name")).strip(),
		"logo": value("brand_logo"),
		"favicon": value("favicon"),
		"default_icon": DEFAULT_ICON,
	}


def get_desk_theme():
	"""The user's desk theme, shared with the desk: Light, Dark or Automatic."""
	if frappe.session.user == "Guest":
		return "Light"
	theme = frappe.db.get_value("User", frappe.session.user, "desk_theme")
	return theme if theme in ("Light", "Dark", "Automatic") else "Light"


def get_boot():
	return frappe._dict(
		{
			"frappe_version": frappe.__version__,
			"default_route": get_default_route(),
			"desk_theme": get_desk_theme(),
			"site_name": frappe.local.site,
			"read_only_mode": frappe.flags.read_only,
			"csrf_token": frappe.sessions.get_csrf_token(),
			"setup_complete": cint(frappe.get_system_settings("setup_complete")),
			"sysdefaults": frappe.defaults.get_defaults(),
			"is_demo_site": frappe.conf.get("is_demo_site"),
			"timezone": {
				"system": get_system_timezone(),
				"user": frappe.db.get_value("User", frappe.session.user, "time_zone")
				or get_system_timezone(),
			},
		}
	)


def get_default_route():
	return "/antPOS"
