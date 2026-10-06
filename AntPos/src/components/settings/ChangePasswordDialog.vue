<template>
  <Dialog v-model="show" :options="{ title: 'Change password', size: 'sm' }">
    <template #body-content>
      <form
        id="pos-change-password"
        class="flex flex-col gap-3"
        novalidate
        @submit.prevent="submit"
      >
        <Password
          v-model="current"
          placeholder="Current password"
          autocomplete="current-password"
          maxlength="100"
        >
          <template #prefix
            ><LucideLockKeyhole class="size-4 text-ink-gray-4"
          /></template>
        </Password>
        <Password
          v-model="next"
          placeholder="New password"
          autocomplete="new-password"
          maxlength="100"
        >
          <template #prefix
            ><LucideLockKeyhole class="size-4 text-ink-gray-4"
          /></template>
        </Password>
        <Password
          v-model="confirm"
          placeholder="Confirm new password"
          autocomplete="new-password"
          maxlength="100"
        >
          <template #prefix
            ><LucideLockKeyhole class="size-4 text-ink-gray-4"
          /></template>
        </Password>
        <p
          v-if="hint"
          class="text-sm"
          :class="hint.ok ? 'text-ink-green-3' : 'text-ink-red-4'"
          role="status"
        >
          {{ hint.text }}
        </p>
        <p class="text-xs text-ink-gray-5">
          Your other sessions stay signed in.
        </p>
      </form>
    </template>
    <template #actions>
      <div class="flex flex-row-reverse gap-2">
        <Button
          variant="solid"
          type="submit"
          form="pos-change-password"
          :disabled="!canSubmit"
          :loading="update.loading"
        >
          Update password
        </Button>
        <Button @click="show = false">Cancel</Button>
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { Button, Dialog, Password, createResource, toast } from 'frappe-ui'
import LucideLockKeyhole from '~icons/lucide/lock-keyhole'

const show = defineModel({ type: Boolean, default: false })

const current = ref('')
const next = ref('')
const confirm = ref('')

watch(show, (open) => {
  if (!open) return
  current.value = next.value = confirm.value = ''
})

// Only the obvious checks here; the site's password policy is enforced on
// the server, which explains what is missing.
const hint = computed(() => {
  if (!next.value || !confirm.value) return null
  if (next.value !== confirm.value)
    return { ok: false, text: 'The new passwords do not match.' }
  if (next.value === current.value)
    return {
      ok: false,
      text: 'Choose a password different from the current one.',
    }
  return { ok: true, text: 'Passwords match.' }
})
const canSubmit = computed(() => Boolean(current.value && hint.value?.ok))

const update = createResource({
  url: 'ant_pos.ant_pos.api.user.change_password',
  method: 'POST',
  makeParams: () => ({ old_password: current.value, new_password: next.value }),
  onSuccess() {
    toast.success('Password updated', { duration: 3 })
    show.value = false
  },
  onError: (error) =>
    toast.error(error?.messages?.[0] || 'Could not update the password'),
})

function submit() {
  if (canSubmit.value && !update.loading) update.submit()
}
</script>
