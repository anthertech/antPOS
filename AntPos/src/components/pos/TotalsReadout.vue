<template>
  <!-- While a newer cart is being recalculated, figures that depend on the
       server are estimates and are dimmed. -->
  <div class="flex items-end justify-between gap-4" :aria-busy="pending">
    <dl class="flex min-w-0 flex-wrap gap-x-5 gap-y-1 text-sm">
      <div>
        <dt class="text-ink-gray-5">Items</dt>
        <dd class="num text-base font-medium text-ink-gray-8">
          {{ formatQty(qty) }}
        </dd>
      </div>
      <div>
        <dt class="text-ink-gray-5">Net</dt>
        <dd
          class="num text-base font-medium text-ink-gray-8 transition-opacity"
          :class="pending ? 'opacity-50' : ''"
        >
          {{ money(net) }}
        </dd>
      </div>
      <div>
        <dt class="text-ink-gray-5">Tax</dt>
        <dd
          class="num text-base font-medium text-ink-gray-8 transition-opacity"
          :class="pending ? 'opacity-50' : ''"
        >
          {{ money(tax) }}
        </dd>
      </div>
      <div v-if="discount">
        <dt class="text-ink-gray-5">Discount</dt>
        <dd class="num text-base font-medium text-ink-green-3">
          &minus;{{ money(discount) }}
        </dd>
      </div>
    </dl>

    <div class="shrink-0 text-right">
      <div class="text-sm text-ink-gray-5">
        {{ isReturn ? 'Refund' : 'Total' }}
      </div>
      <div
        class="num text-3xl font-semibold leading-tight tracking-tight transition-opacity lg:text-4xl"
        :class="[
          isReturn ? 'text-ink-red-4' : 'text-ink-gray-9',
          pending ? 'opacity-50' : '',
        ]"
      >
        <span class="mr-1 text-lg font-medium text-ink-gray-5 lg:text-xl">{{
          currency
        }}</span
        >{{ money(grandTotal) }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useInvoiceStore } from '@/stores/pos'
import { usePosProfileStore } from '@/stores/posProfile'
import { useCartTotals } from '@/composables/useCartTotals'

const invoiceStore = useInvoiceStore()
const profileStore = usePosProfileStore()
const invoice = computed(() => invoiceStore.invoice || {})
const { qty, net, tax, discount, grand: grandTotal, pending } = useCartTotals()

const currency = computed(
  () => invoice.value.currency || profileStore.posProfileData?.currency || '',
)
const isReturn = computed(() => Boolean(invoice.value.is_return))

function money(value) {
  return Number(value || 0).toFixed(2)
}

function formatQty(value) {
  return Number.isInteger(value) ? String(value) : Number(value).toFixed(2)
}
</script>
