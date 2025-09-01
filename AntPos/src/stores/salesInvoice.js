import { defineStore } from 'pinia'
import { ref } from 'vue'
import { createResource } from 'frappe-ui'

function generateTempName(doctype) {
    const suffix = Math.random().toString(36).substring(2, 10)
    return `new-${doctype.toLowerCase().replace(/\s/g, "-")}-${suffix}`
}
// Factory function (can also be extracted to a separate file)
function createDoctypeResource(doctype, onSuccessCallback) {
    return createResource({
        url: 'ant_pos.ant_pos.api.get_doc_field',
        method: 'POST',
        auto: false,
        makeParams(params) {
            return {
                doctype,
                ...params
            }
        },
        onSuccess(data) {
            if (data) {
                onSuccessCallback(data)
            }
        }
    })
}

export const useInvoiceStore = defineStore('salesInvoice', () => {
    const invoice = ref({})
    const items = ref([])

    const invoiceResource = createDoctypeResource('Sales Invoice', (data) => {
        invoice.value = { ...data,name:generateTempName(data.doctype)}
        console.log(invoice.value,"invoicevalue");
        
    })

    const itemsResource = createDoctypeResource('Sales Invoice Item', (data) => {
        items.value = data || []
        console.log(items.value,"itemsvalue");
        
    })


    return {
        invoice,
        items,
        invoiceResource,
        itemsResource
    }
})
