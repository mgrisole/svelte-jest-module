<script lang="ts">
	import {foo} from "@core/utils"
	import {portal} from "svelte-portal/src/Portal.svelte";

	export let name: string;
</script>

<main>
	<h1>Hello {name} {foo()}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<div use:portal={"body"}>foo</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
