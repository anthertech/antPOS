"""Give ERPNext's own roles their permissions back.

The first antPOS installer added Custom DocPerm rows for the POS roles only.
Frappe then ignored the standard rules on those doctypes, so roles such as
Accounts User lost Sales Invoice, Customer, Item and more. This copies the
standard rules back where only POS rows exist, then re-applies the (narrower)
POS grants. See ant_pos/install.py.
"""

from ant_pos.install import apply_permissions, create_roles, restore_standard_permissions


def execute():
	create_roles()
	restore_standard_permissions()
	apply_permissions()
