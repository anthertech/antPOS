<template>
  <!-- Per-sale choice, shown with the cart it applies to. -->
  <div
    v-if="canChoose || asSalesOrder"
    class="flex shrink-0 flex-wrap items-center gap-x-3 gap-y-2 border-b border-outline-gray-1 px-3 py-2 lg:px-4"
  >
    <TabButtons
      v-if="canChoose"
      :buttons="MODES"
      :model-value="asSalesOrder ? 'order' : 'sale'"
      @update:model-value="asSalesOrder = $event === 'order'"
    />
    <span v-else class="text-sm font-medium text-ink-gray-7">Sales order</span>

    <div v-if="asSalesOrder" class="ml-auto flex min-w-0 items-center gap-2">
      <label :for="dateId" class="shrink-0 text-sm text-ink-gray-5"
        >Deliver by</label
      >
      <div class="w-36">
        <DatePicker
          :id="dateId"
          v-model="deliveryDate"
          variant="subtle"
          placeholder="Delivery date"
          :clearable="false"
        />
      </div>
    </div>
    <p v-else class="ml-auto hidden text-sm text-ink-gray-5 sm:block">
      Invoice now, no order
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { DatePicker, TabButtons } from 'frappe-ui'
import { useInvoiceStore } from '@/stores/pos'
import { useSaleMode } from '@/composables/useSaleMode'

const MODES = [
  { label: 'Sale', value: 'sale' },
  { label: 'Sales order', value: 'order' },
]

const invoiceStore = useInvoiceStore()
const { canChoose, asSalesOrder, deliveryDate } = useSaleMode()
const dateId = computed(() => `delivery-${invoiceStore.invoice?.name || 'new'}`)
</script>
