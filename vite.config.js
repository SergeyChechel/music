import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Music App",
        theme_color: "#ff5e3a",
        icons: [
          {
            src: "assets/img/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          }
        ],
        "screenshots": [
          {
            src: "assets/img/pwa-1920x1080.jpg",
            sizes: "1920x1080",
            type: "image/jpeg",
            "form_factor": "wide"
          },
          {
            src: "assets/img/pwa-1238x930.png",
            sizes: "1238x930",
            type: "image/png"
          },
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,jpg,}"],
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
