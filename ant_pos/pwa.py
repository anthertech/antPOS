"""Serve the antPOS service worker from inside the app's own URL.

The build writes sw.js to /assets/ant_pos/antPOS/, and a service worker only
controls pages below the directory it is served from, so from there it can never
control /antPOS. Serving the same file at /antPOS/sw.js, with a
Service-Worker-Allowed header, lets it control the app without any web server
configuration.
"""

import os

import frappe
from frappe.website.page_renderers.base_renderer import BaseRenderer
from werkzeug.wrappers import Response

# website_route_rules maps /antPOS/sw.js to this endpoint.
SERVICE_WORKER_ENDPOINT = "antpos-service-worker"

# No trailing slash, so the worker also controls /antPOS itself, not just /antPOS/...
SERVICE_WORKER_SCOPE = "/antPOS"


class ServiceWorkerPage(BaseRenderer):
	def can_render(self):
		return self.path == SERVICE_WORKER_ENDPOINT

	def render(self):
		path = frappe.get_app_path("ant_pos", "public", "antPOS", "sw.js")
		if not os.path.isfile(path):
			# Frontend not built yet.
			raise frappe.PageDoesNotExistError

		with open(path, "rb") as f:
			response = Response(f.read(), mimetype="application/javascript")

		response.headers["Service-Worker-Allowed"] = SERVICE_WORKER_SCOPE
		# Browsers compare the worker byte-for-byte to find a new release, so it
		# must never be served from a cache.
		response.headers["Cache-Control"] = "no-cache"
		return response
