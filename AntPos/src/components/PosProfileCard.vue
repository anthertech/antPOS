<template>
  <!-- The till's POS profile and shift, at the foot of the sidebar. Opens a menu with the details and
       Close shift. -->
  <Dropdown
    v-if="profile"
    :options="options"
    placement="right"
    side="right"
    align="end"
  >
    <template #default="{ open }">
      <button
        type="button"
        class="flex w-full items-center rounded-md border text-left duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3"
        :class="[
          isCollapsed
            ? 'justify-center border-transparent p-1.5'
            : 'gap-2.5 px-2 py-2',
          isCollapsed
            ? 'hover:bg-surface-gray-2'
            : open
              ? 'border-outline-gray-2 bg-surface-white shadow-sm'
              : 'border-outline-gray-1 bg-surface-white hover:border-outline-gray-2',
        ]"
        :aria-label="isCollapsed ? `${profile.name}, ${shiftLabel}` : undefined"
        :title="isCollapsed ? `${profile.name} · ${shiftLabel}` : undefined"
      >
        <span
          class="relative grid size-7 shrink-0 place-items-center rounded bg-surface-gray-2 text-ink-gray-7"
        >
          <LucideStore class="size-4" />
          <span
            class="absolute -right-0.5 -top-0.5 size-2 rounded-full ring-2 ring-surface-menu-bar"
            :class="shiftOpen ? 'bg-surface-green-3' : 'bg-surface-gray-5'"
            aria-hidden="true"
          />
        </span>
        <span v-if="!isCollapsed" class="min-w-0 flex-1">
          <span class="block truncate text-sm font-medium text-ink-gray-8">{{
            profile.name
          }}</span>
          <span class="block truncate text-xs text-ink-gray-5">{{
            shiftLabel
          }}</span>
        </span>
        <LucideChevronsUpDown
          v-if="!isCollapsed"
          class="size-4 shrink-0 text-ink-gray-5"
        />
      </button>
    </template>
  </Dropdown>
</template>

<script setup>
import { computed, inject, markRaw } from 'vue'
import { Dropdown, dayjsLocal } from 'frappe-ui'
import LucideStore from '~icons/lucide/store'
import LucideChevronsUpDown from '~icons/lucide/chevrons-up-down'
import LucideInfo from '~icons/lucide/info'
import LucideFileMinus from '~icons/lucide/file-minus'
import { usePosProfileStore } from '@/stores/posProfile'
import { settingsPage } from '@/stores/settings'

defineProps({
  isCollapsed: { type: Boolean, default: false },
})

const store = usePosProfileStore()
const { loadComponent } = inject('dynamicComponent')

const profile = computed(() => store.posProfileData)
const shiftOpen = computed(() => Boolean(store.openingShift?.name))
// period_start_date is a Date (no time), so only the day is shown. Short,
// to fit the 220px sidebar; the full wording is in the tooltip and details.
const shiftLabel = computed(() => {
  if (!shiftOpen.value) return 'No open shift'
  const start = store.openingShift?.period_start_date
  if (!start) return 'Shift open'
  const day = dayjsLocal(start)
  if (day.isSame(dayjsLocal(), 'day')) return 'Open today'
  return `Open since ${day.format(day.isSame(dayjsLocal(), 'year') ? 'D MMM' : 'D MMM YYYY')}`
})

const options = computed(() => [
  {
    group: profile.value?.name || 'POS profile',
    items: [
      {
        label: 'Profile and shift details',
        icon: markRaw(LucideInfo),
        onClick: () => {
          settingsPage.value = 'pos-profile'
          loadComponent('Settings')
        },
      },
      {
        label: 'Close shift',
        icon: markRaw(LucideFileMinus),
        theme: 'red',
        condition: () => shiftOpen.value,
        onClick: () => loadComponent('CloseShift'),
      },
    ],
  },
])
</script>
