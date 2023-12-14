import { defineConfig } from "vite";
import path from "path";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import bundleAnalyzer from "rollup-plugin-bundle-analyzer";
import postCssPxToRem from "postcss-pxtorem";
import autoprefixer from "autoprefixer";

// 获取执行时的参数 --report, 用于打包分析
const npm_lifecycle_script = process.env.npm_lifecycle_script;
const isReport = npm_lifecycle_script.indexOf("--report") > -1;

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte(), isReport ? bundleAnalyzer() : null],

	build: {
		rollupOptions: {
			output: {
				// Pack router, i18n and other libraries into the thunk file separately
				manualChunks: {
					thunk: ["svelte-i18n", "svelte-spa-router"]
				}
			},
			// 开启tree shaking
			treeshake: true
			// external: ['svelte-i18n', 'svelte-spa-router'],
		}
	},
	resolve: {
		alias: {
			"@": path.resolve("./src"),
			$components: path.resolve("./src/components"),
			$routes: path.resolve("./src/routes"),
			$stores: path.resolve("./src/stores")
		}
	},
	css: {
		postcss: {
			plugins: [
				postCssPxToRem({
					rootValue: 36, // 2倍图(720px)
					unitPrecision: 5,
					propList: ["*"],
					selectorBlackList: [],
					replace: true,
					mediaQuery: false,
					minPixelValue: 0,
					exclude: /node_modules/i
				}),
				autoprefixer()
			]
		},
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/common/scss/mixin.scss";`
			}
		}
	}
});
