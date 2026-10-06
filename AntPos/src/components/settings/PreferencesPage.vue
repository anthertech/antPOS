<template>
  <SettingsPageLayout
    title="Preferences"
    description="How antPOS looks for you. Shared with the desk."
  >
    <section>
      <div class="mb-4 flex flex-col gap-1">
        <h3 class="text-base font-semibold text-ink-gray-9">Appearance</h3>
        <p class="text-p-sm text-ink-gray-6">
          Switch between light, dark, or your device's theme.
          <span class="hidden lg:inline"
            >Shortcut:
            <kbd class="rounded border border-outline-gray-2 px-1 text-xs"
              >Ctrl</kbd
            >
            <kbd class="rounded border border-outline-gray-2 px-1 text-xs"
              >Shift</kbd
            >
            <kbd class="rounded border border-outline-gray-2 px-1 text-xs"
              >G</kbd
            ></span
          >
        </p>
      </div>
      <ThemeSelector />
    </section>
  </SettingsPageLayout>
</template>

<script setup>
import SettingsPageLayout from '@/components/settings/SettingsPageLayout.vue'
import ThemeSelector from '@/components/settings/ThemeSelector.vue'
</script>
