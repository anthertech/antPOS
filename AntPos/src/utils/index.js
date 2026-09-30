import { toast, createResource } from 'frappe-ui'

// frappe-ui 0.1.278's toast.create takes { message, type, duration (seconds),
// icon: Component }. It dropped `title`, `timeout`, `position` and string icon
// names, all of which the call sites in this app still pass. These two helpers
// translate the old shape so the ~30 call sites keep working.
const TOAST_TYPES = ['success', 'error', 'warning', 'info']

function toastType({ type, title, icon } = {}) {
  for (const hint of [type, title, icon]) {
    const h = String(hint || '').toLowerCase()
    if (TOAST_TYPES.includes(h)) return h
    if (h === 'x-circle' || h === 'x') return 'error'
    if (h === 'check' || h === 'check-circle') return 'success'
    if (h === 'alert-circle' || h === 'alert-triangle') return 'warning'
  }
  return 'info'
}

// The first readable message of a failed request.
export function errorMessage(error, fallback = 'Something went wrong.') {
  const messages = error?.messages
  return (
    (Array.isArray(messages) ? messages[0] : messages) ||
    error?.message ||
    fallback
  )
}

export function createToast(options = {}) {
  const type = toastType(options)
  // A title that only names the status ("error", "success") adds nothing.
  const title = TOAST_TYPES.includes(String(options.title || '').toLowerCase())
    ? ''
    : options.title
  const body = options.message ? htmlToText(options.message) : ''
  const message =
    title && body
      ? `<strong>${escapeHtml(title)}</strong> ${escapeHtml(body)}`
      : escapeHtml(title || body)

  return toast.create({
    message,
    type,
    duration: options.timeout ?? options.duration,
    closable: options.closable,
    action: options.action,
  })
}

// Kept for its existing call sites: showToast(status, text, icon, ...). The old
// colour arguments are ignored; toast colours follow the theme.
export function showToast(title, text, icon) {
  return createToast({ title, message: text, icon, timeout: 5 })
}

function htmlToText(html) {
  const div = document.createElement('div')
  div.innerHTML = String(html)
  return div.textContent || div.innerText || ''
}

function escapeHtml(text) {
  const div = document.createElement('div')
  div.textContent = String(text ?? '')
  return div.innerHTML
}

export function generateTempName(doctype) {
  const suffix = Math.random().toString(36).substring(2, 10)
  return `new-${doctype.toLowerCase().replace(/\s/g, '-')}-${suffix}`
}

// Factory function (can also be extracted to a separate file)
export function createDoctypeResource(doctype, onSuccessCallback) {
  return createResource({
    url: 'ant_pos.ant_pos.api.get_doc_field',
    method: 'POST',
    auto: false,
    makeParams(params) {
      return {
        doctype,
        ...params,
      }
    },
    onSuccess(data) {
      if (data) {
        onSuccessCallback(data)
      }
    },
    onError(error) {
      createToast({
        title: `Could not start a new ${doctype.toLowerCase()}`,
        message: errorMessage(error),
        type: 'error',
        timeout: 10,
      })
    },
  })
}
