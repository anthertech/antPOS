<template>
    <Dialog :options="{ size: '3xl' }" v-model="dialogVisible"  class="rounded-b">
        <template #body-title>
            <p class="text-3xl">Select Invoice</p>
        </template>
        <template #body-content>
            <div class="w-full h-[60vh] bg-white-overlay-100 rounded-2xl p-3 shadow-2xl flex flex-col gap-4">
                <TextInput type="text" v-model="searchQuery" placeholder="Search">
                    <template #prefix>
                        <FeatherIcon class="w-4" name="search" />
                    </template>
                </TextInput>
                <div class="flex justify-evenly bg-black-overlay-800 text-white rounded-md p-3 h-[8%]">
                    <div class="w-[10%]"></div>
                    <p class="w-[30%]">Name</p>
                    <p class="w-[30%]">Customer</p>
                    <p class="w-[30%]">Amount</p>
                </div>
                <div class="h-[82%] overflow-y-scroll scrollbar-hide">
                    <div v-for="invoice in filteredInvoices" :key="invoice.name" class="flex flex-col">
                        <div class="flex justify-evenly rounded bg-blue-200 p-2.5 my-2">
                            <div class="w-[10%]">
                                <input type="radio" name="selectedInvoice" :value="invoice.name"
                                    class="text-black hover:text-black" v-model="selectedInvoice" />
                            </div>
                            <p class="w-[30%]">{{ invoice.name }}</p>
                            <p class="w-[30%]">{{ invoice.customer }}</p>
                            <p class="w-[30%]">{{ invoice.grand_total }}</p>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-4">
                    <div class="flex gap-2">
                        <Button
                            v-for="size in [20, 100, 500, 2500]"
                            :key="size"
                            :variant="selectedPageLength === size ? 'solid' : 'ghost'"
                            @click="setPageLength(size)"
                            :ref_for="true"
                            :loading="invoices.loading"
                            :disabled="invoices.loading"
                            :link="null"
                        >
                            {{ size }}
                        </Button>

                    </div>
                    <Button 
                        @click="invoices.next()" 
                        variant="solid"
                        :loading="invoices.loading"
                        :disabled="invoices.loading"
                    
                    >
                        Next
                    </Button>
                </div>
            </div>
        </template>
        <template #actions>
            <div class="">
                <Button variant="solid" @click="submitInvoice">Select</Button>
                <Button class="ml-2" @click="handleDialogClose">Close</Button>
            </div>
        </template>
    </Dialog>
</template>

<script setup>
import { Dialog, Button, createListResource, createResource, TextInput, FeatherIcon } from 'frappe-ui';
import { ref, inject, computed, watch } from 'vue';
import { createToast } from '../../utils';

let base = inject('base');
const dialogVisible = ref(true);
const selectedInvoice = ref(null);
const searchQuery = ref("");
let errorHandled = false;
const selectedPageLength = ref(20);

const handleDialogClose = () => { dialogVisible.value = false; };

const setPageLength = (size) => {
    if (selectedPageLength.value !== size) {
        selectedPageLength.value = size;
        invoices.update({ pageLength: size, start: 0 }); // Reset to first page
        invoices.reload();
    }
};
const submitInvoice = () => {salesInvoice.fetch({ name: selectedInvoice.value });};

let salesInvoice = createResource({
    url: 'frappe.desk.form.load.getdoc',
    makeParams(params) {
        return {
            doctype: "Sales Invoice",
            name: params.name
        };
    },
    transform(data){
        if (data.docs[0] && data.docs[0].items && data.docs[0].items.length > 0) {
            data.docs[0].items.forEach(item => {
                if (item.serial_no) {
                    item.selected_serial_no = item.serial_no.trim().split('\n').map(serial => ({
                        label: serial,
                        value: serial
                    }));
                    
                }
                if (item.batch_no) {
                    
                    item.selected_batch_no = {
                        label: item.batch_no,
                        value: item.batch_no
                    };
                } else {
                    item.selected_batch_no = null;
                }
                if (!item.custom_id) {
                    item.custom_id = Date.now() + Math.random();
                }
            });
            
        }
        return data
    },
    onSuccess: async (data) => {
        errorHandled = false;  
        if (!data.docs[0]?.items || !Array.isArray(data.docs[0].items)) {
            console.error("Invalid or missing items array", data.docs[0]?.items);
            return;
        }
       addvalues();
    },
    onError(error) {
        createToast({
            title: 'error',
            message: Array.isArray(error?.messages) ? error.messages[0] : error?.messages || 'An error occurred',
            icon: 'x-circle',
            iconClasses: 'bg-surface-red-5 text-ink-white rounded-md p-px',
            position: 'top-center',
            timeout: 5,
        });
        errorHandled = true;
    }
});
const  addvalues = async ()=>{
    base.invoice =  { ...salesInvoice.data.docs[0], status: null  }
    base.is_return =salesInvoice.data.docs[0].is_return
    base.items = salesInvoice.data.docs[0].items;
    base.discount_amount =  salesInvoice.data.docs[0].discount_amount;
    base.additional_discount_percentage =  salesInvoice.data.docs[0].additional_discount_percentage;
    base.total =  salesInvoice.data.docs[0].net_total;
    await get_value.fetch({
        doctype: "Customer",
        filters: { "name": salesInvoice.data.docs[0].customer },
        fieldname: ['name', 'mobile_no', 'customer_group', 'territory', 'is_internal_customer'],
    });
    base.customer = get_value.data || {};
    searchQuery.value=''
    handleDialogClose()

}

let get_value = createResource({
        url:'frappe.client.get_value',
        makeParams(params) {
        return { ...params }
        },
        transform: (data) => {
            
                return {
                label: data.name,
                value: data.name,
                mobile_no: data.mobile_no,
                name: data.name,
                customer_group: data.customer_group,
                territory: data.territory,
                is_internal_customer: data.is_internal_customer,
                }
    },
    onError(error) {
            createToast({
                title: 'error',
                message: Array.isArray(error?.messages) ? error.messages[0] : error?.messages || 'An error occurred',
                icon: 'x-circle',
                iconClasses: 'bg-surface-red-5 text-ink-white rounded-md p-px',
                position: 'top-center',
                timeout: 5,
            });
            errorHandled = true;
        }

})
const invoices = createListResource({
    doctype: 'Sales Invoice',
    fields: ['name', 'customer', 'grand_total'],
    orderBy: 'creation desc',
    filters: { 
        docstatus: 0, 
        pos_profile: 
        base.pos_profile.name, 
    },
    orFilters: [],
    pageLength: 20,
    auto: true
    });

const filteredInvoices = computed(() => {
    if (!searchQuery.value) {
        return invoices.data;
    }
    return invoices.data.filter(invoice =>
        invoice.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        invoice.customer.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});


watch(searchQuery, (newQuery) => {
  invoices.update({
    filters: {
        docstatus: 0, 
        pos_profile: 
        base.pos_profile.name,
    },
    orFilters: newQuery
      ? [
          ['name', 'like', `%${newQuery}%`],
          ['customer', 'like', `%${newQuery}%`]
        ]
      : []
  });
  invoices.reload();
});
</script>