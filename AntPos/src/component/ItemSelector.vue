<template>
    <div class="w-1/2 shadow-2xl pt-2 px-2 rounded">
        <div>
            <div>
                <FormControl
                    type="text"
                    v-model="debounceSearch"
                    placeholder="Search Items"
                    size="sm"
                    variant="subtle"
                    @keyup.enter="fetchSearchResource"
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
import { ref, inject, watch } from 'vue';
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
                title: 'Error',
                text: Array.isArray(error?.messages) ? error.messages[0] : error?.messages || error || 'An error occurred',
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
                title: 'Error',
                text: Array.isArray(error?.messages) ? error.messages[0] : error?.messages || error || 'An error occurred',
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
});

const priceListResource = createResource({
    url: 'erpnext.stock.get_item_details.apply_price_list',
    method: 'POST',
    makeParams(params) {
        lastParams = params;
        if(params.items.batch_no?.value) {
            params.items.batch_no = params.items.batch_no.value;
        }
        return {
            args: JSON.stringify({
                items: [
                    {
                        ...params.items,
                        "doctype": "Sales Invoice Item",
                        "name": "new-sales-invoice-item-lrdmbgmbcz",
                        "child_docname": "new-sales-invoice-item-lrdmbgmbcz",
                        "parenttype": "Sales Invoice",
                        "parent": "new-sales-invoice-owspmikswv",
                        "serial_no": base.items.selected_serial_no,
                    }
                ],

                "customer": base.customer.name,
                "customer_group": base.customer.customer_group,
                "is_internal_customer": base.customer.is_internal_customer,
                "territory": base.customer.territory,
                "currency": base.pos_profile.currency,
                "conversion_rate": 1,
                "price_list": "Standard Selling",
                "price_list_currency": base.pos_profile.currency,
                "plc_conversion_rate": 1,
                "company": base.pos_profile.company,
                "transaction_date": "",
                "ignore_pricing_rule": 0,
                "doctype": "Sales Invoice",
                "name": "new-sales-invoice-owspmikswv",
                "is_return": 0,
                "update_stock": 1,
                "pos_profile": base.pos_profile.name,
            })
        };
    },
    onError(error) {
        if (!errorHandled) {
            console.error('Price list error:', error);
            createToast({
                title: 'Error',
                text: error.messages[0] || error.messages || 'An error occurred',
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
        if (!lastParams) return;

        let updatedItem = base.items.find(item => item.item_code === lastParams.items.item_code);

        if (updatedItem && data.children && data.children.length > 0) {
            const childData = data.children[0];
            updatedItem.price_list_rate = childData.price_list_rate ?? updatedItem.price_list_rate;
            updatedItem.has_margin = childData.has_margin ?? updatedItem.has_margin;
            updatedItem.discount_percentage = childData.discount_percentage ?? updatedItem.discount_percentage;
            updatedItem.discount_amount = childData.discount_amount ?? updatedItem.discount_amount;
            updatedItem.validate_applied_rule = childData.validate_applied_rule ?? updatedItem.validate_applied_rule;
            updatedItem.price_or_product_discount = childData.price_or_product_discount ?? updatedItem.price_or_product_discount;
            updatedItem.pricing_rule_for = childData.pricing_rule_for ?? updatedItem.pricing_rule_for;
            updatedItem.margin_type = childData.margin_type ?? updatedItem.margin_type;
            updatedItem.margin_rate_or_amount = childData.margin_rate_or_amount ?? updatedItem.margin_rate_or_amount;
            updatedItem.has_pricing_rule = childData.has_pricing_rule ?? updatedItem.has_pricing_rule;
            updatedItem.pricing_rules = childData.pricing_rules ?? updatedItem.pricing_rules;
        }
    }
});

const fetchSearchResource = () => {
    errorHandled = false;
    searchResource.fetch();
};

const addItem = (data) => {
    data.doctype = "Sales Invoice Item";
    data.parenttype = "Sales Invoice";
    if (!addItemIfExists(data)) {
        if (data.has_batch_no && data.batch_no) {
            data.serial_no_options = data.serial_no
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
    if (!base.pos_profile.custom_allow_add_new_items_on_new_line) {
        base.items.forEach((element, index) => {
            if (data.item_code === element.item_code &&
                ((data.has_batch_no && data.batch_no === (element.batch_no.value || element.batch_no)) || !data.has_batch_no)) {
                    found = true;
                if (data.has_serial_no && data.serial_no) {
                    for (let serial of data.selected_serial_no) {
                        if (element.selected_serial_no.includes(serial)) {
                            showToast('Warning', 'Serial-no Already added')
                            
                            return found;
                        }
                    }
                }
                addChild(base.items[index].selected_serial_no, data.selected_serial_no[0]);
                base.items[index].qty += 1;
                priceListResource.fetch({ items: base.items[index] })
                debounceSearch.value = '';
                
            }
        });
    }
    return found;
};

const addNewLine = async (data) => {
    await priceListResource.fetch({ items: data });
    base.items.push(data);
    debounceSearch.value = '';
};

const addChild = (data, value) => {
        data.push(value);
};

const calculateAmountTotal = () => {
    
    let total = 0;
    let discount_amount = 0

    base.items.forEach((item) => {
        total += Number(item.amount)
    })

    if (base.pos_profile.custom_use_percentage_discount ) {
        discount_amount =(Number(base.additional_discount || 0) / 100) * Number(total);
        total =  total - Number(discount_amount);
    } 
    else {
        
        discount_amount = Number(total) - Number(base.additional_discount || 0) ;
        total -= Number(discount_amount);

    }
    
    base.total = total.toFixed(2);
    
};

emitter.on('fetchPriceList', (params) => {
    priceListResource.fetch(params);
});
emitter.on('featchsearchResource'),(params)=>{
    searchResource.fetch(params)
}
emitter.on('calctotal', () => {
    calculateAmountTotal();
});

watch(() => base.items, () => {
    calculateAmountTotal();
});

</script> 