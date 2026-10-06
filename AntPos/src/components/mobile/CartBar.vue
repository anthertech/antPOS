<template>
  <div
    class="shrink-0 border-t border-outline-gray-1 bg-surface-white px-3 py-2"
  >
    <button
      type="button"
      class="flex h-12 w-full items-center gap-3 rounded-lg px-4 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3"
      :class="
        count
          ? 'bg-surface-gray-7 text-ink-white active:opacity-90'
          : 'cursor-default bg-surface-gray-2 text-ink-gray-5'
      "
      :disabled="!count"
      :aria-label="
        count
          ? `View cart, ${count} ${count === 1 ? 'item' : 'items'}, total ${total}`
          : 'Cart is empty'
      "
      @click="mobile.showCart()"
    >
      <span class="relative">
        <LucideShoppingCart class="h-5 w-5" />
        <span
          v-if="count"
          :key="count"
          class="num absolute -right-2.5 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-surface-green-3 px-1 text-[10px] font-semibold text-ink-white animate-[pos-pop_200ms_ease-out]"
        >
          {{ count }}
        </span>
      </span>
      <span class="flex-1 text-base font-medium">
        {{
          count ? (count === 1 ? '1 item' : `${count} items`) : 'Cart is empty'
        }}
      </span>
      <span v-if="count" class="num text-base font-semibold">{{ total }}</span>
      <LucideChevronRight v-if="count" class="h-5 w-5 opacity-70" />
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import LucideShoppingCart from '~icons/lucide/shopping-cart'
import LucideChevronRight from '~icons/lucide/chevron-right'
import { useMobileView } from '@/stores/mobile'
import { useCartTotals } from '@/composables/useCartTotals'

const mobile = useMobileView()
const { qty, grand } = useCartTotals()

// Units, not lines: two of the same item count as two.
const count = computed(() => Math.abs(qty.value))
const total = computed(() => Number(grand.value).toFixed(2))
</script>
