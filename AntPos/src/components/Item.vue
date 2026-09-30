<template>
  <article
    :class="[
      'lg:border-b lg:border-outline-gray-1 lg:rounded-none',
      'border rounded-xl lg:bg-transparent bg-surface-white',
      items.custom_open
        ? 'border-outline-gray-3 lg:bg-surface-gray-1'
        : 'border-outline-gray-1',
    ]"
  >
    <!-- Desktop: a real grid, so Qty/Rate/Amount line up down the column. -->
    <div
      class="hidden lg:grid grid-cols-[1fr_84px_96px_112px_32px] gap-3 px-4 py-3 items-center"
    >
      <button
        type="button"
        class="min-w-0 text-left flex items-center gap-2 focus:outline-none focus-visible:underline"
        :aria-expanded="Boolean(items.custom_open)"
        @click="items.custom_open = !items.custom_open"
      >
        <FeatherIcon
          :name="items.custom_open ? 'chevron-down' : 'chevron-right'"
          class="w-4 h-4 shrink-0 text-ink-gray-5"
        />
        <span class="min-w-0">
          <span class="block text-[14px] font-medium truncate">{{
            items.item_name || items.item_code
          }}</span>
          <span class="block text-[12px] text-ink-gray-5 num truncate">{{
            lineMeta
          }}</span>
        </span>
      </button>
      <div class="text-right num text-[14px]">{{ items.qty }}</div>
      <div class="text-right num text-[14px]">
        {{ Number(items.rate || 0).toFixed(2) }}
      </div>
      <div class="text-right num text-[14px] font-semibold">
        {{ lineAmount(items).toFixed(2) }}
      </div>
      <button
        type="button"
        class="justify-self-end text-ink-gray-5 hover:text-ink-red-4 focus:outline-none focus-visible:text-ink-red-4"
        :aria-label="`Remove ${items.item_code}`"
        @click="invoiceStore.removeLine(items)"
      >
        <FeatherIcon name="trash-2" class="w-4 h-4" />
      </button>
    </div>

    <!-- Mobile: a card with a stepper. Columns do not fit, and the qty
             control has to be thumb-sized. -->
    <div class="lg:hidden p-3">
      <div class="flex items-start gap-3">
        <button
          type="button"
          class="flex-1 min-w-0 text-left focus:outline-none"
          :aria-expanded="Boolean(items.custom_open)"
          @click="items.custom_open = !items.custom_open"
        >
          <span class="block text-[15px] font-medium leading-snug">{{
            items.item_name || items.item_code
          }}</span>
          <span class="block text-[12px] text-ink-gray-5 num mt-0.5 truncate">{{
            lineMeta
          }}</span>
        </button>
        <span class="text-[16px] font-semibold num shrink-0">{{
          lineAmount(items).toFixed(2)
        }}</span>
      </div>
      <div class="flex items-center gap-2 mt-3">
        <div
          class="flex items-center border border-outline-gray-1 rounded-lg overflow-hidden bg-surface-white"
        >
          <button
            type="button"
            class="w-11 h-11 grid place-items-center text-ink-gray-6 active:bg-surface-gray-2"
            aria-label="Decrease quantity"
            @click="step(-1)"
          >
            <FeatherIcon name="minus" class="w-4 h-4" />
          </button>
          <span class="w-12 text-center num text-[16px] font-medium">{{
            items.qty
          }}</span>
          <button
            type="button"
            class="w-11 h-11 grid place-items-center text-ink-gray-6 active:bg-surface-gray-2"
            aria-label="Increase quantity"
            @click="step(1)"
          >
            <FeatherIcon name="plus" class="w-4 h-4" />
          </button>
        </div>
        <span class="text-[13px] text-ink-gray-5 num"
          >&times; {{ Number(items.rate || 0).toFixed(2) }}</span
        >
        <button
          type="button"
          class="ml-auto w-11 h-11 grid place-items-center text-ink-gray-5 active:text-ink-red-4"
          :aria-label="`Remove ${items.item_code}`"
          @click="invoiceStore.removeLine(items)"
        >
          <FeatherIcon name="trash-2" class="w-4 h-4" />
        </button>
      </div>
    </div>
    <div
      v-if="items.custom_open"
      class="space-y-3 border-t border-outline-gray-1 px-3 py-3 lg:px-4"
    >
      <!-- Fields come from the "Sales Invoice Item / Grid Row" layout
                 (Antpos Fields Layout). The line's own rules (rate editing,
                 discount mode, locked fields) are applied on top. -->
      <div class="flex items-start gap-2">
        <LayoutForm
          class="min-w-0 flex-1"
          :layout="lineLayout"
          :doc="items"
          :overrides="lineOverrides"
          :id-prefix="`line-${items.custom_id}`"
          :columns-hint="4"
        />
        <!-- Admins change which fields a cart line shows from here. -->
        <Button
          v-if="permissions.canManageLayouts && isDesktop"
          variant="ghost"
          class="w-7 shrink-0"
          tooltip="Edit fields layout"
          @click="editLayout = true"
        >
          <LucidePencilLine class="h-4 w-4" aria-hidden="true" />
          <span class="sr-only">Edit fields layout</span>
        </Button>
      </div>
      <LayoutEditorModal
        v-if="editLayout"
        v-model="editLayout"
        title="Edit cart line fields layout"
        doctype="Sales Invoice Item"
        type="Grid Row"
        parent-doctype="Sales Invoice"
        :sample="items"
        :preview-overrides="lineOverrides"
      />

      <!-- Only for batch-tracked lines. These used to render on every item,
                 plain ones included, and the two info fields were editable. -->
      <div v-if="isBatched" class="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <div class="col-span-2">
          <Autocomplete
            v-model="items.selected_batch_no"
            :options="getbatchNo()"
            label="Batch"
            placeholder="Select batch"
            :disabled="invoiceStore.invoice.is_return"
            :hideSearch="true"
          />
        </div>
        <div>
          <p class="mb-1.5 text-base text-ink-gray-5">Available</p>
          <p class="num flex h-8 items-center text-base text-ink-gray-8">
            {{ items.stock_qty ?? '—' }}
          </p>
        </div>
        <div>
          <p class="mb-1.5 text-base text-ink-gray-5">Expires</p>
          <p class="num flex h-8 items-center text-base text-ink-gray-8">
            {{ items.expiry_date || '—' }}
          </p>
        </div>
      </div>

      <div v-if="isSerialised">
        <Autocomplete
          v-model="items.selected_serial_no"
          :options="get_serial_no_options()"
          label="Serial numbers"
          placeholder="Select serial numbers"
          :multiple="true"
        />
        <p class="mt-1 text-xs text-ink-gray-5">
          {{ (items.selected_serial_no || []).length }} selected of
          {{ serialNoQty || (items.serial_no_options || []).length }} in stock
        </p>
      </div>

      <p class="num text-xs text-ink-gray-5">
        Price list {{ Number(items.price_list_rate || 0).toFixed(2) }}
        <template v-if="items.item_group"> · {{ items.item_group }}</template>
      </p>
    </div>
  </article>
</template>
<script setup>
import {
  Button,
  FeatherIcon,
  Autocomplete,
  createResource,
  createListResource,
} from 'frappe-ui'
import LayoutForm from '@/components/form/LayoutForm.vue'
import LayoutEditorModal from '@/components/layout-editor/LayoutEditorModal.vue'
import LucidePencilLine from '~icons/lucide/pencil-line'
import { usePermissionStore } from '@/stores/permission'
import { useBreakpoint } from '@/composables/useBreakpoint'
import { LOCKED_LINE_FIELDS, useFormLayout } from '@/utils/formLayout'
import { watch, defineProps, onMounted, onUnmounted, computed, ref } from 'vue'
import { createToast, errorMessage, showToast } from '@/utils'
import emitter from '@/utils/emitter'
import { usePosProfileStore } from '@/stores/posProfile'
import { useInvoiceStore } from '@/stores/pos'
import { lineAmount } from '@/composables/useCartTotals'
import {
  useDiscountMode,
  applyLineDiscountAmount,
} from '@/composables/useDiscountMode'

const store = usePosProfileStore()
const invoiceStore = useInvoiceStore()
const { canEdit: canEditDiscount, byPercent: discountByPercent } =
  useDiscountMode()
const lineLayout = useFormLayout(
  'Sales Invoice Item',
  'Grid Row',
  'Sales Invoice',
)
const permissions = usePermissionStore()
const { isDesktop } = useBreakpoint()
const editLayout = ref(false)

// Edited with their own pickers below the form.
const PICKER_FIELDS = ['batch_no', 'serial_no', 'serial_and_batch_bundle']

const lineOverrides = computed(() => {
  const byPercent = discountByPercent.value
  const rules = {
    rate: { readOnly: !store.posProfileData?.allow_rate_change },
    // The profile picks how a discount is entered; the other figure is
    // shown, worked out from it.
    discount_percentage: {
      readOnly: !(canEditDiscount.value && byPercent),
      format: formatPercent,
    },
    discount_amount: {
      readOnly: !(canEditDiscount.value && !byPercent),
      set: (value) => applyLineDiscountAmount(props.items, value),
    },
  }
  for (const f of LOCKED_LINE_FIELDS) rules[f] = { readOnly: true }
  for (const f of PICKER_FIELDS) rules[f] = { hidden: true }
  return rules
})

const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
})

const SERIAL_NO_PAGE_LENGTH = 500

const serialNoQty = computed(() => props.items?.serial_no_options?.length || 0)

// One quiet line under the item name carrying whatever identifies this line:
// code, UOM, batch, expiry, serial. Beats five separate read-only fields.
const lineMeta = computed(() => {
  const item = props.items || {}
  const parts = [item.item_code]

  if (item.uom && item.uom !== item.item_code) parts.push(item.uom)
  if (item.batch_no) parts.push(`Batch ${item.batch_no}`)
  if (item.expiry_date) parts.push(`exp ${item.expiry_date}`)

  const serials = (item.selected_serial_no || []).map((s) => s.value ?? s)
  if (serials.length === 1) parts.push(`SN ${serials[0]}`)
  else if (serials.length > 1) parts.push(`${serials.length} serials`)

  return parts.filter(Boolean).join(' \u00b7 ')
})

// Held drafts and returns come back from the server without the has_* flags,
// so fall back to whether the line already carries a batch or serial.
const isBatched = computed(() =>
  Boolean(props.items.has_batch_no || props.items.batch_no),
)
const isSerialised = computed(() =>
  Boolean(props.items.has_serial_no || props.items.serial_no),
)

const step = (delta) => {
  const next = Number(props.items.qty || 0) + delta
  // Returns carry negative quantities; never let a stepper cross zero.
  if (invoiceStore.invoice.is_return) {
    if (next > -1) return
  } else if (next < 1) {
    return
  }
  props.items.qty = next
}

const lookupFailed = (what) => (error) =>
  createToast({
    title: `Could not load ${what}`,
    message: errorMessage(error),
    type: 'error',
    timeout: 10,
  })

const get_batch = createResource({
  url: 'ant_pos.ant_pos.api.item.get_batches_list',
  method: 'POST',
  auto: false,
  makeParams(params) {
    return {
      ...params,
    }
  },
  onError: lookupFailed('the batches for this item'),
})

const get_serial_no = createListResource({
  url: 'frappe.client.get_list',
  method: 'POST',
  auto: false,
  doctype: 'Serial No',
  fields: ['name as serial_no', 'batch_no'],
  filters: {
    warehouse: store.posProfileData.warehouse,
    item_code: props.items.item_code,
  },
  // A single POS line never needs more serials than this; fetching the whole
  // Serial No table per cart row was the single worst query in the app.
  pageLength: SERIAL_NO_PAGE_LENGTH,
  onSuccess(data) {
    props.items.serial_no_options = data.map((serial_no) => ({
      label: serial_no.serial_no,
      value: serial_no.serial_no,
      batch_no: serial_no.batch_no,
    }))
  },
  onError: lookupFailed('the serial numbers for this item'),
})

const get_serial_no_options = () => {
  if (invoiceStore.invoice.is_return) {
    return (props.items._serial || []).map((serial_no) => ({
      label: serial_no,
      value: serial_no,
    }))
  }
  let serials = get_serial_no.data || []

  if (props.items.batch_no != null) {
    serials = serials.filter(
      (serial_no) => serial_no.batch_no === props.items.batch_no,
    )
  }

  return serials.map((serial_no) => ({
    label: serial_no.serial_no,
    value: serial_no.serial_no,
  }))
}

const validateInvoice = () => {
  emitter.emit('calctotal')
}

const getbatchNo = () => {
  if (invoiceStore.invoice.is_return) {
    return [
      {
        label: props.items.batch_no,
        value: props.items.batch_no,
      },
    ]
  }
  return (get_batch.data || []).map((batch) => ({
    label: batch.batch_no,
    value: batch.batch_no,
  }))
}

watch(
  () => props.items.selected_batch_no,
  (newBatchNo, oldBatchNo) => {
    if ((newBatchNo && newBatchNo.value !== oldBatchNo?.value) || !oldBatchNo) {
      let find = validateitems()
      const option = get_serial_no_options()
      if (!find && option.length > 0) {
        props.items.selected_serial_no = []
        props.items.serial_no_options = props.items.serial_no_options
          .filter((serial_no) => serial_no.batch_no == newBatchNo)
          .map((serial_no) => ({
            label: serial_no.serial_no,
            value: serial_no.serial_no,
          }))
        add_serial_no()
      }

      const batch = (get_batch.data || []).find(
        (b) => b.batch_no === newBatchNo,
      )
      props.items.stock_qty = batch ? batch.stock_qty : 0
      props.items.expiry_date = batch ? batch.expiry_date : null
      props.items.batch_no =
        typeof newBatchNo === 'object' ? newBatchNo?.value : newBatchNo
      validateInvoice()
    }
  },
)

const validateitems = () => {
  if (!store.posProfileData.custom_new_items_on_new_line) {
    let find = false
    for (let index = 0; index < invoiceStore.items.length; index++) {
      if (
        props.index !== index &&
        invoiceStore.items[props.index].item_code ===
          invoiceStore.items[index].item_code &&
        ((invoiceStore.items[props.index].has_batch_no &&
          invoiceStore.items[props.index].batch_no ===
            invoiceStore.items[index].batch_no &&
          !invoiceStore.items[props.index].is_return) ||
          !invoiceStore.items[props.index].has_batch_no)
      ) {
        // The merged serials belong on the line that stays. They used to be
        // assigned to the array itself, so they vanished with the removed row.
        const kept = invoiceStore.items[index]
        kept.selected_serial_no = mergeSerial_no(
          kept.selected_serial_no || [],
          invoiceStore.items[props.index].selected_serial_no || [],
        )
        invoiceStore.items.splice(props.index, 1)
        find = true
        return find
      }
    }
    return find
  }
}

const mergeSerial_no = (left, right) => {
  const leftValues = left.map((sn) => sn.value)
  const rightValues = right.map((sn) => sn.value)
  const mergedValues = [...new Set([...leftValues, ...rightValues])]
  return mergedValues.map((serial) => ({ label: serial, value: serial }))
}

// Signed, like the server's: a return line's amount is negative.
const calculateAmountTotal = () => {
  props.items.amount = lineAmount(props.items)
}

const validateQty = () => {
  if (props.items.serial_no_options) {
    const options = get_serial_no_options()
    if (options.length > 0 && props.items.qty > options.length) {
      showToast(
        'warning',
        'Qty is greater than available serial no',
        'alert-circle',
        '#ffcc00',
        '#ffffff',
      )
      props.items.qty = invoiceStore.invoice.is_return
        ? -Math.abs(options.length)
        : options.length
    }
  }
  return
}

const add_serial_no = () => {
  props.items.serial_no = props.items.selected_serial_no
    .map((sn) => sn.value)
    .join('\n')
}

watch(
  () => props.items.selected_serial_no,
  (newValue, oldValue) => {
    if ((props.items.serial_no_options && newValue !== oldValue) || !oldValue) {
      add_serial_no()
      adjustQtyNumbers(props.items.qty)
    }
  },
)

watch(
  () => props.items.price_list_rate,
  (newValue, oldValue) => {
    if (props.items.price_list_rate && newValue !== oldValue) {
      props.items.rate = discountByPercent.value
        ? props.items.price_list_rate -
          (props.items.price_list_rate * props.items.discount_percentage) / 100
        : Math.max(
            props.items.price_list_rate -
              (Number(props.items.discount_amount) || 0),
            0,
          )
    }
  },
)

watch(
  () => props.items.qty,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      // Keep the line amount right locally; it previously only updated on
      // a rate change and otherwise waited for the server recalculation.
      calculateAmountTotal()
      const option = get_serial_no_options()
      if (option.length > 0) {
        adjustSerialNumbers(newValue)
        validateQty()
        add_serial_no()
      }
      validateInvoice()
    }
  },
)

const adjustQtyNumbers = () => {
  const options = get_serial_no_options()
  if (options.length < 0) return
  const qty = props.items.qty
  const serialLength = props.items.selected_serial_no.length
  if (qty != serialLength) {
    props.items.qty = invoiceStore.invoice.is_return
      ? -Math.abs(serialLength)
      : serialLength
  }
}

const adjustSerialNumbers = (newQty) => {
  const options = get_serial_no_options()
  if (options.length < 0) return
  const selected = props.items.selected_serial_no
  const selectedLength = selected.length
  // A return counts down (-3, -2, -1), so compare and cut by size: slicing to
  // a negative length dropped serials from the end of the list instead.
  const wanted = Math.abs(newQty)
  if (selectedLength === wanted) return
  if (selectedLength > wanted) {
    props.items.selected_serial_no = selected.slice(0, wanted)
  } else {
    const selectedValues = new Set(selected.map((sn) => sn.value))
    const needed = wanted - selectedLength
    const additional = []
    for (let i = 0; i < options.length && additional.length < needed; i++) {
      const opt = options[i]
      if (!selectedValues.has(opt.value)) {
        additional.push(opt)
      }
    }
    props.items.selected_serial_no = JSON.parse(
      JSON.stringify([...selected, ...additional]),
    )
  }
}

watch(
  () => props.items.discount_percentage,
  (newValue, oldValue) => {
    // In amount mode the percentage follows the rate; recomputing the
    // rate from it would turn a 10.00 discount into 9.99999.
    if (!discountByPercent.value) return
    if (Number(newValue) !== Number(oldValue) || !oldValue) {
      discountCalculation()
    }
  },
)

const discountCalculation = () => {
  props.items.rate = rateCalculation(props.items)
  validateInvoice()
}

const rateCalculation = (item) => {
  const rate = Number(item.price_list_rate)
  const discount = Number(item.discount_percentage) || 0
  return rate - rate * (discount / 100)
}

watch(
  () => props.items.rate,
  (newValue, oldValue) => {
    if (Number(newValue) !== Number(oldValue)) {
      props.items.base_rate = Number(newValue)
      props.items.margin_rate_or_amount = 0
      calculateRateTotal()
    }
  },
)

const calculateRateTotal = () => {
  calculateAmountTotal()
  const price = Number(props.items.price_list_rate) || 0
  props.items.discount_amount = roundTo(
    price - (Number(props.items.rate) || 0),
    6,
  )
  // A rate typed by hand is a discount too; keep the percentage in step
  // where the amount is what the cashier works with.
  if (!discountByPercent.value && price) {
    props.items.discount_percentage = roundTo(
      (props.items.discount_amount / price) * 100,
      6,
    )
  }
  validateInvoice()
}

const roundTo = (value, places) =>
  Math.round(value * 10 ** places) / 10 ** places

const formatPercent = (value) => `${Number((Number(value) || 0).toFixed(2))}%`

onMounted(async () => {
  calculateRateTotal()
  validateQty(props.items.qty)
  if (props.items.selected_serial_no)
    adjustSerialNumbers(props.items.selected_serial_no.length)
  if (props.items.selected_serial_no) add_serial_no()

  // Only ask for batches and serials when the item is actually tracked. This
  // ran unconditionally for every cart line, so a 20-line sale fired 40
  // requests, nearly all of them for data that cannot exist.
  const lookups = []
  if (isBatched.value) {
    lookups.push(
      get_batch.fetch({
        item_code: props.items.item_code,
        warehouse: store.posProfileData.warehouse,
      }),
    )
  }
  if (isSerialised.value) {
    lookups.push(get_serial_no.fetch())
  }
  if (lookups.length) await Promise.all(lookups)

  validateInvoice()
})

onUnmounted(() => {
  calculateAmountTotal()
  validateInvoice()
})
</script>
