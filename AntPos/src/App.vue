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
import { inject, watch } from 'vue';
import { usePosProfileStore } from '@/stores/posProfile';
import { usePageMeta } from 'frappe-ui';
import { getSettings } from '@/stores/settings';
import { useSessionStore } from '@/stores/session';
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';

const { brand } = getSettings()
const { currentComponent, loadComponent } = inject('dynamicComponent');
const posProfileStore = usePosProfileStore();
const sessionStore = useSessionStore();

usePageMeta(() => {
  return {
    icon: brand.favicon ? brand.favicon : '/assets/ant_pos/antPOS.png',
  }
})

watch(
  () => posProfileStore.hasNoData,
  (val) => {

    if (val && sessionStore.isLoggedIn) {
      loadComponent('OpenShift')
    } 
  }
)
</script>
