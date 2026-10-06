import { computed } from 'vue'
import { dayjsLocal } from 'frappe-ui'
import { useInvoiceStore } from '@/stores/pos'
import { usePosProfileStore } from '@/stores/posProfile'

// Whether the open sale is also booked as a Sales Order.
//
// POS Profile has "Allow Create Sales Order" (the cashier may choose) and
// "Default Sales Order" (the starting choice). The header switch used to write
// the choice into the profile itself, so turning it on once made every later
// sale a sales order until the page was reloaded.
export function useSaleMode() {
  const invoiceStore = useInvoiceStore()
  const profileStore = usePosProfileStore()

  const profile = computed(() => profileStore.posProfileData || {})
  const defaultOn = computed(() =>
    Boolean(profile.value.custom_set_sales_order),
  )

  // Returns are credit notes; they never create an order.
  const available = computed(
    () =>
      Boolean(profile.value.custom_create_sales_order || defaultOn.value) &&
      !invoiceStore.invoice?.is_return,
  )

  // Only offer a choice when the profile allows one; a profile that only
  // sets the default always creates the order.
  const canChoose = computed(
    () => available.value && Boolean(profile.value.custom_create_sales_order),
  )

  const asSalesOrder = computed({
    get: () =>
      available.value && (invoiceStore.salesOrderChoice ?? defaultOn.value),
    set: (value) => {
      invoiceStore.salesOrderChoice = Boolean(value)
    },
  })

  const today = () => dayjsLocal().format('YYYY-MM-DD')

  const deliveryDate = computed({
    get: () => invoiceStore.invoice?.delivery_date || today(),
    set: (value) => {
      invoiceStore.invoice.delivery_date = value || today()
    },
  })

  // Sales Order requires a delivery date; fill the shown default in before saving.
  const ensureDeliveryDate = () => {
    if (!invoiceStore.invoice.delivery_date)
      invoiceStore.invoice.delivery_date = today()
  }

  return {
    available,
    canChoose,
    asSalesOrder,
    deliveryDate,
    ensureDeliveryDate,
  }
}
