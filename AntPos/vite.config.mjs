import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import frappeui from 'frappe-ui/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    frappeui({
      frappeProxy: true,
      lucideIcons: true,
      jinjaBootData: true,
      buildConfig: {
        indexHtmlPath: '../ant_pos/www/antPOS.html',
        outDir: '../ant_pos/public/antPOS',
        emptyOutDir: true,
        // Never ship maps: the build output is served publicly from
        // /assets/ant_pos/antPOS/. Use 'hidden' + an error tracker if you need them.
        sourcemap: false,
      },
    }),
    vue(),
    vueJsx(),
    VitePWA({
      registerType: 'autoUpdate',
      // Registered by hand in src/main.js.
      injectRegister: false,
      devOptions: {
        enabled: true,
      },
      // The build writes sw.js to /assets/ant_pos/antPOS/, but the app runs at
      // /antPOS, which a worker served from there can never control. Frappe
      // serves the same file at /antPOS/sw.js with a Service-Worker-Allowed
      // header instead (ant_pos/pwa.py), so no web server config is needed.
      // No trailing slash: '/antPOS/' would leave /antPOS itself uncontrolled.
      scope: '/antPOS',
      // The manifest is a static file (public/manifest.webmanifest), linked from
      // index.html. A generated one would be precached by a relative URL, which
      // from /antPOS/sw.js resolves to /antPOS/manifest.webmanifest -- the POS page.
      manifest: false,
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        // The worker runs from /antPOS/sw.js, not from the build folder, so
        // anything it loads by relative URL would miss. Inline the Workbox
        // runtime and give precached files their real absolute URLs.
        inlineWorkboxRuntime: true,
        modifyURLPrefix: { '': '/assets/ant_pos/antPOS/' },
        // The built index.html is the unrendered Jinja template: served as-is it
        // has no boot data or CSRF token and the app cannot start. Pages always
        // come from the server instead (see runtimeCaching below).
        globIgnores: ['**/node_modules/**/*', 'index.html'],
        navigateFallback: null,
        runtimeCaching: [
          {
            urlPattern: ({ url }) =>
              url.origin === self.location.origin &&
              url.pathname.startsWith('/api/'),
            handler: 'NetworkOnly',
          },
          {
            // Always ask the server for the page. The last copy is kept only so
            // the installed app still opens when the network is down; it is
            // never used while the server answers, so its CSRF token stays
            // current.
            urlPattern: ({ request, url }) =>
              request.mode === 'navigate' &&
              url.origin === self.location.origin &&
              (url.pathname === '/antPOS' ||
                url.pathname.startsWith('/antPOS/')),
            handler: 'NetworkFirst',
            options: {
              cacheName: 'antpos-pages',
              expiration: { maxEntries: 1 },
              cacheableResponse: { statuses: [200] },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    // Vendor code changes far less often than app code; splitting it means a
    // release only invalidates the app chunk instead of all 2 MB.
    //
    // Only Vue core is split out: it depends on nothing else. frappe-ui must stay
    // in the same chunk as its own dependencies -- with frappe-ui 0.1.278 a
    // separate frappe-ui chunk and the general vendor chunk import each other,
    // and the app crashed at startup with "Cannot access '...' before
    // initialization".
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          // The camera scanner's decoder loads only when the camera is opened.
          if (/[\\/]node_modules[\\/](@zxing|ts-custom-error)[\\/]/.test(id))
            return
          // Rollup's CommonJS wrappers (e.g. for vuedraggable's require('vue'))
          // import helpers that live in `vendor`; keeping them out of
          // vendor-vue avoids a vendor <-> vendor-vue cycle, which broke
          // start-up with "Cannot access ... before initialization".
          const generated = id.startsWith('\0') || id.includes('?commonjs')
          if (
            !generated &&
            /[\\/]node_modules[\\/](vue|vue-router|pinia|@vue)[\\/]/.test(id)
          ) {
            return 'vendor-vue'
          }
          return 'vendor'
        },
      },
    },
  },
  optimizeDeps: {
    include: [
      'frappe-ui > feather-icons',
      'showdown',
      'engine.io-client',
      'tailwind.config.js',
      'prosemirror-state',
      'prosemirror-view',
      'lowlight',
      'interactjs',
    ],
  },
})
