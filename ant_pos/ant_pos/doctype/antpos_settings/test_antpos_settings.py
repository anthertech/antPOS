# Copyright (c) 2025, Anther Technologies Pvt. Ltd. and Contributors
# See license.txt

import frappe
from frappe.tests.utils import FrappeTestCase


class TestAntPOSSettings(FrappeTestCase):
	def test_is_single(self):
		self.assertTrue(frappe.get_meta("AntPOS Settings").issingle)

	def test_write_is_restricted(self):
		"""POS roles may read branding but must not be able to rewrite it."""
		write_roles = {p.role for p in frappe.get_meta("AntPOS Settings").permissions if p.write}

		self.assertNotIn("POS Cash", write_roles)
		self.assertNotIn("POS Billing", write_roles)
