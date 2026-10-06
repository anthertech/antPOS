import { createRouter, createWebHistory } from 'vue-router'
import { useSessionStore } from './stores/session'
import { userResource } from './stores/user'
import { loginUrl } from './utils/login'
import { usePermissionStore } from './stores/permission'

const routes = [
  {
    path: '/',
    name: 'Pos',
    component: () => import('@/pages/Pos.vue'),
  },
  {
    path: '/payments',
    name: 'Payments',
    component: () => import('@/pages/Payments.vue'),
    meta: {
      allowed: (p) =>
        p.paymentEntryCanSubmit ||
        p.paymentEntryCanCreate ||
        p.paymentEntryCanPrint,
    },
  },
]

let router = createRouter({
  history: createWebHistory('/antPOS'),
  routes,
})

router.beforeEach(async (to, from) => {
  const session = useSessionStore()
  let isLoggedIn = session.isLoggedIn
  try {
    await userResource.promise
  } catch {
    isLoggedIn = false
  }

  if (!isLoggedIn) {
    window.location.href = loginUrl(router.resolve(to).href)
    return false
  }

  if (to.meta.allowed) {
    const permissions = usePermissionStore()
    try {
      await permissions.ready()
    } catch {
      return from.matched.length ? false : { name: 'Pos' }
    }
    if (!to.meta.allowed(permissions)) return { name: 'Pos' }
  }
})

export default router
