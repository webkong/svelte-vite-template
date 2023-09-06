<script>
	import svelteLogo from "../assets/svelte.svg";
	import viteLogo from "/vite.svg";
	import Counter from "../components/Counter.svelte";
	import { push } from "svelte-spa-router";
	import { t } from "svelte-i18n";
	import user from "../stores/user";
	import { user as userStore } from "../stores/userStore";

	const changeUserName = () => {
		// user.set({
		// 	name: "test",
		// });
		user.update((v) => {
			v.name = "test";
			v.age = 18;
			return v;
		});
		userStore.setName("test123");
	};
	const initUserInfo = () => {
		userStore.setUserSync();
	};
</script>

<main>
	<div>
		<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
			<img src={viteLogo} class="logo" alt="Vite Logo" />
		</a>
		<a href="https://svelte.dev" target="_blank" rel="noreferrer">
			<img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
		</a>
	</div>
	<h1>Vite + Svelte</h1>
	<div class="store">
		<p>
			{$user.name},{$user.age} / {$userStore.name},{$userStore.age}
		</p>
		<button on:click={changeUserName}>Change User Name</button>
		<button on:click={()=>initUserInfo()}>Init User Info</button>
	</div>

	<div class="card">
		<Counter />
	</div>
	<div class="me">
		<button
			on:click={() => {
				push("/me");
			}}>Router test</button
		>
	</div>
	<p>
		Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer"
			>SvelteKit</a
		>, the official Svelte app framework powered by Vite!
	</p>

	<p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
	<p>{$t("title")}</p>
</main>
<div>111</div>

<!-- 忽略错误 -->
<style lang="scss">
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
		transition: filter 300ms;
		&:hover {
			filter: drop-shadow(0 0 2em #646cffaa);
		}
	}
	// .logo:hover {
	//   filter: drop-shadow(0 0 2em #646cffaa);
	// }
	.logo.svelte:hover {
		filter: drop-shadow(0 0 2em #ff3e00aa);
	}
	.read-the-docs {
		color: #888;
	}
</style>
