import { ref, computed, onMounted, onUnmounted } from 'vue'

// Single source of truth for the layout split (issue #19). Tailwind's `lg` is
// 1024px; a POS below that is a handheld and needs the stacked layout, not a
// squeezed two-pane one.
const DESKTOP_MIN_WIDTH = 1024

const width = ref(
  typeof window !== 'undefined' ? window.innerWidth : DESKTOP_MIN_WIDTH,
)

let listeners = 0
let onResize = null

export function useBreakpoint() {
  onMounted(() => {
    if (listeners === 0) {
      onResize = () => {
        width.value = window.innerWidth
      }
      window.addEventListener('resize', onResize, { passive: true })
      onResize()
    }
    listeners += 1
  })

  onUnmounted(() => {
    listeners -= 1
    if (listeners === 0 && onResize) {
      window.removeEventListener('resize', onResize)
      onResize = null
    }
  })

  return {
    width,
    isDesktop: computed(() => width.value >= DESKTOP_MIN_WIDTH),
    isMobile: computed(() => width.value < DESKTOP_MIN_WIDTH),
  }
}
