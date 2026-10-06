import './index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import translationPlugin from './translation'
import { useDynamicComponent } from './utils/Dialog'
import { handleStaleBuild, isStaleBuildError } from './utils/staleBuild'
import mitt from 'mitt'
import { withLoginRedirect } from './utils/login'
import './utils/pwaInstall'

import { Button, setConfig, frappeRequest, resourcesPlugin } from 'frappe-ui'

const app = createApp(App)

const emitter = mitt()

const pinia = createPinia()

setConfig('resourceFetcher', withLoginRedirect(frappeRequest))

app.use(router)
app.use(resourcesPlugin)
app.use(translationPlugin)

app.component('Button', Button)

app.use(pinia)

app.provide('dynamicComponent', useDynamicComponent())

// Provide emitter it globally
app.provide('emitter', emitter)

app.mount('#app')

// A lazily loaded page or dialog whose file is gone means this tab predates
// the current build (see utils/staleBuild.js). Vite reports failed preloads
// here; the router reports failed page loads through onError.
// The event is not cancelled, so the import still rejects and the caller's
// own error handling runs as before.
window.addEventListener('vite:preloadError', () => handleStaleBuild())
router.onError((error) => {
  if (isStaleBuildError(error)) handleStaleBuild()
})
// Service worker: makes antPOS installable and lets the installed app open
// without a network. Frappe serves it at /antPOS/sw.js (ant_pos/pwa.py) so it
// can control the app. If registration fails the app still works normally, so
// there is nothing to surface to the cashier.
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    // Earlier releases registered the worker from /assets/ant_pos/antPOS/sw.js
    // with scope '/antPOS/'. That narrower scope would keep winning over the new
    // one, and it served the unrendered page, so drop it.
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        const worker =
          registration.active || registration.waiting || registration.installing
        if (worker && new URL(worker.scriptURL).pathname !== '/antPOS/sw.js') {
          registration.unregister()
        }
      }
    })
    navigator.serviceWorker
      .register('/antPOS/sw.js', { scope: '/antPOS' })
      .catch((error) => {
        console.info('antPOS: service worker unavailable -', error.message)
      })
  })
}
