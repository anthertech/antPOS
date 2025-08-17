<template>
    <div class="md:w-1/2 w-full shadow-2xl pt-2 px-2 rounded">
        <div>
            <div>
                <FormControl
                    type="text"
                    v-model="debounceSearch"
                    placeholder="Search Items"
                    size="sm"
                    variant="subtle"
                    @keyup.enter="fetchSearchResource"
                    :disabled="base.is_return"
                >
                    <template #prefix>
                        <FeatherIcon class="w-4" name="search" />
                    </template>
                </FormControl>
                <div>
                    <div v-if="items.length === 0" class="text-center text-gray-500">
                        No items found. Try searching again.
                    </div>
                    <div v-else>
                        <div class="flex justify-between items-center border-b pb-4">
                            <div class="flex justify-between w-full">
                                <span class="text-lg font-medium mr-4">{{ items.item_code }}</span>
                                <span class="text-sm text-gray-500">Qty: 1</span>
                                <span class="text-sm text-gray-500">Price: {{ items.rate }}</span>
                                <span class="text-lg font-semibold ml-4">{{ items.serial_no }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { FormControl, FeatherIcon, createResource } from 'frappe-ui';
import { ref, inject } from 'vue';
import { createToast } from '../utils';
import { showToast } from '../utils'

const debounceSearch = ref('');
const items = ref([]);
let base = inject('base');
let lastParams = null;
const emitter = inject('emitter');

let errorHandled = false;

const searchResource = createResource({
    url: 'ant_pos.ant_pos.api.item.scan_barcode',
    method: 'GET',
    debounce: 300,
    makeParams() {
        return {
            search_value: debounceSearch.value,
        };
    },
    validate(params) {
        if (!base.customer.name) {
            return 'Customer is required'
        }
        
        if (!params.search_value) {
            return 'Search value is required';
        }

        
    },
    onSuccess(data) {
        errorHandled = false;
        if (data.serial_no) {
            data.selected_serial_no = [data.serial_no];
        }
        if (!addItemIfExists(data)) {            
            addItemsResource.fetch({ search_value: JSON.stringify(data) });
        }
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
});

const addItemsResource = createResource({
    url: 'ant_pos.ant_pos.api.item.items',
    method: 'GET',
    makeParams(params) {
        return {
            pos_profile: base.pos_profile.name,
            search_value: params.search_value,
            customer: base.customer.name,
        };
    },
    validate(params) {
        if (!params.search_value) {
            return 'Search value is required';
        }
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
    onSuccess(data) {

        errorHandled = false;
        addItem(data);
    },
    transform(data){
        if (data.selected_serial_no && data.selected_serial_no.length > 0 ){
            data.selected_serial_no = data.selected_serial_no.map(serial=>({
                label:serial,
                value:serial
            }))
        }
        let  date=null
        let qty=0
        if (data.batch_no && data.batch_no.length > 0 && data.has_batch_no) {
            const batch = data.batch_nos.find(b => b.batch_no ===data.selected_batch_no);
            qty = batch ? batch.stock_qty : 0;
            date = batch ? batch.expiry_date : null;
            data.selected_batch_no = {
                label: data.batch_no,
                value: data.batch_no
            }
            
        }
        data.custom_id = Date.now() + Math.random();
        data.stock_qty = qty;
        data.expiry_date = date;
        data.net_rate = data.price_list_rate || 0
    }
});



const fetchSearchResource = () => {
    errorHandled = false;
    searchResource.fetch();
};

const addItem = (data) => {
    data.doctype = "Sales Invoice Item";
    data.parenttype = "Sales Invoice";
    data.custom_id = Date.now() + Math.random()
    if (!addItemIfExists(data)) {
        if (data.has_batch_no && data.batch_no) {
            data.serial_no_options = data.serial_no_options
                .filter(serial_no => data.batch_no && serial_no.batch_no === data.batch_no)
                .map(serial_no => ({
                    label: serial_no.serial_no,
                    value: serial_no.serial_no,
                }));
            data.use_serial_batch_fields=1;
        }
        addNewLine(data);
    }
};

const addItemIfExists = (data) => {
    let found = false;
    if (!base.pos_profile.custom_new_items_on_new_line) {
        base.items.forEach((element, index) => {
            
            if (!element.is_return && data.item_code === element.item_code &&
            ((data.has_batch_no && element.batch_no && data.batch_no === (element.batch_no.value || element.batch_no)) || !data.has_batch_no)) {
                found = true;
                
                if (data.has_serial_no && data.selected_serial_no && data.selected_serial_no.length > 0) {

                    for (let serial of data.selected_serial_no) {                        
                        let selected = element.selected_serial_no.map(serial=>serial.value)
                        if (selected.includes(serial)) {
                            showToast('warning', 'Serial-no Already added')
                            return found;
                        }
                    }
                    element.selected_serial_no.push({label:data.serial_no,value:data.serial_no})                    
                }
                if (element.serial_no  && !data.serial_no) {
                    showToast('warning', 'Batch already entered')

                    return found
                }
                base.items[index].qty += 1;
                debounceSearch.value = '';
                
            }
        });
    }
    return found;
};

const addNewLine = async (data) => {
    base.items.push(data);
    debounceSearch.value = '';
};
const runDocMethod = createResource({
    url: 'ant_pos.ant_pos.api.sales_invoice.calculate_invoice_item_taxes',
    method: 'POST',
    auto: false,
    debounce: 500,
    makeParams(params) {
        return {
            ...params
        };   
    },
    transform(data){
        if (data && data.items && data.items.length > 0) {
            data.items.forEach(item => {
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
                
            });
            
        }
        return data
    },

    onSuccess(data){
        base.invoice=data;
        data.items.forEach(n => {
        const e = base.items.find(b => b.custom_id === n.custom_id);
        if (!e) return;
        for (const k in n) {
            if (k !== 'custom_id' && e[k] !== n[k]) {
                if (JSON.stringify(e[k]) !== JSON.stringify(n[k])) {
                    e[k] = n[k];
                }
            }
        }
    })
        
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


const calculateAmountTotal = async () => {
    if (base.items.length === 0 ) return;
    await runDocMethod.fetch({doc: JSON.stringify({
                ...base?.invoice,
                doctype: 'Sales Invoice',
                is_pos: base.invoice.is_return ? base.invoice.is_pos : 1,
                pos_profile: base.pos_profile.name,
                company: base.pos_profile.company,
                conversion_rate: 1,
                selling_price_list: base.pos_profile.selling_price_list,
                items: base.items,
                customer: base.customer.name,
                update_stock: 1,
                additional_discount_percentage: base.additional_discount_percentage ? Number(base.additional_discount_percentage) : 0 ,
                discount_amount: base.discount_amount ? Number(base.discount_amount) : 0,
                base_total: base.invoice.base_total || 0,
                custom_ant_opening: base.Ant_Opening_Shift.name,
                apply_discount_on: base.pos_profile.apply_discount_on,
            })});
}

emitter.on('featchsearchResource'),(params)=>{
    searchResource.fetch(params)
}
emitter.on('calctotal', () => {
    
    calculateAmountTotal();
});



</script> 