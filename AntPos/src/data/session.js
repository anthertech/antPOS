import { defineStore } from 'pinia'
import { createResource } from 'frappe-ui'
import { userResource } from './user'
import router from '@/router'
import { ref, computed } from 'vue'

export const useSessionStore = defineStore('antpos-session', () => {
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

  const login = createResource({
    url: 'login',
    makeParams({ email, password }) {
      return {
        usr: email,
        pwd: password,
      }
    },
    onError() {
      throw new Error('Invalid email or password')
    },
    onSuccess() {
      userResource.reload()
      user.value = sessionUser()
      login.reset()
      router.replace({ path: '/' })
    },
  })

  const logout = createResource({
    url: 'logout',
    onSuccess() {
      userResource.reset()
      user.value = null
      window.location.href = '/login?redirect-to=/antPOS'
    },
  })

  return {
    user,
    isLoggedIn,
    login,
    logout,
  }
})
