<script>
	import { onMount } from 'svelte';
	import { fetchPokemon } from '../stores';
	export let searchTerm;
	export let inFocus;

	fetchPokemon(0, 1118, true);

	let input;

	onMount(() => {
		window.addEventListener('click', (e) => {
			if (
				e.target === input ||
				e.target === document.querySelector('.results-container') ||
				e.target === document.querySelector('pokemon-card')
			)
				handleFocus();
			else if (inFocus) handleBlur();
		});
	});

	const handleFocus = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		document.querySelector('[data-info="deck-container-wrapper"]').style.display = 'none';
		document.querySelector('[data-info="container"]').style.background = 'rgba(0, 0, 0, 0.4)';
		inFocus = true;
	};

	const handleBlur = () => {
		document.querySelector('[data-info="deck-container-wrapper"]').removeAttribute('style');
		document.querySelector('[data-info="container"]').removeAttribute('style');
		searchTerm = '';
		inFocus = false;
	};
</script>

<div class="search-container relative w-auto h-auto">
	<input
		data-info="search-pokemon"
		class="w-full rounded-md text-lg p-4 border-2 border-gray-200 outline-none z-[1000] relative focus:border-gray-600 duration-500"
		type="text"
		placeholder="Search Pokemon"
		bind:value={searchTerm}
		bind:this={input}
	/>
</div>
