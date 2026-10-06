import { computed } from 'vue'
import { useInvoiceStore } from '@/stores/pos'

// What the cart shows as its count and totals.
//
// The count and line amounts are worked out here, from the lines themselves,
// so they are right the instant a line changes. Net, tax and total come from
// the server; while a newer cart is being recalculated they are estimated from
// the lines and flagged `pending`, instead of showing figures for a cart that
// no longer exists.
export function useCartTotals() {
  const invoiceStore = useInvoiceStore()
  const invoice = computed(() => invoiceStore.invoice || {})
  const lines = computed(() => invoiceStore.items || [])

  const empty = computed(() => lines.value.length === 0)
  const pending = computed(() => invoiceStore.totalsPending)

  // Units, signed: a return shows a negative count, as ERPNext does.
  const qty = computed(() =>
    round(
      lines.value.reduce((sum, l) => sum + (Number(l.qty) || 0), 0),
      6,
    ),
  )

  const localNet = computed(() =>
    lines.value.reduce((sum, l) => sum + lineAmount(l), 0),
  )

  const serverNet = computed(() => Number(invoice.value.net_total) || 0)
  const serverGrand = computed(
    () => Number(invoice.value.rounded_total || invoice.value.grand_total) || 0,
  )

  const net = computed(() => {
    if (empty.value) return 0
    return pending.value ? localNet.value : serverNet.value
  })

  // While waiting, scale the last known figures by how the net moved, so
  // net + tax - discount still adds up to the total shown.
  const scale = computed(() => {
    if (!pending.value) return 1
    return serverNet.value ? localNet.value / serverNet.value : 0
  })

  const tax = computed(() =>
    empty.value
      ? 0
      : (Number(invoice.value.total_taxes_and_charges) || 0) * scale.value,
  )
  const discount = computed(() =>
    empty.value
      ? 0
      : (Number(invoice.value.discount_amount) || 0) * scale.value,
  )

  const grand = computed(() => {
    if (empty.value) return 0
    if (!pending.value) return serverGrand.value
    return serverNet.value ? serverGrand.value * scale.value : localNet.value
  })

  return { qty, net, tax, discount, grand, pending, empty }
}

// A line's amount from its own quantity and rate. The server's `amount` can
// belong to an older quantity while a recalculation is on its way.
export function lineAmount(line) {
  const rate = Number(line.rate ?? line.price_list_rate) || 0
  return round((Number(line.qty) || 0) * rate, 6)
}

function round(value, places) {
  const f = 10 ** places
  return Math.round(value * f) / f
}
