import { defineStore } from 'pinia'
import { ref } from 'vue'
import { createResource } from 'frappe-ui'
import { createToast } from '@/utils';

export const useInvoiceStore = defineStore('invoiceStore', () => {
    const invoice = ref({})
    const items = ref([])
    const fetchInvoice = createResource({
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
    
    function refresh() {
        return fetchInvoice.reload()
    }

    function fetchInvoice() {
        return fetchInvoice.fetch()
    }

    return { 
        invoice, items, fetchInvoice, refresh 
    }
})