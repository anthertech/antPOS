<template>
  <div class="w-screen h-screen flex select-none">
    <div v-if="currentComponent">
        <component :is="currentComponent"  @switchComponent="loadComponent"  />
    </div>
    <Sidebar :class="w-full" :collapse="collapse"/>
    <Platform :collapse="collapse"/>
  </div>
</template>

<script setup>

  import Sidebar from '../component/Sidebar.vue';
  import Platform from '../component/Platform.vue';
  import { provide, ref, inject } from 'vue';
  import { useDynamicComponent } from '../utils/Dialog';
  import { usePageMeta } from 'frappe-ui';
  import emitter from '../utils/emitter';
  import  { getSettings } from '../stores/settings';

  const collapse=ref(true)
  const { currentComponent, loadComponent } = useDynamicComponent();
  const { brand } = getSettings()
  
  loadComponent('OpenShift');
  provide('dynamicComponent', { currentComponent, loadComponent });
  
  usePageMeta(() => {
    return {
      icon: brand.favicon ? brand.favicon : '/assets/ant_pos/antPOS.png',
    }
  })
  emitter.on('trigger_collapse', () => {
    
    collapse.value =!collapse.value
  });
</script>
