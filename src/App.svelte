<script>
	import Router from "svelte-spa-router";
	import routes from "./router";
	import { isLoading } from "svelte-i18n";
</script>

<main>
	<!-- $isLoading 是为了等待i18n加载资源文件 -->
	{#if !$isLoading}
		<Router {routes} />
	{/if}
</main>

<style>
</style>
