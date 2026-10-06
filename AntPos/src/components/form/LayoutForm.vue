<template>
  <div>
    <div
      v-if="layout.loading && !tabs.length"
      class="grid gap-3"
      :class="gridClass(columnsHint)"
      aria-busy="true"
    >
      <div v-for="n in columnsHint" :key="n" class="space-y-2">
        <div class="h-3 w-1/3 animate-pulse rounded bg-surface-gray-2" />
        <div class="h-8 animate-pulse rounded bg-surface-gray-2" />
      </div>
    </div>

    <div
      v-else-if="layout.error && !tabs.length"
      class="flex items-center justify-between gap-2 text-sm text-ink-red-4"
    >
      <span>The form could not be loaded.</span>
      <Button size="sm" variant="subtle" @click="layout.load()"
        >Try again</Button
      >
    </div>

    <!-- A tab bar only when the layout has
         labelled tabs; sections separated by a rule unless hidden. -->
    <div
      v-else
      :class="hasTabs ? 'rounded-lg border border-outline-gray-1' : ''"
    >
      <div
        v-if="hasTabs"
        class="flex gap-1 overflow-x-auto border-b border-outline-gray-1 px-2 [&::-webkit-scrollbar]:h-0"
        role="tablist"
      >
        <button
          v-for="(tab, t) in tabs"
          :key="tab.name"
          type="button"
          role="tab"
          :aria-selected="activeTab === t"
          class="-mb-px shrink-0 border-b-2 px-2.5 py-2 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3"
          :class="
            activeTab === t
              ? 'border-outline-gray-9 font-medium text-ink-gray-9'
              : 'border-transparent text-ink-gray-5 hover:text-ink-gray-8'
          "
          @click="activeTab = t"
        >
          {{ tab.label || 'Details' }}
        </button>
      </div>

      <div
        v-for="(tab, t) in tabs"
        v-show="activeTab === t"
        :key="tab.name"
        role="tabpanel"
        :class="hasTabs ? 'p-3 sm:p-4' : ''"
      >
        <section
          v-for="(section, s) in visibleSections(tab)"
          :key="section.name"
          :aria-label="section.label || undefined"
          :class="
            s === 0
              ? ''
              : section.hideBorder
                ? 'pt-3'
                : 'mt-4 border-t border-outline-gray-1 pt-4'
          "
        >
          <button
            v-if="section.label && !section.hideLabel && section.collapsible"
            type="button"
            class="mb-3 flex w-full items-center justify-between gap-2 text-left text-base font-medium text-ink-gray-8 focus:outline-none focus-visible:underline"
            :aria-expanded="isOpen(section)"
            @click="toggle(section)"
          >
            {{ section.label }}
            <LucideChevronDown
              class="h-4 w-4 text-ink-gray-5 transition-transform"
              :class="isOpen(section) ? '' : '-rotate-90'"
            />
          </button>
          <h4
            v-else-if="section.label && !section.hideLabel"
            class="mb-3 text-base font-medium text-ink-gray-8"
          >
            {{ section.label }}
          </h4>

          <!-- Each layout column is a stack of fields; columns sit side by
               side and stack on narrow screens. -->
          <div
            v-show="isOpen(section)"
            class="grid gap-x-4 gap-y-3"
            :class="gridClass(section.columns.length)"
          >
            <div
              v-for="column in section.columns"
              :key="column.name"
              class="min-w-0 space-y-3"
            >
              <FieldControl
                v-for="field in column.fields"
                :key="field.fieldname"
                :field="field"
                :doc="doc"
                :override="overrides[field.fieldname] || {}"
                :show-errors="showErrors"
                :id-prefix="idPrefix"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue'
import { Button } from 'frappe-ui'
import LucideChevronDown from '~icons/lucide/chevron-down'
import FieldControl from '@/components/form/FieldControl.vue'
import { isVisible, isRequired, isEmpty } from '@/utils/formLayout'

// Renders a server-driven layout (see utils/formLayout.js) against `doc`.
const props = defineProps({
  // { tabs, loading, error, load }
  layout: { type: Object, required: true },
  doc: { type: Object, required: true },
  overrides: { type: Object, default: () => ({}) },
  showErrors: { type: Boolean, default: false },
  idPrefix: { type: String, default: 'f' },
  // Skeleton columns while the layout loads.
  columnsHint: { type: Number, default: 2 },
})

const tabs = computed(() => props.layout.tabs || [])
const hasTabs = computed(
  () => tabs.value.length > 1 || Boolean(tabs.value[0]?.label),
)
const activeTab = ref(0)
watch(tabs, (list) => {
  if (activeTab.value >= list.length) activeTab.value = 0
})

// A section with nothing the user can see takes no space.
function visibleSections(tab) {
  return (tab.sections || []).filter((section) =>
    section.columns.some((column) =>
      column.fields.some(
        (f) => !props.overrides[f.fieldname]?.hidden && isVisible(f, props.doc),
      ),
    ),
  )
}

// Collapsible sections start as configured, and open themselves when a
// required field inside is missing after a submit attempt.
const openState = reactive({})
function isOpen(section) {
  if (!section.collapsible) return true
  if (props.showErrors && hasMissing(section)) return true
  return openState[section.name] ?? section.opened !== false
}
function toggle(section) {
  openState[section.name] = !isOpen(section)
}
function hasMissing(section) {
  return section.columns.some((column) =>
    column.fields.some(
      (f) =>
        isVisible(f, props.doc) &&
        isRequired(f, props.doc) &&
        isEmpty(props.doc[f.fieldname]),
    ),
  )
}

// Written out in full so Tailwind keeps them.
const GRID = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-2 lg:grid-cols-4',
}
function gridClass(n) {
  return GRID[Math.min(Math.max(n, 1), 4)] || GRID[4]
}
</script>
