<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { snippets } from '../../stores/stores.js';

	let snippet = {};

	onMount(() => {
		snippet = $snippets.find((snip) => snip.id === $page.params.id);
	});
</script>

<div class="snippet">
	{#if snippet}
		<pre>{snippet.snippet}</pre>
		<div>
			<p>by:{snippet.author}</p>
			<p>at:{new Date(snippet.created_at).toDateString()}</p>
		</div>
	{:else}
		<p>Snippet not found</p>
	{/if}
</div>
