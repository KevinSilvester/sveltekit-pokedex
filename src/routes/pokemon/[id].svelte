<script context="module">
	export const load = async (ctx) => {
		const id = ctx.page.params.id;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const pokemon = await res.json();
		return { props: { pokemon } };
	};
</script>

<script>
	export let pokemon;
	import Header from '../../components/header.svelte';
	import Carousel from '../../components/carousel.svelte';
	import Loader from '../../components/loader.svelte';
</script>

{#if pokemon === null || pokemon === undefined}
	<Loader
		fillColor="rgb(209, 213, 219)"
		classes="h-40 absolute"
		styles="top: 50%; left: 50%; transform: translate(-50%, 20%)"
	/>
{:else}
	<Header>{pokemon.name}</Header>

	<div class="container-inner flex-col md:flex-row">
		<Carousel {pokemon} />

		<div class="stats">
			{#each pokemon.stats as stat}
				<p><span class="stat-name">{stat.stat.name.toUpperCase()}:</span> {stat.base_stat}</p>
			{/each}
			<p><span class="stat-name">WEIGHT:</span> {pokemon.weight}</p>
		</div>
	</div>
{/if}
