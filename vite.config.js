import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import dotenv from 'dotenv'

dotenv.config()
//import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //vueDevTools(),
  ],
  base: '/Milena_Site_Vue_Pinia/',
  resolve: {
    alias: {
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@icons': fileURLToPath(new URL('./src/assets/icons', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/components/layouts', import.meta.url)),
      '@shared': fileURLToPath(new URL('./src/components/shared', import.meta.url)),
      '@ui': fileURLToPath(new URL('./src/components/ui', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
      '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
