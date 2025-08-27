import { defineStore } from 'pinia'
import { ref } from 'vue'
import { createResource, createListResource } from 'frappe-ui'
import { createToast } from '@/utils';

export const useInvoiceStore = defineStore('invoiceStore', () => {
    const invoice = ref({})
    const items = ref([])
    const customer =ref({})
    const invoiceResource = createResource({
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
                    const e = items.value.find(b => b.custom_id === item.custom_id);
                    if (e) {
                        for (const k in n) {
                            if (k !== 'custom_id' && e[k] !== n[k]) {
                                if (JSON.stringify(e[k]) !== JSON.stringify(n[k])) {
                                    e[k] = n[k];
                                }
                            }
                        }
                    }
                });

            }
            return data
        },
        onSuccess(data) {
            if (data) {
                invoice.value = data
                
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
        },

    })
    
    const customerResource = createListResource({
        doctype: 'Customer',
        fields: ['name', 'mobile_no','customer_group','territory','is_internal_customer'],
        filters: {
            disabled: false,
        },
        // orFilters: getCustomerGroups?.value?.length > 0 ? [['customer_group', 'in', getCustomerGroups?.value]] : [],
        pageLength: Number.MAX_VALUE * 2,
        auto: false,
        onError(error) {
            createToast({
                title: 'error',
                message: Array.isArray(error?.messages) ? error.messages[0] : error?.messages || error || 'An error occurred',
                icon: 'x-circle',
                iconClasses: 'bg-surface-red-5 text-ink-white rounded-md p-px',
                position: 'top-center',
                timeout: 5,
            });
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
    
    function refresh() {
        return invoiceResource.reload()
    }

    function fetchInvoice() {
        return invoiceResource.fetch()
    }

    function fetchCustomer() {
        return customerResource.fetch()
    }

    return {
        customer, invoice, items, fetchInvoice, refresh, fetchCustomer
    }
})