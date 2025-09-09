import { defineStore } from 'pinia'
import { ref } from 'vue'
import { createResource } from 'frappe-ui'

export const usePermissionStore = defineStore('permissionStore', () => {
    const salesInvoiceCanSubmit = ref(false)
    const salesInvoiceCanCreate = ref(false)
    const salesInvoiceCanPrint = ref(false)
    const salesInvoiceCanOnlyOwn = ref(false)

    // Payment Entry
    const paymentEntryCanSubmit = ref(false)
    const paymentEntryCanCreate = ref(false)
    const paymentEntryCanPrint = ref(false)
    const paymentEntryCanOnlyOwn = ref(false)

    // Sales Order
    const salesOrderCanSubmit = ref(false)
    const salesOrderCanCreate = ref(false)
    const salesOrderCanPrint = ref(false)
    const salesOrderCanOnlyOwn = ref(false)

    const permissionResource = createResource({
        url: 'ant_pos.ant_pos.api.get_user_permissions',
        method: 'GET',
        auto: false,
        onSuccess(data) {
            if (data) {
                salesInvoiceCanSubmit.value = data.sales_invoice.can_submit
                salesInvoiceCanCreate.value = data.sales_invoice.can_create
                salesInvoiceCanPrint.value = data.sales_invoice.can_print
                salesInvoiceCanOnlyOwn.value = data.sales_invoice.has_own_docs

                paymentEntryCanSubmit.value = data.payment_entry.can_submit
                paymentEntryCanCreate.value = data.payment_entry.can_create
                paymentEntryCanPrint.value = data.payment_entry.can_print
                paymentEntryCanOnlyOwn.value = data.payment_entry.has_own_docs

                salesOrderCanSubmit.value = data.sales_order.can_submit
                salesOrderCanCreate.value = data.sales_order.can_create
                salesOrderCanPrint.value = data.sales_order.can_print
                salesOrderCanOnlyOwn.value = data.sales_order.has_own_docs
            }
        },
        onError(err) {
            console.error('Error fetching permissions', err)
        },
    })

    function refresh() {
        return permissionResource.reload()
    }

    function fetchPermissions() {
        return permissionResource.fetch()
    }

    return {
        salesInvoiceCanSubmit, salesInvoiceCanCreate, salesInvoiceCanPrint,salesInvoiceCanOnlyOwn,
        paymentEntryCanSubmit, paymentEntryCanCreate, paymentEntryCanPrint,paymentEntryCanOnlyOwn,
        salesOrderCanSubmit, salesOrderCanCreate, salesOrderCanPrint,salesOrderCanOnlyOwn,
        refresh, fetchPermissions
    }
})