import { defineStore } from 'pinia'
import { ref } from 'vue'

function readCollapsed() {
  try {
    return JSON.parse(localStorage.getItem('isSidebarCollapsed')) === true
  } catch {
    return false
  }
}

export const useSidebar = defineStore('sidebar', () => {
  // Narrow icon rail vs full sidebar on desktop. Persisted per browser; below
  // the desktop breakpoint the sidebar is always the rail.
  const isSidebarCollapsed = ref(readCollapsed())

  function toggleCollapsed() {
    isSidebarCollapsed.value = !isSidebarCollapsed.value
    try {
      localStorage.setItem(
        'isSidebarCollapsed',
        JSON.stringify(isSidebarCollapsed.value),
      )
    } catch {
      // storage unavailable (private mode); the toggle still works for this session
    }
  }

  return { isSidebarCollapsed, toggleCollapsed }
})
