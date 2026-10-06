<template>
  <!-- Settings: grouped pages on the left, the page on the right.
       On a phone the pages are tabs across the top. -->
  <Dialog v-model="open" :options="{ size: '5xl' }">
    <template #body>
      <div
        class="flex h-[calc(100dvh_-_4rem)] max-h-[44rem] flex-col bg-surface-menu-bar sm:h-[calc(100vh_-_8rem)] sm:flex-row"
      >
        <nav
          class="flex shrink-0 flex-col sm:m-1 sm:w-56 sm:overflow-y-auto sm:rounded-l-lg"
          aria-label="Settings"
        >
          <div class="flex items-center justify-between px-3 pb-1 pt-3 sm:px-2">
            <h2 class="text-lg font-semibold text-ink-gray-9">Settings</h2>
            <button
              type="button"
              class="grid h-7 w-7 place-items-center rounded text-ink-gray-6 hover:bg-surface-gray-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3 sm:hidden"
              aria-label="Close settings"
              @click="open = false"
            >
              <LucideX class="h-4 w-4" />
            </button>
          </div>
          <div
            class="flex gap-1 overflow-x-auto px-2 pb-2 sm:flex-col sm:gap-0 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:h-0"
          >
            <template v-for="group in groups" :key="group.label">
              <div
                class="hidden h-7 items-center px-2 pt-3 text-xs font-medium text-ink-gray-5 sm:flex"
              >
                {{ group.label }}
              </div>
              <SidebarLink
                v-for="item in group.items"
                :key="item.key"
                class="shrink-0 !w-auto sm:!w-full"
                :label="item.label"
                :icon="item.icon"
                :is-active="active === item.key"
                @click="settingsPage = item.key"
              />
            </template>
          </div>
        </nav>
        <div
          class="relative flex min-h-0 flex-1 flex-col overflow-hidden bg-surface-modal sm:m-1 sm:ml-0 sm:rounded-r-lg"
        >
          <button
            type="button"
            class="absolute right-3 top-3 z-10 hidden h-7 w-7 place-items-center rounded text-ink-gray-6 hover:bg-surface-gray-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3 sm:grid"
            aria-label="Close settings"
            @click="open = false"
          >
            <LucideX class="h-4 w-4" />
          </button>
          <component :is="current.component" @close="open = false" />
        </div>
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { computed, h, markRaw, ref } from 'vue'
import { Dialog } from 'frappe-ui'
import LucideX from '~icons/lucide/x'
import LucideSlidersHorizontal from '~icons/lucide/sliders-horizontal'
import LucideStore from '~icons/lucide/store'
import LucideSparkles from '~icons/lucide/sparkles'
import SidebarLink from '@/components/SidebarLink.vue'
import PreferencesPage from '@/components/settings/PreferencesPage.vue'
import ProfilePage from '@/components/settings/ProfilePage.vue'
import PosProfilePage from '@/components/settings/PosProfilePage.vue'
import BrandPage from '@/components/settings/BrandPage.vue'
import { usePermissionStore } from '@/stores/permission'
import { settingsPage } from '@/stores/settings'
import { usersStore } from '@/stores/users'
import { Avatar } from 'frappe-ui'

const open = ref(true)
const users = usersStore()

// The user's own avatar as the Profile icon.
const UserAvatarIcon = {
  render: () => {
    const user = users.getUser() || {}
    return h(Avatar, {
      size: 'xs',
      image: user.user_image,
      label: user.full_name || user.name,
    })
  },
}
const permissions = usePermissionStore()

const groups = computed(() => {
  const list = [
    {
      label: 'User configuration',
      items: [
        {
          key: 'profile',
          label: 'Profile',
          icon: markRaw(UserAvatarIcon),
          component: markRaw(ProfilePage),
        },
        {
          key: 'preferences',
          label: 'Preferences',
          icon: markRaw(LucideSlidersHorizontal),
          component: markRaw(PreferencesPage),
        },
      ],
    },
    {
      label: 'Point of sale',
      items: [
        {
          key: 'pos-profile',
          label: 'POS profile',
          icon: markRaw(LucideStore),
          component: markRaw(PosProfilePage),
        },
      ],
    },
  ]
  if (permissions.isSystemManager) {
    list.push({
      label: 'System configuration',
      items: [
        {
          key: 'brand',
          label: 'Brand',
          icon: markRaw(LucideSparkles),
          component: markRaw(BrandPage),
        },
      ],
    })
  }
  return list
})

const allItems = computed(() => groups.value.flatMap((g) => g.items))
const current = computed(
  () =>
    allItems.value.find((i) => i.key === settingsPage.value) ||
    allItems.value[0],
)
const active = computed(() => current.value.key)
</script>
