<template>
    <Dialog :options="{ size: '3xl' }" v-model="dialogVisible" @close="handleDialogClose" class="rounded-b">
        <template #body-title>
            <p class="text-3xl">Select Invoice</p>
        </template>
        <template #body-content>
            <div class="w-full h-[60vh] bg-white-overlay-100 rounded-2xl p-3 shadow-2xl">
                <div class="flex justify-evenly bg-black-overlay-800 text-white rounded-md p-3 h-[8%]">
                    <div class="w-[10%]"></div>
                    <p class="w-[30%]">Name</p>
                    <p class="w-[30%]">Customer</p>
                    <p class="w-[30%]">Amount</p>
                </div>
                <div class="h-[92%] overflow-y-scroll scrollbar-hide">
                    <div v-for="invoice in invoices.data" :key="invoice.name" class="flex flex-col">
                        <div class="flex justify-evenly rounded bg-blue-200 p-2.5 my-2">
                            <div class="w-[10%]">
                                <!-- Use radio button instead of checkbox -->
                                <input
                                    type="radio"
                                    name="selectedInvoice"
                                    :value="invoice.name"
                                    class="text-black hover:text-black "
                                    v-model="selectedInvoice"
                                />
                            </div>
                            <p class="w-[30%]">{{ invoice.name }}</p>
                            <p class="w-[30%]">{{ invoice.customer }}</p>
                            <p class="w-[30%]">{{ invoice.grand_total }}</p>
                        </div>
                    </div>
                </div>
                
                <!-- <Button variant="solid" @click="submitInvoice">Select</Button> -->
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
import { Dialog, Button, createListResource , createResource  } from 'frappe-ui';
import { ref , inject } from 'vue';
import { createToast } from '../../utils';



let base = inject('base')
const dialogVisible = ref(true);
const selectedInvoice = ref(null);
let errorHandled = false;

const handleDialogClose = () => {
    dialogVisible.value = false;
};

const submitInvoice = () => {
    salesInvoice.fetch({name:selectedInvoice.value})
};
let salesInvoice = createResource({
    url:'frappe.desk.form.load.getdoc',
    makeParams(params) {
      return {

            doctype:"Sales Invoice",
            name:params.name
    
        }
    },
    onSuccess(data) {
        console.log(data.docs[0].items,"kkkkkkkkkkkkkkkkkkkkkk");
        if (!data.docs[0]?.items || !Array.isArray(data.docs[0].items)) {
        console.error("Invalid or missing items array", data.docs[0]?.items);
        return;
    }
    
        base.invoice = {...data.docs[0],status:null}
        base.items = addItems(data.docs[0].items)
        errorHandled = false;
    },
    onError(error) {
            if (!errorHandled) {
                createToast({
                    title: 'Error',
                    text: Array.isArray(error?.messages) ? error.messages[0] : error?.messages  || 'An error occurred',
                    icon: 'x',
                    iconClasses: 'bg-surface-red-5 text-ink-white rounded-md p-px',
                    position: 'top-center',
                    timeout: 5,
                });
                errorHandled = true;
            }
    },


})
const addItems =  (items) =>{
    console.log("llllllllllllllllllllllllllllllllll");
    
    items.forEach(element => {

        element.batch_nos =  getlist.fetch({doctype:'Batch',fields:["name as batch_no", "expiry_date"],filters:{"item": element.item_code }})
        element.serial_no = getlist.fetch({doctype:"Serial No", filters:{"item_code": element.item_code , "warehouse": pos_profile_data.warehouse}, fields:["name as serial_no", "batch_no"]})
    
    });

}
let getlist = createResource({
    url:'frappe.client.get_list',
    makeParams(params) {
      return { ...params }
    },

})
let invoices = createListResource({
    doctype: 'Sales Invoice',
    fields: ['name', 'customer', 'grand_total'],
    filters: { docstatus: 0 },
    pageLength: Number.MAX_VALUE * 2,
    auto: true
});
</script>
