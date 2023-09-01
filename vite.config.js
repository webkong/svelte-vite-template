import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],

	build: {
		rollupOptions: {
			output: {
				// Pack router, i18n and other libraries into the thunk file separately
				manualChunks: {
					thunk: ['svelte-i18n', 'svelte-spa-router']
				}
			}
			// external: ['svelte-i18n', 'svelte-spa-router'],
		}
	}
});
