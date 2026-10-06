<template>
  <!-- Tabs, sections and columns
       are dragged in place; fields are added from each column. -->
  <div class="flex flex-col gap-5">
    <!-- Tabs -->
    <div
      class="flex max-w-full items-center justify-between gap-2 overflow-x-auto rounded bg-surface-gray-2 px-2.5 py-2 text-base"
    >
      <Draggable
        v-if="tabs.length && tabs[tabIndex]?.label"
        :list="tabs"
        item-key="name"
        class="flex w-full items-center gap-2 overflow-auto py-1 [&::-webkit-scrollbar]:h-0"
        @end="(e) => (tabIndex = e.newIndex)"
        @change="emitChange"
      >
        <template #item="{ element: tab, index: i }">
          <div
            class="flex shrink-0 cursor-pointer items-center gap-2 rounded"
            :class="[
              tabIndex === i
                ? 'bg-surface-white text-ink-gray-9 shadow-sm'
                : 'text-ink-gray-5 hover:bg-surface-white hover:text-ink-gray-9 hover:shadow-sm',
              editing === tab.name ? 'p-1' : 'px-2 py-1',
            ]"
            @click="tabIndex = i"
            @dragenter.prevent="dragging && (tabIndex = i)"
          >
            <input
              v-if="editing === tab.name"
              v-model="tab.label"
              v-focus
              class="pos-input h-7 w-36 text-sm"
              :aria-label="`Tab ${i + 1} name`"
              @keydown.enter="stopEditing"
              @blur="stopEditing"
              @click.stop
            />
            <span v-else @dblclick="startEditing(tab)">{{
              tab.label || 'Untitled'
            }}</span>
            <Dropdown
              v-if="tabIndex === i && editing !== tab.name"
              :options="tabOptions(tab, i)"
              @click.stop
            >
              <Button variant="ghost" class="!h-5 !px-1">
                <LucideEllipsis class="h-4 w-4" aria-hidden="true" />
                <span class="sr-only">{{ tab.label }} options</span>
              </Button>
            </Dropdown>
          </div>
        </template>
      </Draggable>
      <Button
        variant="ghost"
        class="shrink-0 !text-ink-gray-5 hover:!text-ink-gray-9"
        @click="addTab"
      >
        <template #prefix><LucidePlus class="h-4 w-4" /></template>
        Add tab
      </Button>
    </div>

    <!-- Sections of the open tab -->
    <div
      v-for="(tab, t) in tabs"
      v-show="tabIndex === t"
      :key="tab.name"
      class="min-h-[20rem]"
    >
      <Draggable
        :list="tab.sections"
        item-key="name"
        :group="
          tab.sections.length
            ? 'sections'
            : { name: 'sections', put: ['sections', 'columns', 'fields'] }
        "
        handle=".section-drag-handle"
        :class="
          tab.sections.length
            ? 'flex flex-col gap-5'
            : 'mb-5 rounded border-2 border-dashed border-outline-gray-2 p-3'
        "
        @start="dragging = true"
        @end="dragging = false"
        @add="onDroppedIntoEmptyTab(tab)"
        @change="emitChange"
      >
        <template #item="{ element: section, index: s }">
          <div class="flex flex-col gap-1.5 rounded bg-surface-gray-2 p-2.5">
            <div class="flex items-center justify-between gap-2">
              <div
                class="flex h-7 min-w-0 items-center gap-2 text-base font-medium text-ink-gray-9"
              >
                <LucideGripVertical
                  class="section-drag-handle h-4 w-4 shrink-0 cursor-grab text-ink-gray-4"
                  aria-label="Drag section"
                />
                <input
                  v-if="editing === section.name"
                  v-model="section.label"
                  v-focus
                  class="pos-input h-7 w-48 text-sm"
                  aria-label="Section label"
                  @keydown.enter="stopEditing"
                  @blur="stopEditing"
                />
                <span
                  v-else
                  class="flex cursor-pointer items-center gap-1.5 truncate"
                  :class="{
                    'text-ink-gray-4': section.hideLabel || !section.label,
                    italic: !section.label,
                  }"
                  @dblclick="startEditing(section)"
                >
                  {{ section.label || 'No label' }}
                  <LucideChevronDown
                    v-if="section.collapsible"
                    class="h-4 w-4 shrink-0"
                  />
                  <LucideEyeOff
                    v-if="section.label && section.hideLabel"
                    class="h-3.5 w-3.5 shrink-0"
                  />
                </span>
              </div>
              <div class="flex shrink-0 items-center gap-1.5">
                <span
                  v-if="countFields(section)"
                  class="rounded bg-surface-gray-3 px-1.5 py-0.5 text-xs leading-none text-ink-gray-5"
                >
                  {{ countFields(section) }}
                  {{ countFields(section) === 1 ? 'field' : 'fields' }}
                </span>
                <Dropdown :options="sectionOptions(tab, section, s, t)">
                  <Button variant="ghost">
                    <LucideEllipsis class="h-4 w-4" aria-hidden="true" />
                    <span class="sr-only"
                      >{{ section.label || 'Section' }} options</span
                    >
                  </Button>
                </Dropdown>
              </div>
            </div>

            <!-- Columns: can be dragged between sections -->
            <Draggable
              class="flex flex-col gap-2 sm:flex-row"
              :list="section.columns"
              group="columns"
              item-key="name"
              @start="dragging = true"
              @end="dragging = false"
              @change="emitChange"
            >
              <template #item="{ element: column }">
                <div
                  class="flex min-w-0 flex-1 cursor-grab flex-col gap-1.5 rounded border border-dashed border-outline-gray-2 bg-surface-modal p-2"
                >
                  <Draggable
                    :list="column.fields"
                    group="fields"
                    :item-key="entryName"
                    class="flex min-h-9 flex-1 flex-col gap-1.5"
                    handle=".field-drag-handle"
                    @start="dragging = true"
                    @end="dragging = false"
                    @change="emitChange"
                  >
                    <template #item="{ element: entry }">
                      <div
                        class="field flex cursor-auto items-center justify-between gap-2 rounded border bg-surface-modal px-2.5 py-2 text-base leading-4 text-ink-gray-8"
                        :class="
                          entry.hidden
                            ? 'border-dashed border-outline-gray-2 opacity-70'
                            : 'border-outline-gray-2'
                        "
                      >
                        <div class="flex min-w-0 items-center gap-2">
                          <LucideGripVertical
                            class="field-drag-handle h-3.5 w-3.5 shrink-0 cursor-grab text-ink-gray-4"
                          />
                          <button
                            type="button"
                            class="min-w-0 text-left focus:outline-none focus-visible:underline"
                            :title="`${entryName(entry)} · ${meta[entryName(entry)]?.fieldtype || ''}`"
                            @click="openSettings(column, entry)"
                          >
                            <span class="block truncate">{{
                              entryLabel(entry)
                            }}</span>
                            <span
                              v-if="badges(entry).length"
                              class="mt-1 flex flex-wrap gap-1"
                            >
                              <span
                                v-for="badge in badges(entry)"
                                :key="badge.label"
                                class="rounded px-1 text-[11px] leading-4"
                                :class="badge.class"
                              >
                                {{ badge.label }}
                              </span>
                            </span>
                          </button>
                        </div>
                        <div class="flex shrink-0 items-center">
                          <button
                            type="button"
                            class="grid h-6 w-6 place-items-center rounded text-ink-gray-5 hover:bg-surface-gray-3 hover:text-ink-gray-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3"
                            :aria-label="`${entryLabel(entry)} settings`"
                            @click="openSettings(column, entry)"
                          >
                            <LucideSettings2 class="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            class="grid h-6 w-6 place-items-center rounded text-ink-gray-5 hover:bg-surface-gray-3 hover:text-ink-gray-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3"
                            :aria-label="`Remove ${entryLabel(entry)}`"
                            @click="removeEntry(column, entry)"
                          >
                            <LucideX class="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </template>
                  </Draggable>

                  <Autocomplete
                    :options="availableFields"
                    :model-value="null"
                    placeholder="Search fields"
                    body-classes="w-[var(--reka-popover-trigger-width)] min-w-60"
                    @update:model-value="(option) => addField(column, option)"
                  >
                    <template #target="{ togglePopover }">
                      <Button
                        class="w-full !bg-surface-modal"
                        variant="outline"
                        @click="togglePopover()"
                      >
                        <template #prefix
                          ><LucidePlus class="h-4 w-4"
                        /></template>
                        Add field
                      </Button>
                    </template>
                  </Autocomplete>
                </div>
              </template>
            </Draggable>
          </div>
        </template>
        <template #footer>
          <div
            v-if="!tab.sections.length"
            class="pointer-events-none flex min-h-20 select-none items-center justify-center text-sm text-ink-gray-4"
          >
            Drag a section or a field here to get started
          </div>
        </template>
      </Draggable>

      <Button class="mt-5 h-8 w-full" variant="subtle" @click="addSection(tab)">
        <template #prefix><LucidePlus class="h-4 w-4" /></template>
        Add section
      </Button>
    </div>

    <FieldSettings
      v-model="settings.open"
      :field="settings.entry ? meta[entryName(settings.entry)] : null"
      :override="settings.entry ? overridesOf(settings.entry) : {}"
      @apply="applySettings"
    />
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue'
import Draggable from 'vuedraggable'
import { Autocomplete, Button, Dropdown, confirmDialog } from 'frappe-ui'
import LucidePlus from '~icons/lucide/plus'
import LucideX from '~icons/lucide/x'
import LucideEllipsis from '~icons/lucide/ellipsis'
import LucideGripVertical from '~icons/lucide/grip-vertical'
import LucideChevronDown from '~icons/lucide/chevron-down'
import LucideEyeOff from '~icons/lucide/eye-off'
import LucideSettings2 from '~icons/lucide/settings-2'
import FieldSettings from '@/components/layout-editor/FieldSettings.vue'

// Tabs in the Antpos Fields Layout format (ant_pos/api/form_layout.py):
// tabs -> sections -> columns -> fields, where a field is a fieldname or
// { fieldname, ...overrides }.
const tabs = defineModel({ type: Array, default: () => [] })
const props = defineProps({
  // [{ fieldname, label, fieldtype, reqd, read_only, default }]
  fields: { type: Array, required: true },
})

const MAX_COLUMNS = 4
const vFocus = { mounted: (el) => el.focus() }

const meta = computed(() =>
  Object.fromEntries(props.fields.map((f) => [f.fieldname, f])),
)
const tabIndex = ref(0)
const dragging = ref(false)
const editing = ref(null)

const random = () => Math.random().toString(36).slice(2, 8)
const newColumn = () => ({ name: `column_${random()}`, fields: [] })
const newSection = (columns = [newColumn()]) => ({
  name: `section_${random()}`,
  label: '',
  opened: true,
  collapsible: false,
  hideLabel: false,
  hideBorder: false,
  columns,
})

// vuedraggable mutates the arrays in place; tell the parent about it.
function emitChange() {
  tabs.value = [...tabs.value]
}

watch(
  () => tabs.value.length,
  (n) => {
    if (tabIndex.value >= n) tabIndex.value = Math.max(n - 1, 0)
  },
)

// ---- fields ----------------------------------------------------------------

const entryName = (entry) =>
  typeof entry === 'string' ? entry : entry.fieldname
const overridesOf = (entry) => {
  if (typeof entry === 'string') return {}
  const { fieldname, ...rest } = entry
  return rest
}
const entryLabel = (entry) =>
  overridesOf(entry).label ||
  meta.value[entryName(entry)]?.label ||
  entryName(entry)

function badges(entry) {
  const f = meta.value[entryName(entry)] || {}
  const o = overridesOf(entry)
  const list = []
  if (o.reqd || f.reqd)
    list.push({ label: 'Required', class: 'bg-surface-red-1 text-ink-red-4' })
  if (o.read_only || f.read_only)
    list.push({
      label: 'Read only',
      class: 'bg-surface-gray-3 text-ink-gray-6',
    })
  if (o.hidden)
    list.push({ label: 'Hidden', class: 'bg-surface-amber-1 text-ink-amber-3' })
  if (o.default !== undefined && o.default !== '')
    list.push({
      label: `= ${o.default}`,
      class: 'bg-surface-blue-1 text-ink-blue-3',
    })
  return list
}

const usedFields = computed(() => {
  const used = new Set()
  for (const tab of tabs.value)
    for (const section of tab.sections)
      for (const column of section.columns)
        for (const entry of column.fields) used.add(entryName(entry))
  return used
})

const availableFields = computed(() =>
  props.fields
    .filter((f) => !usedFields.value.has(f.fieldname))
    .map((f) => ({
      label: f.reqd ? `${f.label} *` : f.label,
      value: f.fieldname,
      description: `${f.fieldname} · ${f.fieldtype}`,
    })),
)

function addField(column, option) {
  if (!option?.value || usedFields.value.has(option.value)) return
  column.fields.push(option.value)
  emitChange()
}

function removeEntry(column, entry) {
  column.fields.splice(column.fields.indexOf(entry), 1)
  emitChange()
}

const settings = reactive({ open: false, column: null, entry: null })
function openSettings(column, entry) {
  Object.assign(settings, { open: true, column, entry })
}
function applySettings(next) {
  const { column, entry } = settings
  const index = column.fields.indexOf(entry)
  if (index === -1) return
  const fieldname = entryName(entry)
  column.fields.splice(
    index,
    1,
    Object.keys(next).length ? { fieldname, ...next } : fieldname,
  )
  emitChange()
}

// ---- tabs and sections -----------------------------------------------------

function startEditing(item) {
  editing.value = item.name
}
function stopEditing() {
  editing.value = null
  emitChange()
}

function countFields(section) {
  return section.columns.reduce((n, c) => n + c.fields.length, 0)
}

function addTab() {
  // A single unlabelled tab means "no tabs"; naming it creates the tab bar.
  if (tabs.value.length === 1 && !tabs.value[0].label) {
    tabs.value[0].label = 'Details'
  } else {
    tabs.value.push({ name: `tab_${random()}`, label: 'New tab', sections: [] })
  }
  tabIndex.value = tabs.value.length - 1
  editing.value = tabs.value[tabIndex.value].name
  emitChange()
}

function addSection(tab) {
  tab.sections.push(newSection())
  emitChange()
}

// Something dropped on an empty tab: wrap it in a section.
function onDroppedIntoEmptyTab(tab) {
  const dropped = tab.sections[0]
  if (!dropped || Array.isArray(dropped.columns)) return
  tab.sections.splice(0, 1)
  const columns = dropped.fields
    ? [dropped]
    : [{ ...newColumn(), fields: [dropped] }]
  tab.sections.push(newSection(columns))
  emitChange()
}

function confirmThen(title, message, action) {
  confirmDialog({
    title,
    message,
    onConfirm: ({ hideDialog }) => {
      action()
      hideDialog()
    },
  })
}

function tabOptions(tab, i) {
  return [
    { label: 'Rename', icon: 'edit', onClick: () => startEditing(tab) },
    {
      label: 'Remove tab',
      icon: 'trash-2',
      onClick: () => {
        if (tabs.value.length === 1) {
          tab.label = ''
          return emitChange()
        }
        confirmThen(
          'Remove tab',
          'Remove this tab and everything in it?',
          () => {
            tabs.value.splice(i, 1)
            emitChange()
          },
        )
      },
    },
  ]
}

function sectionOptions(tab, section, s, t) {
  const last = section.columns[section.columns.length - 1]
  const toggle = (key) => () => {
    section[key] = !section[key]
    emitChange()
  }
  const moveSection = (target) => () => {
    target.sections.push(section)
    tab.sections.splice(tab.sections.indexOf(section), 1)
    tabIndex.value = tabs.value.indexOf(target)
    emitChange()
  }
  return [
    {
      group: 'Section',
      items: [
        { label: 'Rename', icon: 'edit', onClick: () => startEditing(section) },
        {
          label: section.collapsible ? 'Not collapsible' : 'Collapsible',
          icon: section.collapsible ? 'chevron-up' : 'chevron-down',
          onClick: toggle('collapsible'),
        },
        {
          label: section.hideLabel ? 'Show label' : 'Hide label',
          icon: section.hideLabel ? 'eye' : 'eye-off',
          onClick: toggle('hideLabel'),
        },
        {
          label: section.hideBorder ? 'Show border' : 'Hide border',
          icon: 'minus',
          onClick: toggle('hideBorder'),
        },
        {
          label: 'Remove section',
          icon: 'trash-2',
          onClick: () => {
            const remove = () => {
              tab.sections.splice(tab.sections.indexOf(section), 1)
              emitChange()
            }
            if (countFields(section))
              confirmThen(
                'Remove section',
                'This section has fields. Remove it anyway?',
                remove,
              )
            else remove()
          },
        },
        {
          label: `Remove and move columns to ${s === 0 ? 'next' : 'previous'} section`,
          icon: 'trash-2',
          condition: () => tab.sections.length > 1,
          onClick: () => {
            const target = tab.sections[s === 0 ? s + 1 : s - 1]
            target.columns =
              s === 0
                ? [...section.columns, ...target.columns]
                : [...target.columns, ...section.columns]
            tab.sections.splice(s, 1)
            emitChange()
          },
        },
        {
          label: 'Move to previous tab',
          icon: 'corner-up-left',
          condition: () => t > 0,
          onClick: moveSection(tabs.value[t - 1]),
        },
        {
          label: 'Move to next tab',
          icon: 'corner-up-right',
          condition: () => t < tabs.value.length - 1,
          onClick: moveSection(tabs.value[t + 1]),
        },
      ],
    },
    {
      group: 'Column',
      items: [
        {
          label: 'Add column',
          icon: 'columns',
          condition: () => section.columns.length < MAX_COLUMNS,
          onClick: () => {
            section.columns.push(newColumn())
            emitChange()
          },
        },
        {
          label: 'Remove last column',
          icon: 'trash-2',
          condition: () => section.columns.length > 1,
          onClick: () => {
            const remove = () => {
              section.columns.pop()
              emitChange()
            }
            if (last.fields.length)
              confirmThen(
                'Remove column',
                'This column has fields. Remove it anyway?',
                remove,
              )
            else remove()
          },
        },
        {
          label: 'Remove last column (move fields to previous)',
          icon: 'trash-2',
          condition: () => section.columns.length > 1 && last.fields.length > 0,
          onClick: () => {
            const previous = section.columns[section.columns.length - 2]
            previous.fields = [...previous.fields, ...last.fields]
            section.columns.pop()
            emitChange()
          },
        },
        {
          label: 'Move last column to next section',
          icon: 'corner-up-right',
          condition: () =>
            s < tab.sections.length - 1 && section.columns.length > 1,
          onClick: () => {
            tab.sections[s + 1].columns.push(section.columns.pop())
            emitChange()
          },
        },
        {
          label: 'Move last column to previous section',
          icon: 'corner-up-left',
          condition: () => s > 0 && section.columns.length > 1,
          onClick: () => {
            tab.sections[s - 1].columns.push(section.columns.pop())
            emitChange()
          },
        },
      ],
    },
  ]
}
</script>
