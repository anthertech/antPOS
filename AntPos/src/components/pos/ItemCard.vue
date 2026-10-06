<template>
  <!-- Compact card: a small thumbnail beside the text rather than a large image
       area, so roughly twice as many items fit -- most catalogues have few
       product photos, and a big initials tile is wasted space. -->
  <button
    type="button"
    class="group flex min-w-0 flex-col rounded-lg border bg-surface-white p-2 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3"
    :class="[
      unavailable || disabled
        ? 'cursor-not-allowed border-outline-gray-1 opacity-60'
        : 'border-outline-gray-1 hover:border-outline-gray-3 hover:shadow-sm active:bg-surface-gray-1',
    ]"
    :disabled="unavailable || disabled"
    :aria-label="ariaLabel"
    @click="$emit('select', item)"
  >
    <div class="flex min-w-0 items-start gap-2">
      <div
        v-if="!hideImages"
        class="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-md bg-surface-gray-2"
      >
        <img
          v-if="item.image && !imageFailed"
          :src="item.image"
          alt=""
          loading="lazy"
          class="h-full w-full object-cover"
          @error="imageFailed = true"
        />
        <span
          v-else
          class="select-none text-sm font-semibold text-ink-gray-5"
          >{{ initials }}</span
        >
      </div>
      <div class="min-w-0 flex-1">
        <p
          class="line-clamp-2 text-sm font-medium leading-snug text-ink-gray-8"
        >
          {{ item.item_name || item.item_code }}
        </p>
        <p class="mt-0.5 truncate text-xs text-ink-gray-5">
          {{ item.item_code }}
        </p>
      </div>
    </div>

    <div class="mt-2 flex flex-wrap items-center gap-1">
      <span
        v-if="highlight && item.moved_qty"
        class="num inline-flex items-center gap-0.5 rounded bg-surface-amber-1 px-1 text-[11px] font-medium text-ink-amber-3"
      >
        <LucideTrendingUp class="h-3 w-3" />{{ formatQty(item.moved_qty) }} sold
      </span>
      <span
        v-if="item.has_batch_no"
        class="rounded bg-surface-gray-2 px-1 text-[11px] text-ink-gray-6"
        >Batch</span
      >
      <span
        v-if="item.has_serial_no"
        class="rounded bg-surface-gray-2 px-1 text-[11px] text-ink-gray-6"
        >Serial</span
      >
    </div>

    <div class="mt-auto flex items-end justify-between gap-1 pt-1.5">
      <span class="num truncate text-base font-semibold text-ink-gray-9">
        {{ item.rate == null ? 'No price' : money(item.rate) }}
      </span>
      <span
        v-if="item.is_stock_item"
        class="num shrink-0 text-xs"
        :class="stockClass"
      >
        {{ stockLabel }}
      </span>
    </div>
  </button>
</template>

<script setup>
import { computed, ref } from 'vue'
import LucideTrendingUp from '~icons/lucide/trending-up'

const props = defineProps({
  item: { type: Object, required: true },
  hideImages: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  // Most-moving cards show how much sold.
  highlight: { type: Boolean, default: false },
  allowNegativeStock: { type: Boolean, default: false },
})
defineEmits(['select'])

const imageFailed = ref(false)

const qty = computed(() => Number(props.item.actual_qty || 0))
// Only stock items can run out; services and non-stock items are always sellable.
const outOfStock = computed(
  () => Boolean(props.item.is_stock_item) && qty.value <= 0,
)
const unavailable = computed(
  () => outOfStock.value && !props.allowNegativeStock,
)

const initials = computed(() => {
  const words = String(props.item.item_name || props.item.item_code || '?')
    .trim()
    .split(/\s+/)
  return (
    words.length > 1 ? words[0][0] + words[1][0] : words[0].slice(0, 2)
  ).toUpperCase()
})

const stockLabel = computed(() =>
  outOfStock.value ? 'Out of stock' : `${formatQty(qty.value)} in stock`,
)
const stockClass = computed(() => {
  if (outOfStock.value) return 'text-ink-red-4'
  if (qty.value <= 5) return 'text-ink-amber-3'
  return 'text-ink-gray-5'
})

const ariaLabel = computed(() => {
  const parts = [props.item.item_name || props.item.item_code]
  if (props.item.rate != null) parts.push(money(props.item.rate))
  if (props.item.is_stock_item) parts.push(stockLabel.value)
  return `Add ${parts.join(', ')}`
})

function money(value) {
  return Number(value || 0).toFixed(2)
}

function formatQty(value) {
  const n = Number(value || 0)
  return Number.isInteger(n) ? String(n) : n.toFixed(2)
}
</script>
