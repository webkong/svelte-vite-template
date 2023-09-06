<script>
	import { pop, push } from "svelte-spa-router";
	import user from "../stores/user";
	const goHome = () => {
		pop();
	};
</script>

<main>
	<div class="title">me page</div>
	<div class="store">
		<p>
			{$user.name},{$user.age}
		</p>
	</div>
	<button
		on:click={() => {
			push("/");
		}}>Go Home</button
	>
	<button on:click={goHome}>回到首页</button>
</main>
