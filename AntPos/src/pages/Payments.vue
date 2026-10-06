<template>
  <div class="w-full h-full flex select-none">
    <Payment />
  </div>
</template>
<script setup>
import Payment from '@/components/Payment.vue'
import { usePaymentStore } from '@/stores/payment'
import { onBeforeMount, onUnmounted } from 'vue'

// Access is checked by the router (route meta) once permissions are loaded.
const paymentStore = usePaymentStore()

onBeforeMount(() => {
  paymentStore.paymentResource.fetch()
})
onUnmounted(() => {
  paymentStore.unmount()
})
</script>
