<template>
    <div class="w-[90%] h-full">
        <Navbar />
        <component :is="componentMap[currentComponent]" />
    </div>
</template>

<script setup>
  import Navbar from '../component/Navbar.vue';
  import PaymentSelect from '../component/PaymentSelect.vue';
  import Pos from '../component/Pos.vue';
  import SalesInvoice from './SalesInvoice.vue';
  import { computed, inject } from 'vue';

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