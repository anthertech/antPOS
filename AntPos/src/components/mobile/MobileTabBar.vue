<template>
  <nav
    class="flex shrink-0 items-stretch border-t border-outline-gray-1 bg-surface-white"
    style="padding-bottom: env(safe-area-inset-bottom)"
    aria-label="Main"
  >
    <button
      v-for="tab in tabs"
      :key="tab.key"
      type="button"
      class="relative flex min-h-[3.5rem] flex-1 flex-col items-center justify-center gap-0.5 text-[11px] font-medium transition-colors focus:outline-none focus-visible:bg-surface-gray-2"
      :class="
        tab.active
          ? 'text-ink-gray-9'
          : 'text-ink-gray-5 active:bg-surface-gray-1'
      "
      :aria-current="tab.active ? 'page' : undefined"
      @click="tab.run()"
    >
      <span
        v-if="tab.active"
        class="absolute inset-x-6 top-0 h-0.5 rounded-full bg-surface-gray-7"
        aria-hidden="true"
      />
      <component
        :is="tab.icon"
        class="h-5 w-5"
        :stroke-width="tab.active ? 2.25 : 1.75"
      />
      {{ tab.label }}
    </button>
  </nav>
</template>

<script setup>
import { computed, inject, markRaw } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import LucideShoppingCart from '~icons/lucide/shopping-cart'
import LucideClock from '~icons/lucide/clock'
import LucideCreditCard from '~icons/lucide/credit-card'
import LucideMenu from '~icons/lucide/menu'
import { usePermissionStore } from '@/stores/permission'
import { useMobileView } from '@/stores/mobile'

const route = useRoute()
const router = useRouter()
const permissions = usePermissionStore()
const mobile = useMobileView()
const { loadComponent } = inject('dynamicComponent')

const canSell = computed(
  () =>
    permissions.salesInvoiceCanSubmit ||
    permissions.salesInvoiceCanCreate ||
    permissions.salesInvoiceCanPrint,
)
const canTakePayments = computed(
  () =>
    permissions.paymentEntryCanSubmit ||
    permissions.paymentEntryCanCreate ||
    permissions.paymentEntryCanPrint,
)

const goSell = () => {
  mobile.showItems()
  if (route.name !== 'Pos') router.push({ name: 'Pos' })
}

const tabs = computed(() => {
  const list = []
  if (canSell.value) {
    list.push({
      key: 'sell',
      label: 'Sell',
      icon: markRaw(LucideShoppingCart),
      active: route.name === 'Pos',
      run: goSell,
    })
    list.push({
      key: 'held',
      label: 'Held',
      icon: markRaw(LucideClock),
      active: false,
      // Held sales load into the POS cart, so open them from there.
      run: () => {
        goSell()
        loadComponent('Held')
      },
    })
  }
  if (canTakePayments.value) {
    list.push({
      key: 'payments',
      label: 'Payments',
      icon: markRaw(LucideCreditCard),
      active: route.name === 'Payments',
      run: () => router.push({ name: 'Payments' }),
    })
  }
  list.push({
    key: 'more',
    label: 'More',
    icon: markRaw(LucideMenu),
    active: mobile.moreOpen,
    run: () => (mobile.moreOpen = true),
  })
  return list
})
</script>
