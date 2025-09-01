<template>
  <div class="flex select-none w-full h-full gap-2 p-2">
    <component :is="currentComponent" />
    <ItemDetail />
  </div>
</template>

<script setup>
import { computed, inject, onBeforeMount } from 'vue';
import ItemSelector from '@/components/ItemSelector.vue';
import Invoice from '@/components/Invoice.vue';
import ItemDetail from '@/components/ItemDetail.vue';
import { usePosProfileStore } from '@/stores/posProfile';
import { useSessionStore } from '@/stores/session';
import { useInvoiceStore } from '@/stores/salesInvoice';

const base = inject('base');
const posProfileStore = usePosProfileStore();
const sessionStore = useSessionStore();
const invoiceStore = useInvoiceStore();

const componentMap = {
  Invoice,
  ItemSelector,
};

const currentComponent = computed(() =>
  invoiceStore.invoice.docstatus ? componentMap.Invoice : componentMap.ItemSelector
);



onBeforeMount(() => {
    
  invoiceStore.invoiceResource.fetch()
  
});

</script>
