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
import { useInvoiceStore } from '@/stores/pos';

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
