import { ref, computed } from 'vue'
import { call } from 'frappe-ui'

// Same model as the Frappe desk (frappe/public/js/frappe/ui/theme_switcher.js):
// <html data-theme-mode> holds the choice (light | dark | automatic) and
// <html data-theme> the resolved scheme that frappe-ui's tokens key off. The
// choice is stored on the User as desk_theme, so the desk and the POS share it.
const MODES = ['light', 'dark', 'automatic']
const STORAGE_KEY = 'antpos-theme-mode'
const darkQuery =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null

function initialMode() {
  const fromPage = document.documentElement.getAttribute('data-theme-mode')
  if (MODES.includes(fromPage)) return fromPage
  const fromBoot = String(window.desk_theme || '').toLowerCase()
  return MODES.includes(fromBoot) ? fromBoot : 'light'
}

const mode = ref(initialMode())
const systemDark = ref(Boolean(darkQuery?.matches))
const resolved = computed(() =>
  mode.value === 'dark' || (mode.value === 'automatic' && systemDark.value)
    ? 'dark'
    : 'light',
)

function apply() {
  const root = document.documentElement
  root.setAttribute('data-theme-mode', mode.value)
  root.setAttribute('data-theme', resolved.value)
  root.style.colorScheme = resolved.value
}

let initialised = false

export function useTheme() {
  if (!initialised) {
    initialised = true
    apply()
    // Automatic follows the OS live, as the desk does.
    darkQuery?.addEventListener('change', (e) => {
      systemDark.value = e.matches
      apply()
    })
  }

  async function setTheme(next) {
    next = String(next).toLowerCase()
    if (!MODES.includes(next) || next === mode.value) return
    mode.value = next
    apply()
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // storage unavailable; the server copy below is the one that matters
    }
    // Title case, as frappe.core.doctype.user.user.switch_theme expects.
    await call('frappe.core.doctype.user.user.switch_theme', {
      theme: next.charAt(0).toUpperCase() + next.slice(1),
    })
  }

  // Cycles light -> dark -> light, like the desk's Ctrl+Shift+G.
  function toggleTheme() {
    return setTheme(resolved.value === 'dark' ? 'light' : 'dark')
  }

  return { mode, resolved, setTheme, toggleTheme }
}
