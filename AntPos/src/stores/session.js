import { defineStore } from 'pinia'
import { createResource } from 'frappe-ui'
import { userResource } from '@/stores/user'
import { loginUrl } from '@/utils/login'
import { ref, computed } from 'vue'
import { usePosProfileStore } from '@/stores/posProfile'
import { usePermissionStore } from '@/stores/permission'

export const useSessionStore = defineStore('antpos-session', () => {
  const permissionStore = usePermissionStore()
  const posProfileStore = usePosProfileStore()

  function sessionUser() {
    let cookies = new URLSearchParams(document.cookie.split('; ').join('&'))
    let _sessionUser = cookies.get('user_id')
    if (_sessionUser === 'Guest') {
      _sessionUser = null
    }
    return _sessionUser
  }

  let user = ref(sessionUser())
  const isLoggedIn = computed(() => !!user.value)

  function initializeSession() {
    if (isLoggedIn.value) {
      // Failures are reported by the stores themselves.
      permissionStore.fetchPermissions().catch(() => {})
      posProfileStore.fetchPosProfile().catch(() => {})
    }
  }
  const logout = createResource({
    url: 'logout',
    onSuccess() {
      userResource.reset()
      user.value = null
      window.location.href = loginUrl('/antPOS')
    },
  })

  initializeSession()
  return {
    user,
    isLoggedIn,
    logout,
  }
})
