<template>
  <Dialog
    v-model="open"
    :options="{ title: field ? field.label : '', size: 'md' }"
  >
    <template #body-content>
      <div v-if="field" class="space-y-4">
        <p class="num text-sm text-ink-gray-5">
          {{ field.fieldname }} · {{ field.fieldtype }}
        </p>
        <FormControl
          v-model="draft.label"
          type="text"
          size="md"
          variant="subtle"
          label="Label"
          :placeholder="field.label"
          :description="`Leave empty to use “${field.label}”.`"
        />
        <FormControl
          v-model="draft.default"
          type="text"
          size="md"
          variant="subtle"
          label="Default value"
          :description="
            field.default
              ? `DocType default: ${field.default}`
              : 'Filled in when the form opens.'
          "
        />
        <div class="space-y-2">
          <FormControl
            v-model="draft.reqd"
            type="checkbox"
            label="Required"
            :disabled="Boolean(field.reqd)"
          />
          <p v-if="field.reqd" class="pl-6 text-xs text-ink-gray-5">
            Always required by the DocType.
          </p>
          <FormControl
            v-model="draft.read_only"
            type="checkbox"
            label="Read only"
            :disabled="Boolean(field.read_only)"
          />
          <FormControl v-model="draft.hidden" type="checkbox" label="Hidden" />
          <p class="pl-6 text-xs text-ink-gray-5">
            A hidden field still applies its default value.
          </p>
        </div>
      </div>
    </template>
    <template #actions>
      <div class="flex flex-row-reverse gap-2">
        <Button variant="solid" @click="apply">Apply</Button>
        <Button @click="open = false">Cancel</Button>
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { computed, reactive, watch } from 'vue'
import { Button, Dialog, FormControl } from 'frappe-ui'

// Settings for one field on the canvas: the layout's overrides.
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  field: { type: Object, default: null },
  override: { type: Object, default: () => ({}) },
})
const emit = defineEmits(['update:modelValue', 'apply'])

const open = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

const draft = reactive({
  label: '',
  default: '',
  reqd: false,
  read_only: false,
  hidden: false,
})

watch(
  () => [props.modelValue, props.field],
  () => {
    if (!props.modelValue || !props.field) return
    const f = props.field
    const o = props.override || {}
    draft.label = o.label || ''
    draft.default = o.default ?? ''
    draft.reqd = Boolean(o.reqd || f.reqd)
    draft.read_only = Boolean(o.read_only || f.read_only)
    draft.hidden = Boolean(o.hidden)
  },
  { immediate: true },
)

function apply() {
  const f = props.field
  const next = {}
  if (draft.label.trim() && draft.label.trim() !== f.label)
    next.label = draft.label.trim()
  if (String(draft.default ?? '').trim() !== '')
    next.default = String(draft.default).trim()
  if (draft.reqd && !f.reqd) next.reqd = 1
  if (draft.read_only && !f.read_only) next.read_only = 1
  if (draft.hidden) next.hidden = 1
  emit('apply', next)
  open.value = false
}
</script>
