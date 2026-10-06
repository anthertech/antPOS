<template>
  <!-- Brand and user menu on top, the
       pages, and at the foot the till's POS profile and the collapse toggle. -->
  <aside
    class="relative flex h-full flex-shrink-0 flex-col justify-between border-r border-outline-gray-1 bg-surface-menu-bar transition-all duration-300 ease-in-out"
    :class="collapsed ? 'w-12' : 'w-[220px]'"
    aria-label="Main navigation"
  >
    <div class="p-2">
      <Dropdown :options="menuItems">
        <template #default="{ open }">
          <button
            type="button"
            class="flex h-12 items-center rounded-md py-2 duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3"
            :class="
              collapsed
                ? 'w-auto px-0'
                : open
                  ? 'w-full bg-surface-white px-2 shadow-sm'
                  : 'w-full px-2 hover:bg-surface-gray-3'
            "
          >
            <img
              :src="brand.logo || '/assets/ant_pos/antPOS.png'"
              class="h-8 w-8 max-w-16 flex-shrink-0 rounded object-cover"
              alt=""
            />
            <div
              class="flex flex-1 flex-col truncate text-left duration-300 ease-in-out"
              :class="
                collapsed
                  ? 'ml-0 w-0 overflow-hidden opacity-0'
                  : 'ml-2 w-auto opacity-100'
              "
            >
              <div
                class="truncate text-base font-medium leading-none text-ink-gray-9"
              >
                {{ brand.name || 'antPOS' }}
              </div>
              <div class="mt-1 truncate text-sm leading-none text-ink-gray-7">
                {{ currentUser.full_name }}
              </div>
            </div>
            <div
              class="duration-300 ease-in-out"
              :class="
                collapsed
                  ? 'ml-0 w-0 overflow-hidden opacity-0'
                  : 'ml-2 w-auto opacity-100'
              "
            >
              <LucideChevronDown
                class="size-4 text-ink-gray-5"
                aria-hidden="true"
              />
            </div>
          </button>
        </template>
      </Dropdown>
    </div>

    <div class="flex-1 overflow-y-auto">
      <nav class="flex flex-col">
        <SidebarLink
          v-for="link in links"
          :key="link.route"
          class="mx-2 my-[1.5px]"
          :label="link.label"
          :icon="link.icon"
          :is-active="currentRoute === link.route"
          :is-collapsed="collapsed"
          @click="router.push({ name: link.route })"
        />
      </nav>
    </div>

    <div class="m-2 flex flex-col gap-1">
      <PosProfileCard class="mb-1" :is-collapsed="collapsed" />
      <SidebarLink
        :label="collapsed ? 'Expand' : 'Collapse'"
        :is-collapsed="collapsed"
        @click="sidebarStore.toggleCollapsed()"
      >
        <template #icon>
          <LucidePanelLeftClose
            class="size-4 text-ink-gray-7 duration-300 ease-in-out"
            :class="{ '[transform:rotateY(180deg)]': collapsed }"
          />
        </template>
      </SidebarLink>
    </div>
  </aside>
</template>

<script setup>
import { computed, h, inject, markRaw } from 'vue'
import { useRouter } from 'vue-router'
import { Dropdown, createResource } from 'frappe-ui'
import LucideMonitorDown from '~icons/lucide/monitor-down'
import { installApp, pwa } from '@/utils/pwaInstall'
import { getSettings, settingsPage } from '@/stores/settings'
import { usersStore } from '@/stores/users'
import { useSidebar } from '@/stores/sidebar'
import { usePermissionStore } from '@/stores/permission'
import { usePosProfileStore } from '@/stores/posProfile'
import { useSessionStore } from '@/stores/session'
import SidebarLink from '@/components/SidebarLink.vue'
import PosProfileCard from '@/components/PosProfileCard.vue'

import LucideChevronDown from '~icons/lucide/chevron-down'
import LucidePanelLeftClose from '~icons/lucide/panel-left-close'
import LucideMonitor from '~icons/lucide/monitor'
import LucideCreditCard from '~icons/lucide/credit-card'
import LucideFileMinus from '~icons/lucide/file-minus'
import LucideLayoutGrid from '~icons/lucide/layout-grid'
import LucideSettings from '~icons/lucide/settings'
import LucideLogOut from '~icons/lucide/log-out'

const sidebarStore = useSidebar()
const permissionStore = usePermissionStore()
const profileStore = usePosProfileStore()
const sessionStore = useSessionStore()
const router = useRouter()
const { brand } = getSettings()
const { loadComponent } = inject('dynamicComponent')

// The sidebar is only shown on desktop (App.vue); phones use the tab bar.
const collapsed = computed(() => sidebarStore.isSidebarCollapsed)
const currentRoute = computed(() => router.currentRoute.value.name)

const currentUser = computed(() => {
  if (!sessionStore.isLoggedIn) return { full_name: 'Guest' }
  return usersStore().getUser() || {}
})

const links = computed(() => {
  const list = []
  if (
    permissionStore.salesInvoiceCanSubmit ||
    permissionStore.salesInvoiceCanCreate ||
    permissionStore.salesInvoiceCanPrint
  ) {
    list.push({
      route: 'Pos',
      label: 'Point of sale',
      icon: markRaw(LucideMonitor),
    })
  }
  if (
    permissionStore.paymentEntryCanSubmit ||
    permissionStore.paymentEntryCanCreate ||
    permissionStore.paymentEntryCanPrint
  ) {
    list.push({
      route: 'Payments',
      label: 'Payments',
      icon: markRaw(LucideCreditCard),
    })
  }
  return list
})

// Frappe's app switcher: the desk plus every app
// this user may open (the same list as /apps).
const apps = createResource({
  url: 'frappe.apps.get_apps',
  cache: 'antpos-apps',
  auto: true,
  transform: (data) => [
    {
      name: 'frappe',
      title: 'Desk',
      logo: '/assets/frappe/images/framework.png',
      route: '/app',
    },
    ...(data || []).filter((app) => app.name !== 'ant_pos'),
  ],
})

const appIcon = (src) =>
  markRaw({
    render: () =>
      h('img', { src, alt: '', class: 'size-4 rounded-sm object-contain' }),
  })

function openSettings(page) {
  settingsPage.value = page
  loadComponent('Settings')
}

const menuItems = computed(() => [
  {
    group: 'App',
    hideLabel: true,
    items: [
      {
        label: 'Apps',
        icon: markRaw(LucideLayoutGrid),
        submenu: (apps.data || []).map((app) => ({
          label: app.title,
          icon: appIcon(app.logo),
          onClick: () => {
            window.location.href = app.route
          },
        })),
      },
      {
        label: 'Settings',
        icon: markRaw(LucideSettings),
        onClick: () => openSettings('profile'),
      },
      {
        label: 'Install app',
        icon: markRaw(LucideMonitorDown),
        condition: () => !pwa.installed,
        onClick: installApp,
      },
    ],
  },
  {
    group: 'Shift',
    hideLabel: true,
    items: [
      {
        label: 'Close shift',
        icon: markRaw(LucideFileMinus),
        condition: () => Boolean(profileStore.openingShift?.name),
        onClick: () => loadComponent('CloseShift'),
      },
    ],
  },
  {
    group: 'Account',
    hideLabel: true,
    items: [
      {
        label: 'Log out',
        icon: markRaw(LucideLogOut),
        onClick: () => sessionStore.logout.fetch(),
      },
    ],
  },
])
</script>
