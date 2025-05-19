<template>
    <div class=" h-full" :class="props.collapse ? 'w-[90%]' : ' w-[97%]' ">
        <Navbar />
        <component :is="componentMap[currentComponent]" />
    </div>
</template>

<script setup>
  import Navbar from '../component/Navbar.vue';
  import PaymentSelect from '../component/PaymentSelect.vue';
  import Pos from '../component/Pos.vue';
  import SalesInvoice from './SalesInvoice.vue';
  import { computed, inject, defineProps } from 'vue';
  
  const props = defineProps({
        collapse: {
            type: Boolean,
            required: true,
        },
  });
  const base = inject('base');
  const emitter = inject('emitter');

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