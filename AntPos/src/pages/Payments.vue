<template>
    <div class="w-full h-full flex select-none">
        <Payment />
    </div>
</template>
<script setup>
import Payment from '@/components/Payment.vue';
import { usePermissionStore } from '@/stores/permission';
import { usePaymentStore } from '@/stores/payment'
import { onBeforeMount, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const permissionStore = usePermissionStore();
const paymentStore = usePaymentStore();


onBeforeMount(() => {
    if (
        !permissionStore.paymentEntryCanSubmit &&
        !permissionStore.paymentEntryCanCreate &&
        !permissionStore.paymentEntryCanPrint
    ) {
        if (window.history.length > 1) {
            router.go(-1); // Go back
        } else {
            router.push('/'); // Fallback to homepage
        }
    }
    paymentStore.paymentResource.fetch()
});
onUnmounted(()=>{
    paymentStore.unmount()
})
</script>