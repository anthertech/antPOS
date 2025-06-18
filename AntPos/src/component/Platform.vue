<template>
  <div
    class="w-full h-full"
    :class="props.collapse ? 'xl:w-[97%]' : 'xl:w-[90%]'"
  >
        <Navbar />
        <component :is="componentMap[currentComponent]" />
    </div>
</template>

<script setup>
  import Navbar from '../component/Navbar.vue';
  import PaymentSelect from '../component/PaymentSelect.vue';
  import Pos from '../component/Pos.vue';
  import SalesInvoice from './SalesInvoice.vue';
  import emitter from '../utils/emitter';
  import { computed, inject, defineProps } from 'vue';
  
  
  const props = defineProps({
        collapse: {
            type: Boolean,
            required: true,
        },
  });
  const base = inject('base');

  const componentMap = {
    PaymentSelect,
    Pos,
    SalesInvoice
  };

  const currentComponent = computed(() => {
    if (base.page === 'payments') return 'PaymentSelect';
    if (base.page === 'salesinvoice') return 'SalesInvoice';
    return 'Pos';
  });

  emitter.on('updatePage', (page) => {
    base.items = [];
    base.invoice = {};
    base.customer = {};
    base.page = page;
  });

</script>