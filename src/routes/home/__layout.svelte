<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { token } from '../../stores/stores.js';
	import Sidebar from '$lib/sidebar.svelte';

	onMount(() => {
		if ($token < Date.now()) {
			alert('Session expired');
			goto('/signin');
		}
	});
</script>

<section>
	<div class="sidebar"><Sidebar /></div>
	<main class="main">
		<slot />
	</main>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 200px auto;
	}
	.sidebar {
		min-height: 100vh;
		border-right: 1px solid grey;
	}
	.main {
		padding: 1rem;
	}
</style>
