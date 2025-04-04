<template>
    <div class="w-full h-full flex gap-6 ">
        <div class="w-[65%] h-full">
            <div class="w-full h-full shadow-2xl p-4 rounded">
                <div class="h-[6%]">
                    <Customer/>
                </div>
                <div class="w-full h-[94%] flex flex-col gap-4">
                    <TextInput type="text" v-model="searchQuery" placeholder="Search">
                        <template #prefix>
                            <FeatherIcon class="w-4" name="search" />
                        </template>
                    </TextInput>
                    <div class="flex justify-evenly text-center bg-black-overlay-800 text-white rounded-md p-3 h-[6%]">
                        <div class="w-[4%]">
                            <Checkbox
     size="sm"
    :checked="selectAll"
    @change="toggleAllSelection"
/>
                        </div>
                        <p class="w-[19%]">Name</p>
                        <p class="w-[19%]">Customer</p>
                        <p class="w-[19%]">Amount</p>
                        <p class="w-[19%]">Outstanding</p>
                    </div>
                    <div class="h-[92%] overflow-y-scroll rounded scrollbar-hide">
                        <div v-if="filteredInvoices.length === 0" class="flex justify-center items-center h-full">
                            <p class="text-gray-500">No invoices found</p>
                        </div>
                        <div v-for="invoice in filteredInvoices" :key="invoice.name" class="flex w-full flex-col">
                            <div class="flex justify-evenly items-center rounded text-center bg-blue-200 p-2.5 my-2">
                                <div class="w-[4%] flex justify-center items-center">
                                    <Checkbox
    size="sm"
    :value="invoice.selected"
    @change="toggleSelection(invoice)"
/>  
                                </div>
                                <p class="w-[19%]">{{ invoice.name }}</p>
                                <p class="w-[19%]">{{ invoice.customer }}</p>
                                <p class="w-[19%toggleSelection]">{{ invoice.grand_total }}</p>
                                <p class="w-[19%]">{{ invoice.outstanding_amount }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-[35%] h-full">
            <div class="w-full h-full shadow-2xl p-4 rounded flex flex-col gap-4">
                <div class="flex flex-col gap-6 h-fit ">
                    <div class="flex justify-evenly bg-black-overlay-800 text-white rounded-md p-3 ">
                        <p>Payment Total</p>
                    </div>
                    <FormControl
                        :type="'number'"
                        :ref_for="true"
                        size="sm"
                        variant="subtle"
                        placeholder="0"
                        :disabled="false"
                        label="Credit To Redeem"
                        v-model="base.paymentAmount"
                        @change=""
                    />
                </div>
                <div>
                    <p class="text-2xl font-bold ">
                        Payment Method
                    </p>
                    <div class="grid grid-cols-2 gap-4 p-2 items-center" v-for="(mode, index) in base.pos_profile.payments" :key="index">
                        <FormControl
                            type="number"
                            size="sm"
                            variant="subtle"
                            placeholder="0"
                            :disabled="false"
                            :label="`${mode.mode_of_payment}:`"
                        />
                        <Button
                            class="w-full h-full"
                            :variant="'solid'"
                            theme="gray"
                            size="lg"
                            label="Button"
                            :loading="false"
                            :disabled="false"
                        >
                            {{ mode.mode_of_payment }}
                        </Button>
                    </div>
                    <FormControl
                        type="number"
                        size="sm"
                        variant="subtle"
                        placeholder="0"
                        :disabled="false"
                        label="Difference:"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { createListResource, TextInput, FormControl, FeatherIcon, Checkbox } from 'frappe-ui';
    import { ref, inject, computed, watch } from 'vue';
    import Customer from './Customer.vue';

let base = inject('base');
const searchQuery = ref("");
const customerName = ref(base.customer.name);
const selectAll = ref(false);

const invoices = createListResource({
    doctype: 'Sales Invoice',
    fields: ['name', 'customer', 'grand_total', 'outstanding_amount'],
    filters: { 
        outstanding_amount: [">", 0],
        docstatus: 1, 
        is_return: 0, 
        set_warehouse: base.pos_profile.warehouse, 
        customer: customerName.value
    },
    
    transform(data) {
      for (let d of data) {
        d.selected= false
      }
      return data
    },
    pageLength: Number.MAX_VALUE * 2,
});

const filteredInvoices = computed(() => {
    if (!invoices.data) {
        return [];
    }
    if (!searchQuery.value) {
        return invoices.data;
    }
    return invoices.data.filter(invoice =>
        invoice.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        invoice.customer.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

watch(
    () => base.customer,
    (newValue, oldValue) => {
        if (oldValue != null && newValue.name !== oldValue.name) {
            customerName.value = newValue.name;
            invoices.filters.customer = newValue.name;
            invoices.fetch();
        }
    },
    { immediate: true }
);

const calculateAmountTotal = () => {
    let total = invoices.data.reduce((sum, invoice) => {
        return invoice.selected ? sum + invoice.grand_total : sum;
    }, 0);

    base.paymentAmount = total;
    console.log("Total Amount: ", total);
};
const toggleAllSelection = (event) => {
    if (event && event.stopPropagation) {
        event.stopPropagation(); 
    }

    selectAll.value = event.target.checked;
    invoices.data.forEach(invoice => {
        invoice.selected = selectAll.value;
    });

    calculateAmountTotal();
};

const toggleSelection = (invoice) => {
    invoice.selected = !invoice.selected;
    selectAll.value = invoices.data.every(inv => inv.selected); // Update select all checkbox
    calculateAmountTotal();
};




</script>