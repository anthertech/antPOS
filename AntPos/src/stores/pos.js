import { defineStore } from 'pinia';
import { ref } from 'vue';
import { generateTempName, createDoctypeResource } from '@/utils';

export const useInvoiceStore = defineStore('salesInvoice', () => {
  const invoice = ref({});
  const items = ref([]);
  const invoiceCustomer = ref({});

  const invoiceResource = createDoctypeResource('Sales Invoice', (data) => {
    invoice.value = {
      ...data,
      name: generateTempName(data.doctype),
    };
  });

  function unmount() {
    invoice.value = {};
    items.value = [];
    invoiceCustomer.value = {};
  }

  async function unmountAndRefresh(includeCustomer) {    
    invoice.value = {};
    items.value = [];
    await invoiceResource.fetch();

    if (includeCustomer) {
      invoiceCustomer.value = {};
    }
  }

  return {
    invoice,
    items,
    invoiceCustomer,
    invoiceResource,
    unmount,
    unmountAndRefresh,
  };
});
