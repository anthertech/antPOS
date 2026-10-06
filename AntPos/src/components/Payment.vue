<template>
  <!-- Desktop: invoices and the payment form side by side, each scrolling.
         Phones: one scrolling column with the submit button pinned below. -->
  <div
    class="flex h-full w-full min-h-0 flex-col bg-surface-gray-1 lg:flex-row lg:gap-3 lg:p-3"
  >
    <!-- The resize handle between the two panes is also the gap. -->
    <div
      class="min-h-0 flex-1 overflow-y-auto pos-scroll lg:flex lg:min-w-0 lg:flex-row lg:overflow-hidden"
    >
      <!-- Customer and invoices -->
      <section
        class="flex flex-col bg-surface-white lg:min-h-0 lg:min-w-0 lg:flex-1 lg:overflow-hidden lg:rounded-xl lg:border lg:border-outline-gray-1 lg:shadow-sm"
      >
        <div class="space-y-3 border-b border-outline-gray-1 p-3">
          <Customer v-model:customer="paymentStore.paymentCustomer" />
          <TabButtons
            v-model="currentTab"
            class="w-full"
            :buttons="[
              { label: 'Settle invoices', value: 'credit' },
              { label: 'Advance payment', value: 'advanced' },
            ]"
          />
          <TextInput
            v-if="currentTab === 'credit' && paymentStore.paymentCustomer?.name"
            v-model="searchQuery"
            type="text"
            size="md"
            variant="subtle"
            placeholder="Search invoices"
          >
            <template #prefix
              ><FeatherIcon class="w-4 text-ink-gray-5" name="search"
            /></template>
          </TextInput>
        </div>

        <div class="p-3 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:pos-scroll">
          <div
            v-if="!paymentStore.paymentCustomer?.name"
            class="px-4 py-10 text-center"
          >
            <p class="text-base font-medium text-ink-gray-8">
              Choose a customer
            </p>
            <p class="mt-1 text-sm text-ink-gray-5">
              {{
                currentTab === 'credit'
                  ? 'Their unpaid invoices will appear here.'
                  : 'Then enter the amount they are paying in advance.'
              }}
            </p>
          </div>

          <template v-else-if="currentTab === 'credit'">
            <label
              v-if="filteredInvoices.length"
              class="mb-2 flex cursor-pointer items-center gap-3 px-3 py-1 text-sm text-ink-gray-6"
            >
              <input
                type="checkbox"
                class="h-4 w-4 rounded-sm text-ink-gray-9 focus:ring-0"
                :checked="selectAll"
                @change="toggleAllSelection"
              />
              <span class="flex-1">Select all</span>
              <span class="num">{{ filteredInvoices.length }} unpaid</span>
            </label>

            <ul v-if="filteredInvoices.length" class="space-y-2">
              <li v-for="invoice in filteredInvoices" :key="invoice.name">
                <label
                  class="flex min-h-[3.75rem] cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors"
                  :class="
                    invoice.selected
                      ? 'border-outline-gray-4 bg-surface-gray-1'
                      : 'border-outline-gray-1 hover:border-outline-gray-3'
                  "
                >
                  <input
                    type="checkbox"
                    class="h-4 w-4 shrink-0 rounded-sm text-ink-gray-9 focus:ring-0"
                    :checked="invoice.selected"
                    @change="toggleSelection(invoice)"
                  />
                  <span class="min-w-0 flex-1">
                    <span
                      class="num block truncate text-sm font-medium text-ink-gray-9"
                      >{{ invoice.name }}</span
                    >
                    <span class="num block text-sm text-ink-gray-5">
                      of {{ Number(invoice.grand_total || 0).toFixed(2) }}
                    </span>
                  </span>
                  <span class="shrink-0 text-right">
                    <span
                      class="num block text-base font-semibold text-ink-gray-9"
                    >
                      {{ Number(invoice.outstanding_amount || 0).toFixed(2) }}
                    </span>
                    <span class="block text-xs text-ink-gray-5">due</span>
                  </span>
                </label>
              </li>
            </ul>

            <div v-else-if="!invoices.loading" class="px-4 py-10 text-center">
              <p class="text-sm text-ink-gray-5">
                This customer has no unpaid invoices.
              </p>
            </div>

            <div
              v-if="invoices.hasNextPage && filteredInvoices.length"
              class="pt-3 text-center"
            >
              <Button
                variant="ghost"
                :loading="invoices.loading"
                @click="invoices.next()"
                >Load more</Button
              >
            </div>
          </template>

          <p v-else class="px-1 text-sm text-ink-gray-6">
            Record money received from
            <span class="font-medium text-ink-gray-8">{{
              paymentStore.paymentCustomer.name
            }}</span>
            ahead of an invoice. It is available to use against their future
            sales.
          </p>
        </div>
      </section>

      <!-- Payment -->
      <PaneResizer
        v-if="isDesktop"
        v-model="paymentWidth"
        storage-key="payments-panel"
        side="right"
        :default="380"
        :min="320"
        :min-other="420"
        label="Resize payment panel"
      />
      <section
        class="border-t border-outline-gray-1 bg-surface-white lg:flex lg:min-h-0 lg:shrink-0 lg:flex-col lg:overflow-y-auto lg:rounded-xl lg:border lg:shadow-sm"
        :style="isDesktop ? { width: `${paymentWidth}px` } : {}"
      >
        <div class="space-y-4 p-3">
          <div
            v-if="currentTab === 'credit'"
            class="rounded-lg bg-surface-gray-1 p-3"
          >
            <FormControl
              v-model="paymentStore.payment.paymentAmount"
              type="number"
              size="md"
              variant="subtle"
              placeholder="0.00"
              label="Amount to settle"
              @change="calculateAmountTotal"
            />
            <p class="mt-1 text-xs text-ink-gray-5">
              Filled from the invoices you select. You can lower it for a part
              payment.
            </p>
          </div>

          <div>
            <h3 class="mb-2 text-sm font-medium text-ink-gray-7">
              Payment method
            </h3>
            <div class="space-y-2">
              <div
                v-for="(mode, index) in modes"
                :key="mode.mode_of_payment"
                class="flex items-end gap-2"
              >
                <div class="min-w-0 flex-1">
                  <FormControl
                    v-model="mode.amount"
                    type="number"
                    size="md"
                    variant="subtle"
                    placeholder="0.00"
                    :label="mode.mode_of_payment"
                  />
                </div>
                <Button
                  v-if="currentTab === 'credit'"
                  variant="subtle"
                  size="md"
                  class="shrink-0"
                  @click="changemode(index)"
                >
                  Use full amount
                </Button>
              </div>
            </div>
          </div>

          <div
            v-if="
              currentTab === 'credit' &&
              Math.abs(Number(paymentStore.payment.diff || 0)) >= 0.005
            "
            class="flex items-center justify-between rounded-lg bg-surface-gray-1 px-3 py-2 text-sm"
          >
            <span class="text-ink-gray-6">
              {{
                Number(paymentStore.payment.diff) > 0
                  ? 'Not yet allocated'
                  : 'More than selected'
              }}
            </span>
            <span
              class="num font-semibold"
              :class="
                Number(paymentStore.payment.diff) > 0
                  ? 'text-ink-amber-3'
                  : 'text-ink-red-4'
              "
            >
              {{ Math.abs(Number(paymentStore.payment.diff)).toFixed(2) }}
            </span>
          </div>
        </div>

        <div
          class="hidden border-t border-outline-gray-1 p-3 lg:mt-auto lg:block"
        >
          <button
            type="button"
            class="inline-flex h-10 w-full items-center justify-center rounded-md text-lg font-semibold transition-colors focus:outline-none focus-visible:ring focus-visible:ring-outline-green-2 disabled:cursor-not-allowed"
            :class="
              hasSelectedInvoice
                ? 'bg-surface-green-3 text-ink-white hover:bg-green-700'
                : 'bg-surface-gray-2 text-ink-gray-4'
            "
            :disabled="!hasSelectedInvoice || recording"
            @click="createpayment"
          >
            Record payment
          </button>
        </div>
      </section>
    </div>

    <!-- Phones: the action stays in reach while the list scrolls. -->
    <div
      class="shrink-0 border-t border-outline-gray-1 bg-surface-white p-3 lg:hidden"
    >
      <button
        type="button"
        class="inline-flex h-12 w-full items-center justify-center rounded-md text-lg font-semibold transition-colors focus:outline-none focus-visible:ring focus-visible:ring-outline-green-2 disabled:cursor-not-allowed"
        :class="
          hasSelectedInvoice
            ? 'bg-surface-green-3 text-ink-white active:bg-green-800'
            : 'bg-surface-gray-2 text-ink-gray-4'
        "
        :disabled="!hasSelectedInvoice || recording"
        @click="createpayment"
      >
        Record payment
      </button>
    </div>
  </div>
</template>

<script setup>
import {
  Button,
  createListResource,
  TextInput,
  FormControl,
  FeatherIcon,
  createResource,
  TabButtons,
} from 'frappe-ui'
import {
  ref,
  computed,
  watch,
  onBeforeMount,
  onMounted,
  onUnmounted,
} from 'vue'
import Customer from '@/components/Customer.vue'
import PaneResizer from '@/components/PaneResizer.vue'
import { useBreakpoint } from '@/composables/useBreakpoint'
import { createToast, errorMessage } from '@/utils'
import { usePosProfileStore } from '@/stores/posProfile'
import { usePaymentStore } from '@/stores/payment'
import emitter from '@/utils/emitter'

const { isDesktop } = useBreakpoint()
const paymentWidth = ref(380)
const store = usePosProfileStore()
const paymentStore = usePaymentStore()
const searchQuery = ref('')
const currentTab = ref('credit')
const selectAll = ref(false)
const modes = ref([])

const buildInvoiceFilters = (customer) => ({
  outstanding_amount: ['>', 0],
  docstatus: 1,
  is_return: 0,
  customer: customer || paymentStore.paymentCustomer?.name,
})

const invoices = createListResource({
  doctype: 'Sales Invoice',
  fields: ['name', 'customer', 'grand_total', 'outstanding_amount'],
  filters: buildInvoiceFilters(),
  orderBy: 'creation asc',
  // The page-size buttons and "Load more" below drive this; it must not be
  // Infinity. (There used to be a second pageLength key here that silently
  // overrode the first.)
  pageLength: 20,
  transform(data) {
    for (let d of data) {
      d.selected = false
    }
    return data
  },
})

const filteredInvoices = computed(() => {
  if (!invoices.data || !paymentStore.paymentCustomer?.name) {
    return []
  }
  if (!searchQuery.value) {
    return invoices.data
  }
  return invoices.data.filter(
    (invoice) =>
      invoice.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      invoice.customer.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

const hasSelectedInvoice = computed(() => {
  if (currentTab.value === 'credit')
    return invoices.data?.some((inv) => inv.selected)
  else if (currentTab.value === 'advanced')
    return (
      paymentStore.paymentCustomer?.name &&
      modes.value.some((mode) => mode.amount > 0)
    )
  else return false
})

const calculateAmountTotal = () => {
  let total = invoices.data.reduce((sum, invoice) => {
    return invoice.selected ? sum + invoice.outstanding_amount : sum
  }, 0)
  paymentStore.payment.paymentAmount = total
}

const toggleAllSelection = (event) => {
  if (event && event.stopPropagation) {
    event.stopPropagation()
  }
  selectAll.value = event.target.checked
  invoices.data.forEach((invoice) => {
    invoice.selected = selectAll.value
  })

  calculateAmountTotal()
}

const toggleSelection = (invoice) => {
  if (selectAll.value) {
    selectAll.value = false
  }
  invoice.selected = !invoice.selected
  selectAll.value = invoices.data.every((inv) => inv.selected)
  calculateAmountTotal()
}

const addPayments = () => {
  store.posProfileData?.payments?.forEach((element) => {
    modes.value.push({
      mode_of_payment: element.mode_of_payment,
      amount: 0.0,
      base_amount: 0.0,
    })
  })
  paymentStore.payment.paid_amount = 0
  paymentStore.payment.diff = 0
}

const clearPayments = async (params) => {
  paymentStore.unmountAndRefresh(params)
  modes?.value?.forEach((mode) => {
    mode.amount = 0
  })
  invoices?.data?.forEach((invoice) => {
    invoice.selected = false
  })
  await invoices.reload()
  selectAll.value = false
  invoices.reload()
}

const changemode = (index) => {
  modes.value.forEach((element, i) => {
    if (i === index) {
      element.amount = paymentStore.payment.paymentAmount
    } else {
      element.amount = 0
    }
  })
  paymentStore.payment.paid_amount = paymentStore.payment.paymentAmount
}

// One recording at a time: a second tap while entries are being submitted
// would record the same payment twice.
const recording = ref(false)

const recordError = (message) =>
  createToast({
    title: 'Error',
    message,
    icon: 'x-circle',
    iconClasses: 'bg-surface-red-5 text-ink-white rounded-md p-px',
    position: 'top-center',
    timeout: 5,
  })

// Splits each payment method's amount across the selected invoices, oldest
// first. Works on a copy of the outstanding amounts: the list is only changed
// by reloading it from the server once the entries are saved.
const planCreditPayments = () => {
  const remaining = new Map(
    (invoices.data || [])
      .filter((inv) => inv.selected)
      .map((inv) => [inv.name, Number(inv.outstanding_amount) || 0]),
  )
  const plan = []
  // Anything that cannot be allocated to the selected invoices; recording it
  // would quietly take less money than was entered.
  let overpaid = 0
  for (const mode of [...modes.value].sort((a, b) => b.amount - a.amount)) {
    let left = Number(mode.amount) || 0
    const references = []
    for (const [name, outstanding] of remaining) {
      if (left <= 0) break
      if (outstanding <= 0) continue
      const allocated = Math.min(left, outstanding)
      remaining.set(name, outstanding - allocated)
      left -= allocated
      references.push({ invoice: name, allocated_amount: allocated })
    }
    if (left > 0.005) {
      overpaid += left
    }
    const amount = (Number(mode.amount) || 0) - left
    if (amount > 0 && references.length) {
      plan.push({
        mode_of_payment: mode.mode_of_payment,
        amount,
        references,
        customer: paymentStore.paymentCustomer?.name,
        shift: store.openingShift.name,
      })
    }
  }
  plan.unallocated = overpaid
  return plan
}

const planOnAccountPayments = () =>
  modes.value
    .filter((mode) => Number(mode.amount) > 0)
    .map((mode) => ({
      mode_of_payment: mode.mode_of_payment,
      amount: Number(mode.amount),
      references: [],
      customer: paymentStore.paymentCustomer?.name,
      shift: store.openingShift.name,
    }))

const createpayment = async () => {
  if (recording.value) return
  const plan =
    currentTab.value === 'credit'
      ? planCreditPayments()
      : planOnAccountPayments()
  if (!plan.length) {
    return recordError(
      currentTab.value === 'credit'
        ? 'Enter an amount and select at least one invoice with an outstanding balance.'
        : 'Please enter a valid amount for the payment method.',
    )
  }

  if (plan.unallocated > 0.005) {
    return recordError(
      `${plan.unallocated.toFixed(2)} more was entered than the selected invoices owe. ` +
        'Lower the amount, select more invoices, or use Advance payment.',
    )
  }

  recording.value = true
  let recorded = 0
  try {
    for (const entry of plan) {
      await save.fetch(entry)
      recorded++
    }
  } catch {
    // save's onError has shown the reason. Entries already submitted stay
    // recorded; say so, then show what is still outstanding.
    if (recorded)
      recordError(
        `${recorded} of ${plan.length} payments were recorded before the error.`,
      )
  } finally {
    recording.value = false
  }
  // After a failure with nothing recorded, the entries stay on screen to
  // retry. Otherwise the list is refreshed from the server.
  if (recorded) clearPayments()
}

// ERPNext builds the Payment Entry (accounts, currency, exchange rates,
// allocation); antPOS says who paid, how much, against which invoices and in
// which shift.
let save = createResource({
  url: 'ant_pos.ant_pos.api.payment_entry.record_payment',
  method: 'POST',
  onError(error) {
    createToast({
      title: 'Payment not recorded',
      message: errorMessage(error),
      type: 'error',
      timeout: 5,
    })
  },
})

watch(
  // Watch the name, not the object: the old watcher fired on every identity
  // change and dereferenced newValue.name, which threw the moment the customer
  // was cleared and took the whole page down with it (issue #57).
  () => paymentStore.paymentCustomer?.name || null,
  (customer, previous) => {
    if (customer === previous) return

    if (!customer) {
      // Clearing the customer must clear their invoices too, otherwise the
      // previous customer's outstanding list stays on screen.
      invoices.data = []
      selectAll.value = false
      paymentStore.payment.paymentAmount = 0
      modes.value.forEach((mode) => {
        mode.amount = 0
      })
      return
    }

    invoices.update({ filters: buildInvoiceFilters(customer), start: 0 })
    invoices.reload()
  },
  { immediate: true },
)

watch(
  () => modes.value.map((mode) => mode.amount),
  (newAmounts) => {
    const total = newAmounts.reduce((sum, val) => sum + Number(val || 0), 0)
    paymentStore.payment.diff =
      Number(paymentStore.payment.paymentAmount || 0) - total
  },
  { immediate: true },
)

watch(searchQuery, (newQuery) => {
  invoices.update({
    filters: buildInvoiceFilters(),
    orFilters: newQuery ? [['name', 'like', `%${newQuery}%`]] : [],
  })
  invoices.reload()
})

const onClear = (params) => clearPayments(params)
onMounted(() => emitter.on('clear', onClear))
onUnmounted(() => emitter.off('clear', onClear))

onBeforeMount(() => {
  addPayments()
})
</script>
