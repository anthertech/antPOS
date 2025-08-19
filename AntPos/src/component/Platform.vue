<template>
  <div
    class="w-full h-full"
    :class="props.collapse ? 'xl:w-[97%]' : 'xl:w-[90%]'"
  >
        <Navbar />
        <Pos/>
    </div>
</template>

<script setup>
  import Navbar from '@/component/Navbar.vue';
  import PaymentSelect from '@/component/PaymentSelect.vue';
  import Pos from '@/component/Pos.vue';
  import emitter from '@/utils/emitter';
  import { inject, defineProps } from 'vue';
  
  
  const props = defineProps({
        collapse: {
            type: Boolean,
            required: true,
        },
  });
  const base = inject('base');

  emitter.on('updatePage', (page) => {
    base.items = [];
    base.invoice = {};
    base.customer = {};
    base.page = page;
  });
</script>