<template>
  <SettingsPageLayout title="Profile" description="Your details and sign-in.">
    <template #badge>
      <Badge v-if="dirty" label="Not saved" variant="subtle" theme="orange" />
    </template>
    <template #actions>
      <Button
        variant="solid"
        :disabled="!dirty"
        :loading="save.loading"
        @click="save.submit()"
        >Save</Button
      >
    </template>

    <p v-if="profile.loading && !draft" class="text-base text-ink-gray-5">
      Loading…
    </p>
    <p v-else-if="profile.error" class="text-base text-ink-red-4">
      {{ errorText(profile.error) }}
    </p>

    <div v-else-if="draft" class="flex flex-col gap-6">
      <!-- Photo, name and email. -->
      <div class="flex items-center gap-4">
        <FileUploader
          :validate-file="validateImage"
          @success="(file) => setPhoto(file.file_url)"
        >
          <template #default="{ openFileSelector, uploading, error }">
            <div class="group relative size-16 shrink-0">
              <button
                type="button"
                class="size-16 overflow-hidden rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3"
                :aria-label="draft.user_image ? 'Change photo' : 'Upload photo'"
                @click="openFileSelector"
              >
                <Avatar
                  class="!size-16"
                  size="3xl"
                  :image="draft.user_image"
                  :label="fullName || draft.email"
                />
                <span
                  class="absolute inset-0 grid place-items-center rounded-full bg-black/40 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100"
                >
                  {{ uploading ? '…' : draft.user_image ? 'Change' : 'Upload' }}
                </span>
              </button>
              <button
                v-if="draft.user_image"
                type="button"
                class="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-surface-white text-ink-gray-5 opacity-0 shadow outline outline-1 outline-outline-gray-2 transition-opacity hover:text-ink-gray-8 focus:opacity-100 group-hover:opacity-100"
                aria-label="Remove photo"
                @click="setPhoto('')"
              >
                <LucideX class="size-3" />
              </button>
              <ErrorMessage
                v-if="error"
                class="absolute left-0 top-full mt-1 w-48"
                :message="error"
              />
            </div>
          </template>
        </FileUploader>
        <div class="min-w-0">
          <p class="truncate text-xl font-semibold text-ink-gray-9">
            {{ fullName || draft.email }}
          </p>
          <p class="truncate text-p-sm text-ink-gray-6">{{ draft.email }}</p>
          <div v-if="draft.roles?.length" class="mt-1.5 flex flex-wrap gap-1">
            <Badge
              v-for="role in visibleRoles"
              :key="role"
              :label="role"
              variant="subtle"
              theme="gray"
              size="sm"
            />
            <Badge
              v-if="draft.roles.length > visibleRoles.length"
              :label="`+${draft.roles.length - visibleRoles.length}`"
              variant="subtle"
              theme="gray"
              size="sm"
              :title="draft.roles.join(', ')"
            />
          </div>
        </div>
      </div>

      <section class="flex flex-col gap-4">
        <h3 class="text-base font-semibold text-ink-gray-9">Details</h3>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormControl
            v-model="draft.first_name"
            type="text"
            size="md"
            variant="subtle"
            label="First name"
            :required="true"
            autocomplete="given-name"
          />
          <FormControl
            v-model="draft.last_name"
            type="text"
            size="md"
            variant="subtle"
            label="Last name"
            autocomplete="family-name"
          />
          <FormControl
            v-model="draft.mobile_no"
            type="tel"
            size="md"
            variant="subtle"
            label="Mobile"
            autocomplete="tel"
          />
          <FormControl
            v-model="draft.phone"
            type="tel"
            size="md"
            variant="subtle"
            label="Phone"
          />
        </div>
      </section>

      <div class="border-t border-outline-gray-1" />

      <section class="flex flex-col gap-5">
        <h3 class="text-base font-semibold text-ink-gray-9">Language & time</h3>
        <div
          class="flex flex-col justify-between gap-2 sm:flex-row sm:items-center sm:gap-8"
        >
          <div class="flex flex-col gap-1">
            <span class="text-base font-medium text-ink-gray-8">Language</span>
            <span class="text-p-sm text-ink-gray-5"
              >Used for the app's text and printed documents.</span
            >
          </div>
          <div class="sm:w-56">
            <LinkControl
              id="profile-language"
              v-model="draft.language"
              doctype="Language"
              placeholder="System default"
            />
          </div>
        </div>
        <div
          class="flex flex-col justify-between gap-2 sm:flex-row sm:items-center sm:gap-8"
        >
          <div class="flex flex-col gap-1">
            <label
              for="profile-timezone"
              class="text-base font-medium text-ink-gray-8"
              >Time zone</label
            >
            <span class="text-p-sm text-ink-gray-5"
              >Dates and times are shown in this zone.</span
            >
          </div>
          <div class="sm:w-56">
            <Autocomplete
              :options="timezoneOptions"
              :model-value="draft.time_zone || null"
              placeholder="System default"
              @update:model-value="
                (o) => (draft.time_zone = o?.value ?? o ?? '')
              "
            />
          </div>
        </div>
      </section>

      <div class="border-t border-outline-gray-1" />

      <section class="flex flex-col gap-5">
        <h3 class="text-base font-semibold text-ink-gray-9">
          Sign-in & security
        </h3>
        <div
          class="flex flex-col justify-between gap-2 sm:flex-row sm:items-center sm:gap-8"
        >
          <div class="flex flex-col gap-1">
            <span class="text-base font-medium text-ink-gray-8">Password</span>
            <span class="text-p-sm text-ink-gray-5"
              >Change the password you sign in with.</span
            >
          </div>
          <Button @click="changePassword = true">Change password</Button>
        </div>
        <p v-if="draft.last_login" class="text-p-sm text-ink-gray-5">
          Last signed in {{ formatDate(draft.last_login) }}.
        </p>
      </section>
    </div>

    <ChangePasswordDialog v-model="changePassword" />
  </SettingsPageLayout>
</template>

<script setup>
import { computed, ref } from 'vue'
import {
  Autocomplete,
  Avatar,
  Badge,
  Button,
  ErrorMessage,
  FileUploader,
  FormControl,
  createResource,
  dayjsLocal,
  toast,
} from 'frappe-ui'
import LucideX from '~icons/lucide/x'
import SettingsPageLayout from '@/components/settings/SettingsPageLayout.vue'
import ChangePasswordDialog from '@/components/settings/ChangePasswordDialog.vue'
import LinkControl from '@/components/form/LinkControl.vue'
import { usersStore } from '@/stores/users'

const EDITABLE = [
  'first_name',
  'last_name',
  'user_image',
  'mobile_no',
  'phone',
  'language',
  'time_zone',
]
const users = usersStore()
const changePassword = ref(false)

const draft = ref(null)
const saved = ref('')
const snapshot = (p) =>
  JSON.stringify(Object.fromEntries(EDITABLE.map((k) => [k, p?.[k] || ''])))
const dirty = computed(
  () => Boolean(draft.value) && snapshot(draft.value) !== saved.value,
)

function setDraft(data) {
  draft.value = { ...data }
  saved.value = snapshot(data)
}

const profile = createResource({
  url: 'ant_pos.ant_pos.api.user.get_profile',
  auto: true,
  onSuccess: setDraft,
})

const save = createResource({
  url: 'ant_pos.ant_pos.api.user.update_profile',
  method: 'POST',
  makeParams: () => ({
    profile: JSON.stringify(
      Object.fromEntries(EDITABLE.map((k) => [k, draft.value[k] || ''])),
    ),
  }),
  onSuccess(data) {
    setDraft(data)
    // The sidebar and More sheet read the user from this store.
    Object.assign(users.getUser(), {
      full_name: data.full_name,
      first_name: data.first_name,
      last_name: data.last_name,
      user_image: data.user_image,
    })
    toast.success('Profile updated', { duration: 3 })
  },
  onError: (error) => toast.error(errorText(error)),
})

const timezones = createResource({
  url: 'frappe.core.doctype.user.user.get_timezones',
  auto: true,
  cache: 'antpos-timezones',
})
const timezoneOptions = computed(() =>
  (timezones.data?.timezones || []).map((tz) => ({ label: tz, value: tz })),
)

const fullName = computed(() =>
  [draft.value?.first_name, draft.value?.last_name].filter(Boolean).join(' '),
)
const visibleRoles = computed(() => (draft.value?.roles || []).slice(0, 4))

function setPhoto(url) {
  draft.value.user_image = url
  save.submit()
}

function validateImage(file) {
  if (!file.type?.startsWith('image/')) return 'Choose an image file.'
}

function formatDate(value) {
  return dayjsLocal(value).format('D MMM YYYY, h:mm A')
}

function errorText(error) {
  const m = error?.messages
  return (
    (Array.isArray(m) ? m[0] : m) || error?.message || 'Something went wrong.'
  )
}
</script>
