import { defineStore } from 'pinia'
import { ref } from 'vue'

// Which screen the phone layout shows. Desktop ignores this.
export const useMobileView = defineStore('mobileView', () => {
  // 'items' (browse and scan) or 'cart' (review, edit, pay). Payment is driven
  // by the invoice itself, not by this flag.
  const view = ref('items')
  const moreOpen = ref(false)

  const showItems = () => (view.value = 'items')
  const showCart = () => (view.value = 'cart')

  return { view, moreOpen, showItems, showCart }
})
