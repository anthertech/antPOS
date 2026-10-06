<template>
  <div class="flex h-full w-full min-h-0 select-none bg-surface-gray-1 p-3">
    <!-- Pay saves the invoice as a draft and flags it for payment; the left pane
         then switches from the item list to the payment panel. Each pane keeps
         its own width, set by dragging the handle beside it. -->
    <div class="flex min-h-0 shrink-0" :style="{ width: `${leftWidth}px` }">
      <Invoice v-if="paying" />
      <ItemSelector v-else />
    </div>
    <PaneResizer
      :key="paying ? 'payment' : 'items'"
      v-model="leftWidth"
      :storage-key="paying ? 'pos-payment' : 'pos-items'"
      :default="(container) => clampDefault(container * 0.38)"
      :min="280"
      :min-other="460"
      :label="paying ? 'Resize payment panel' : 'Resize item list'"
    />
    <ItemDetail :paying="paying" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import ItemSelector from '@/components/ItemSelector.vue'
import ItemDetail from '@/components/ItemDetail.vue'
import Invoice from '@/components/Invoice.vue'
import PaneResizer from '@/components/PaneResizer.vue'
import { useInvoiceStore } from '@/stores/pos'

const invoiceStore = useInvoiceStore()
const paying = computed(() => Boolean(invoiceStore.invoice?.docstatus))

// The pane's old fixed size (38%, 300-520px) is the default.
const leftWidth = ref(380)
const clampDefault = (w) => Math.min(Math.max(w, 300), 520)
</script>
