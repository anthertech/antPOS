import { onMounted, onUnmounted, watch } from 'vue'
import { call } from 'frappe-ui'
import { createToast } from '@/utils'
import emitter from '@/utils/emitter'
import { useInvoiceStore } from '@/stores/pos'
import { usePosProfileStore } from '@/stores/posProfile'
import { invoiceDiscountFields } from '@/composables/useDiscountMode'

// Server-side totals for the open sale, owned by the POS page.
//
// How stale replies are kept out: every request is numbered and carries the
// cart signature it was built from. A reply is applied only if it is the
// newest request AND the cart still has that signature. Anything else is
// dropped; the change that made it stale has already queued a new request.
// Replies used to be applied in arrival order, so a slow early reply could
// set a line's quantity back (typed 5, ended at 2) and leave the counters
// showing a cart that no longer existed.
//
// This used to live in ItemSelector and was only triggered by cart line
// components. On mobile the cart lines are not mounted while browsing items,
// so totals never updated there, and each ItemSelector remount added another
// set of emitter listeners. Call this once, from the always-mounted page.
export function useInvoiceRecalc() {
  const invoiceStore = useInvoiceStore()
  const store = usePosProfileStore()

  const remove_invoice = (include_customer = false) => {
    invoiceStore.unmountAndRefresh(include_customer)
  }

  // Totals are recalculated on every cart edit (scan, qty, serial, batch,
  // discount). If that call is failing, every edit used to raise another
  // "Internal Server Error" toast. Show one explanatory message, then stay quiet
  // while the same failure keeps repeating.
  const RECALC_ERROR_COOLDOWN_MS = 60 * 1000
  let lastRecalcError = { key: '', at: 0 }

  const notifyRecalcError = (error) => {
    let serverMessage = Array.isArray(error?.messages)
      ? error.messages[0]
      : error?.messages
    // frappe-ui substitutes this literal when the server crashed without a
    // message; it tells the cashier nothing.
    if (serverMessage === 'Internal Server Error') serverMessage = ''
    const key = serverMessage || error?.exc_type || error?.message || 'unknown'
    const now = Date.now()
    if (
      key === lastRecalcError.key &&
      now - lastRecalcError.at < RECALC_ERROR_COOLDOWN_MS
    ) {
      lastRecalcError.at = now
      return
    }
    lastRecalcError = { key, at: now }

    createToast({
      title: 'Totals could not be updated',
      // A validation message from the server is actionable; a crash is not,
      // so say what it means for the cashier instead of echoing the status.
      message:
        serverMessage ||
        'The server failed to calculate this invoice. Items are kept, but totals and taxes may be wrong. Ask your administrator to check the server error log.',
      icon: 'alert-triangle',
      iconClasses: 'bg-surface-red-5 text-ink-white rounded-md p-px',
      position: 'top-center',
      timeout: 8,
    })
  }

  // Fields a totals recalculation must never overwrite: identity and document
  // state belong to the saved draft, and items are merged separately below.
  const RECALC_SKIP_KEYS = new Set([
    'items',
    'name',
    'docstatus',
    'doctype',
    'status',
    'owner',
    'creation',
    'modified',
    'modified_by',
    'amended_from',
    '__islocal',
    '__unsaved',
  ])

  const RECALC_URL =
    'ant_pos.ant_pos.api.sales_invoice.calculate_invoice_item_taxes'
  const DEBOUNCE_MS = 300

  // custom_id is a Data field, so it can come back as a string.
  const lineId = (line) =>
    line.custom_id == null ? null : String(line.custom_id)

  let latestRequest = 0
  let timer = null

  const buildDoc = () =>
    JSON.stringify({
      ...invoiceStore.invoice,
      doctype: 'Sales Invoice',
      is_pos: invoiceStore.invoice.is_return ? invoiceStore.invoice.is_pos : 1,
      pos_profile: store.posProfileData.name,
      company: store.posProfileData.company,
      selling_price_list: store.posProfileData.selling_price_list,
      // ERPNext's own POS copies this from the profile; the invoice has no other source.
      disable_rounded_total: store.posProfileData.disable_rounded_total ? 1 : 0,
      items: invoiceStore.items,
      customer: invoiceStore.invoiceCustomer?.name,
      update_stock: 1,
      ...invoiceDiscountFields(invoiceStore.invoice, store.posProfileData),
      base_total: invoiceStore.invoice.base_total || 0,
      custom_ant_opening: store.openingShift.name,
      apply_discount_on: store.posProfileData.apply_discount_on,
    })

  // Serial and batch pickers read these UI copies of the server fields.
  const decorateLine = (item) => {
    if (item.serial_no) {
      item.selected_serial_no = item.serial_no
        .trim()
        .split('\n')
        .map((serial) => ({ label: serial, value: serial }))
    }
    item.selected_batch_no = item.batch_no
      ? { label: item.batch_no, value: item.batch_no }
      : null
  }

  const applyTotals = (data) => {
    for (const key in data) {
      if (RECALC_SKIP_KEYS.has(key)) continue
      if (
        JSON.stringify(invoiceStore.invoice[key]) !== JSON.stringify(data[key])
      ) {
        invoiceStore.invoice[key] = data[key]
      }
    }
    for (const returned of data.items || []) {
      const line = invoiceStore.items.find(
        (l) => lineId(l) === lineId(returned),
      )
      if (!line) continue
      decorateLine(returned)
      for (const key in returned) {
        if (key === 'custom_id') continue
        if (JSON.stringify(line[key]) !== JSON.stringify(returned[key])) {
          line[key] = returned[key]
        }
      }
    }
  }

  const send = async () => {
    timer = null
    // A submitted or paying invoice is the saved document; leave it alone.
    if (!invoiceStore.items.length || invoiceStore.invoice.docstatus) return
    if (!store.posProfileData?.name) return

    const request = ++latestRequest
    const signature = invoiceStore.cartSignature
    let data
    try {
      data = await call(RECALC_URL, { doc: buildDoc() })
    } catch (error) {
      if (request === latestRequest) notifyRecalcError(error)
      return
    }

    if (request !== latestRequest) return
    if (signature !== invoiceStore.cartSignature) return
    if (invoiceStore.invoice.docstatus) return

    applyTotals(data)
    // Applying can adjust lines (a pricing rule changing the rate), which
    // changes the signature; the watcher below then asks once more.
    invoiceStore.totalsFor =
      signature === invoiceStore.cartSignature ? signature : null
  }

  const schedule = () => {
    clearTimeout(timer)
    timer = setTimeout(send, DEBOUNCE_MS)
  }

  const calculateAmountTotal = () => {
    if (invoiceStore.items.length === 0) {
      // Nothing in flight may land on the fresh sale.
      latestRequest++
      clearTimeout(timer)
      remove_invoice(false)
      return
    }
    schedule()
  }

  // Recalculate whenever the cart differs from the one the totals are for:
  // any line or discount change, and any replaced invoice. This does not
  // depend on the cart lines being on screen (mobile item grid).
  watch(
    () => invoiceStore.totalsPending && invoiceStore.cartSignature,
    (pending) => {
      if (pending) schedule()
    },
    { immediate: true },
  )

  const onCalcTotal = () => calculateAmountTotal()
  const onRemoveInvoice = (include_customer) => {
    latestRequest++
    clearTimeout(timer)
    remove_invoice(include_customer)
  }

  onMounted(() => {
    emitter.on('calctotal', onCalcTotal)
    emitter.on('remove_invoice', onRemoveInvoice)
  })

  onUnmounted(() => {
    clearTimeout(timer)
    latestRequest++
    emitter.off('calctotal', onCalcTotal)
    emitter.off('remove_invoice', onRemoveInvoice)
  })

  return { calculateAmountTotal }
}
