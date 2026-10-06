<template>
  <InvoicePicker
    v-model="dialogVisible"
    v-model:search="searchQuery"
    title="Held sales"
    description="Sales parked with “Hold sale”. Pick one to carry on."
    action-label="Open"
    empty-title="No held sales"
    empty-text="Use “Hold sale” in the cart to park a sale and serve the next customer."
    :invoices="invoices.data || []"
    :loading="invoices.loading"
    :has-more="invoices.hasNextPage"
    :opening="loadingSelection ? selectedInvoice : null"
    @select="
      (name) => {
        selectedInvoice = name
        submitInvoice()
      }
    "
    @load-more="invoices.next()"
  />
</template>

<script setup>
import { createListResource, createResource, debounce } from 'frappe-ui'
import InvoicePicker from '@/components/pos/InvoicePicker.vue'
import { ref, computed, watch } from 'vue'
import { createToast } from '@/utils'
import { usePosProfileStore } from '@/stores/posProfile'
import { usePermissionStore } from '@/stores/permission'
import { usersStore } from '@/stores/users'
import { useInvoiceStore } from '@/stores/pos'
import { useMobileView } from '@/stores/mobile'

const store = usePosProfileStore()
const invoiceStore = useInvoiceStore()
const mobile = useMobileView()
const dialogVisible = ref(true)
const selectedInvoice = ref(null)
const searchQuery = ref('')
const permissionStore = usePermissionStore()
const user = usersStore().getUser()
const handleDialogClose = () => {
  dialogVisible.value = false
}

let salesInvoice = createResource({
  url: 'frappe.desk.form.load.getdoc',
  makeParams(params) {
    return {
      doctype: 'Sales Invoice',
      name: params.name,
    }
  },
  transform(data) {
    if (data.docs[0] && data.docs[0].items && data.docs[0].items.length > 0) {
      data.docs[0].items.forEach((item) => {
        if (item.serial_no) {
          item.selected_serial_no = item.serial_no
            .trim()
            .split('\n')
            .map((serial) => ({
              label: serial,
              value: serial,
            }))
        }
        if (item.batch_no) {
          item.selected_batch_no = {
            label: item.batch_no,
            value: item.batch_no,
          }
        } else {
          item.selected_batch_no = null
        }
        if (!item.custom_id) {
          item.custom_id = Date.now() + Math.random()
        }
      })
    }
    return data
  },
  onSuccess: async (data) => {
    if (!data.docs[0]?.items || !Array.isArray(data.docs[0].items)) {
      console.error('Invalid or missing items array', data.docs[0]?.items)
      return
    }
    addvalues()
  },
  onError(error) {
    createToast({
      title: 'error',
      message: Array.isArray(error?.messages)
        ? error.messages[0]
        : error?.messages || 'An error occurred',
      icon: 'x-circle',
      iconClasses: 'bg-surface-red-5 text-ink-white rounded-md p-px',
      position: 'top-center',
      timeout: 5,
    })
  },
})

const submitInvoice = () => {
  salesInvoice.fetch({ name: selectedInvoice.value })
}

const addvalues = async () => {
  invoiceStore.invoice = { ...salesInvoice.data.docs[0], status: null }
  // A loaded sale starts from the profile's sales-order default.
  invoiceStore.salesOrderChoice = null
  invoiceStore.items = salesInvoice.data.docs[0].items
  invoiceStore.invoice._discount_amount =
    salesInvoice.data.docs[0].discount_amount
  invoiceStore.invoice._additional_discount_percentage =
    salesInvoice.data.docs[0].additional_discount_percentage
  invoiceStore.invoice._total = salesInvoice.data.docs[0].net_total
  await get_value.fetch({
    doctype: 'Customer',
    filters: { name: salesInvoice.data.docs[0].customer },
    fieldname: [
      'name',
      'mobile_no',
      'customer_group',
      'territory',
      'is_internal_customer',
    ],
  })
  invoiceStore.invoiceCustomer = get_value.data || {}
  searchQuery.value = ''
  // On phones, go straight to the cart so the loaded sale is visible.
  mobile.showCart()
  handleDialogClose()
}

let get_value = createResource({
  url: 'frappe.client.get_value',
  makeParams(params) {
    return { ...params }
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
      message: Array.isArray(error?.messages)
        ? error.messages[0]
        : error?.messages || 'An error occurred',
      icon: 'x-circle',
      iconClasses: 'bg-surface-red-5 text-ink-white rounded-md p-px',
      position: 'top-center',
      timeout: 5,
    })
  },
})

function heldFilters() {
  const filters = { docstatus: 0, pos_profile: store.posProfileData.name }
  if (permissionStore.salesInvoiceCanOnlyOwn) filters.owner = user.name
  return filters
}

const loadingSelection = computed(() =>
  Boolean(salesInvoice.loading || get_value.loading),
)

const invoices = createListResource({
  doctype: 'Sales Invoice',
  fields: [
    'name',
    'customer',
    'customer_name',
    'grand_total',
    'posting_date',
    'posting_time',
    'total_qty',
  ],
  orderBy: 'posting_date desc, creation desc',
  filters: heldFilters(),
  orFilters: [],
  pageLength: 20,
  auto: true,
})

const updateInvoices = debounce((newQuery) => {
  invoices.update({
    // Must keep every base filter: this used to rebuild them without `owner`,
    // so a cashier limited to their own drafts saw everyone's once they searched.
    filters: heldFilters(),
    orFilters: newQuery
      ? [
          ['name', 'like', `%${newQuery}%`],
          ['customer', 'like', `%${newQuery}%`],
          ['customer_name', 'like', `%${newQuery}%`],
        ]
      : [],
  })
  invoices.reload()
}, 300)

watch(searchQuery, updateInvoices)
</script>
