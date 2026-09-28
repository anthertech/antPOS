<template>
  <section
    :class="[
      'flex flex-col min-h-0 bg-surface-white',
      compact
        ? 'flex-1'
        : 'w-full min-w-0 rounded-xl border border-outline-gray-1 shadow-sm overflow-hidden',
    ]"
  >
    <div class="flex items-center gap-2 border-b border-outline-gray-1 p-3">
      <div class="min-w-0 flex-1">
        <FormControl
          ref="searchInput"
          v-model="debounceSearch"
          type="text"
          :placeholder="
            compact ? 'Scan or search' : 'Scan a barcode or search items'
          "
          size="md"
          variant="subtle"
          :disabled="invoiceStore.invoice.is_return"
          @keyup.enter="fetchSearchResource"
        >
          <template #prefix>
            <FeatherIcon class="w-4 text-ink-gray-5" name="search" />
          </template>
        </FormControl>
      </div>
      <button
        v-if="compact && cameraAvailable"
        type="button"
        class="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-surface-gray-2 text-ink-gray-8 active:bg-surface-gray-3 disabled:opacity-50"
        aria-label="Scan with camera"
        :disabled="Boolean(invoiceStore.invoice.is_return)"
        @click="openCamera"
      >
        <LucideScanBarcode class="h-5 w-5" aria-hidden="true" />
      </button>
    </div>

    <CameraScanner
      v-if="compact && cameraAvailable"
      v-model="cameraOpen"
      @scan="scanCode"
    />

    <!-- The list lives in the pane on desktop and is the main screen on phones. -->
    <ItemCatalog
      v-if="showList"
      :query="debounceSearch"
      :dense="compact"
      :disabled="Boolean(invoiceStore.invoice.is_return)"
      @select="addFromList"
    />

    <div v-else class="px-6 py-10 text-center">
      <svg
        class="mx-auto text-ink-gray-3"
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        aria-hidden="true"
      >
        <path d="M3 5v14M7 5v14M11 5v14M15 5v14M19 5v14" />
      </svg>
      <p class="text-[13px] text-ink-gray-6 mt-3 leading-relaxed">
        Scan a barcode, or type an item code,<br />serial or batch number.
      </p>
      <p class="text-[12px] text-ink-gray-5 mt-2">
        Press
        <kbd
          class="px-1.5 py-0.5 rounded border border-outline-gray-1 bg-surface-gray-1 font-sans"
          >Enter</kbd
        >
        to add
      </p>
    </div>
  </section>
</template>

<script setup>
import { FormControl, FeatherIcon, createResource } from 'frappe-ui'
import { computed, ref, onMounted, onUnmounted } from 'vue'
import ItemCatalog from '@/components/pos/ItemCatalog.vue'
import CameraScanner from '@/components/mobile/CameraScanner.vue'
import LucideScanBarcode from '~icons/lucide/scan-barcode'
import { cameraSupport } from '@/utils/barcodeScanner'
import { createToast } from '@/utils'
import { showToast } from '@/utils'
import { usePosProfileStore } from '@/stores/posProfile'
import emitter from '@/utils/emitter'
import { useInvoiceStore } from '@/stores/pos'

defineProps({
  // Phones: no card frame; the list fills the screen above the cart bar.
  compact: { type: Boolean, default: false },
})

const store = usePosProfileStore()
const debounceSearch = ref('')
const invoiceStore = useInvoiceStore()

// POS Profile > antPOS Item List > Show Item List. Defaults on when the field
// has not been installed yet.
const showList = computed(() => {
  const value = store.posProfileData?.custom_show_item_list
  return value === undefined || value === null ? true : Boolean(Number(value))
})

// Taps can outrun the server: a second tap on an item whose first add is still
// in flight would otherwise create a second cart line. Count those taps and
// apply them to the line when it arrives.
const pendingTaps = new Map()

const addFromList = (item) => {
  if (invoiceStore.invoice.is_return) return
  if (!invoiceStore.invoiceCustomer?.name) {
    showToast('warning', 'Choose a customer first')
    return
  }

  // Same shape scan_barcode returns, so the normal add path handles it.
  const scan = {
    item_code: item.item_code,
    has_batch_no: item.has_batch_no,
    has_serial_no: item.has_serial_no,
    item: {
      item_code: item.item_code,
      item_name: item.item_name,
      stock_uom: item.stock_uom,
      has_batch_no: item.has_batch_no,
      has_serial_no: item.has_serial_no,
    },
  }

  if (pendingTaps.has(item.item_code)) {
    // Batch/serial lines resolve their own quantity from what is picked.
    if (!item.has_batch_no && !item.has_serial_no) {
      pendingTaps.set(item.item_code, pendingTaps.get(item.item_code) + 1)
    }
    return
  }
  if (addItemIfExists(scan)) return

  pendingTaps.set(item.item_code, 0)
  invoiceStore.startAdd()
  addItemsResource
    .fetch({ search_value: JSON.stringify(scan) })
    .catch(() => {})
    .finally(() => {
      invoiceStore.finishAdd()
      const extra = pendingTaps.get(item.item_code) || 0
      pendingTaps.delete(item.item_code)
      if (!extra) return
      const line = invoiceStore.items.find(
        (l) => l.item_code === item.item_code && !l.is_return,
      )
      if (line) line.qty = Number(line.qty || 0) + extra
    })
}

// Shared by typed searches (debounced) and camera scans (not debounced, so
// a failed lookup can be caught instead of surfacing as an unhandled error).
const scanOptions = {
  url: 'ant_pos.ant_pos.api.item.scan_barcode',
  method: 'GET',
  makeParams(params) {
    return {
      search_value: params?.search_value ?? debounceSearch.value,
      search_itemname:
        store.posProfileData.custom_allow_item_name_in_in_item_search,
    }
  },
  validate(params) {
    if (!invoiceStore.invoiceCustomer?.name) {
      return 'Customer is required'
    }
    if (!params.search_value) {
      return 'Search value is required'
    }
  },
  onSuccess(data) {
    if (invoiceStore.takingPayment) return
    if (data.serial_no) {
      data.selected_serial_no = [data.serial_no]
    }
    if (!addItemIfExists(data)) {
      invoiceStore.startAdd()
      addItemsResource
        .fetch({ search_value: JSON.stringify(data) })
        .catch(() => {})
        .finally(() => invoiceStore.finishAdd())
    }
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
}

const searchResource = createResource({ ...scanOptions, debounce: 300 })
const cameraScanResource = createResource(scanOptions)

const addItemsResource = createResource({
  url: 'ant_pos.ant_pos.api.item.items',
  method: 'GET',
  makeParams(params) {
    return {
      pos_profile: store.posProfileData.name,
      search_value: params.search_value,
      customer: invoiceStore.invoiceCustomer?.name,
    }
  },
  validate(params) {
    if (!params.search_value) {
      return 'Search value is required'
    }
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
  onSuccess(data) {
    if (invoiceStore.takingPayment) return
    addItem(data)
  },
  transform(data) {
    if (data.selected_serial_no && data.selected_serial_no.length > 0) {
      data.selected_serial_no = data.selected_serial_no.map((serial) => ({
        label: serial,
        value: serial,
      }))
    }
    let date = null
    let qty = 0
    if (data.batch_no && data.batch_no.length > 0 && data.has_batch_no) {
      const batch = data.batch_nos.find(
        (b) => b.batch_no === data.selected_batch_no,
      )
      qty = batch ? batch.stock_qty : 0
      date = batch ? batch.expiry_date : null
      data.selected_batch_no = {
        label: data.batch_no,
        value: data.batch_no,
      }
    }
    data.custom_id = Date.now() + Math.random()
    data.stock_qty = qty
    data.expiry_date = date
    data.net_rate = data.price_list_rate || 0
  },
})

const fetchSearchResource = () => {
  invoiceStore.startAdd()
  Promise.resolve(searchResource.fetch())
    .catch(() => {})
    .finally(() => invoiceStore.finishAdd())
}

// Camera scanning (phones). Needs HTTPS; hidden where there is no camera API.
const cameraAvailable = cameraSupport() !== 'unsupported'
const cameraOpen = ref(false)

const openCamera = () => {
  if (cameraSupport() === 'insecure') {
    showToast('warning', 'The camera needs the site to be opened over HTTPS')
    return
  }
  if (!invoiceStore.invoiceCustomer?.name) {
    showToast('warning', 'Choose a customer first')
    return
  }
  cameraOpen.value = true
}

// A code from the camera goes the same way as one typed and entered.
const scanCode = (code) => {
  // Failures are shown by the resource's onError.
  invoiceStore.startAdd()
  cameraScanResource
    .fetch({ search_value: code })
    .catch(() => {})
    .finally(() => invoiceStore.finishAdd())
}

const addItem = (data) => {
  data.doctype = 'Sales Invoice Item'
  data.parenttype = 'Sales Invoice'
  data.custom_id = Date.now() + Math.random()
  if (!addItemIfExists(data)) {
    if (data.has_batch_no && data.batch_no) {
      data.serial_no_options = data.serial_no_options
        .filter(
          (serial_no) => data.batch_no && serial_no.batch_no === data.batch_no,
        )
        .map((serial_no) => ({
          label: serial_no.serial_no,
          value: serial_no.serial_no,
        }))
      data.use_serial_batch_fields = 1
    }
    addNewLine(data)
  }
}

const addItemIfExists = (data) => {
  let found = false
  if (!store.posProfileData.custom_new_items_on_new_line) {
    invoiceStore.items.forEach((element, index) => {
      if (
        !element.is_return &&
        data.item_code === element.item_code &&
        ((data.has_batch_no &&
          element.batch_no &&
          data.batch_no === (element.batch_no.value || element.batch_no)) ||
          !data.has_batch_no)
      ) {
        found = true

        if (
          data.has_serial_no &&
          data.selected_serial_no &&
          data.selected_serial_no.length > 0
        ) {
          for (let serial of data.selected_serial_no) {
            let selected = element.selected_serial_no.map(
              (serial) => serial.value,
            )
            if (selected.includes(serial)) {
              showToast('warning', 'Serial-no Already added')
              return found
            }
          }
          element.selected_serial_no.push({
            label: data.serial_no,
            value: data.serial_no,
          })
        }
        if (element.serial_no && !data.serial_no) {
          showToast('warning', 'Batch already entered')
          return found
        }
        invoiceStore.items[index].qty += 1
        debounceSearch.value = ''
      }
    })
  }
  return found
}

const addNewLine = async (data) => {
  invoiceStore.items.push(data)
  debounceSearch.value = ''
}

onMounted(() => {
  emitter.on('fetchSearchResource', fetchSearchResource)
})

onUnmounted(() => {
  emitter.off('fetchSearchResource', fetchSearchResource)
})
</script>
