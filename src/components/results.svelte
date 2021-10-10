<script>
	import PokemonProfile from './pokemonProfile.svelte';
	export let filteredPokemon;
</script>

<div class="results-container grid gap-4 md:grid-cols-2 grid-cols-1 py-4 z-0 relative">
	{#each filteredPokemon as pokemon}
		<PokemonProfile {pokemon} />
	{/each}
</div>
