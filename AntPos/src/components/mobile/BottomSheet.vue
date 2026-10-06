<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200"
      leave-active-class="transition-opacity duration-150"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 bg-black/40"
        aria-hidden="true"
        @click="close"
      />
    </Transition>
    <Transition
      enter-active-class="transition-transform duration-200 ease-out"
      leave-active-class="transition-transform duration-150 ease-in"
      enter-from-class="translate-y-full"
      leave-to-class="translate-y-full"
    >
      <div
        v-if="modelValue"
        ref="panel"
        role="dialog"
        aria-modal="true"
        :aria-label="title"
        tabindex="-1"
        class="fixed inset-x-0 bottom-0 z-50 flex max-h-[85dvh] flex-col rounded-t-2xl bg-surface-modal text-ink-gray-9 shadow-2xl focus:outline-none"
        style="padding-bottom: env(safe-area-inset-bottom)"
        @keydown.esc="close"
      >
        <div class="flex justify-center pt-2" aria-hidden="true">
          <span class="h-1 w-10 rounded-full bg-surface-gray-4" />
        </div>
        <div
          v-if="title"
          class="flex items-center justify-between px-4 pb-2 pt-1"
        >
          <h2 class="text-lg font-semibold">{{ title }}</h2>
          <button
            type="button"
            class="grid h-9 w-9 place-items-center rounded-full text-ink-gray-6 hover:bg-surface-gray-2"
            aria-label="Close"
            @click="close"
          >
            <LucideX class="h-5 w-5" />
          </button>
        </div>
        <div class="min-h-0 flex-1 overflow-y-auto pos-scroll">
          <slot :close="close" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { nextTick, ref, watch } from 'vue'
import LucideX from '~icons/lucide/x'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, default: '' },
})
const emit = defineEmits(['update:modelValue'])
const panel = ref(null)

const close = () => emit('update:modelValue', false)

watch(
  () => props.modelValue,
  async (open) => {
    if (!open) return
    await nextTick()
    panel.value?.focus()
  },
)
</script>
