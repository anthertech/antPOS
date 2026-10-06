<template>
  <Autocomplete
    :options="options"
    :model-value="selected"
    :placeholder="placeholder"
    :loading="search.loading"
    body-classes="w-[var(--reka-popover-trigger-width)]"
    @update:query="onQuery"
    @update:model-value="onSelect"
  >
    <template #target="{ togglePopover, isOpen }">
      <button
        :id="id"
        type="button"
        class="flex h-8 w-full items-center justify-between gap-2 rounded border border-transparent bg-surface-gray-2 px-2 text-base transition-colors hover:bg-surface-gray-3 focus:border-outline-gray-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3 disabled:cursor-not-allowed disabled:opacity-60"
        :class="{ 'bg-surface-gray-3': isOpen }"
        :disabled="disabled"
        :aria-expanded="isOpen"
        :aria-invalid="invalid || undefined"
        @click="togglePopover()"
      >
        <span
          class="truncate"
          :class="modelValue ? 'text-ink-gray-8' : 'text-ink-gray-4'"
        >
          {{ modelValue || placeholder }}
        </span>
        <LucideChevronDown class="h-4 w-4 shrink-0 text-ink-gray-5" />
      </button>
    </template>
  </Autocomplete>
</template>

<script setup>
import { computed, watch } from 'vue'
import { Autocomplete, createResource, debounce } from 'frappe-ui'
import LucideChevronDown from '~icons/lucide/chevron-down'

// A Link field: searches the linked DocType as you type, like the desk.
const props = defineProps({
  id: { type: String, default: undefined },
  doctype: { type: String, required: true },
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  invalid: { type: Boolean, default: false },
})
const emit = defineEmits(['update:modelValue'])

const search = createResource({
  url: 'frappe.desk.search.search_link',
  makeParams: (params) => ({
    doctype: props.doctype,
    txt: params?.txt || '',
    page_length: 20,
  }),
})

const results = computed(() =>
  (search.data || []).map((row) => ({
    label: row.label || row.value,
    value: row.value,
    description:
      row.description && row.description !== row.value
        ? row.description
        : undefined,
  })),
)

// Keep the current value listed, so the picker can show it as selected.
const options = computed(() => {
  const list = results.value
  if (props.modelValue && !list.some((o) => o.value === props.modelValue)) {
    return [{ label: props.modelValue, value: props.modelValue }, ...list]
  }
  return list
})

const selected = computed(
  () => options.value.find((o) => o.value === props.modelValue) || null,
)

const onQuery = debounce((txt) => search.fetch({ txt: txt || '' }), 250)

watch(
  () => props.doctype,
  () => search.fetch({ txt: '' }),
  { immediate: true },
)

function onSelect(option) {
  emit('update:modelValue', option?.value ?? '')
}
</script>
