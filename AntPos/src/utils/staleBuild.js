import { createToast } from '@/utils'
import { useInvoiceStore } from '@/stores/pos'

// After antPOS is rebuilt or updated, a tab that was already open still
// points at the old code files, which no longer exist. Opening a dialog or
// page then failed silently: nothing popped up and only the console said why.
//
// With an empty cart, reload once to pick up the new version. With a sale in
// progress, ask first: a reload would drop lines that are not saved yet.

const RELOAD_KEY = 'antpos:stale-build-reload'
const RELOAD_GUARD_MS = 30 * 1000
let notified = false
let reloading = false

export function isStaleBuildError(error) {
  const message = String(error?.message || error || '')
  return /dynamically imported module|Importing a module script failed|error loading dynamically imported module|Unable to preload CSS/i.test(
    message,
  )
}

export function handleStaleBuild() {
  // Vite's preload event and the caller's catch can both report one failure.
  if (reloading) return
  let cartHasLines = false
  try {
    cartHasLines = useInvoiceStore().items.length > 0
  } catch {
    // Store not ready (very early failure): nothing to lose.
  }

  if (!cartHasLines && !reloadedRecently()) {
    rememberReload()
    reloading = true
    window.location.reload()
    return
  }

  // Either a sale is open, or a reload already happened and did not help
  // (server still serving old files): say so instead of looping.
  if (notified) return
  notified = true
  createToast({
    title: 'antPOS was updated',
    message: cartHasLines
      ? 'Reload to continue. Hold this sale first so its lines are kept.'
      : 'Reload the page to continue. If this keeps happening, ask your administrator to clear the site cache.',
    type: 'warning',
    timeout: 0,
    closable: true,
    action: { label: 'Reload', onClick: () => window.location.reload() },
  })
}

function reloadedRecently() {
  try {
    return (
      Date.now() - Number(sessionStorage.getItem(RELOAD_KEY) || 0) <
      RELOAD_GUARD_MS
    )
  } catch {
    return true
  }
}

function rememberReload() {
  try {
    sessionStorage.setItem(RELOAD_KEY, String(Date.now()))
  } catch {
    // Without storage we cannot guard against a loop; reloadedRecently()
    // then reports true, so this path is not reached.
  }
}
