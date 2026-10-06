<template>
  <!-- Desktop: a panel near the top of the screen, like a command palette.
       Phones: a full-height sheet from the bottom. -->
  <Dialog
    v-if="isDesktop"
    v-model="isOpen"
    :options="{ title, size: '2xl', position: 'top' }"
  >
    <template #body>
      <div class="flex h-[min(70vh,40rem)] flex-col">
        <InvoicePickerBody
          v-bind="$attrs"
          :title="title"
          autofocus
          @close="isOpen = false"
        />
      </div>
    </template>
  </Dialog>

  <Teleport v-else to="body">
    <Transition
      enter-active-class="transition-opacity duration-200"
      leave-active-class="transition-opacity duration-150"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 bg-black/40"
        aria-hidden="true"
        @click="isOpen = false"
      />
    </Transition>
    <Transition
      enter-active-class="transition-transform duration-200 ease-out"
      leave-active-class="transition-transform duration-150 ease-in"
      enter-from-class="translate-y-full"
      leave-to-class="translate-y-full"
    >
      <div
        v-if="isOpen"
        role="dialog"
        aria-modal="true"
        :aria-label="title"
        class="fixed inset-x-0 bottom-0 z-50 flex h-[92dvh] flex-col rounded-t-2xl bg-surface-modal text-ink-gray-9 shadow-2xl"
        style="padding-bottom: env(safe-area-inset-bottom)"
        @keydown.esc="isOpen = false"
      >
        <div class="flex justify-center pt-2" aria-hidden="true">
          <span class="h-1 w-10 rounded-full bg-surface-gray-4" />
        </div>
        <InvoicePickerBody
          v-bind="$attrs"
          :title="title"
          @close="isOpen = false"
        />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue'
import { Dialog } from 'frappe-ui'
import InvoicePickerBody from '@/components/pos/InvoicePickerBody.vue'
import { useBreakpoint } from '@/composables/useBreakpoint'

// Everything except the open state and title is passed through to the body:
// invoices, search, loading, hasMore, opening, actionLabel, showStatus,
// description, emptyTitle, emptyText and the select / load-more /
// update:search events.
defineOptions({ inheritAttrs: false })

const props = defineProps({
  modelValue: { type: Boolean, default: true },
  title: { type: String, required: true },
})
const emit = defineEmits(['update:modelValue'])

const { isDesktop } = useBreakpoint()

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>
