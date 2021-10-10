<script>
	import { fetchPokemon, offset, end } from '../stores';

	const handleClick = () => {
		offset.set(0);
		end.set(200);
		fetchPokemon(offset, end);
	};
</script>

<nav data-info="navigation" class="flex justify-center w-full">
	<a
		class="mx-4 text-lg hover:bg-gray-300 active:bg-gray-400 active:text-gray-50 px-3 py-2.5 rounded duration-200"
		href="/"
		on:click={handleClick}>Home</a
	>
	<a
		class="mx-4 text-lg hover:bg-gray-300 active:bg-gray-400 active:text-gray-50 px-3 py-2.5 rounded duration-200"
		href="/about">About</a
	>
</nav>
