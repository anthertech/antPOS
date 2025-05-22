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
                <div class="h-[92%] overflow-y-scroll scrollbar-hide">
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
import { ref, inject, computed } from 'vue';
import { createToast } from '../../utils';

let base = inject('base');
const dialogVisible = ref(true);
const selectedInvoice = ref(null);
const searchQuery = ref("");
let errorHandled = false;

const handleDialogClose = () => {
    dialogVisible.value = false;

};

const submitInvoice = () => {
    salesInvoice.fetch({ name: selectedInvoice.value });
};

let salesInvoice = createResource({
    url: 'frappe.desk.form.load.getdoc',
    makeParams(params) {
        return {
            doctype: "Sales Invoice",
            name: params.name
        };
    },
    onSuccess: async (data) => {
        errorHandled = false;  
        if (!data.docs[0]?.items || !Array.isArray(data.docs[0].items)) {
            console.error("Invalid or missing items array", data.docs[0]?.items);
            return;
        }
        base.invoice = { ...data.docs[0], status: null };
        base.items = await addItems(data.docs[0].items);
        base.customer = await get_value.fetch({
            doctype: "Customer",
            filters: { "name" : data.docs[0].customer },
            fieldname: ['name', 'mobile_no','customer_group','territory','is_internal_customer'],
        });
        searchQuery.value=''
        handleDialogClose()
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

const addItems = async (items) => {
    
    for (const element of items) {
        try {
            element.batch_nos = await getlist.fetch({
                doctype: 'Batch',
                fields: ["name as batch_no", "expiry_date"],
                filters: { "item": element.item_code },
                limit_page_length: Number.MAX_VALUE * 2,
            });

            element.selected_serial_no = await splitSerialNumbers(element.serial_no);
            element.has_serial_no = element.selected_serial_no.length > 0
            element.selected_serial_no = element.selected_serial_no.map(serial => ({ label: serial, value: serial }));
            

            element.serial_no = await getlist.fetch({
                doctype: "Serial No",
                filters: { "item_code": element.item_code, "warehouse": element.warehouse },
                fields: ["name as serial_no", "batch_no"],
                limit_page_length :Number.MAX_VALUE * 2,
            });

            element.selected_batch_no = element.batch_nos;
            createOptioin(element)

        } catch (error) {
            console.error("Error fetching batch or serial numbers:", error);
        }
    }
    console.log(items);
    
    return items
};

let getlist = createResource({
    url:'frappe.client.get_list',
    makeParams(params) {
      return { ...params }
    },
    onSuccess(data) {
        errorHandled = false;
        
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

let get_value = createResource({
    url:'frappe.client.get_value',
    makeParams(params) {
      return { ...params }
    },
    onSuccess(data) {
        
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
    filters: { docstatus: 0, pos_profile: base.pos_profile.name, },
    pageLength: Number.MAX_VALUE * 2,
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

function createOptioin(item) {

    if (item.batch_no && item.serial_no) {
        let filteredSerials = item.serial_no.filter(serial_no => {
            return serial_no.batch_no === item.batch_no;
        });


        item.serial_no_options = filteredSerials.map(serial_no => {
            return {
                label: serial_no.serial_no,
                value: serial_no.serial_no,
            };
        });

    } else {
        item.serial_no_options = item.serial_no?.map(serial_no => ({
            label: serial_no.serial_no,
            value: serial_no.serial_no,
        })) || [];
    }

    item.use_serial_batch_fields = 1;
}
async function splitSerialNumbers(serialString = "") {
    
	if (typeof serialString !== "string" || !serialString.trim()) return [];

	return serialString
		.trim()
		.split("\n")
		.map(line => line.trim()) 
		.filter(line => line !== "");
}
</script>