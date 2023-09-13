<script>
	import { pop, push } from "svelte-spa-router";
	import user from "../stores/user";
	import meImage from "../assets/1.jpg";
	const goHome = () => {
		pop();
	};
</script>

<main>
	<div class="title">me page</div>
	<img src={meImage} alt="" srcset="">
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
<style>
	img {
		width: 100%;
	}
</style>