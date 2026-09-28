import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { generateTempName, createDoctypeResource } from '@/utils'

export const useInvoiceStore = defineStore('salesInvoice', () => {
  const invoice = ref({})
  const items = ref([])
  const invoiceCustomer = ref({})
  // This sale's "sales order" choice; null means use the POS Profile default.
  // Kept here rather than on the profile so it does not carry over to the
  // next sale (see composables/useSaleMode.js).
  const salesOrderChoice = ref(null)

  // Net, tax and grand totals come from the server, a moment after each cart
  // change. They are only valid for the cart they were computed for, so the
  // signature of that cart is kept alongside them (see useInvoiceRecalc).
  const totalsFor = ref(null)
  const cartSignature = computed(() =>
    signatureOf(items.value, invoice.value, invoiceCustomer.value),
  )
  // A submitted or paying invoice holds the saved figures; nothing to wait for.
  const totalsPending = computed(
    () =>
      items.value.length > 0 &&
      !invoice.value?.docstatus &&
      totalsFor.value !== cartSignature.value,
  )
  // A replaced invoice (new sale, held sale, return, saved draft) carries
  // totals the current lines have not been checked against.
  watch(
    invoice,
    () => {
      totalsFor.value = null
    },
    { flush: 'sync' },
  )

  // Items being looked up or added right now. Pressing Pay while one is in
  // flight used to save the invoice without it: the line still appeared in the
  // cart, so the customer could walk out with an item that was never charged.
  const addsInFlight = ref(0)
  const adding = computed(() => addsInFlight.value > 0)

  function startAdd() {
    addsInFlight.value += 1
  }

  function finishAdd() {
    addsInFlight.value = Math.max(0, addsInFlight.value - 1)
  }

  // Nothing may be added once the sale has moved to the payment screen.
  const takingPayment = computed(() => Boolean(invoice.value?.docstatus))

  const invoiceResource = createDoctypeResource('Sales Invoice', (data) => {
    invoice.value = {
      ...data,
      name: generateTempName(data.doctype),
    }
  })

  function unmount() {
    invoice.value = {}
    items.value = []
    invoiceCustomer.value = {}
    salesOrderChoice.value = null
  }

  // Remove by identity, not by position: a second quick click could
  // otherwise hit whichever line had moved into that position.
  function removeLine(line) {
    let index = items.value.indexOf(line)
    if (index === -1 && line?.custom_id != null) {
      index = items.value.findIndex(
        (l) => String(l.custom_id) === String(line.custom_id),
      )
    }
    if (index !== -1) items.value.splice(index, 1)
  }

  async function unmountAndRefresh(includeCustomer) {
    invoice.value = {}
    items.value = []
    salesOrderChoice.value = null
    await invoiceResource.fetch()

    if (includeCustomer) {
      invoiceCustomer.value = {}
    }
  }

  return {
    invoice,
    items,
    invoiceCustomer,
    salesOrderChoice,
    totalsFor,
    cartSignature,
    totalsPending,
    adding,
    takingPayment,
    startAdd,
    finishAdd,
    invoiceResource,
    removeLine,
    unmount,
    unmountAndRefresh,
  }
})

// Everything that changes the server's totals, as one comparable string.
// Values are normalised so "5" and 5 (or 5.0 from the server) compare equal.
function signatureOf(lines, invoice, customer) {
  const num = (v) => (v === '' || v == null ? '' : Number(v))
  const parts = lines.map((l) =>
    [
      l.custom_id,
      l.item_code,
      num(l.qty),
      num(l.rate),
      l.uom || '',
      l.batch_no?.value ?? l.batch_no ?? '',
      num(l.discount_percentage),
      (l.selected_serial_no || []).length,
    ].join('|'),
  )
  parts.push(
    [
      customer?.name || '',
      invoice?.is_return ? 1 : 0,
      num(invoice?._discount_amount),
      num(invoice?._additional_discount_percentage),
    ].join('|'),
  )
  return parts.join(';')
}
