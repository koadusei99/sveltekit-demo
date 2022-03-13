<script>
	import { goto } from '$app/navigation';

	import { onMount } from 'svelte';
	import { snippets, token, user } from '../../stores/stores.js';

	onMount(() => {
		if ($token < Date.now()) {
			alert('Session expired');
			goto('/signin');
		}
	});

	let snippet = '';

	const postSnippet = () => {
		$snippets = [
			...$snippets,
			{
				id: `${Date.now()}${Math.random()}`,
				snippet,
				author: $user.username,
				created_at: Date.now()
			}
		];
		snippet = '';
	};
</script>

<section>
	<div>
		<textarea name="" id="" placeholder=" What's clacking?" bind:value={snippet} />
		<button on:click={postSnippet}>Post</button>
	</div>
	<div>
		<h2>Feed</h2>
		<ul>
			{#each $snippets as snippet}
				<li class="snippet">
					<a href={`/snippets/${snippet.id}`}
						><pre>{snippet.snippet}</pre>
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
