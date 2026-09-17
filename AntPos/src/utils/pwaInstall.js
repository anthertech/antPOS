// "Install app": uses the browser's install prompt when it offers one, and
// otherwise explains how to install. Imported from main.js so the prompt
// event, which can fire before the app mounts, is not missed.
import { reactive } from 'vue'
import { createToast } from '@/utils'

const standalone = () =>
  window.matchMedia?.('(display-mode: standalone)').matches ||
  window.navigator.standalone === true

export const pwa = reactive({
  installed: standalone(),
  canPrompt: false,
})

let deferred = null

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault()
  deferred = event
  pwa.canPrompt = true
})

window.addEventListener('appinstalled', () => {
  deferred = null
  pwa.canPrompt = false
  pwa.installed = true
})

const isIos = () =>
  /iphone|ipad|ipod/i.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

function explain() {
  let message
  if (!window.isSecureContext) {
    message = `Installing needs a secure address. Open antPOS over HTTPS (or on this computer at http://localhost:${window.location.port || 80}/antPOS).`
  } else if (isIos()) {
    message = 'In Safari, tap Share, then "Add to Home Screen".'
  } else {
    message =
      'Use the install icon in the address bar, or the browser menu: "Install antPOS" (Chrome: Cast, save and share → Install page as app).'
  }
  createToast({ title: 'Install antPOS', message, type: 'info', timeout: 10 })
}

export async function installApp() {
  if (!deferred) return explain()
  const prompt = deferred
  deferred = null
  pwa.canPrompt = false
  await prompt.prompt()
  const { outcome } = await prompt.userChoice
  if (outcome === 'accepted') pwa.installed = true
}
