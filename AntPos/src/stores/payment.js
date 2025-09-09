import { defineStore } from 'pinia';
import { ref } from 'vue';
import { generateTempName, createDoctypeResource } from '@/utils';

export const usePaymentStore = defineStore('PaymentEntry', () => {
  const payment = ref({});
  const paymentCustomer = ref({});

  const paymentResource = createDoctypeResource('Payment Entry', (data) => {
    payment.value = {
      ...data,
      name: generateTempName(data.doctype),
    };
  });

  function unmount() {
    payment.value = {};
    paymentCustomer.value = {};
  }

  async function unmountAndRefresh(includeCustomer) {
    payment.value = {};
    if (!includeCustomer) {
      paymentCustomer.value = {};
    }
    await paymentResource.fetch();
  }

  return {
    payment,
    paymentResource,
    paymentCustomer,
    unmount,
    unmountAndRefresh,
  };
});
