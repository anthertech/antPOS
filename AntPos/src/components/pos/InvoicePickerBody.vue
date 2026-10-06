<template>
  <div class="flex min-h-0 flex-1 flex-col">
    <div
      class="shrink-0 border-b border-outline-gray-1 px-4 pb-3 pt-3 sm:px-5 sm:pt-4"
    >
      <div class="flex items-start justify-between gap-3">
        <div class="min-w-0">
          <h2 class="text-lg font-semibold text-ink-gray-9">{{ title }}</h2>
          <p v-if="description" class="mt-0.5 text-sm text-ink-gray-5">
            {{ description }}
          </p>
        </div>
        <button
          type="button"
          class="grid h-8 w-8 shrink-0 place-items-center rounded-md text-ink-gray-6 hover:bg-surface-gray-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3"
          aria-label="Close"
          @click="$emit('close')"
        >
          <LucideX class="h-4 w-4" />
        </button>
      </div>
      <div ref="searchBox" class="mt-3">
        <TextInput
          type="search"
          size="md"
          variant="subtle"
          placeholder="Search by invoice number or customer"
          :model-value="search"
          @update:model-value="$emit('update:search', $event)"
        >
          <template #prefix
            ><LucideSearch class="h-4 w-4 text-ink-gray-5"
          /></template>
        </TextInput>
      </div>
    </div>

    <div class="min-h-0 flex-1 overflow-y-auto pos-scroll">
      <!-- First load -->
      <div
        v-if="loading && !invoices.length"
        class="space-y-1 p-2"
        aria-busy="true"
      >
        <div v-for="n in 5" :key="n" class="flex items-center gap-3 px-2 py-3">
          <div class="h-9 w-9 animate-pulse rounded-full bg-surface-gray-2" />
          <div class="flex-1 space-y-2">
            <div class="h-3 w-2/5 animate-pulse rounded bg-surface-gray-2" />
            <div class="h-3 w-1/3 animate-pulse rounded bg-surface-gray-2" />
          </div>
          <div class="h-4 w-16 animate-pulse rounded bg-surface-gray-2" />
        </div>
      </div>

      <div
        v-else-if="!invoices.length"
        class="flex h-full flex-col items-center justify-center px-8 py-12 text-center"
      >
        <div
          class="grid h-12 w-12 place-items-center rounded-full bg-surface-gray-2"
        >
          <LucideSearch v-if="searching" class="h-5 w-5 text-ink-gray-5" />
          <LucideInbox v-else class="h-5 w-5 text-ink-gray-5" />
        </div>
        <p class="mt-3 text-base font-medium text-ink-gray-8">
          {{ searching ? 'No matches' : emptyTitle }}
        </p>
        <p class="mt-1 max-w-xs text-sm text-ink-gray-5">
          <template v-if="searching">
            Nothing matches “{{ search.trim() }}”. Try the invoice number or the
            customer's name.
          </template>
          <template v-else>{{ emptyText }}</template>
        </p>
      </div>

      <div v-else class="pb-2">
        <section
          v-for="group in groups"
          :key="group.label"
          :aria-label="group.label"
        >
          <h3
            class="sticky top-0 z-10 bg-surface-modal px-4 pb-1 pt-3 text-xs font-medium uppercase tracking-wide text-ink-gray-5 sm:px-5"
          >
            {{ group.label }}
          </h3>
          <ul class="px-2 sm:px-3">
            <li v-for="invoice in group.invoices" :key="invoice.name">
              <button
                type="button"
                class="group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 sm:px-2 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3"
                :class="[
                  opening === invoice.name
                    ? 'bg-surface-gray-2'
                    : 'hover:bg-surface-gray-2 active:bg-surface-gray-3',
                  opening && opening !== invoice.name ? 'opacity-50' : '',
                ]"
                :disabled="Boolean(opening)"
                :aria-label="`${actionLabel} ${invoice.name}, ${customerOf(invoice)}, ${money(invoice)}`"
                @click="pick(invoice)"
              >
                <span
                  class="hidden h-9 w-9 shrink-0 place-items-center rounded-full bg-surface-gray-3 text-xs font-semibold text-ink-gray-7 sm:grid"
                  aria-hidden="true"
                >
                  {{ initials(invoice) }}
                </span>
                <span class="min-w-0 flex-1">
                  <span class="flex min-w-0 items-center gap-1.5">
                    <span
                      class="truncate text-base font-medium text-ink-gray-9"
                      >{{ customerOf(invoice) }}</span
                    >
                    <span
                      v-if="showStatus && invoice.status"
                      class="shrink-0 rounded px-1.5 text-xs font-medium leading-5"
                      :class="
                        STATUS_THEME[invoice.status] ||
                        'bg-surface-gray-2 text-ink-gray-6'
                      "
                    >
                      {{ invoice.status }}
                    </span>
                  </span>
                  <span class="num block truncate text-sm text-ink-gray-5">{{
                    metaOf(invoice)
                  }}</span>
                </span>
                <span class="flex shrink-0 flex-col items-end">
                  <span class="num text-base font-semibold text-ink-gray-9">{{
                    money(invoice)
                  }}</span>
                  <span
                    v-if="itemsOf(invoice)"
                    class="num text-sm text-ink-gray-5"
                    >{{ itemsOf(invoice) }}</span
                  >
                </span>
                <span
                  class="grid w-5 shrink-0 place-items-center text-ink-gray-4"
                  aria-hidden="true"
                >
                  <LoadingIndicator
                    v-if="opening === invoice.name"
                    class="h-4 w-4"
                  />
                  <LucideChevronRight
                    v-else
                    class="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </button>
            </li>
          </ul>
        </section>

        <div v-if="hasMore" class="px-4 pt-2 sm:px-5">
          <Button
            class="w-full"
            variant="subtle"
            :loading="loading"
            @click="$emit('load-more')"
            >Show more</Button
          >
        </div>
      </div>
    </div>

    <div
      v-if="invoices.length"
      class="flex shrink-0 items-center justify-between gap-2 border-t border-outline-gray-1 px-4 py-2.5 text-sm text-ink-gray-5 sm:px-5"
    >
      <span class="num"
        >{{ invoices.length }}
        {{ invoices.length === 1 ? 'invoice' : 'invoices'
        }}{{ hasMore ? ' shown' : '' }}</span
      >
      <span v-if="hasMore">Search to find older ones</span>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, ref } from 'vue'
import { Button, LoadingIndicator, TextInput, dayjsLocal } from 'frappe-ui'
import LucideSearch from '~icons/lucide/search'
import LucideX from '~icons/lucide/x'
import LucideChevronRight from '~icons/lucide/chevron-right'
import LucideInbox from '~icons/lucide/inbox'

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  invoices: { type: Array, default: () => [] },
  search: { type: String, default: '' },
  loading: { type: Boolean, default: false },
  hasMore: { type: Boolean, default: false },
  // Name of the invoice being opened; its row shows a spinner and the others
  // are disabled.
  opening: { type: String, default: null },
  // Read out for each row: "Open ACC-SINV-…", "Return ACC-SINV-…".
  actionLabel: { type: String, default: 'Open' },
  // Show the payment status badge (returns).
  showStatus: { type: Boolean, default: false },
  emptyTitle: { type: String, default: 'Nothing here' },
  emptyText: { type: String, default: '' },
  // Focus the search on open. Only on desktop: on a phone it would pop the
  // keyboard over the list.
  autofocus: { type: Boolean, default: false },
})
const emit = defineEmits(['update:search', 'select', 'load-more', 'close'])

const STATUS_THEME = {
  Paid: 'bg-surface-green-2 text-ink-green-3',
  Unpaid: 'bg-surface-amber-2 text-ink-amber-3',
  'Partly Paid': 'bg-surface-amber-2 text-ink-amber-3',
  Overdue: 'bg-surface-red-2 text-ink-red-4',
}

const searching = computed(() => Boolean(props.search.trim()))

// The list arrives newest first; group it under Today / Yesterday / a date.
const groups = computed(() => {
  const today = dayjsLocal().startOf('day')
  const out = []
  for (const invoice of props.invoices) {
    const label = dayLabel(invoice.posting_date, today)
    const last = out[out.length - 1]
    if (last && last.label === label) last.invoices.push(invoice)
    else out.push({ label, invoices: [invoice] })
  }
  return out
})

function dayLabel(date, today) {
  if (!date) return 'No date'
  const day = dayjsLocal(date).startOf('day')
  const diff = today.diff(day, 'day')
  if (diff === 0) return 'Today'
  if (diff === 1) return 'Yesterday'
  return day.format(day.year() === today.year() ? 'ddd, D MMM' : 'D MMM YYYY')
}

function customerOf(invoice) {
  return invoice.customer_name || invoice.customer || 'No customer'
}

function initials(invoice) {
  const words = customerOf(invoice).trim().split(/\s+/)
  return (
    words.length > 1
      ? words[0][0] + words[words.length - 1][0]
      : words[0].slice(0, 2)
  ).toUpperCase()
}

function metaOf(invoice) {
  const parts = [invoice.name]
  if (invoice.posting_time)
    parts.push(
      dayjsLocal(`2000-01-01 ${invoice.posting_time}`).format('h:mm A'),
    )
  return parts.join(' · ')
}

function itemsOf(invoice) {
  const qty = Math.abs(Number(invoice.total_qty) || 0)
  if (!qty) return ''
  return `${Number.isInteger(qty) ? qty : qty.toFixed(2)} ${qty === 1 ? 'item' : 'items'}`
}

function money(invoice) {
  return Number(invoice.grand_total || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

function pick(invoice) {
  if (props.opening) return
  emit('select', invoice.name)
}

const searchBox = ref(null)
onMounted(async () => {
  if (!props.autofocus) return
  await nextTick()
  searchBox.value?.querySelector('input')?.focus()
})
</script>
