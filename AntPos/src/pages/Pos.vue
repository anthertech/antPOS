<template>
  <!-- Issue #19: the two-pane split only works with room for both panes. Below
       1024px the scan box stacks above the cart instead of being squeezed. -->
  <component :is="isDesktop ? DesktopLayout : MobileLayout" />
</template>

<script setup>
import { onBeforeMount, onUnmounted } from 'vue'
import { useInvoiceStore } from '@/stores/pos'
import { useBreakpoint } from '@/composables/useBreakpoint'
import { useInvoiceRecalc } from '@/composables/useInvoiceRecalc'
import DesktopLayout from '@/layouts/DesktopLayout.vue'
import MobileLayout from '@/layouts/MobileLayout.vue'

const invoiceStore = useInvoiceStore()
const { isDesktop } = useBreakpoint()
useInvoiceRecalc()

onBeforeMount(() => {
  invoiceStore.invoiceResource.fetch()
})

onUnmounted(() => {
  invoiceStore.unmount()
})
</script>
