<template>
  <!-- A sidebar page link: a quiet row, selected surface when active,
       label fading out when the sidebar is collapsed (tooltip instead). -->
  <button
    type="button"
    class="flex h-7.5 cursor-pointer items-center rounded text-ink-gray-8 duration-300 ease-in-out focus:outline-none focus:transition-none focus-visible:ring-2 focus-visible:ring-outline-gray-3"
    :class="
      isActive ? 'bg-surface-selected shadow-sm' : 'hover:bg-surface-gray-2'
    "
    :aria-current="isActive ? 'page' : undefined"
    :aria-label="isCollapsed ? label : undefined"
    @click="$emit('click')"
  >
    <div
      class="flex w-full items-center justify-between duration-300 ease-in-out"
      :class="isCollapsed ? 'ml-[3px] p-1' : 'px-2 py-[7px]'"
    >
      <div class="flex min-w-0 items-center">
        <Tooltip :text="label" placement="right" :disabled="!isCollapsed">
          <span class="grid size-4 flex-shrink-0 place-items-center">
            <slot name="icon">
              <component
                :is="icon"
                v-if="icon"
                class="size-4 text-ink-gray-7"
              />
            </slot>
          </span>
        </Tooltip>
        <span
          class="flex-1 flex-shrink-0 truncate text-sm duration-300 ease-in-out"
          :class="
            isCollapsed
              ? 'ml-0 w-0 overflow-hidden opacity-0'
              : 'ml-2 w-auto opacity-100'
          "
        >
          {{ label }}
        </span>
      </div>
      <span
        v-if="!isCollapsed && ($slots.right || suffix)"
        class="ml-2 shrink-0 text-sm text-ink-gray-5"
      >
        <slot name="right">{{ suffix }}</slot>
      </span>
    </div>
  </button>
</template>

<script setup>
import { Tooltip } from 'frappe-ui'

defineProps({
  label: { type: String, required: true },
  icon: { type: [Object, Function], default: null },
  suffix: { type: String, default: '' },
  isActive: { type: Boolean, default: false },
  isCollapsed: { type: Boolean, default: false },
})
defineEmits(['click'])
</script>
