<template>
  <div class="w-full">
    <Autocomplete
      :options="computedOptions"
      v-model="selectedCustomer"
      placeholder="Select Customer"
    />
  </div>
</template>

<script setup>
import { computed, inject, onMounted, onUnmounted, watch } from 'vue';
import emitter from '../utils/emitter'; 
import Autocomplete from './custom_components/Autocomplete.vue';
import { createListResource } from 'frappe-ui';
import { createToast } from '../utils';


let base = inject('base');
let errorHandled = false;


const customerResource = createListResource({
  doctype: 'Customer',
  fields: ['name', 'mobile_no','customer_group','territory','is_internal_customer'],
  filters: {
    disabled: false,
  },
  pageLength: Number.MAX_VALUE * 2,
  auto: true,
  onSuccess(data) {
    errorHandled = false;
  },
  onError(error) {
    if (!errorHandled) {
        createToast({
            title: 'error',
            message: Array.isArray(error?.messages) ? error.messages[0] : error?.messages || error || 'An error occurred',
            icon: 'x-circle',
            iconClasses: 'bg-surface-red-5 text-ink-white rounded-md p-px',
            position: 'top-center',
            timeout: 5,
        });
        errorHandled = true;
    }
    },
  transform: (data) => {
    return data.map((item) => ({
      label: item.name,
      value: item.name,
      mobile_no: item.mobile_no,
      name: item.name,
      customer_group: item.customer_group,
      territory: item.territory,
      is_internal_customer: item.is_internal_customer,
    }));
  },
});

const computedOptions = computed(() => {
  return customerResource?.data
    ? customerResource.data.map((option) => ({
        mobile_no: option.mobile_no || '',
        label: option.label || 'Unnamed',
        value: option.value,
        name: option.name,
        customer_group: option.customer_group,
        territory: option.territory,
        is_internal_customer: option.is_internal_customer,
      }))
    : [];
});

const refreshCustomerList = async (params) => {
  await customerResource.fetch();
  selectedCustomer.value={
      mobile_no: params.mobile_no || '',
      label: params.name || 'Unnamed',
      value: params.name,
      name: params.name,
      customer_group: params.customer_group,
      territory: params.territory,
      is_internal_customer: params.is_internal_customer,
  }
};


onMounted(() => {
  emitter.on("customerCreated"  ,refreshCustomerList);

});

onUnmounted(() => {
  emitter.off("customerCreated" , refreshCustomerList);
});

const selectedCustomer = computed({
  get: () => base.customer,
  set: (newVal) => {
    if(base.is_return) return
    base.customer = newVal;
  },
});


</script>
