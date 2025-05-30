<template>
    <div class="w-full h-[94%] flex p-2 gap-4">
        <div class="w-full h-full flex flex-col md:flex-row gap-4">
            <component :is="componentMap[base?.invoice?.status ? 'Invoice' : 'ItemSelector']" />
            <ItemDetail />
        </div>
    </div>
  </template>
  
  <script setup>
  import { inject } from 'vue';
  import ItemSelector from './ItemSelector.vue';
  import Invoice from './Invoice.vue';
  import ItemDetail from './ItemDetail.vue';
  
  let base = inject('base');
  
  // Map string names to actual components
  const componentMap = {
    Invoice,
    ItemSelector,
  };
  </script>
  