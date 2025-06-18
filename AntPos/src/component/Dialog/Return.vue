<template>
    <Dialog :options="{ size: '3xl' }" v-model="dialogVisible" class="rounded-b">
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
import { ref, inject, computed, watch, onMounted } from 'vue';
import { createToast } from '../../utils';

let base = inject('base');
const dialogVisible = ref(true);
const selectedInvoice = ref(null);
const searchQuery = ref("");
const selectedPageLength = ref(20);
let errorHandled = false;

const handleDialogClose = () => { dialogVisible.value = false; };
const setPageLength = (size) => {
    if (selectedPageLength.value !== size) {
        selectedPageLength.value = size;
        invoices.update({ pageLength: size, start: 0 }); 
        invoices.reload();
    }
};
const submitInvoice = () => {
    // base.items=[]
    salesInvoice.fetch({ name: selectedInvoice.value });
};
let runDoCMethod = createResource({
    url: 'run_doc_method',
    makeParams(params) {
        return {...params}
    
    },
    onSuccess(data){
        errorHandled = false;
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

let salesInvoice = createResource({
    url: 'frappe.model.mapper.make_mapped_doc',
    makeParams(params) {
        return {
            method: "erpnext.accounts.doctype.sales_invoice.sales_invoice.make_sales_return",
            source_name: params.name,
            selected_children:{},
            args:""
        };
    },
    onSuccess: async (data) => {
        
        await runDoCMethod.fetch({ for_validate :true, docs: data , method:'set_missing_values' , args: {"for_validate":true} });
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
});

const addItems = async (items) => {
    
    for (const element of items) {
        
        try {
            
            // element.selected_batch_no = [];
            element.has_batch_no = 0;
            element.has_serial_no = 0;
            element.selected_serial_no = [];
            element.batch_nos = [];
            await itemDoc.fetch({
                doctype: "Item",
                filters: { "name": element.item_code },
                fieldname: ['name', 'item_name', 'description', 'image', 'has_batch_no', 'has_serial_no'],
            });

            let item =  itemDoc.data || {};
            
            
            if (item.has_batch_no ) {
                element.has_batch_no = item.has_batch_no ? 1 : 0;
                await batch.fetch({
                    doctype: 'Batch',
                    fields: ["name as batch_no", "expiry_date"],
                    filters: { "item": element.item_code },
                    limit_page_length: Number.MAX_VALUE * 2,
                });
                element.batch_nos =  batch.data || [];  
                element.selected_batch_no = element.batch_no;
                element.use_serial_batch_fields = 1;
            }
            if (item.has_serial_no) {
                element.serial_no_options  = await splitSerialNumbers(element.serial_no);
                element.has_serial_no = 1;
                await serial.fetch({
                    doctype: "Serial No",
                    filters: { "item_code": element.item_code },
                    orFilters: { "batch_no": element.batch_no },
                    fields: ["name as serial_no", "batch_no"],
                    limit_page_length: Number.MAX_VALUE * 2,
                });
                element.selected_serial_no = element.serial_no_options;

                element.all_serial_no = serial.data || [];
            }



        } catch (error) {
            console.error("Error fetching batch or serial numbers:", error);
        }
        element.id = Date.now() + Math.random();
        element.is_return = 1;
        element.open = 0;
    }
    
    
    base.items = items;
    return items;
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
     let batch = createResource({
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
     let serial = createResource({
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
    

        let itemDoc = createResource({
        url:'frappe.client.get_value',
        makeParams(params) {
        return { ...params }
        },
        onSuccess(data) {
            
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

        let customer = createResource({
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
    filters: {
        docstatus: 1,
        pos_profile: base.pos_profile.name,
        is_return: 0,
        status: ['!=', 'Credit Note Issued']
    },
    orFilters: [],
    pageLength: 20,
    auto: true
    });

const filteredInvoices = computed(() => {
    if (!searchQuery.value) return invoices.data || [];
    return (invoices.data || []).filter(invoice =>
        invoice.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        invoice.customer.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});


async function splitSerialNumbers(serialString = "") {
    if (typeof serialString !== "string" || !serialString.trim()) return [];
    
    return serialString
        .trim()
        .split("\n")
        .map(line => line.trim())
        .filter(line => line !== "")
        .map(serial => ({
            label: serial,
            value: serial
        }));
}
const  addvalues = async ()=>{

    base.invoice =  { ...runDoCMethod.data.docs[0], status: null ,name:"new-sales-invoice-jpodtuhocv" }
    addItems(runDoCMethod.data.docs[0].items);
    base.discount_amount =  runDoCMethod.data.docs[0].discount_amount;
    base.additional_discount_percentage =  runDoCMethod.data.docs[0].additional_discount_percentage;
    base.total =  runDoCMethod.data.docs[0].net_total;
    await customer.fetch({
        doctype: "Customer",
        filters: { "name": runDoCMethod.data.docs[0].customer },
        fieldname: ['name', 'mobile_no', 'customer_group', 'territory', 'is_internal_customer'],
    });
    base.customer = customer.data || {};
    searchQuery.value=''
    base.is_return = 1; 
    handleDialogClose()

}

watch(searchQuery, (newQuery) => {
  invoices.update({
    filters: {
      docstatus: 1,
      pos_profile: base.pos_profile.name,
      is_return: 0
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