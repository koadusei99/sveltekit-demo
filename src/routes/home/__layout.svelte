<script>
	import Sidebar from '$lib/sidebar.svelte';
	import '../../styles/global.css';
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
