<template>
    <div class="w-[90%] h-full">
        <Navbar />
        <component :is="componentMap[base.page=='payments' ? 'PaymentSelect' : 'Pos']" />
    </div>
</template>

<script setup>
  import Navbar from '../component/Navbar.vue';
  import PaymentSelect from '../component/PaymentSelect.vue';
  import Pos from '../component/Pos.vue';
  import { inject } from 'vue';

  const emitter = inject('emitter');
  let base = inject('base');


  const changePage = (page) => {
    base.items = [];
    base.invoice = {};
    base.customer = {};
    base.page = page;
  };
  const componentMap = {
    PaymentSelect,
    Pos
  };
  emitter.on('updatePage', (page) => {
    changePage(page)
  });

</script>