import { defineStore } from 'pinia'
import { ref } from 'vue'
import { createResource } from 'frappe-ui'
import { createToast, errorMessage } from '@/utils'

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

  // System Managers design the POS forms (/antPOS/layouts).
  const canManageLayouts = ref(false)
  const isSystemManager = ref(false)

  const permissionResource = createResource({
    url: 'ant_pos.ant_pos.api.get_user_permissions',
    method: 'GET',
    auto: false,
    onSuccess(data) {
      if (data) {
        salesInvoiceCanSubmit.value = data.sales_invoice.can_submit
        salesInvoiceCanCreate.value = data.sales_invoice.can_create
        salesInvoiceCanPrint.value = data.sales_invoice.can_print
        salesInvoiceCanOnlyOwn.value = data.sales_invoice.only_own

        paymentEntryCanSubmit.value = data.payment_entry.can_submit
        paymentEntryCanCreate.value = data.payment_entry.can_create
        paymentEntryCanPrint.value = data.payment_entry.can_print
        paymentEntryCanOnlyOwn.value = data.payment_entry.only_own

        salesOrderCanSubmit.value = data.sales_order.can_submit
        salesOrderCanCreate.value = data.sales_order.can_create
        salesOrderCanPrint.value = data.sales_order.can_print
        salesOrderCanOnlyOwn.value = data.sales_order.only_own

        canManageLayouts.value = Boolean(data.can_manage_layouts)
        isSystemManager.value = Boolean(data.is_system_manager)
      }
    },
    onError(error) {
      createToast({
        title: 'Could not load your permissions',
        message: errorMessage(error),
        type: 'error',
      })
    },
  })

  function refresh() {
    return permissionResource.reload()
  }

  let loaded = null
  function fetchPermissions() {
    loaded = permissionResource.fetch().catch((error) => {
      loaded = null
      throw error
    })
    return loaded
  }
  // Resolves once the permissions are known (fetching them if needed), so
  // callers never act on the all-false defaults.
  function ready() {
    return loaded || fetchPermissions()
  }

  return {
    salesInvoiceCanSubmit,
    salesInvoiceCanCreate,
    salesInvoiceCanPrint,
    salesInvoiceCanOnlyOwn,
    paymentEntryCanSubmit,
    paymentEntryCanCreate,
    paymentEntryCanPrint,
    paymentEntryCanOnlyOwn,
    salesOrderCanSubmit,
    salesOrderCanCreate,
    salesOrderCanPrint,
    salesOrderCanOnlyOwn,
    canManageLayouts,
    isSystemManager,
    refresh,
    fetchPermissions,
    ready,
  }
})
