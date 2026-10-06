<template>
  <Dialog v-model="dialog1" @close="validate_pos">
    <template #body-title>
      <h3>Create ANT Opening Shift</h3>
    </template>
    <template #body-content>
      <div class="flex flex-col gap-8">
        <FormControl
          v-model="autocompleteValue"
          type="autocomplete"
          :options="
            options.company.map((company) => ({
              label: company,
              value: company,
            }))
          "
          size="sm"
          variant="subtle"
          placeholder="Select Company"
          label="Company"
        />

        <FormControl
          v-model="autocompleteProfileValue"
          type="autocomplete"
          :options="getProfileOptions()"
          size="sm"
          variant="subtle"
          placeholder="Select POS Profile"
          :disabled="!autocompleteValue"
          label="POS Profile"
        />

        <div v-if="mode_of_payment.length">
          <div class="border-2">
            <div class="p-2 flex justify-between">
              <div class="text-center">Mode Of Payment</div>
              Opening Amount
            </div>
            <div
              v-for="mode in mode_of_payment"
              :key="mode"
              class="flex justify-between p-2 border-t-2"
            >
              <div class="w-1/2">{{ mode }}</div>
              <div class="">
                <FormControl
                  v-model="openingAmounts[mode]"
                  type="number"
                  size="sm"
                  variant="subtle"
                  placeholder="Opening Amount"
                  :name="mode"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #actions>
      <Button variant="solid" :loading="submit.loading" @click="submit.submit()"
        >Confirm</Button
      >
      <Button class="ml-2" @click="validate_pos">Close</Button>
    </template>
  </Dialog>
</template>

<script setup>
import { createResource, Button, Dialog, FormControl } from 'frappe-ui'
import { ref, watch, reactive, onMounted } from 'vue'
import { usePosProfileStore } from '@/stores/posProfile'
import { createToast, errorMessage } from '@/utils'

const store = usePosProfileStore()
const options = reactive({ company: [], profile: {} })
const dialog1 = ref(false)
const autocompleteValue = ref({})
const autocompleteProfileValue = ref({})
const mode_of_payment = ref([])
const openingAmounts = reactive({})

const openDialog = () => {
  createResource({
    url: 'ant_pos.ant_pos.api.pos_profile.get_pos_profiles_by_company',
    method: 'GET',
    auto: true,
    onSuccess(data) {
      if (data && typeof data === 'object') {
        options.company = Object.keys(data)
        options.profile = data
      }
    },
    onError(error) {
      createToast({
        title: 'Could not load your POS profiles',
        message: errorMessage(error),
        type: 'error',
        timeout: 10,
      })
    },
  })

  dialog1.value = true
}

const validate_pos = async () => {
  await store.fetchPosProfile()
  if (store.hasNoData) {
    openDialog()
  } else {
    dialog1.value = false
  }
}

const submit = createResource({
  url: 'ant_pos.ant_pos.api.pos_profile.create_opening',
  method: 'POST',
  makeParams() {
    return {
      values: {
        company: autocompleteValue.value.value || null,
        pos_profile: autocompleteProfileValue.value.value || null,
        status: 'Open',
        opening_balance_details: mode_of_payment.value.map((mode) => ({
          mode_of_payment: mode,
          opening_amount: openingAmounts[mode] || 0,
        })),
      },
    }
  },
  onSuccess() {
    validate_pos()
  },
  onError(error) {
    const messages = error?.messages
    createToast({
      title: 'Could not open the shift',
      message:
        (Array.isArray(messages) ? messages[0] : messages) ||
        error?.message ||
        'Something went wrong.',
      type: 'error',
    })
  },
})

const getModeOfPayment = () => {
  if (getProfileOptions()) {
    const profiles = options.profile[autocompleteValue.value.value]
    const profile = profiles.find(
      (p) => p.name === autocompleteProfileValue.value.value,
    )
    return profile ? profile.modes_of_payment : []
  }
  return []
}

const getProfileOptions = () => {
  const profile = options.profile[autocompleteValue.value.value]
  return profile ? profile.map((item) => item.name) : []
}

onMounted(() => {
  validate_pos()
})

watch(autocompleteProfileValue, (newVal, oldVal) => {
  if (newVal.value !== oldVal.value) {
    mode_of_payment.value = getModeOfPayment()
  }
})
</script>
