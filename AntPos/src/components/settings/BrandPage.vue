<template>
  <SettingsPageLayout
    title="Brand"
    description="Your name and logo, shown in the sidebar, the browser tab and on receipts."
  >
    <template #badge>
      <Badge
        v-if="settings.isDirty"
        label="Not saved"
        variant="subtle"
        theme="orange"
      />
    </template>
    <template #actions>
      <Button
        variant="solid"
        :disabled="!settings.isDirty"
        :loading="settings.save.loading"
        @click="save"
      >
        Update
      </Button>
    </template>

    <div v-if="settings.doc" class="flex flex-col gap-5">
      <div
        class="flex flex-col justify-between gap-3 sm:flex-row sm:items-center sm:gap-8"
      >
        <div class="flex min-w-0 flex-col gap-1">
          <label for="brand-name" class="text-base font-medium text-ink-gray-8"
            >Brand name</label
          >
          <p class="text-p-sm text-ink-gray-5">
            Appears in the sidebar and the browser tab.
          </p>
        </div>
        <TextInput
          id="brand-name"
          v-model="brandName"
          size="md"
          placeholder="antPOS"
          class="sm:w-64"
        />
      </div>
      <div class="border-t border-outline-gray-1" />

      <div
        v-for="image in IMAGES"
        :key="image.field"
        class="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5"
      >
        <div
          class="grid size-16 shrink-0 place-items-center rounded border border-outline-gray-2"
        >
          <img
            :src="settings.doc[image.field] || '/assets/ant_pos/antPOS.png'"
            :alt="image.label"
            class="size-8 rounded object-contain"
          />
        </div>
        <div class="flex min-w-0 flex-1 flex-col gap-1">
          <span class="text-base font-medium text-ink-gray-8">{{
            image.label
          }}</span>
          <span class="text-p-sm text-ink-gray-5">{{ image.hint }}</span>
        </div>
        <ImageUploader
          :image_type="image.types"
          :image_url="settings.doc[image.field]"
          @upload="(url) => (settings.doc[image.field] = url)"
          @remove="() => (settings.doc[image.field] = '')"
        />
      </div>

      <ErrorMessage :message="settings.save.error" />
    </div>
  </SettingsPageLayout>
</template>

<script setup>
import { computed } from 'vue'
import { Badge, Button, ErrorMessage, TextInput, toast } from 'frappe-ui'
import ImageUploader from '@/components/Controls/ImageUploader.vue'
import SettingsPageLayout from '@/components/settings/SettingsPageLayout.vue'
import { decodeEntities, getSettings } from '@/stores/settings'

const IMAGES = [
  {
    field: 'brand_logo',
    label: 'Logo',
    hint: 'Appears in the sidebar. 32×32 px PNG or SVG works best.',
    types: 'image/*',
  },
  {
    field: 'favicon',
    label: 'Favicon',
    hint: 'Appears in the browser tab. 32×32 px PNG or ICO works best.',
    types: 'image/*',
  },
]

const { setting: settings, setupBrand } = getSettings()

// Frappe stores the name HTML-escaped; edit the plain text (it is escaped
// again on save).
const brandName = computed({
  get: () => decodeEntities(settings.doc?.brand_name || ''),
  set: (value) => {
    settings.doc.brand_name = value
  },
})

function save() {
  settings.save.submit(null, {
    onSuccess: () => {
      setupBrand()
      toast.success('Brand updated', { duration: 3 })
    },
  })
}
</script>
