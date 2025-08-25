import { defineStore } from 'pinia'
import { ref } from 'vue'
import { createResource } from 'frappe-ui'

export const usePermissionStore = defineStore('permissionStore', () => {
    const salesInvoiceCanSubmit = ref(false)
    const salesInvoiceCanCreate = ref(false)
    const salesInvoiceCanPrint = ref(false)

    // Payment Entry
    const paymentEntryCanSubmit = ref(false)
    const paymentEntryCanCreate = ref(false)
    const paymentEntryCanPrint = ref(false)

    // Sales Order
    const salesOrderCanSubmit = ref(false)
    const salesOrderCanCreate = ref(false)
    const salesOrderCanPrint = ref(false)

    const permissionResource = createResource({
        url: 'ant_pos.ant_pos.api.get_user_permissions',
        method: 'GET',
        auto: true,
        onSuccess(data) {
            if (data) {
                console.log(data,"&&&&&&&&&&&&&&&&&&&&&&&&&&");
                
                salesInvoiceCanSubmit.value = data.sales_invoice.can_submit
                salesInvoiceCanCreate.value = data.sales_invoice.can_create
                salesInvoiceCanPrint.value = data.sales_invoice.can_print

                paymentEntryCanSubmit.value = data.payment_entry.can_submit
                paymentEntryCanCreate.value = data.payment_entry.can_create
                paymentEntryCanPrint.value = data.payment_entry.can_print

                salesOrderCanSubmit.value = data.sales_order.can_submit
                salesOrderCanCreate.value = data.sales_order.can_create
                salesOrderCanPrint.value = data.sales_order.can_print
            }
        },
        onError(err) {
            console.error('Error fetching permissions', err)
        },
    })

    function refresh() {
        return permissionResource.reload()
    }

    return {
        salesInvoiceCanSubmit, salesInvoiceCanCreate, salesInvoiceCanPrint,
        paymentEntryCanSubmit, paymentEntryCanCreate, paymentEntryCanPrint,
        salesOrderCanSubmit, salesOrderCanCreate, salesOrderCanPrint,
        refresh
    }
})