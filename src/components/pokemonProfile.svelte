<script>
	export let pokemon;
	let scale = 1;
	let image;
	const handleError = () => {
		image.src =
			'https://dc624.4shared.com/img/SxBqq7bhiq/s24/17a493770c0/404_image_not_found?async&rand=0.49766338443589575';
		image.classList.add('image-error');
	};
</script>

<a
	href="/pokemon/{pokemon.id}"
	class="pokemon-card p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:border-gray-400 flex flex-col items-center duration-200 border-2 border-gray-200"
	on:mouseenter={() => (scale = 1.3)}
	on:mouseleave={() => (scale = 1)}
>
	<img
		class="h-40 w-40 duration-200"
		src={pokemon.image}
		alt={pokemon.name}
		style="transform: scale({scale})"
		bind:this={image}
		on:error={handleError}
	/>
	<h2 class="uppercase text-2xl">{pokemon.id}. {pokemon.name}</h2>
</a>
