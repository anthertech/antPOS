import { createDocumentResource } from 'frappe-ui'
import { reactive, ref } from 'vue'

// Which page the Settings dialog opens on (profile | preferences | pos-profile | brand).
export const settingsPage = ref('profile')

const settings = ref({})

// The server renders the brand into the page (www/antPOS.py). Starting from
// it avoids a flash of the antPOS logo and favicon before Settings load.
// Outside Frappe (vite dev) the Jinja placeholder is not JSON.
function initialBrand() {
  let b
  try {
    b = JSON.parse(
      document.getElementById('antpos-brand')?.textContent || 'null',
    )
  } catch {
    b = null
  }
  if (!b || typeof b !== 'object') return {}
  return {
    name: b.name || undefined,
    logo: b.logo || undefined,
    favicon: b.favicon || undefined,
  }
}
const brand = reactive(initialBrand())

// Created lazily. This module is imported (via App.vue) before main.js calls
// setConfig('resourceFetcher', frappeRequest), so a resource created at import
// time used frappe-ui's default fetcher, requested the relative URL
// /antPOS/frappe.client.get, got the SPA's HTML back, and the brand settings
// never loaded.
let setting = null

// Reads the document resource first: after Settings saves, only `setting.doc`
// holds the new values (the fetch callback that fills `settings` does not
// run again), so the brand used to stay stale until a reload.
function setupBrand() {
  if (setting?.doc) settings.value = setting.doc
  brand.name = decodeEntities(settings.value?.brand_name)
  brand.logo = settings.value?.brand_logo
  brand.favicon = settings.value?.favicon
}

function ensureResource() {
  if (!setting) {
    setting = createDocumentResource({
      doctype: 'AntPOS Settings',
      name: 'AntPOS Settings',
      onSuccess: (data) => {
        settings.value = data
        setupBrand()
        return data
      },
    })
  }
  return setting
}

// Frappe stores Data fields HTML-escaped ("Tom &amp; Jerry"). Vue escapes
// on render, so decode first or the entities show up literally.
export function decodeEntities(value) {
  if (!value || !value.includes('&')) return value
  const doc = new DOMParser().parseFromString(value, 'text/html')
  return doc.documentElement.textContent
}

export function getSettings() {
  return {
    setting: ensureResource(),
    settings,
    brand,
    setupBrand,
  }
}
