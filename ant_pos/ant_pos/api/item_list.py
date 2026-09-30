"""Item list for the POS left pane.

One request returns the items a cashier can browse plus the profile's most
moving items. The unfiltered result is cached per POS Profile; searches are
always live. Everything is configured on the POS Profile (antPOS Item List
section), and the standard Item Groups, Hide Unavailable Items and Hide Images
options are honoured the way ERPNext's own POS honours them.
"""

import frappe
from frappe import _
from frappe.utils import add_days, cint, flt, get_datetime, getdate, now_datetime, today

CACHE_PREFIX = "ant_pos:item_list:"

# Outgoing stock from these vouchers counts as "moving". Stock transfers and
# material issues are internal and are not sales.
SALES_VOUCHERS = ("Sales Invoice", "POS Invoice", "Delivery Note")

# (fieldname on POS Profile, default, min, max)
SETTINGS = {
	"show": ("custom_show_item_list", 1, 0, 1),
	"limit": ("custom_item_list_limit", 50, 1, 500),
	"cache": ("custom_cache_item_list", 1, 0, 1),
	"cache_minutes": ("custom_item_list_cache_minutes", 10, 1, 1440),
	"most_moving_count": ("custom_most_moving_count", 8, 0, 50),
	"most_moving_days": ("custom_most_moving_days", 30, 1, 365),
}


def get_list_settings(profile) -> frappe._dict:
	"""Read the item-list settings from a POS Profile, with defaults and bounds.

	Missing fields (site not migrated yet) and out-of-range values fall back to
	something safe rather than failing the POS.
	"""
	settings = frappe._dict()
	for key, (fieldname, default, low, high) in SETTINGS.items():
		value = profile.get(fieldname)
		value = default if value is None or value == "" else cint(value)
		settings[key] = min(max(value, low), high)

	settings.hide_unavailable = cint(profile.get("hide_unavailable_items"))
	settings.hide_images = cint(profile.get("hide_images"))
	return settings


# Cached lists are keyed by a version number. Clearing bumps the version, a
# single Redis call, instead of scanning for keys on every Item or Item Price
# saved (an import saves thousands). Old entries expire on their own.
VERSION_KEY = f"{CACHE_PREFIX}version"


def _cache_version() -> int:
	cache = frappe.cache()
	return cint(cache.get(cache.make_key(VERSION_KEY)))


def cache_key(pos_profile: str) -> str:
	return f"{CACHE_PREFIX}{_cache_version()}:{pos_profile}"


def clear_item_list_cache(doc=None, method=None):
	"""Drop every cached item list. Wired to Item, Item Price and POS Profile."""
	cache = frappe.cache()
	cache.incr(cache.make_key(VERSION_KEY))


@frappe.whitelist()
def get_item_list(pos_profile: str, search_text: str | None = None, refresh: int = 0):
	profile = _get_permitted_profile(pos_profile)
	settings = get_list_settings(profile)

	if not settings.show:
		return _payload(settings, items=[], most_moving=[])

	search_text = (search_text or "").strip()
	if search_text:
		# Searches are cheap, varied and must reflect current stock: never cached.
		return _payload(
			settings,
			items=_query_items(profile, settings, search_text=search_text),
			most_moving=[],
		)

	key = cache_key(profile.name)
	if settings.cache and not cint(refresh):
		# expires=True: the key has a TTL, so frappe must not memoise the read
		# (a miss would otherwise be remembered as None for the request).
		cached = frappe.cache().get_value(key, expires=True)
		if cached:
			cached["cached"] = True
			# Server-side age, so the client never compares clocks across timezones.
			cached["age_seconds"] = int(
				(now_datetime() - get_datetime(cached["generated_at"])).total_seconds()
			)
			return cached

	payload = _payload(
		settings,
		items=_query_items(profile, settings),
		most_moving=_most_moving(profile, settings),
	)

	if settings.cache:
		frappe.cache().set_value(key, payload, expires_in_sec=settings.cache_minutes * 60)

	return payload


def _payload(settings, items, most_moving):
	return {
		"items": items,
		"most_moving": most_moving,
		"generated_at": now_datetime().isoformat(),
		"age_seconds": 0,
		"cached": False,
		"settings": {
			"show": settings.show,
			"limit": settings.limit,
			"cache": settings.cache,
			"cache_minutes": settings.cache_minutes,
			"most_moving_count": settings.most_moving_count,
			"most_moving_days": settings.most_moving_days,
			"hide_images": settings.hide_images,
			# Zero-stock items stay sellable when the site allows negative stock.
			"allow_negative_stock": cint(
				frappe.db.get_single_value("Stock Settings", "allow_negative_stock")
			),
		},
	}


def _get_permitted_profile(pos_profile: str):
	# get_list applies ant_pos's permission_query_conditions, so a cashier only
	# reaches profiles they are listed on.
	if not frappe.get_list("POS Profile", filters={"name": pos_profile}, limit=1):
		frappe.throw(
			_("You do not have access to POS Profile {0}").format(pos_profile), frappe.PermissionError
		)
	return frappe.get_cached_doc("POS Profile", pos_profile)


def _item_groups(profile) -> list[str]:
	"""The profile's item groups including their descendants; empty means all."""
	groups = set()
	for row in profile.get("item_groups") or []:
		bounds = frappe.db.get_value("Item Group", row.item_group, ["lft", "rgt"], as_dict=True)
		if not bounds:
			continue
		groups.update(
			frappe.get_all(
				"Item Group",
				filters={"lft": [">=", bounds.lft], "rgt": ["<=", bounds.rgt]},
				pluck="name",
			)
		)
	return sorted(groups)


def _query_items(profile, settings, search_text=None, item_codes=None, limit=None):
	conditions = [
		"item.disabled = 0",
		"item.has_variants = 0",
		"item.is_sales_item = 1",
		"item.is_fixed_asset = 0",
	]
	values = {"warehouse": profile.warehouse, "limit": cint(limit or settings.limit)}

	groups = _item_groups(profile)
	if groups:
		conditions.append("item.item_group IN %(groups)s")
		values["groups"] = tuple(groups)

	if item_codes is not None:
		if not item_codes:
			return []
		conditions.append("item.name IN %(item_codes)s")
		values["item_codes"] = tuple(item_codes)

	if search_text:
		conditions.append(
			"""(
				item.name LIKE %(search)s
				OR item.item_name LIKE %(search)s
				OR item.name IN (SELECT parent FROM `tabItem Barcode` WHERE barcode LIKE %(search)s)
			)"""
		)
		values["search"] = f"%{search_text}%"

	if settings.hide_unavailable:
		conditions.append(
			"""(
				item.is_stock_item = 0
				OR EXISTS (
					SELECT 1 FROM `tabBin` bin
					WHERE bin.item_code = item.name
						AND bin.warehouse = %(warehouse)s
						AND bin.actual_qty > 0
				)
			)"""
		)

	rows = frappe.db.sql(
		f"""
		SELECT
			item.name AS item_code,
			item.item_name,
			item.item_group,
			item.stock_uom,
			item.image,
			item.is_stock_item,
			item.has_batch_no,
			item.has_serial_no
		FROM `tabItem` item
		WHERE {" AND ".join(conditions)}
		ORDER BY item.item_name ASC
		LIMIT %(limit)s
		""",
		values,
		as_dict=True,
	)

	_attach_prices_and_stock(rows, profile, settings)
	return rows


def _price_list(profile):
	"""The profile's price list, or the site default, as the cart does."""
	return profile.selling_price_list or frappe.db.get_single_value("Selling Settings", "selling_price_list")


def _attach_prices_and_stock(rows, profile, settings):
	"""Price and stock for all rows in two queries (ERPNext does two per item)."""
	if not rows:
		return

	codes = tuple(r.item_code for r in rows)
	on_date = getdate(today())

	prices = {}
	for price in frappe.get_all(
		"Item Price",
		filters={
			"price_list": _price_list(profile),
			"selling": 1,
			"item_code": ["in", codes],
			# The list shows list prices. A price agreed with one customer, a
			# supplier price or a price for one batch is not one, and showing
			# it here meant the grid could disagree with the cart.
			"customer": ["in", ["", None]],
			"supplier": ["in", ["", None]],
			"batch_no": ["in", ["", None]],
		},
		fields=["item_code", "price_list_rate", "currency", "uom", "valid_from", "valid_upto"],
		order_by="valid_from desc",
	):
		if price.valid_from and getdate(price.valid_from) > on_date:
			continue
		if price.valid_upto and getdate(price.valid_upto) < on_date:
			continue
		prices.setdefault(price.item_code, []).append(price)

	stock = dict(
		frappe.get_all(
			"Bin",
			filters={"warehouse": profile.warehouse, "item_code": ["in", codes]},
			fields=["item_code", "actual_qty"],
			as_list=True,
		)
	)

	for row in rows:
		candidates = prices.get(row.item_code, [])
		# Prefer the stock-UOM price, as the cart line starts in stock UOM.
		price = next((p for p in candidates if p.uom == row.stock_uom), None) or (
			candidates[0] if candidates else None
		)
		row.rate = flt(price.price_list_rate) if price else None
		row.currency = price.currency if price else profile.currency
		row.actual_qty = flt(stock.get(row.item_code)) if row.is_stock_item else None
		if settings.hide_images:
			row.image = None


def _most_moving(profile, settings):
	if not settings.most_moving_count:
		return []

	since = add_days(today(), -settings.most_moving_days)
	moved = frappe.db.sql(
		"""
		SELECT sle.item_code, SUM(-sle.actual_qty) AS moved_qty
		FROM `tabStock Ledger Entry` sle
		WHERE sle.warehouse = %(warehouse)s
			AND sle.is_cancelled = 0
			AND sle.actual_qty < 0
			AND sle.voucher_type IN %(vouchers)s
			AND sle.posting_date >= %(since)s
		GROUP BY sle.item_code
		ORDER BY moved_qty DESC
		LIMIT %(fetch)s
		""",
		{
			"warehouse": profile.warehouse,
			"vouchers": SALES_VOUCHERS,
			"since": since,
			# Some top movers may be filtered out below (disabled, other group,
			# out of stock), so over-fetch.
			"fetch": settings.most_moving_count * 3,
		},
		as_dict=True,
	)
	if not moved:
		return []

	qty_by_code = {m.item_code: flt(m.moved_qty) for m in moved}
	eligible = {
		row.item_code: row
		for row in _query_items(profile, settings, item_codes=list(qty_by_code), limit=len(qty_by_code))
	}

	result = []
	for code in qty_by_code:  # keeps the moved-qty ordering
		row = eligible.get(code)
		if row:
			row.moved_qty = qty_by_code[code]
			result.append(row)
		if len(result) >= settings.most_moving_count:
			break
	return result
