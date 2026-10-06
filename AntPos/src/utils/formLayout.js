import { reactive } from 'vue'
import { call } from 'frappe-ui'

// Cart line fields the POS always sets itself; changing them would detach
// the line from its price, stock or UOM conversion.
export const LOCKED_LINE_FIELDS = [
  'item_code',
  'uom',
  'stock_uom',
  'conversion_factor',
  'warehouse',
  'price_list_rate',
  'is_free_item',
]

// Layouts for server-driven forms (ant_pos/api/form_layout.py), fetched once
// per form and shared: every cart line renders the same item layout.
const cache = new Map()

export function useFormLayout(doctype, type, parentDoctype = null) {
  const key = [doctype, type, parentDoctype || ''].join('|')
  if (!cache.has(key)) {
    const state = reactive({ tabs: [], loading: true, error: null })
    state.load = async () => {
      state.loading = true
      state.error = null
      try {
        const data = await call(
          'ant_pos.ant_pos.api.form_layout.get_form_layout',
          {
            doctype,
            type,
            parent_doctype: parentDoctype,
          },
        )
        state.tabs = data?.tabs || []
      } catch (error) {
        state.error = error
      } finally {
        state.loading = false
      }
    }
    state.load()
    cache.set(key, state)
  }
  return cache.get(key)
}

// Re-read layouts in use, e.g. after an admin edited one. With a doctype,
// only that form's layout.
export function refreshFormLayouts(doctype = null, type = null) {
  for (const [key, state] of cache.entries()) {
    const [d, t] = key.split('|')
    if ((!doctype || d === doctype) && (!type || t === type)) state.load()
  }
}

// Every field in a layout: tabs -> sections -> columns -> fields.
export function layoutFields(tabs) {
  return (tabs || []).flatMap((tab) =>
    (tab.sections || []).flatMap((section) =>
      (section.columns || []).flatMap((column) => column.fields || []),
    ),
  )
}

// DocType dependency expressions: "fieldname" or "eval:<js using doc>".
// They come from DocType meta or an admin-saved layout, the same trust level
// as the desk, which evaluates them the same way.
export function evaluateDepends(expression, doc) {
  if (!expression) return true
  const text = String(expression).trim()
  if (text.startsWith('eval:')) {
    try {
      return Boolean(
        new Function('doc', `return (${text.slice(5)});`)(doc || {}),
      )
    } catch {
      return true
    }
  }
  return Boolean(doc?.[text])
}

export function isVisible(field, doc) {
  return !field.hidden && evaluateDepends(field.depends_on, doc)
}

export function isRequired(field, doc) {
  if (field.reqd) return true
  return field.mandatory_depends_on
    ? evaluateDepends(field.mandatory_depends_on, doc)
    : false
}

export function isEmpty(value) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'string' && value.trim() === '')
  )
}

// Labels of visible, required fields that have no value.
export function missingRequired(tabs, doc) {
  return layoutFields(tabs)
    .filter(
      (f) =>
        isVisible(f, doc) && isRequired(f, doc) && isEmpty(doc?.[f.fieldname]),
    )
    .map((f) => f.label)
}

// Start a new record from the layout's defaults.
export function applyDefaults(tabs, doc) {
  for (const field of layoutFields(tabs)) {
    if (!isEmpty(doc[field.fieldname]) || isEmpty(field.default)) continue
    doc[field.fieldname] = castDefault(field)
  }
  return doc
}

function castDefault(field) {
  const value = field.default
  if (['Int', 'Check'].includes(field.fieldtype))
    return parseInt(value, 10) || 0
  if (['Float', 'Currency', 'Percent'].includes(field.fieldtype))
    return Number(value) || 0
  if (field.fieldtype === 'Date' && String(value).toLowerCase() === 'today') {
    return new Date().toISOString().slice(0, 10)
  }
  return value
}
