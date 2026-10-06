<template>
  <header
    class="flex shrink-0 items-center gap-2 border-b border-outline-gray-1 bg-surface-white px-2"
    style="
      padding-top: env(safe-area-inset-top);
      min-height: calc(3.25rem + env(safe-area-inset-top));
    "
  >
    <button
      v-if="back"
      type="button"
      class="grid h-11 w-11 place-items-center rounded-full text-ink-gray-8 active:bg-surface-gray-2"
      :aria-label="back.label"
      @click="back.run()"
    >
      <LucideArrowLeft class="h-5 w-5" />
    </button>
    <img
      v-else
      :src="brand.logo || '/assets/ant_pos/antPOS.png'"
      alt=""
      class="ml-2 h-7 w-7 rounded object-contain"
    />

    <div class="min-w-0 flex-1 pl-1">
      <h1 class="truncate text-lg font-semibold leading-tight text-ink-gray-9">
        {{ title }}
      </h1>
      <p
        v-if="subtitle"
        class="num truncate text-xs leading-tight text-ink-gray-5"
      >
        {{ subtitle }}
      </p>
    </div>

    <Badge
      v-if="badge"
      :label="badge.label"
      :theme="badge.theme"
      variant="subtle"
      size="md"
      class="mr-2 shrink-0"
    />
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Badge } from 'frappe-ui'
import LucideArrowLeft from '~icons/lucide/arrow-left'
import { getSettings } from '@/stores/settings'
import { useInvoiceStore } from '@/stores/pos'
import { usePosProfileStore } from '@/stores/posProfile'
import { useMobileView } from '@/stores/mobile'
import { useSaleMode } from '@/composables/useSaleMode'

const route = useRoute()
const { brand } = getSettings()
const invoiceStore = useInvoiceStore()
const { asSalesOrder } = useSaleMode()
const profileStore = usePosProfileStore()
const mobile = useMobileView()

const onPos = computed(() => route.name === 'Pos')
const paying = computed(
  () => onPos.value && Boolean(invoiceStore.invoice?.docstatus),
)
const inCart = computed(
  () => onPos.value && !paying.value && mobile.view === 'cart',
)

const title = computed(() => {
  if (paying.value) return invoiceStore.invoice.is_return ? 'Refund' : 'Payment'
  if (inCart.value) return 'Cart'
  return { Payments: 'Payments' }[route.name] || 'Point of sale'
})

const subtitle = computed(() => {
  if (paying.value) return invoiceStore.invoice.name
  if (inCart.value)
    return invoiceStore.invoiceCustomer?.name || 'No customer selected'
  return profileStore.posProfileData?.name || ''
})

const back = computed(() => {
  if (paying.value) {
    // Same as the panel's "Back to cart": the draft is kept.
    return {
      label: 'Back to cart',
      run: () => {
        invoiceStore.invoice.docstatus = 0
        mobile.showCart()
      },
    }
  }
  if (inCart.value) return { label: 'Back to items', run: mobile.showItems }
  return null
})

const badge = computed(() => {
  if (!onPos.value || paying.value) return null
  if (invoiceStore.invoice?.is_return)
    return { label: 'Return', theme: 'orange' }
  if (!invoiceStore.items.length)
    return asSalesOrder.value ? { label: 'Order', theme: 'green' } : null
  // A temp name (new-...) means the sale has never been saved.
  const saved = !String(invoiceStore.invoice?.name || '').startsWith('new-')
  const kind = asSalesOrder.value ? 'Order · ' : ''
  return saved
    ? { label: `${kind}Draft`, theme: 'blue' }
    : { label: `${kind}Not saved`, theme: 'gray' }
})
</script>
