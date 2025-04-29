import { defineStore } from 'pinia'
import { createResource } from 'frappe-ui'
import { useSessionStore } from './session'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

export const usersStore = defineStore('antpos-users', () => {
  const session = useSessionStore()

  let usersByName = reactive({})
  const router = useRouter()

  const users = createResource({
    url: 'ant_pos.ant_pos.api.session.get_users',
    cache: 'Users',
    initialData: [],
    auto: true,
    transform(users) {
      for (let user of users) {
        usersByName[user.name] = user
        if (user.name === 'Administrator') {
          usersByName[user.email] = user
        }
      }
      return users
    },
    onError(error) {
      if (error && error.exc_type === 'AuthenticationError') {
        router.push('/login')
      }
    },
  })

  function getUser(email) {
    if (!email || email === 'sessionUser') {
      email = session.user
    }
    if (!usersByName[email]) {
      usersByName[email] = {
        name: email,
        email: email,
        full_name: email.split('@')[0],
        first_name: email.split('@')[0],
        last_name: '',
        user_image: null,
        role: null,
      }
    }
    return usersByName[email]
  }

  return {
    users,
    getUser,
  }
})
