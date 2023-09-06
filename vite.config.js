import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import bundleAnalyzer from "rollup-plugin-bundle-analyzer";

// 获取执行时的参数 --report, 用于打包分析
const npm_lifecycle_script = process.env.npm_lifecycle_script ;
const isReport = npm_lifecycle_script.indexOf('--report') > -1;

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte(), isReport? bundleAnalyzer(): null],

	build: {
		rollupOptions: {
			output: {
				// Pack router, i18n and other libraries into the thunk file separately
				manualChunks: {
					thunk: ['svelte-i18n', 'svelte-spa-router']
				},
			},
			// 开启tree shaking
			treeshake: true
			// external: ['svelte-i18n', 'svelte-spa-router'],
		}
	}
});
