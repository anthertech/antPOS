// Opens Frappe's print view for a Sales Invoice.
//
// Replaces two copies of a hand-built URL that (a) spanned two lines, so a
// newline and indentation leaked into the query string, (b) sent
// format=undefined when the profile had no print format, (c) asked Frappe to
// hide the letterhead precisely when the profile named one, and (d) took the
// host from a server call that strips "www.", which can point at a different
// origin than the POS is running on.
export function openInvoicePrint(name, profile = {}) {
  if (!name) return null

  const params = new URLSearchParams({
    doctype: 'Sales Invoice',
    name,
    trigger_print: '1',
  })
  if (profile.print_format) params.set('format', profile.print_format)
  if (profile.letter_head) {
    params.set('letterhead', profile.letter_head)
    params.set('no_letterhead', '0')
  }

  return printInFrame(`${window.location.origin}/printview?${params}`)
}

// Printing happens after the invoice is saved, outside the click, so a new
// tab would be stopped by popup blockers. A hidden same-origin frame is not;
// Frappe's print view (trigger_print) opens the print dialog once it loads.
let frame = null

function printInFrame(url) {
  frame?.remove()
  frame = document.createElement('iframe')
  frame.setAttribute('aria-hidden', 'true')
  frame.tabIndex = -1
  Object.assign(frame.style, {
    position: 'fixed',
    right: '0',
    bottom: '0',
    width: '0',
    height: '0',
    border: '0',
    opacity: '0',
  })
  // The dialog opens while the frame is still loading, so the frame is kept
  // (only one at a time) and replaced by the next print.
  frame.src = url
  document.body.appendChild(frame)
  return frame
}
