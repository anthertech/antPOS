<template>
  <section
    :class="[
      'flex-1 flex flex-col min-w-0 min-h-0 bg-surface-white',
      compact
        ? ''
        : 'rounded-xl border border-outline-gray-1 shadow-sm overflow-hidden',
    ]"
  >
    <CustomerBar
      v-model:customer="invoiceStore.invoiceCustomer"
      :locked="Boolean(paying)"
      @create="loadComponent('CustomerForm')"
    />

    <SaleModeBar v-if="!paying" />

    <p
      v-if="invoiceStore.invoice.is_return"
      class="shrink-0 border-b border-outline-amber-1 bg-surface-amber-1 px-4 py-2 text-sm text-ink-amber-3"
    >
      Return: quantities are negative and the customer will be credited.
    </p>

    <div
      class="hidden lg:grid shrink-0 grid-cols-[1fr_84px_96px_112px_32px] gap-3 px-4 py-2 border-b border-outline-gray-1 bg-surface-gray-1 text-sm font-medium text-ink-gray-5"
    >
      <div>Item</div>
      <div class="text-right">Qty</div>
      <div class="text-right">Rate</div>
      <div class="text-right">Amount</div>
      <div><span class="sr-only">Remove</span></div>
    </div>

    <div
      class="flex-1 overflow-y-auto pos-scroll min-h-0"
      :class="compact && invoiceStore.items.length ? 'bg-surface-gray-1' : ''"
    >
      <div
        v-if="!invoiceStore.items.length"
        class="flex h-full flex-col items-center justify-center px-6 py-12 text-center"
      >
        <div
          class="grid h-12 w-12 place-items-center rounded-full bg-surface-gray-2 text-ink-gray-5"
        >
          <FeatherIcon name="shopping-cart" class="h-5 w-5" />
        </div>
        <p class="mt-3 text-base font-medium text-ink-gray-8">Cart is empty</p>
        <p class="mt-1 text-sm text-ink-gray-5">
          {{
            invoiceStore.invoiceCustomer?.name
              ? 'Scan a barcode to add the first item.'
              : 'Choose a customer, then scan a barcode.'
          }}
        </p>
      </div>

      <div v-else :class="compact ? 'space-y-2 p-3' : ''">
        <!-- inert while paying: edits here would not reach the saved
                     draft, so the list would disagree with the invoice. -->
        <Item
          v-for="(item, key) in invoiceStore.items"
          :key="item.custom_id"
          :items="item"
          :index="key"
          :inert="paying"
          :class="paying ? 'opacity-70' : ''"
        />
      </div>
    </div>

    <footer
      class="shrink-0 border-t border-outline-gray-1 bg-surface-white"
      style="padding-bottom: env(safe-area-inset-bottom)"
    >
      <div class="space-y-3 px-4 pt-3 pb-3">
        <div
          v-if="!paying && invoiceStore.items.length && canEditDiscount"
          class="flex items-center gap-3"
        >
          <label for="pos-discount" class="text-sm text-ink-gray-6">
            {{
              usePercentDiscount
                ? 'Additional discount (%)'
                : `Additional discount (${store.posProfileData?.currency || ''})`
            }}
          </label>
          <input
            v-if="usePercentDiscount"
            id="pos-discount"
            v-model="invoiceStore.invoice._additional_discount_percentage"
            type="number"
            inputmode="decimal"
            placeholder="0"
            class="pos-input num ml-auto w-28 text-right"
          />
          <input
            v-else
            id="pos-discount"
            v-model="invoiceStore.invoice._discount_amount"
            type="number"
            inputmode="decimal"
            placeholder="0.00"
            class="pos-input num ml-auto w-28 text-right"
          />
        </div>

        <TotalsReadout />
      </div>

      <p
        v-if="paying"
        class="border-t border-outline-gray-1 bg-surface-gray-1 px-4 py-3 text-sm text-ink-gray-6"
      >
        Taking payment. Use
        <span class="font-medium text-ink-gray-8">Back to cart</span> to change
        items.
      </p>

      <!-- Mobile: Hold and Print side by side, Pay full width in the thumb
                 zone. Held and Return live in the tab bar and the More sheet. -->
      <div
        v-else-if="compact"
        class="space-y-2 border-t border-outline-gray-1 bg-surface-gray-1 px-3 py-3"
      >
        <div
          v-if="mobileActions.length"
          class="grid gap-2"
          :class="mobileActions.length > 1 ? 'grid-cols-2' : 'grid-cols-1'"
        >
          <button
            v-for="action in mobileActions"
            :key="action.label"
            type="button"
            class="flex h-11 items-center justify-center gap-2 rounded-md text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-outline-gray-3 disabled:cursor-not-allowed disabled:opacity-50"
            :class="action.class"
            :disabled="action.disabled"
            @click="action.run()"
          >
            <FeatherIcon :name="action.icon" class="h-4 w-4" />
            {{ action.label }}
          </button>
        </div>
        <button
          v-if="permissionStore.salesInvoiceCanSubmit"
          type="button"
          class="flex h-12 w-full items-center justify-center gap-2 rounded-md text-lg font-semibold focus:outline-none focus-visible:ring focus-visible:ring-outline-green-2 disabled:cursor-not-allowed"
          :class="
            invoiceStore.items.length
              ? 'bg-surface-green-3 text-ink-white active:bg-green-800'
              : 'bg-surface-gray-2 text-ink-gray-4'
          "
          :disabled="
            !invoiceStore.items.length ||
            sales_invoice.loading ||
            invoiceStore.adding
          "
          @click="saveDraft('pay')"
        >
          Pay <span class="num">{{ payableTotal }}</span>
        </button>
      </div>

      <!-- Wraps when the cart pane is resized narrow, so Pay is never cut off. -->
      <div
        v-else
        class="flex flex-wrap items-center gap-2 border-t border-outline-gray-1 bg-surface-gray-1 px-3 py-3"
      >
        <Button
          variant="subtle"
          theme="blue"
          size="lg"
          @click="loadComponent('Held')"
        >
          <template #prefix
            ><FeatherIcon name="clock" class="h-4 w-4"
          /></template>
          Held
        </Button>
        <Button
          variant="subtle"
          theme="red"
          size="lg"
          @click="loadComponent('Return')"
        >
          <template #prefix
            ><FeatherIcon name="corner-up-left" class="h-4 w-4"
          /></template>
          Return
        </Button>

        <div class="ml-auto flex flex-wrap items-center justify-end gap-2">
          <Button
            v-if="permissionStore.salesInvoiceCanCreate"
            variant="outline"
            theme="gray"
            size="lg"
            :disabled="
              !invoiceStore.items.length ||
              sales_invoice.loading ||
              invoiceStore.adding
            "
            @click="saveDraft('save_new')"
          >
            Hold sale
          </Button>
          <Button
            v-if="
              permissionStore.salesInvoiceCanPrint &&
              permissionStore.salesInvoiceCanCreate
            "
            variant="solid"
            theme="gray"
            size="lg"
            :disabled="
              !invoiceStore.items.length ||
              sales_invoice.loading ||
              invoiceStore.adding
            "
            @click="saveDraft('print')"
          >
            <template #prefix
              ><FeatherIcon name="printer" class="h-4 w-4"
            /></template>
            Save &amp; print
          </Button>
          <button
            v-if="permissionStore.salesInvoiceCanSubmit"
            type="button"
            class="inline-flex h-10 min-w-[9rem] items-center justify-center gap-2 rounded-md px-5 text-lg font-semibold transition-colors focus:outline-none focus-visible:ring focus-visible:ring-outline-green-2 disabled:cursor-not-allowed"
            :class="
              invoiceStore.items.length
                ? 'bg-surface-green-3 text-ink-white hover:bg-green-700 active:bg-green-800'
                : 'bg-surface-gray-2 text-ink-gray-4'
            "
            :disabled="
              !invoiceStore.items.length ||
              sales_invoice.loading ||
              invoiceStore.adding
            "
            @click="saveDraft('pay')"
          >
            Pay <span class="num">{{ payableTotal }}</span>
          </button>
        </div>
      </div>
    </footer>
  </section>
</template>

<script setup>
import { Button, FeatherIcon, createResource } from 'frappe-ui'
import { inject, computed } from 'vue'
import CustomerBar from '@/components/pos/CustomerBar.vue'
import SaleModeBar from '@/components/pos/SaleModeBar.vue'
import TotalsReadout from '@/components/pos/TotalsReadout.vue'
import { useCartTotals } from '@/composables/useCartTotals'
import {
  useDiscountMode,
  invoiceDiscountFields,
} from '@/composables/useDiscountMode'
import { createToast, showToast } from '@/utils'
import { usePosProfileStore } from '@/stores/posProfile'
import { usePermissionStore } from '@/stores/permission'
import { useInvoiceStore } from '@/stores/pos'
import emitter from '@/utils/emitter'
import { openInvoicePrint } from '@/utils/print'
import Item from '@/components/Item.vue'

defineProps({
  // Mobile layout: no card frame, cart lines render as cards, Pay goes full width.
  compact: { type: Boolean, default: false },
  // The payment panel is open: the draft is saved, so saving it again from
  // here would conflict. The sale is finished from the payment panel.
  paying: { type: Boolean, default: false },
})

const store = usePosProfileStore()
const permissionStore = usePermissionStore()
const invoiceStore = useInvoiceStore()
const { loadComponent } = inject('dynamicComponent')
let status = ''
let sales_invoice = createResource({
  url: 'frappe.desk.form.save.savedocs',
  makeParams(params) {
    status = params.status
    return {
      doc: JSON.stringify({
        ...invoiceStore.invoice,
        doctype: 'Sales Invoice',
        is_pos: invoiceStore.invoice.is_return
          ? invoiceStore.invoice.is_pos
          : 1,
        pos_profile: store.posProfileData.name,
        company: store.posProfileData.company,
        conversion_rate: 1,
        selling_price_list: store.posProfileData.selling_price_list,
        // ERPNext's own POS copies this from the profile; the invoice has no other source.
        disable_rounded_total: store.posProfileData.disable_rounded_total
          ? 1
          : 0,
        items: invoiceStore.items,
        customer: invoiceStore.invoiceCustomer?.name,
        update_stock: 1,
        ...invoiceDiscountFields(invoiceStore.invoice, store.posProfileData),
        base_total:
          invoiceStore.invoice.base_total && invoiceStore.invoice.base_total,
        custom_ant_opening: store.openingShift.name,
        apply_discount_on: store.posProfileData.apply_discount_on,
        payments: getPayments(),
        advances: getAdvances(),
      }),
      action: params.action,
    }
  },
  async onSuccess(data) {
    if (status == 'pay') {
      invoiceStore.invoice = { ...data.docs[0], docstatus: 1 }
      return
    } else if (status == 'print') {
      openInvoicePrint(data.docs[0].name, store.posProfileData)
    }
    showToast('success', 'Sales Invoice Drafted Successfully')
    emitter.emit('remove_invoice', true)
  },
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
})

// Every draft save goes through here: one request at a time, so a double tap
// on Pay, Hold sale or Save & print cannot create two invoices.
const saveDraft = (nextStatus) => {
  // An item still being looked up would land after the invoice is saved.
  if (
    sales_invoice.loading ||
    invoiceStore.adding ||
    !invoiceStore.items.length
  )
    return
  // Return lines come from the original invoice; ERPNext checks their serials.
  const missingSerials =
    !invoiceStore.invoice.is_return &&
    invoiceStore.items.find(
      (item) =>
        item.has_serial_no &&
        (item.selected_serial_no || []).length !== Math.abs(Number(item.qty)),
    )
  if (missingSerials) {
    createToast({
      title: 'Serial numbers needed',
      message: `Select ${Math.abs(Number(missingSerials.qty))} serial number(s) for ${missingSerials.item_name || missingSerials.item_code}.`,
      icon: 'x-circle',
      iconClasses: 'bg-surface-red-5 text-ink-white rounded-md p-px',
      position: 'top-center',
      timeout: 5,
    })
    return
  }
  sales_invoice.fetch({ action: 'Save', status: nextStatus })
}

// Payment rows are sent with zero amounts. The cart's own total can still be
// the value from before the last scan was recalculated, and saving it here put
// a stale amount on the default mode. The payment panel fills the default mode
// from the total the server computes when it saves the draft.
const getPayments = () =>
  (invoiceStore.invoice.payments || []).map((p) => ({
    ...p,
    amount: 0,
    base_amount: 0,
  }))

const getAdvances = () => {
  if (!invoiceStore.invoice.advances) return []
  if (invoiceStore.invoice.is_return) return []
  return invoiceStore.invoice.advances
}

// The cart recalculates on its own when either discount field changes (it is
// part of the cart signature), so nothing needs to be derived here.
const { canEdit: canEditDiscount, byPercent: usePercentDiscount } =
  useDiscountMode()

const mobileActions = computed(() => {
  const busy =
    !invoiceStore.items.length || sales_invoice.loading || invoiceStore.adding
  const list = []
  if (permissionStore.salesInvoiceCanCreate) {
    list.push({
      label: 'Hold sale',
      icon: 'pause',
      disabled: busy,
      class: 'bg-surface-white border border-outline-gray-2 text-ink-gray-8',
      run: () => saveDraft('save_new'),
    })
  }
  if (
    permissionStore.salesInvoiceCanPrint &&
    permissionStore.salesInvoiceCanCreate
  ) {
    list.push({
      label: 'Save & print',
      icon: 'printer',
      disabled: busy,
      class: 'bg-surface-gray-7 text-ink-white',
      run: () => saveDraft('print'),
    })
  }
  return list
})

const { grand: cartGrand } = useCartTotals()
const payableTotal = computed(() => Number(cartGrand.value).toFixed(2))
</script>
