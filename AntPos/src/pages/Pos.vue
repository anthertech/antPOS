<template>
  <div class="flex select-none w-full h-full gap-2 p-2">
    <component :is="currentComponent" />
    <ItemDetail />
  </div>
</template>

<script setup>
import { computed, inject } from 'vue';
import ItemSelector from '@/components/ItemSelector.vue';
import Invoice from '@/components/Invoice.vue';
import ItemDetail from '@/components/ItemDetail.vue';
const base = inject('base');

const componentMap = {
  Invoice,
  ItemSelector,
};

const currentComponent = computed(() =>
  base?.invoice?.status ? componentMap.Invoice : componentMap.ItemSelector
);

</script>
