<template>
  <div>
    <FrappeUIProvider>
      <div
        class="flex h-[100dvh] w-screen overflow-hidden select-none bg-surface-gray-1"
      >
        <div v-if="currentComponent">
          <component :is="currentComponent" @switchComponent="loadComponent" />
        </div>
        <!-- Desktop keeps the sidebar and navbar. Phones and tablets get a top bar
             and bottom tabs instead, so the content keeps the full width. -->
        <Sidebar v-if="isDesktop" />
        <div class="flex min-h-0 min-w-0 flex-1 flex-col">
          <Navbar v-if="isDesktop" />
          <MobileTopBar v-else />
          <main class="min-h-0 flex-1 overflow-hidden">
            <router-view />
          </main>
          <MobileTabBar v-if="!isDesktop && showTabBar" />
        </div>
        <MoreSheet v-if="!isDesktop" />
        <!-- Host for frappe-ui confirmDialog() -->
        <Dialogs />
      </div>
    </FrappeUIProvider>
  </div>
</template>

<script setup>
import { Dialogs, FrappeUIProvider } from 'frappe-ui'
import { computed, inject, watch, onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/composables/useTheme'
import { usePosProfileStore } from '@/stores/posProfile'
import { usePageMeta } from 'frappe-ui'
import { getSettings } from '@/stores/settings'
import { useSessionStore } from '@/stores/session'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import MobileTopBar from '@/components/mobile/MobileTopBar.vue'
import MobileTabBar from '@/components/mobile/MobileTabBar.vue'
import MoreSheet from '@/components/mobile/MoreSheet.vue'
import { useBreakpoint } from '@/composables/useBreakpoint'
import { useInvoiceStore } from '@/stores/pos'
import { useMobileView } from '@/stores/mobile'
import { useRoute } from 'vue-router'
import { refreshFormLayouts } from '@/utils/formLayout'

const { brand } = getSettings()
const { currentComponent, loadComponent } = inject('dynamicComponent')
const posProfileStore = usePosProfileStore()
const sessionStore = useSessionStore()
const { toggleTheme } = useTheme()
const { isDesktop } = useBreakpoint()
const route = useRoute()
const invoiceStore = useInvoiceStore()
const mobile = useMobileView()

// The cart and payment screens have their own bottom actions (Pay, Submit) and
// a back arrow; the tabs would only compete with them.
const showTabBar = computed(() => {
  if (route.name !== 'Pos') return true
  return mobile.view === 'items' && !invoiceStore.invoice?.docstatus
})

// Ctrl/Cmd+Shift+G switches between light and dark, as in the desk.
function onKeydown(e) {
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'g') {
    e.preventDefault()
    toggleTheme()
  }
}
// POS Profile settings (discounts, rate editing, sales order...) were read
// once at startup, so a change made in the desk only reached an open POS
// after a manual reload. Re-read them when the cashier comes back to the tab.
const PROFILE_REFRESH_MS = 30 * 1000
let lastProfileRefresh = Date.now()
function refreshProfile() {
  if (document.visibilityState !== 'visible') return
  if (!sessionStore.isLoggedIn || !posProfileStore.posProfileData) return
  if (Date.now() - lastProfileRefresh < PROFILE_REFRESH_MS) return
  lastProfileRefresh = Date.now()
  posProfileStore.refresh()
  // Form layouts are admin settings too (Antpos Fields Layout).
  refreshFormLayouts()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  document.addEventListener('visibilitychange', refreshProfile)
  window.addEventListener('focus', refreshProfile)
})
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.removeEventListener('visibilitychange', refreshProfile)
  window.removeEventListener('focus', refreshProfile)
})

// Browser tab: just the brand from antPOS Settings, on every page.
usePageMeta(() => {
  return {
    title: brand.name?.trim() || 'antPOS',
    icon: brand.favicon || '/assets/ant_pos/antPOS.png',
  }
})

watch(
  () => posProfileStore.hasNoData,
  (val) => {
    if (val && sessionStore.isLoggedIn) {
      loadComponent('OpenShift')
    }
  },
)
</script>
