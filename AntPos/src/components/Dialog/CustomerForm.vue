<template>
  <Dialog
    v-model="dialogVisible"
    :options="{ size: '2xl' }"
    @after-leave="handleDialogClose"
  >
    <template #body>
      <div class="bg-surface-modal px-4 pb-6 pt-5 sm:px-6">
        <div class="mb-5 flex items-center justify-between gap-2">
          <h3 class="text-2xl font-semibold leading-6 text-ink-gray-9">
            New customer
          </h3>
          <div class="flex items-center gap-1">
            <!-- Admins change this form's layout from the form itself. -->
            <Button
              v-if="permissions.canManageLayouts && isDesktop"
              variant="ghost"
              class="w-7"
              tooltip="Edit fields layout"
              @click="openLayoutEditor"
            >
              <LucidePencilLine class="h-4 w-4" aria-hidden="true" />
              <span class="sr-only">Edit fields layout</span>
            </Button>
            <Button
              variant="ghost"
              class="w-7"
              aria-label="Close"
              @click="handleDialogClose"
            >
              <LucideX class="h-4 w-4" />
            </Button>
          </div>
        </div>

        <!-- Fields come from the "Customer / Quick Entry" layout
             (Antpos Fields Layout), so an admin decides what is asked here. -->
        <form id="pos-customer-form" novalidate @submit.prevent="submit">
          <LayoutForm
            :layout="layout"
            :doc="customer"
            :show-errors="showErrors"
            id-prefix="customer"
          />
          <p
            v-if="showErrors && missing.length"
            class="mt-4 text-sm text-ink-red-4"
            role="alert"
          >
            Fill in {{ missing.join(', ') }}.
          </p>
        </form>
      </div>
      <div class="flex flex-row-reverse gap-2 px-4 pb-6 sm:px-6">
        <Button
          variant="solid"
          type="submit"
          form="pos-customer-form"
          class="flex-1 sm:flex-none"
          :loading="createCustomer.loading"
          :disabled="layout.loading || Boolean(layout.error)"
        >
          Create customer
        </Button>
        <Button class="flex-1 sm:flex-none" @click="handleDialogClose"
          >Cancel</Button
        >
      </div>
    </template>
  </Dialog>

  <LayoutEditorModal
    v-if="permissions.canManageLayouts"
    v-model="editLayout"
    title="Edit quick entry layout"
    doctype="Customer"
    type="Quick Entry"
  />
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue'
import { Dialog, Button, createResource } from 'frappe-ui'
import emitter from '@/utils/emitter'
import { showToast } from '@/utils'
import LayoutForm from '@/components/form/LayoutForm.vue'
import LayoutEditorModal from '@/components/layout-editor/LayoutEditorModal.vue'
import LucidePencilLine from '~icons/lucide/pencil-line'
import LucideX from '~icons/lucide/x'
import { usePermissionStore } from '@/stores/permission'
import { useBreakpoint } from '@/composables/useBreakpoint'
import {
  applyDefaults,
  missingRequired,
  useFormLayout,
} from '@/utils/formLayout'

const dialogVisible = ref(true)
const permissions = usePermissionStore()
const { isDesktop } = useBreakpoint()
const editLayout = ref(false)

// The form steps aside while its layout is edited and comes back afterwards, with whatever was already typed.
function openLayoutEditor() {
  dialogVisible.value = false
  editLayout.value = true
}
watch(editLayout, (open) => {
  if (!open) dialogVisible.value = true
})
const layout = useFormLayout('Customer', 'Quick Entry')
const customer = reactive({})
const showErrors = ref(false)

// Defaults (e.g. customer type "Individual") fill in once the layout is known.
watch(
  () => layout.tabs,
  (tabs) => applyDefaults(tabs, customer),
  { immediate: true },
)

const missing = computed(() => missingRequired(layout.tabs, customer))

const handleDialogClose = () => {
  dialogVisible.value = false
}

const createCustomer = createResource({
  url: 'ant_pos.ant_pos.api.form_layout.create_from_quick_entry',
  method: 'POST',
  makeParams: () => ({ doctype: 'Customer', doc: JSON.stringify(customer) }),
  onSuccess(data) {
    emitter.emit('customerCreated', data)
    showToast('success', 'New Customer Created')
    handleDialogClose()
  },
  onError(err) {
    showToast(
      'error',
      Array.isArray(err?.messages)
        ? err.messages[0]
        : err?.messages || 'Could not create customer',
      'x-circle',
    )
  },
})

function submit() {
  showErrors.value = true
  if (missing.value.length || createCustomer.loading) return
  createCustomer.fetch()
}
</script>
