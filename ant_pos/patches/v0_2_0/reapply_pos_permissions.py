"""Re-apply the POS roles' permissions after the matrix changed.

POS Cash could read every Payment Entry and Sales Order in the company,
supplier payments included. Both are now limited to the cashier's own
documents.
"""

from ant_pos.install import apply_permissions, create_roles


def execute():
	create_roles()
	apply_permissions()
