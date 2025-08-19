import { defineStore } from 'pinia'
import { ref } from 'vue'
import { createResource } from 'frappe-ui'

export const usePosProfileStore = defineStore('posProfile', () => {
  const posProfileData = ref(null)

  const posProfile = createResource({
    url: 'ant_pos.ant_pos.api.pos_profile.get_openingshift',
    method: 'GET',
    auto: true,
    onSuccess(data) {
      posProfileData.value = data
    },
  })

  function refresh() {
    return posProfile.reload()
  }

  return { posProfileData, posProfile, refresh }
})
