<template>
  <div v-if="visible" class="min-w-0">
    <!-- Check: label beside the box. -->
    <label
      v-if="field.fieldtype === 'Check'"
      class="flex min-h-8 items-center gap-2 text-base text-ink-gray-8"
    >
      <input
        :id="id"
        type="checkbox"
        class="h-4 w-4 rounded border-outline-gray-3 text-ink-gray-9 focus:ring-outline-gray-3"
        :checked="Boolean(value)"
        :disabled="readOnly"
        @change="update($event.target.checked ? 1 : 0)"
      />
      {{ field.label }}
    </label>

    <template v-else>
      <label :for="id" class="mb-1.5 block text-sm text-ink-gray-5">
        {{ field.label
        }}<span v-if="required" class="text-ink-red-4" aria-hidden="true">
          *</span
        >
      </label>

      <!-- Read-only: the value as text, formatted like the rest of the POS. -->
      <p
        v-if="readOnly"
        :id="id"
        class="num flex min-h-8 items-center break-words text-base text-ink-gray-8"
      >
        {{ displayValue }}
      </p>

      <LinkControl
        v-else-if="field.fieldtype === 'Link'"
        :id="id"
        :doctype="field.options"
        :model-value="value || ''"
        :placeholder="placeholder"
        :invalid="invalid"
        @update:model-value="update"
      />

      <DatePicker
        v-else-if="field.fieldtype === 'Date'"
        :id="id"
        variant="subtle"
        :placeholder="placeholder"
        :model-value="value || ''"
        @update:model-value="update"
      />

      <FormControl
        v-else-if="field.fieldtype === 'Select'"
        :id="id"
        class="w-full"
        type="select"
        size="md"
        variant="subtle"
        :options="selectOptions"
        :model-value="value ?? ''"
        :aria-invalid="invalid || undefined"
        @update:model-value="update"
      />

      <FormControl
        v-else-if="isText"
        :id="id"
        type="textarea"
        size="md"
        variant="subtle"
        :rows="2"
        :placeholder="placeholder"
        :model-value="value ?? ''"
        :aria-invalid="invalid || undefined"
        @update:model-value="update"
      />

      <FormControl
        v-else
        :id="id"
        :type="inputType"
        size="md"
        variant="subtle"
        :inputmode="isNumber ? 'decimal' : undefined"
        :min="isNumber && field.non_negative ? 0 : undefined"
        :maxlength="field.length || undefined"
        :placeholder="placeholder"
        :model-value="value ?? ''"
        :aria-invalid="invalid || undefined"
        @update:model-value="update"
      />

      <p v-if="invalid" class="mt-1 text-xs text-ink-red-4">
        {{ field.label }} is required.
      </p>
      <p v-else-if="field.description" class="mt-1 text-xs text-ink-gray-5">
        {{ field.description }}
      </p>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { DatePicker, FormControl } from 'frappe-ui'
import LinkControl from '@/components/form/LinkControl.vue'
import {
  evaluateDepends,
  isEmpty,
  isRequired,
  isVisible,
} from '@/utils/formLayout'

const props = defineProps({
  field: { type: Object, required: true },
  doc: { type: Object, required: true },
  // Per-form rules on top of the layout: { readOnly, hidden, set, format }.
  override: { type: Object, default: () => ({}) },
  showErrors: { type: Boolean, default: false },
  idPrefix: { type: String, default: 'f' },
})

const id = computed(() => `${props.idPrefix}-${props.field.fieldname}`)
const value = computed(() => props.doc[props.field.fieldname])

const visible = computed(
  () => !props.override.hidden && isVisible(props.field, props.doc),
)
const readOnly = computed(() =>
  Boolean(
    props.override.readOnly ||
      props.field.read_only ||
      (props.field.read_only_depends_on &&
        evaluateDepends(props.field.read_only_depends_on, props.doc)),
  ),
)
const required = computed(
  () => !readOnly.value && isRequired(props.field, props.doc),
)
const invalid = computed(
  () => props.showErrors && required.value && isEmpty(value.value),
)

const NUMBER_TYPES = ['Int', 'Float', 'Currency', 'Percent']
const isNumber = computed(() => NUMBER_TYPES.includes(props.field.fieldtype))
const isText = computed(() =>
  ['Small Text', 'Text', 'Long Text', 'Text Editor'].includes(
    props.field.fieldtype,
  ),
)

const inputType = computed(() => {
  if (isNumber.value) return 'number'
  const kind = String(props.field.options || '').toLowerCase()
  if (kind === 'email') return 'email'
  if (
    props.field.fieldtype === 'Phone' ||
    kind === 'phone' ||
    kind === 'mobile'
  )
    return 'tel'
  return 'text'
})

const selectOptions = computed(() => {
  const list = Array.isArray(props.field.options)
    ? props.field.options
    : String(props.field.options || '').split('\n')
  return list.map((o) => ({ label: o || '—', value: o }))
})

const placeholder = computed(
  () =>
    props.field.placeholder ||
    (props.field.fieldtype === 'Link' ? `Select ${props.field.label}` : ''),
)

const displayValue = computed(() => {
  if (props.override.format) return props.override.format(value.value)
  const v = value.value
  if (isEmpty(v)) return '—'
  if (['Currency', 'Float'].includes(props.field.fieldtype))
    return Number(v).toFixed(2)
  if (props.field.fieldtype === 'Percent')
    return `${Number(Number(v).toFixed(2))}%`
  return String(v)
})

function update(raw) {
  let next = raw
  if (isNumber.value) {
    next =
      raw === '' || raw === null
        ? 0
        : props.field.fieldtype === 'Int'
          ? parseInt(raw, 10) || 0
          : Number(raw)
  }
  if (props.override.set) props.override.set(next)
  else props.doc[props.field.fieldname] = next
}
</script>
