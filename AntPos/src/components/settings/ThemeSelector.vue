<template>
  <div
    role="radiogroup"
    aria-label="Theme"
    class="grid grid-cols-1 gap-3 sm:grid-cols-3"
    @keydown.left.prevent="move(-1)"
    @keydown.right.prevent="move(1)"
  >
    <button
      v-for="(theme, i) in themes"
      :key="theme.mode"
      ref="cards"
      type="button"
      role="radio"
      :aria-checked="mode === theme.mode"
      :tabindex="mode === theme.mode ? 0 : -1"
      class="group flex flex-col overflow-hidden rounded-lg border text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3"
      :class="
        mode === theme.mode
          ? 'border-outline-gray-5'
          : 'border-outline-gray-2 hover:border-outline-gray-3'
      "
      @click="choose(theme.mode, i)"
    >
      <!-- Each half carries its own data-theme, so the preview shows that
           scheme whatever the page is using. -->
      <div class="flex h-24 bg-surface-gray-2 pl-4 pt-3">
        <ThemePreview
          :scheme="theme.mode === 'automatic' ? 'light' : theme.mode"
          class="rounded-tl-sm"
          :class="theme.mode === 'automatic' ? 'w-1/2' : 'w-full'"
        />
        <ThemePreview
          v-if="theme.mode === 'automatic'"
          scheme="dark"
          class="w-1/2"
        />
      </div>
      <div
        class="flex items-center justify-between gap-2 border-t border-outline-gray-2 px-3 py-2"
      >
        <span class="min-w-0">
          <span class="block truncate text-base text-ink-gray-8">{{
            theme.label
          }}</span>
          <span class="block truncate text-sm text-ink-gray-5">{{
            theme.info
          }}</span>
        </span>
        <span
          class="size-3.5 shrink-0 rounded-full"
          :class="
            mode === theme.mode
              ? 'border-4 border-outline-gray-5'
              : 'border border-outline-gray-4'
          "
          aria-hidden="true"
        />
      </div>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { toast } from 'frappe-ui'
import ThemePreview from '@/components/settings/ThemePreview.vue'
import { useTheme } from '@/composables/useTheme'

const cards = ref([])
const { mode, setTheme } = useTheme()

// Labels match the desk's switcher; the choice is shared with the desk.
const themes = [
  { mode: 'light', label: 'Light', info: 'Frappe Light' },
  { mode: 'dark', label: 'Dark', info: 'Timeless Night' },
  { mode: 'automatic', label: 'Automatic', info: 'Matches your device' },
]

async function choose(next, index) {
  if (next === mode.value) return
  cards.value[index]?.focus()
  try {
    await setTheme(next)
    toast.success('Theme changed', { duration: 3 })
  } catch {
    toast.warning(
      'Theme applied here only. It could not be saved to your account, so the desk keeps its own setting.',
      { duration: 6 },
    )
  }
}

function move(step) {
  const i = themes.findIndex((t) => t.mode === mode.value)
  const next = themes[i + step]
  if (next) choose(next.mode, i + step)
}
</script>
