<script>
	import '../styles/global.css';
	import { onMount } from 'svelte';
	import { session } from '../stores/stores.js';
	import Sidebar from '$lib/sidebar.svelte';
	import Landing from '$lib/landing.svelte';
	import routes from '$lib/config/routes.js';

	let auth = false;
	onMount(() => {
		if ($session.expireAt > Date.now()) {
			auth = true;
		}
	});
</script>

<section>
	{#if auth}
		<section class="main">
			<div class="sidebar"><Sidebar /></div>
			<div>
				<slot />
			</div>
		</section>
	{:else}
		<section>
			<Landing />
			<div>
				<a class="link" href={`/${routes.login}`}>Login</a>
				<a class="link" href={`/${routes.signup}`}>Create Account</a>
			</div>
		</section>
	{/if}
</section>

<style>
	.main {
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
