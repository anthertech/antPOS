import { defineStore } from 'pinia'
import { ref } from 'vue'
import { createResource } from 'frappe-ui'

export const usePosProfileStore = defineStore('posProfile', () => {

    const posProfileData = ref(null)
    const openingShift = ref(null)
    const hasNoData = ref(false)

    const posProfile = createResource({
        url: 'ant_pos.ant_pos.api.pos_profile.get_openingshift',
        method: 'GET',
        auto: false,
        onSuccess(data) {
            if (data && data.pos_profile && data.Ant_Opening_Shift){
                posProfileData.value = data.pos_profile
                openingShift.value = data.Ant_Opening_Shift
                hasNoData.value = false
            }else{
                hasNoData.value = true

            }
        },
    })

    function refresh() {
        return posProfile.reload()
    }
    function fetchPosProfile() {
        return posProfile.fetch()
    }
    
    return { posProfileData, openingShift, posProfile, refresh, fetchPosProfile , hasNoData }
})
