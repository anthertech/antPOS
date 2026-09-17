<template>
  <BottomSheet v-model="mobile.moreOpen" title="More">
    <div class="px-4 pb-4">
      <button
        type="button"
        class="flex w-full items-center gap-3 rounded-lg bg-surface-gray-1 p-3 text-left active:bg-surface-gray-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3"
        @click="run({ run: () => openSettings('pos-profile') })"
      >
        <div
          class="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full bg-surface-gray-3 text-sm font-semibold text-ink-gray-7"
        >
          <img
            v-if="user.user_image"
            :src="user.user_image"
            alt=""
            class="h-full w-full object-cover"
          />
          <span v-else>{{ initials }}</span>
        </div>
        <div class="min-w-0">
          <p class="truncate text-base font-medium text-ink-gray-9">
            {{ user.full_name }}
          </p>
          <p class="num truncate text-sm text-ink-gray-5">
            {{ profileStore.posProfileData?.name || 'No POS profile' }}
            <template v-if="profileStore.openingShift?.name">
              · shift {{ profileStore.openingShift.name }}</template
            >
          </p>
        </div>
        <LucideChevronRight class="ml-auto h-4 w-4 shrink-0 text-ink-gray-5" />
      </button>

      <ul class="mt-3 divide-y divide-outline-gray-1">
        <li v-for="item in items" :key="item.label">
          <button
            type="button"
            class="flex min-h-[3.25rem] w-full items-center gap-3 px-1 text-left text-base active:bg-surface-gray-1 focus:outline-none focus-visible:bg-surface-gray-2"
            :class="item.danger ? 'text-ink-red-4' : 'text-ink-gray-8'"
            @click="run(item)"
          >
            <component
              :is="item.icon"
              class="h-5 w-5 shrink-0"
              :class="item.danger ? '' : 'text-ink-gray-5'"
            />
            <span class="flex-1">{{ item.label }}</span>
            <span v-if="item.hint" class="text-sm text-ink-gray-5">{{
              item.hint
            }}</span>
          </button>
        </li>
      </ul>
    </div>
  </BottomSheet>
</template>

<script setup>
import { computed, inject, markRaw } from 'vue'
import { useRouter } from 'vue-router'
import LucideUndo2 from '~icons/lucide/undo-2'
import LucideFileMinus from '~icons/lucide/file-minus'
import LucideSettings from '~icons/lucide/settings'
import LucideLayoutGrid from '~icons/lucide/layout-grid'
import LucideLogOut from '~icons/lucide/log-out'
import LucideChevronRight from '~icons/lucide/chevron-right'
import LucideSmartphone from '~icons/lucide/smartphone'
import { installApp, pwa } from '@/utils/pwaInstall'
import BottomSheet from '@/components/mobile/BottomSheet.vue'
import { useMobileView } from '@/stores/mobile'
import { usePosProfileStore } from '@/stores/posProfile'
import { useSessionStore } from '@/stores/session'
import { usersStore } from '@/stores/users'
import { settingsPage } from '@/stores/settings'

const mobile = useMobileView()
const profileStore = usePosProfileStore()
const session = useSessionStore()
const router = useRouter()
const { loadComponent } = inject('dynamicComponent')

const user = computed(
  () =>
    (session.isLoggedIn ? usersStore().getUser() : { full_name: 'Guest' }) ||
    {},
)
const initials = computed(() =>
  String(user.value.full_name || '?')
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase(),
)

const items = computed(() => [
  {
    label: 'Return an invoice',
    icon: markRaw(LucideUndo2),
    run: () => {
      router.push({ name: 'Pos' })
      mobile.showItems()
      loadComponent('Return')
    },
  },
  {
    label: 'Close shift',
    icon: markRaw(LucideFileMinus),
    run: () => loadComponent('CloseShift'),
  },
  {
    label: 'Settings',
    icon: markRaw(LucideSettings),
    run: () => openSettings('profile'),
  },
  ...(pwa.installed
    ? []
    : [
        {
          label: 'Install app',
          icon: markRaw(LucideSmartphone),
          run: installApp,
        },
      ]),
  {
    label: 'Go to desk',
    icon: markRaw(LucideLayoutGrid),
    run: () => {
      window.location.href = '/app'
    },
  },
  {
    label: 'Log out',
    icon: markRaw(LucideLogOut),
    danger: true,
    run: () => session.logout.fetch(),
  },
])

function openSettings(page) {
  settingsPage.value = page
  loadComponent('Settings')
}

function run(item) {
  mobile.moreOpen = false
  item.run()
}
</script>
