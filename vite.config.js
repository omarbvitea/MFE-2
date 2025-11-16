import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'mf2',
      filename: 'remoteEntry.js',
      exposes: {
        './Card': './src/components/Card.vue',
        './MicroApp': './src/components/MicroApp.vue',
      },
      shared: ['vue']
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 5002
  },
  preview: {
    port: 5002
  }
})
