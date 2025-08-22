<template>
  <div>
    <FrappeUIProvider>
      <div class="w-screen h-screen flex select-none ">
        <div v-if="currentComponent">
          <component :is="currentComponent" @switchComponent="loadComponent" />
        </div>
        <Sidebar :class="w-full" />
        <div class="w-full h-full">
          <Navbar />
          <div class="w-[calc(100%-var(--sidebar-width))]  h-[94%]">
            <router-view />
          </div>
        </div>
      </div>
    </FrappeUIProvider>
  </div>
</template>

<script setup>
import { FrappeUIProvider } from 'frappe-ui'
import { onBeforeMount, provide, watch, } from 'vue';
import { usePosProfileStore } from '@/stores/posProfile';
import { useDynamicComponent } from '@/utils/Dialog';
import { usePageMeta } from 'frappe-ui';  
import { getSettings } from '@/stores/settings';
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';

const { brand } = getSettings()
const { currentComponent, loadComponent } = useDynamicComponent();
  
provide('dynamicComponent', { currentComponent, loadComponent });

usePageMeta(() => {
  return {
    icon: brand.favicon ? brand.favicon : '/assets/ant_pos/antPOS.png',
  }
})

onBeforeMount(() => {
    usePosProfileStore().fetchPosProfile();
  });

  watch(() => usePosProfileStore().hasNoData, (val) => {
  if (val) {
    loadComponent('OpenShift')
  }
})

</script>
