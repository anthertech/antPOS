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
        indexHtmlPath: '../ant_pos/www/ant_pos.html',
        emptyOutDir: true,
        sourcemap: true,
      },
    }),
    vue(),
    vueJsx(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'AntPos',
        short_name: 'AntPos',
        start_url: '/ant_pos',
        display: 'standalone',
        description: 'POS system powered by Frappe',
        icons: [
          {
            src: '/assets/ant_pos/manifest/manifest-icon-192.maskable.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/assets/ant_pos/manifest/manifest-icon-192.maskable.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/assets/ant_pos/manifest/manifest-icon-512.maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/assets/ant_pos/manifest/manifest-icon-512.maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
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
    outDir: `../${path.basename(path.resolve('..'))}/public/AntPos`,
    emptyOutDir: true,
    target: 'es2015',
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
    ],
  },
})
