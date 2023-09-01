import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  
  build: {
    rollupOptions: {
      output: {
        // 将 router, i18n等类库单独打包到thunk文件中
        manualChunks: {
          'thunk': ['svelte-i18n', 'svelte-spa-router'],
        }
      },
      // external: ['svelte-i18n', 'svelte-spa-router'],
    }
  }
})
