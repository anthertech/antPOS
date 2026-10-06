<template>
  <!-- Phones: one task per screen.
         items   -> customer, scan/search and the item list, with a cart bar
         cart    -> lines, totals and Pay (top bar has the way back)
         payment -> the payment panel, full screen -->
  <div class="flex h-full w-full min-h-0 select-none flex-col bg-surface-white">
    <Invoice v-if="paying" compact />

    <ItemDetail v-else-if="mobile.view === 'cart'" compact />

    <template v-else>
      <CustomerBar
        v-model:customer="invoiceStore.invoiceCustomer"
        @create="loadComponent('CustomerForm')"
      />
      <ItemSelector compact />
      <CartBar />
    </template>
  </div>
</template>

<script setup>
import { computed, inject, watch } from 'vue'
import ItemSelector from '@/components/ItemSelector.vue'
import ItemDetail from '@/components/ItemDetail.vue'
import Invoice from '@/components/Invoice.vue'
import CustomerBar from '@/components/pos/CustomerBar.vue'
import CartBar from '@/components/mobile/CartBar.vue'
import { useInvoiceStore } from '@/stores/pos'
import { useMobileView } from '@/stores/mobile'

const invoiceStore = useInvoiceStore()
const mobile = useMobileView()
const { loadComponent } = inject('dynamicComponent')

const paying = computed(() => Boolean(invoiceStore.invoice?.docstatus))

// An empty cart has nothing to show: after a sale is submitted or cancelled,
// or the last line is removed, return to the item list.
watch(
  () => invoiceStore.items.length,
  (count) => {
    if (!count && !paying.value) mobile.showItems()
  },
)
</script>
