# Copyright (c) 2026, Anther Technologies Pvt. Ltd. and Contributors
# See license.txt

from unittest.mock import mock_open, patch

import frappe
from frappe.tests.utils import FrappeTestCase
from frappe.utils import set_request
from frappe.website.serve import get_response

from ant_pos.pwa import SERVICE_WORKER_SCOPE, ServiceWorkerPage


class TestServiceWorkerRoute(FrappeTestCase):
	"""The worker is served from /antPOS/ so that it can control the app."""

	def get(self, path):
		set_request(method="GET", path=path)
		return get_response()

	def test_serves_worker_at_app_path(self):
		with (
			patch("ant_pos.pwa.os.path.isfile", return_value=True),
			patch("builtins.open", mock_open(read_data=b"// worker")),
		):
			response = self.get("/antPOS/sw.js")

		self.assertEqual(response.status_code, 200)
		self.assertEqual(response.get_data(), b"// worker")
		self.assertEqual(response.mimetype, "application/javascript")
		self.assertEqual(response.headers["Service-Worker-Allowed"], SERVICE_WORKER_SCOPE)
		self.assertEqual(response.headers["Cache-Control"], "no-cache")

	def test_other_app_paths_still_render_the_pos_page(self):
		response = self.get("/antPOS/payments")

		self.assertEqual(response.mimetype, "text/html")
		self.assertNotIn("Service-Worker-Allowed", response.headers)

	def test_missing_build_is_not_found(self):
		with patch("ant_pos.pwa.os.path.isfile", return_value=False):
			with self.assertRaises(frappe.PageDoesNotExistError):
				ServiceWorkerPage("antpos-service-worker").render()
