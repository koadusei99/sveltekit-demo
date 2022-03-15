<script>
	import { onMount } from 'svelte';
	import { user } from '../../stores/stores.js';
	import { snippets, fetchAll, addSnippet } from '../../stores/snippetStore.js';

	onMount(async () => {
		await fetchAll();
	});

	let newSnippet = { content: '', description: '' };

	const postSnippet = async () => {
		await addSnippet(newSnippet);
		// snippets.update((data) => [...data, newSnippet]);
		// $snippets = [
		// 	...$snippets,
		// 	{
		// 		id: `${Date.now()}${Math.random()}`,
		// 		snippet,
		// 		author: $user.username,
		// 		created_at: Date.now()
		// 	}
		// ];
		newSnippet = { content: '', description: '' };
	};
</script>

<section>
	<div>
		<textarea name="" id="" placeholder=" What's clacking?" bind:value={newSnippet.content} />
		<button on:click={postSnippet}>Post</button>
	</div>
	<div>
		<h2>Feed</h2>
		<ul>
			{#each $snippets as snippet}
				<li class="snippet">
					<a href={`/snippets/${snippet.id}`}
						><pre>{snippet.content}</pre>
						<div>
							<p>by:{snippet.author}</p>
							<p>at:{new Date(snippet.created_at).toDateString()}</p>
						</div></a
					>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	textarea {
		width: 100%;
		min-height: 100px;
	}
	ul {
		list-style: none;
	}
</style>
