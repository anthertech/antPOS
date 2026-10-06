<template>
  <!-- One page of the Settings dialog: title and description, actions on the right. -->
  <div class="flex h-full w-full flex-col text-ink-gray-8">
    <div
      class="flex items-start justify-between gap-4 px-5 pb-4 pt-6 sm:px-8 sm:pt-8"
    >
      <div class="flex min-w-0 flex-col gap-1">
        <h2
          class="flex h-5 items-center gap-2 text-xl font-semibold leading-none text-ink-gray-9"
        >
          {{ title }}
          <slot name="badge" />
        </h2>
        <p v-if="description" class="text-p-base text-ink-gray-6">
          {{ description }}
        </p>
      </div>
      <div v-if="$slots.actions" class="flex shrink-0 items-center gap-2">
        <slot name="actions" />
      </div>
    </div>
    <div class="min-h-0 flex-1 overflow-y-auto px-5 pb-8 pos-scroll sm:px-8">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
})
</script>
