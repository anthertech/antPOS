<template>
  <div class="w-full">
    <!-- body-classes pins the list to the field's width: reka-ui only sets
         the trigger width as a minimum, so long labels widened the list past
         the field on phones. Rows already truncate. -->
    <Autocomplete
      v-model="selectedCustomer"
      :options="computedOptions"
      placeholder="Select customer"
      body-classes="w-[var(--reka-popover-trigger-width)]"
      @update:query="onQuery"
    >
      <!-- frappe-ui's default trigger is 28px; this matches the 32px search
           box and New customer button beside it. -->
      <template #target="{ togglePopover, isOpen }">
        <button
          type="button"
          :disabled="disabled"
          class="flex h-8 w-full items-center justify-between gap-2 rounded border border-transparent bg-surface-gray-2 px-2.5 text-base transition-colors hover:bg-surface-gray-3 focus:border-outline-gray-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3 disabled:cursor-not-allowed disabled:opacity-60"
          :class="{ 'bg-surface-gray-3': isOpen }"
          :aria-expanded="isOpen"
          aria-haspopup="listbox"
          @click="togglePopover()"
        >
          <span class="flex min-w-0 items-center gap-2">
            <LucideUser class="h-4 w-4 shrink-0 text-ink-gray-5" />
            <span v-if="selectedCustomer" class="truncate text-ink-gray-8">{{
              selectedCustomer.label
            }}</span>
            <span v-else class="truncate text-ink-gray-4">Select customer</span>
          </span>
          <LucideChevronDown class="h-4 w-4 shrink-0 text-ink-gray-5" />
        </button>
      </template>
      <!-- On narrow screens the group would truncate the phone number, which
           matters more to the cashier. -->
      <template #item-suffix="{ option }">
        <span
          v-if="option?.description"
          class="hidden text-sm text-ink-gray-5 sm:inline"
        >
          {{ option.description }}
        </span>
      </template>
    </Autocomplete>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, watch, defineProps } from 'vue'
import emitter from '@/utils/emitter'
import { Autocomplete, createListResource, debounce } from 'frappe-ui'
import LucideUser from '~icons/lucide/user'
import LucideChevronDown from '~icons/lucide/chevron-down'
import { createToast } from '@/utils'
import { usePosProfileStore } from '@/stores/posProfile'
import { useInvoiceStore } from '@/stores/pos'

const emit = defineEmits(['update:customer'])

const props = defineProps({
  // Not `required`: the parent legitimately holds {} before a customer is
  // picked, and the Autocomplete clear button hands back null.
  customer: {
    type: Object,
    default: () => ({}),
  },
  disabled: { type: Boolean, default: false },
})

const posProfileStore = usePosProfileStore()
const invoiceStore = useInvoiceStore()

// How many customers to pull per request. The list is searched server-side, so
// this is a page of results, not the whole table.
const PAGE_LENGTH = 20

const customerGroups = computed(
  () =>
    posProfileStore.posProfileData?.customer_groups?.map(
      (item) => item.customer_group,
    ) || [],
)

// frappe-ui's Autocomplete filters the fetched options again on label and value
// only. The server search also matches mobile numbers, so the number goes into
// the label -- otherwise a phone-number search would be filtered back out. It
// also lets the cashier confirm they picked the right person.
const toOption = (item) => ({
  label: item.mobile_no
    ? `${item.name} · ${item.mobile_no}`
    : item.name || 'Unnamed',
  description: item.customer_group,
  value: item.name,
  name: item.name,
  mobile_no: item.mobile_no || '',
  customer_group: item.customer_group,
  territory: item.territory,
  is_internal_customer: item.is_internal_customer,
})

const buildFilters = (query) => {
  const filters = { disabled: false }

  // The POS Profile restricts which customer groups a cashier may sell to.
  // This was previously snapshotted at resource-creation time, before the
  // profile had loaded, so it was always empty and every customer was visible.
  if (customerGroups.value.length) {
    filters.customer_group = ['in', customerGroups.value]
  }

  if (query) {
    filters.name = ['like', `%${query}%`]
  }

  return filters
}

const customerResource = createListResource({
  doctype: 'Customer',
  fields: [
    'name',
    'mobile_no',
    'customer_group',
    'territory',
    'is_internal_customer',
  ],
  filters: buildFilters(''),
  orderBy: 'modified desc',
  pageLength: PAGE_LENGTH,
  auto: false,
  onError(error) {
    createToast({
      title: 'error',
      message: Array.isArray(error?.messages)
        ? error.messages[0]
        : error?.messages || error || 'An error occurred',
      icon: 'x-circle',
      iconClasses: 'bg-surface-red-5 text-ink-white rounded-md p-px',
      position: 'top-center',
      timeout: 5,
    })
  },
  transform: (data) => data.map(toOption),
})

const search = (query) => {
  // Search by name or mobile number. Frappe ORs `orFilters` among themselves and
  // ANDs the result with `filters`, so the group restriction still applies.
  customerResource.update({
    filters: buildFilters(''),
    orFilters: query
      ? [
          ['name', 'like', `%${query}%`],
          ['mobile_no', 'like', `%${query}%`],
        ]
      : [],
  })
  customerResource.reload()
}

const onQuery = debounce(search, 300)

const computedOptions = computed(() => customerResource.data || [])

const refreshCustomerList = async (params) => {
  await customerResource.reload()
  selectedCustomer.value = toOption(params)
}

onMounted(() => {
  emitter.on('customerCreated', refreshCustomerList)
  customerResource.reload()
})

onUnmounted(() => {
  emitter.off('customerCreated', refreshCustomerList)
})

const selectedCustomer = computed({
  // The Autocomplete wants null for "nothing selected"; the stores want {}.
  // Translate at this boundary so a cleared customer can never reach a consumer
  // as null -- that is what blanked the Payments page (issue #57).
  get: () => (props.customer && props.customer.name ? props.customer : null),
  set: (newVal) => {
    if (invoiceStore.invoice.is_return) return
    emit('update:customer', newVal || {})
    emitter.emit('calctotal')
    emitter.emit('clear', false)
  },
})

// Reload once the POS profile arrives: the customer-group restriction depends on
// it. The previous version passed the unwrapped boolean rather than a getter, so
// this never fired after the initial run.
watch(
  () => posProfileStore.hasNoData,
  () => customerResource.reload(),
)

watch(customerGroups, () => search(''))
</script>
