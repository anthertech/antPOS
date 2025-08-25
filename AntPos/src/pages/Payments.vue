<template>
    <div class="w-full h-full flex select-none">
        <Payment />
    </div>
</template>
<script setup>
import Payment from '@/components/Payment.vue';
import { usePermissionStore } from '@/stores/permissionStore';
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const permissionStore = usePermissionStore();

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
});
</script>