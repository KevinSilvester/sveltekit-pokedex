<script>
	export let pokemon;
	import Button from './button.svelte';
	let image_index = 0;
	let x_pos;

	$: {
		x_pos = image_index * -100;
	}

	const image_list = [
		pokemon.sprites.front_default,
		pokemon.sprites.back_default,
		pokemon.sprites.other.dream_world.front_default
	];

	const image_set = image_list.filter((image) => image !== null);
</script>

<div class="carousel">
	<div
		class="carousel-wrapper rounded-lg border-2 border-gray-500"
		style="grid-template-columns: {'100% '.repeat(image_set.length)};"
	>
		{#if image_set.length > 0}
			{#each image_set as image, i}
				<div
					class="img bg-gray-100 duration-500"
					style="transform: translateX({x_pos}%)"
					aria-label="{i + 1}/{image_set.length}"
				>
					<img class=" h-48" src={image} alt={pokemon.name} />
				</div>
			{/each}
		{:else}
			<div class="img bg-gray-100 duration-500" aria-label="1/1">
				<img
					class=" h-48 image-error"
					src="https://dc624.4shared.com/img/SxBqq7bhiq/s24/17a493770c0/404_image_not_found?async&rand=0.49766338443589575"
					alt="no image found"
				/>
			</div>
		{/if}
	</div>

	<Button tag="prev" bind:image_index max={image_set.length - 1} length={image_set.length}>
		<i slot="icon" class="fas fa-chevron-left" />
	</Button>

	<Button tag="next" bind:image_index max={image_set.length - 1} length={image_set.length}>
		<i slot="icon" class="fas fa-chevron-right" />
	</Button>
</div>
