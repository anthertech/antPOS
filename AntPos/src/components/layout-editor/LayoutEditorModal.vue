<template>
  <!-- Edits the layout of a POS form: the quick entry dialog or a cart line. -->
  <Dialog v-model="show" :options="{ size: '4xl' }">
    <template #body-title>
      <h3
        class="flex flex-wrap items-center gap-2 text-2xl font-semibold leading-6 text-ink-gray-9"
      >
        <span>{{ title }}</span>
        <Badge v-if="dirty" label="Not saved" variant="subtle" theme="orange" />
        <Badge
          v-else-if="editor.data"
          :label="editor.data.customised ? 'Customised' : 'Built-in'"
          variant="subtle"
          :theme="editor.data.customised ? 'blue' : 'gray'"
        />
      </h3>
    </template>

    <template #body-content>
      <div class="flex flex-col gap-3">
        <div class="flex flex-wrap justify-between gap-2">
          <Button :disabled="!editor.data" @click="togglePreview">
            {{ preview ? 'Hide preview' : 'Show preview' }}
          </Button>
          <div class="flex flex-row-reverse flex-wrap gap-2">
            <Button
              variant="solid"
              :disabled="!dirty"
              :loading="save.loading"
              @click="save.submit()"
              >Save</Button
            >
            <Button :disabled="!dirty" @click="discard">Reset</Button>
            <Button
              v-if="editor.data?.customised && editor.data?.has_default"
              :loading="restore.loading"
              @click="confirmRestore"
            >
              Restore default
            </Button>
          </div>
        </div>

        <p v-if="type === 'Quick Entry'" class="text-sm text-ink-gray-5">
          Fields the document requires are added automatically if you leave them
          out.
        </p>

        <div
          v-if="editor.loading && !editor.data"
          class="grid min-h-60 place-items-center text-sm text-ink-gray-5"
        >
          Loading…
        </div>
        <p v-else-if="editor.error" class="text-sm text-ink-red-4">
          {{ errorText(editor.error) }}
        </p>

        <template v-else-if="editor.data">
          <FieldLayoutEditor
            v-if="!preview"
            v-model="draft"
            :fields="editor.data.fields"
          />
          <div
            v-else
            class="min-h-60 rounded-lg border border-outline-gray-1 p-4 sm:p-6"
            aria-label="Preview"
          >
            <p v-if="previewError" class="text-sm text-ink-red-4">
              {{ previewError }}
            </p>
            <LayoutForm
              v-else
              :layout="previewLayout"
              :doc="sampleDoc"
              :overrides="previewOverrides"
              id-prefix="preview"
            />
          </div>
        </template>
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue'
import { Badge, Button, Dialog, confirmDialog, createResource } from 'frappe-ui'
import FieldLayoutEditor from '@/components/layout-editor/FieldLayoutEditor.vue'
import LayoutForm from '@/components/form/LayoutForm.vue'
import { applyDefaults, refreshFormLayouts } from '@/utils/formLayout'
import { createToast } from '@/utils'

const API = 'ant_pos.ant_pos.api.form_layout'

const show = defineModel({ type: Boolean, default: false })
const props = defineProps({
  title: { type: String, required: true },
  doctype: { type: String, required: true },
  type: { type: String, required: true },
  parentDoctype: { type: String, default: null },
  // A record to preview against, e.g. the cart line being edited.
  sample: { type: Object, default: () => ({}) },
  // Per-form rules the preview should show (e.g. locked cart line fields).
  previewOverrides: { type: Object, default: () => ({}) },
})
const emit = defineEmits(['saved'])

const draft = ref([])
const preview = ref(false)
const saved = ref('[]')
const dirty = computed(() => JSON.stringify(draft.value) !== saved.value)

function setLayout(tabs) {
  draft.value = tabs
  saved.value = JSON.stringify(tabs)
}

const params = () => ({ doctype: props.doctype, type: props.type })

const editor = createResource({
  url: `${API}.get_layout_for_editing`,
  makeParams: params,
  onSuccess: (data) => setLayout(data.tabs),
})

watch(
  show,
  (open) => {
    if (!open) return
    preview.value = false
    editor.fetch()
  },
  { immediate: true },
)

function discard() {
  draft.value = JSON.parse(saved.value)
}

function done(message) {
  refreshFormLayouts(props.doctype, props.type)
  emit('saved')
  createToast({ title: message, type: 'success' })
}

const save = createResource({
  url: `${API}.save_form_layout`,
  makeParams: () => ({ ...params(), layout: JSON.stringify(draft.value) }),
  onSuccess(data) {
    setLayout(data.tabs)
    editor.data.customised = true
    done('Layout saved')
    show.value = false
  },
  onError: (error) =>
    createToast({
      title: 'Could not save',
      message: errorText(error),
      type: 'error',
    }),
})

const restore = createResource({
  url: `${API}.reset_form_layout`,
  makeParams: params,
  onSuccess(data) {
    setLayout(data.tabs)
    editor.data.customised = false
    done('Back to the default layout')
  },
  onError: (error) =>
    createToast({
      title: 'Could not restore',
      message: errorText(error),
      type: 'error',
    }),
})

function confirmRestore() {
  confirmDialog({
    title: 'Restore default layout',
    message: 'Remove the custom layout for this form and use the built-in one?',
    onConfirm: ({ hideDialog }) => {
      restore.submit()
      hideDialog()
    },
  })
}

// ---- preview: the unsaved layout, resolved by the server as the POS gets it

const previewError = ref('')
const previewLayout = reactive({
  tabs: [],
  loading: false,
  error: null,
  load: () => runPreview(),
})
const sampleDoc = reactive({})

const previewResource = createResource({
  url: `${API}.preview_form_layout`,
  makeParams: () => ({
    ...params(),
    parent_doctype: props.parentDoctype,
    layout: JSON.stringify(draft.value),
  }),
  onSuccess(data) {
    previewError.value = ''
    previewLayout.tabs = data.tabs
    for (const key of Object.keys(sampleDoc)) delete sampleDoc[key]
    Object.assign(sampleDoc, JSON.parse(JSON.stringify(props.sample || {})))
    applyDefaults(data.tabs, sampleDoc)
  },
  onError: (error) => (previewError.value = errorText(error)),
})

function runPreview() {
  previewLayout.loading = true
  previewResource.submit().finally(() => (previewLayout.loading = false))
}

function togglePreview() {
  preview.value = !preview.value
  if (preview.value) runPreview()
}

function errorText(error) {
  const m = error?.messages
  return (
    (Array.isArray(m) ? m[0] : m) || error?.message || 'Something went wrong.'
  )
}
</script>
