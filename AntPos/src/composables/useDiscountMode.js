import { computed } from 'vue'
import { usePosProfileStore } from '@/stores/posProfile'

// How discounts are entered, from the POS Profile:
// - "Allow User to Edit Discount" (standard) decides whether they can be;
// - "Use Percentage Discount" (antPOS) picks percent; otherwise an amount.
// Only the chosen kind is editable, on the invoice and on each line; the
// other is shown, worked out from it.
export function useDiscountMode() {
  const store = usePosProfileStore()
  const canEdit = computed(() =>
    Boolean(store.posProfileData?.allow_discount_change),
  )
  const byPercent = computed(() =>
    Boolean(store.posProfileData?.custom_use_percentage_discount),
  )
  return { canEdit, byPercent, byAmount: computed(() => !byPercent.value) }
}

// The invoice-level discount to send. Only the entered kind goes to the
// server: ERPNext recalculates the amount from any percentage it receives, so
// sending both (the percentage worked out on the client) let a typed amount
// drift, and was based on the previous totals.
export function invoiceDiscountFields(invoice, profile) {
  if (profile?.custom_use_percentage_discount) {
    return {
      additional_discount_percentage:
        Number(invoice._additional_discount_percentage) || 0,
      discount_amount: 0,
    }
  }
  return {
    additional_discount_percentage: 0,
    discount_amount: Number(invoice._discount_amount) || 0,
  }
}

// A line discount entered as an amount per unit: the rate follows, and the
// percentage is kept in step (ERPNext checks it against the item's maximum).
export function applyLineDiscountAmount(line, value) {
  const price = Number(line.price_list_rate) || 0
  const amount = Math.min(Math.max(Number(value) || 0, 0), price)
  line.discount_amount = amount
  line.rate = round(price - amount, 6)
  line.discount_percentage = price ? round((amount / price) * 100, 6) : 0
}

function round(value, places) {
  const f = 10 ** places
  return Math.round(value * f) / f
}
