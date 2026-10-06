<template>
  <!-- Full-screen camera for scanning barcodes and QR codes. It stays open so
       several items can be scanned in a row; Done closes it. -->
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 flex flex-col bg-black text-white"
      role="dialog"
      aria-modal="true"
      aria-label="Scan with camera"
      @keydown.esc="close"
    >
      <div
        class="flex items-center justify-between px-4 pb-3"
        style="padding-top: calc(0.75rem + env(safe-area-inset-top))"
      >
        <h2 class="text-base font-semibold">Scan with camera</h2>
        <button
          v-if="torchAvailable"
          type="button"
          class="grid h-10 w-10 place-items-center rounded-full bg-white/10 active:bg-white/20"
          :aria-label="torchOn ? 'Turn light off' : 'Turn light on'"
          :aria-pressed="torchOn"
          @click="toggleTorch"
        >
          <LucideFlashlightOff v-if="torchOn" class="h-5 w-5" />
          <LucideFlashlight v-else class="h-5 w-5" />
        </button>
      </div>

      <div class="relative min-h-0 flex-1 overflow-hidden">
        <video
          ref="video"
          class="absolute inset-0 h-full w-full object-cover"
          autoplay
          muted
          playsinline
        />
        <!-- Aiming frame -->
        <div
          v-if="state === 'scanning'"
          class="pointer-events-none absolute inset-0 grid place-items-center"
          aria-hidden="true"
        >
          <div
            class="relative aspect-square w-[70vw] max-w-72 rounded-2xl shadow-[0_0_0_9999px_rgba(0,0,0,0.45)]"
            :class="flash ? 'ring-4 ring-green-400' : 'ring-2 ring-white/80'"
          >
            <div
              class="absolute inset-x-4 top-1/2 h-0.5 -translate-y-1/2 bg-red-500/80"
            />
          </div>
        </div>

        <div
          v-if="state !== 'scanning'"
          class="absolute inset-0 grid place-items-center p-8 text-center"
        >
          <div>
            <LucideCamera class="mx-auto h-10 w-10 text-white/60" />
            <p class="mt-3 text-sm leading-relaxed text-white/80" role="status">
              {{ state === 'starting' ? 'Starting camera…' : error }}
            </p>
            <button
              v-if="state === 'error'"
              type="button"
              class="mt-4 rounded-md bg-white/15 px-4 py-2 text-sm font-medium active:bg-white/25"
              @click="start"
            >
              Try again
            </button>
          </div>
        </div>
      </div>

      <div
        class="space-y-3 px-4 pt-3"
        style="padding-bottom: calc(0.75rem + env(safe-area-inset-bottom))"
      >
        <p class="min-h-5 truncate text-center text-sm" aria-live="polite">
          <template v-if="lastCode">
            Scanned <span class="num font-medium">{{ lastCode }}</span>
            <span v-if="count > 1" class="text-white/60">
              · {{ count }} scans</span
            >
          </template>
          <span v-else class="text-white/60">
            Point the camera at a barcode or QR code
          </span>
        </p>
        <button
          type="button"
          class="h-12 w-full rounded-md bg-white text-lg font-semibold text-black active:bg-white/80"
          @click="close"
        >
          Done
        </button>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import LucideCamera from '~icons/lucide/camera'
import LucideFlashlight from '~icons/lucide/flashlight'
import LucideFlashlightOff from '~icons/lucide/flashlight-off'
import { cameraErrorMessage, startScanner } from '@/utils/barcodeScanner'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
})
const emit = defineEmits(['update:modelValue', 'scan'])

// The same code read again within this window is the same item still in view.
const REPEAT_MS = 2000

const video = ref(null)
const state = ref('starting') // starting | scanning | error
const error = ref('')
const lastCode = ref('')
const count = ref(0)
const flash = ref(false)
const torchAvailable = ref(false)
const torchOn = ref(false)

let scanner = null
let lastSeen = { code: '', at: 0 }
let run = 0

function onCode(code) {
  const text = String(code || '').trim()
  if (!text) return
  const now = Date.now()
  if (text === lastSeen.code && now - lastSeen.at < REPEAT_MS) {
    lastSeen.at = now
    return
  }
  lastSeen = { code: text, at: now }
  lastCode.value = text
  count.value += 1
  flash.value = true
  setTimeout(() => (flash.value = false), 300)
  navigator.vibrate?.(60)
  emit('scan', text)
}

async function start() {
  const current = ++run
  stop()
  state.value = 'starting'
  error.value = ''
  await nextTick()
  try {
    const started = await startScanner(video.value, onCode)
    if (current !== run || !props.modelValue) {
      started.stop()
      return
    }
    scanner = started
    const caps = started.track?.getCapabilities?.() || {}
    torchAvailable.value = Boolean(caps.torch)
    state.value = 'scanning'
  } catch (e) {
    if (current !== run) return
    error.value = cameraErrorMessage(e)
    state.value = 'error'
  }
}

function stop() {
  scanner?.stop()
  scanner = null
  torchOn.value = false
  torchAvailable.value = false
}

async function toggleTorch() {
  const track = scanner?.track
  if (!track) return
  try {
    await track.applyConstraints({ advanced: [{ torch: !torchOn.value }] })
    torchOn.value = !torchOn.value
  } catch {
    torchAvailable.value = false
  }
}

function close() {
  emit('update:modelValue', false)
}

watch(
  () => props.modelValue,
  (open) => {
    if (open) {
      lastCode.value = ''
      count.value = 0
      lastSeen = { code: '', at: 0 }
      start()
    } else {
      run++
      stop()
    }
  },
  { immediate: true },
)

// The camera must not keep running in a background tab.
function onVisibility() {
  if (!props.modelValue) return
  if (document.hidden) {
    run++
    stop()
  } else if (!scanner) {
    start()
  }
}
document.addEventListener('visibilitychange', onVisibility)

onBeforeUnmount(() => {
  document.removeEventListener('visibilitychange', onVisibility)
  run++
  stop()
})
</script>
