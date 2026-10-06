<template>
  <!-- A drag handle between two panes: drag to
       change the width of the pane beside it; double-click (or Enter)
       restores the default. The width is remembered on this device. -->
  <div
    ref="handle"
    role="separator"
    aria-orientation="vertical"
    :aria-label="label"
    :aria-valuenow="Math.round(width)"
    :aria-valuemin="min"
    :aria-valuemax="Math.round(currentMax())"
    tabindex="0"
    class="group relative w-3 shrink-0 cursor-col-resize touch-none select-none focus:outline-none"
    :title="`${label} — drag to resize, double-click to reset`"
    @pointerdown="start"
    @dblclick="reset"
    @keydown="onKey"
  >
    <span
      class="absolute inset-y-3 left-1/2 w-0.5 -translate-x-1/2 rounded-full transition-colors"
      :class="
        dragging
          ? 'bg-outline-gray-5'
          : 'bg-transparent group-hover:bg-outline-gray-3 group-focus-visible:bg-outline-gray-4'
      "
    />
    <span
      class="absolute left-1/2 top-1/2 flex h-8 w-1.5 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-0.5 rounded-full opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
      :class="dragging ? 'opacity-100' : ''"
      aria-hidden="true"
    >
      <span
        v-for="n in 3"
        :key="n"
        class="h-0.5 w-0.5 rounded-full bg-ink-gray-5"
      />
    </span>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const width = defineModel({ type: Number, required: true })
const props = defineProps({
  // Remembers the width under this name (localStorage, per device).
  storageKey: { type: String, required: true },
  // The pane being resized is on this side of the handle.
  side: {
    type: String,
    default: 'left',
    validator: (v) => ['left', 'right'].includes(v),
  },
  // Width to start with and to restore; a function gets the container width.
  default: { type: [Number, Function], required: true },
  min: { type: Number, default: 260 },
  max: { type: Number, default: 900 },
  // Space the pane on the other side must keep.
  minOther: { type: Number, default: 360 },
  label: { type: String, default: 'Resize panel' },
})
const emit = defineEmits(['resized'])

const STORAGE_PREFIX = 'antpos:pane:'
const SNAP = 10
const handle = ref(null)
const dragging = ref(false)

const containerWidth = () =>
  handle.value?.parentElement?.clientWidth || window.innerWidth
const defaultWidth = () =>
  typeof props.default === 'function'
    ? props.default(containerWidth())
    : props.default
// Container padding (24px) and this handle (12px) are not pane space.
const currentMax = () =>
  Math.max(
    props.min,
    Math.min(props.max, containerWidth() - props.minOther - 36),
  )
const clamp = (w) => Math.round(Math.min(Math.max(w, props.min), currentMax()))

function save() {
  try {
    localStorage.setItem(STORAGE_PREFIX + props.storageKey, String(width.value))
  } catch {
    // Private mode or storage blocked: the width just is not remembered.
  }
  emit('resized', width.value)
}

onMounted(() => {
  let stored
  try {
    stored =
      Number(localStorage.getItem(STORAGE_PREFIX + props.storageKey)) || null
  } catch {
    stored = null
  }
  width.value = clamp(stored ?? defaultWidth())
  window.addEventListener('resize', fit, { passive: true })
})
onUnmounted(() => window.removeEventListener('resize', fit))

// A smaller window must still leave room for the other pane.
function fit() {
  width.value = clamp(width.value)
}

let startX = 0
let startWidth = 0
function start(event) {
  if (event.button !== undefined && event.button !== 0) return
  event.preventDefault()
  startX = event.clientX
  startWidth = width.value
  dragging.value = true
  handle.value.setPointerCapture?.(event.pointerId)
  handle.value.addEventListener('pointermove', move)
  handle.value.addEventListener('pointerup', stop, { once: true })
  handle.value.addEventListener('pointercancel', stop, { once: true })
  document.body.classList.add('cursor-col-resize', 'select-none')
}

function move(event) {
  const delta = event.clientX - startX
  let next = props.side === 'left' ? startWidth + delta : startWidth - delta
  // Snap back to the default when close to it.
  const d = defaultWidth()
  if (Math.abs(next - d) < SNAP) next = d
  width.value = clamp(next)
}

function stop() {
  dragging.value = false
  handle.value?.removeEventListener('pointermove', move)
  document.body.classList.remove('cursor-col-resize', 'select-none')
  save()
}

function reset() {
  width.value = clamp(defaultWidth())
  save()
}

function onKey(event) {
  const step = event.shiftKey ? 64 : 16
  const grow = props.side === 'left' ? 'ArrowRight' : 'ArrowLeft'
  const shrink = props.side === 'left' ? 'ArrowLeft' : 'ArrowRight'
  let next = null
  if (event.key === grow) next = width.value + step
  else if (event.key === shrink) next = width.value - step
  else if (event.key === 'Home') next = props.min
  else if (event.key === 'End') next = currentMax()
  else if (event.key === 'Enter') return reset()
  if (next === null) return
  event.preventDefault()
  width.value = clamp(next)
  save()
}

defineExpose({ reset })
</script>
