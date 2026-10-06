<template>
  <!-- A miniature of the POS in one scheme: sidebar, top bar, two panels and
       the green Pay button. Fixed colours:
       theme tokens would follow the page's own theme instead. -->
  <div class="flex h-full" :style="{ background: c.page }">
    <div
      class="w-4 shrink-0"
      :style="{ background: c.bar, borderRight: `1px solid ${c.line}` }"
    />
    <div class="flex min-w-0 flex-1 flex-col">
      <div
        class="h-3 shrink-0"
        :style="{ background: c.panel, borderBottom: `1px solid ${c.line}` }"
      />
      <div class="flex flex-1 gap-1 p-1">
        <div
          class="w-1/3 rounded-sm p-1"
          :style="{ background: c.panel, border: `1px solid ${c.line}` }"
        >
          <div class="h-1.5 rounded-sm" :style="{ background: c.muted }" />
        </div>
        <div
          class="flex flex-1 flex-col rounded-sm p-1"
          :style="{ background: c.panel, border: `1px solid ${c.line}` }"
        >
          <div
            class="h-1.5 w-2/3 rounded-sm"
            :style="{ background: c.strong }"
          />
          <div
            class="mt-1 h-1.5 w-1/2 rounded-sm"
            :style="{ background: c.muted }"
          />
          <div
            class="ml-auto mt-auto h-2 w-1/3 rounded-sm"
            style="background: #30a66d"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({ scheme: { type: String, required: true } })

const PALETTE = {
  light: {
    page: '#f8f8f8',
    bar: '#f3f3f3',
    panel: '#ffffff',
    line: '#ededed',
    muted: '#f3f3f3',
    strong: '#e2e2e2',
  },
  dark: {
    page: '#0f0f0f',
    bar: '#171717',
    panel: '#1c1c1c',
    line: '#2a2a2a',
    muted: '#2a2a2a',
    strong: '#3a3a3a',
  },
}
const c = computed(() => PALETTE[props.scheme] || PALETTE.light)
</script>
