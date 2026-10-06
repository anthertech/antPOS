<template>
  <SettingsPageLayout
    title="POS profile"
    description="The profile and shift this till is working in."
  >
    <template #actions>
      <Button
        v-if="profile && permissions.isSystemManager"
        @click="openInDesk('pos-profile', profile.name)"
      >
        <template #prefix><LucideExternalLink class="h-4 w-4" /></template>
        Open in desk
      </Button>
    </template>

    <p v-if="!profile" class="text-base text-ink-gray-6">
      No shift is open, so no POS profile is in use.
    </p>

    <div v-else class="flex flex-col gap-6">
      <section class="rounded-lg border border-outline-gray-2">
        <div
          class="flex items-center gap-3 border-b border-outline-gray-2 px-4 py-3"
        >
          <div
            class="grid size-9 shrink-0 place-items-center rounded-md bg-surface-gray-2 text-ink-gray-7"
          >
            <LucideStore class="h-4 w-4" />
          </div>
          <div class="min-w-0">
            <p class="truncate text-base font-medium text-ink-gray-9">
              {{ profile.name }}
            </p>
            <p class="truncate text-sm text-ink-gray-5">
              {{ profile.company }}
            </p>
          </div>
        </div>
        <dl class="grid grid-cols-1 gap-x-6 gap-y-3 px-4 py-3 sm:grid-cols-2">
          <div v-for="row in profileRows" :key="row.label" class="min-w-0">
            <dt class="text-sm text-ink-gray-5">{{ row.label }}</dt>
            <dd class="truncate text-base text-ink-gray-8">
              {{ row.value || '—' }}
            </dd>
          </div>
        </dl>
      </section>

      <section v-if="shift" class="rounded-lg border border-outline-gray-2">
        <div
          class="flex items-center justify-between gap-3 border-b border-outline-gray-2 px-4 py-3"
        >
          <div class="flex min-w-0 items-center gap-3">
            <div
              class="grid size-9 shrink-0 place-items-center rounded-md bg-surface-green-1 text-ink-green-3"
            >
              <LucideClock class="h-4 w-4" />
            </div>
            <div class="min-w-0">
              <p
                class="flex items-center gap-2 truncate text-base font-medium text-ink-gray-9"
              >
                Shift open
                <Badge label="Open" theme="green" variant="subtle" />
              </p>
              <p class="num truncate text-sm text-ink-gray-5">
                {{ shift.name }}
              </p>
            </div>
          </div>
          <Button theme="red" variant="subtle" @click="closeShift"
            >Close shift</Button
          >
        </div>
        <dl class="grid grid-cols-1 gap-x-6 gap-y-3 px-4 py-3 sm:grid-cols-2">
          <div v-for="row in shiftRows" :key="row.label" class="min-w-0">
            <dt class="text-sm text-ink-gray-5">{{ row.label }}</dt>
            <dd class="num truncate text-base text-ink-gray-8">
              {{ row.value || '—' }}
            </dd>
          </div>
        </dl>
        <div
          v-if="shift.balance_details?.length"
          class="border-t border-outline-gray-2 px-4 py-3"
        >
          <p class="mb-2 text-sm text-ink-gray-5">Opening amounts</p>
          <ul class="space-y-1">
            <li
              v-for="row in shift.balance_details"
              :key="row.mode_of_payment"
              class="flex justify-between text-base text-ink-gray-8"
            >
              <span>{{ row.mode_of_payment }}</span>
              <span class="num">{{ money(row.opening_amount) }}</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </SettingsPageLayout>
</template>

<script setup>
import { computed, inject } from 'vue'
import { Badge, Button, dayjsLocal } from 'frappe-ui'
import LucideStore from '~icons/lucide/store'
import LucideClock from '~icons/lucide/clock'
import LucideExternalLink from '~icons/lucide/external-link'
import SettingsPageLayout from '@/components/settings/SettingsPageLayout.vue'
import { usePosProfileStore } from '@/stores/posProfile'
import { usePermissionStore } from '@/stores/permission'

const emit = defineEmits(['close'])
const store = usePosProfileStore()
const permissions = usePermissionStore()
const { loadComponent } = inject('dynamicComponent')

const profile = computed(() => store.posProfileData)
const shift = computed(() => {
  const s = store.openingShift
  if (!s) return null
  return { ...s, balance_details: s.opening_balance_details || [] }
})

const profileRows = computed(() => [
  { label: 'Warehouse', value: profile.value?.warehouse },
  { label: 'Price list', value: profile.value?.selling_price_list },
  { label: 'Currency', value: profile.value?.currency },
  {
    label: 'Customer group',
    value: (profile.value?.customer_groups || [])
      .map((g) => g.customer_group)
      .join(', '),
  },
])

const shiftRows = computed(() => [
  { label: 'Cashier', value: shift.value?.cashier },
  {
    label: 'Opened on',
    value: shift.value?.period_start_date
      ? dayjsLocal(shift.value.period_start_date).format('D MMM YYYY')
      : '',
  },
  {
    label: 'Posting date',
    value: shift.value?.posting_date
      ? dayjsLocal(shift.value.posting_date).format('D MMM YYYY')
      : '',
  },
])

function money(value) {
  return Number(value || 0).toFixed(2)
}

function openInDesk(route, name) {
  window.open(`/app/${route}/${encodeURIComponent(name)}`, '_blank')
}

function closeShift() {
  emit('close')
  loadComponent('CloseShift')
}
</script>
