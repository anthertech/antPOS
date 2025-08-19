<template>
    <div class="w-screen h-screen flex select-none">
        <Sidebar :class="w-full" :collapse="collapse"/>
        <div class="w-full h-full flex flex-col">
            <Navbar />
            <Payment />
        </div>
    </div>

</template>
<script setup>
import { usePageMeta } from 'frappe-ui';
import { ref, provide } from 'vue';
import Payment from '@/component/Payment.vue';
import Navbar from '@/component/Navbar.vue';

import Sidebar from '@/component/Sidebar.vue';
import { useDynamicComponent } from '@/utils/Dialog';
import  { getSettings } from '@/stores/settings';


const collapse = ref(true)
const { currentComponent, loadComponent } = useDynamicComponent();
const { brand } = getSettings()
loadComponent('OpenShift');
  provide('dynamicComponent', { currentComponent, loadComponent });
  
  usePageMeta(() => {
    return {
      icon: brand.favicon ? brand.favicon : '/assets/ant_pos/antPOS.png',
    }
  })  






    
    
    
   
</script>