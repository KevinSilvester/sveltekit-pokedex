<script>
	import { fetchPokemon, offset, end, wholeList, PokemonList } from '../stores';

	const fetch_list = [
		{
			offset: 0,
			end: 200,
			wholeList: false
		},
		{
			offset: 200,
			end: 200,
			wholeList: false
		},
		{
			offset: 400,
			end: 200,
			wholeList: false
		},
		{
			offset: 600,
			end: 200,
			wholeList: false
		},
		{
			offset: 800,
			end: 200,
			wholeList: false
		},
		{
			offset: 1000,
			end: 118,
			wholeList: false
		}
	];
</script>

<div data-info="pagination-container" class="flex justify-center my-4">
	{#each fetch_list as fetch_items, i}
		<button
			class="bg-gray-300 hover:bg-gray-400 active:bg-gray-500 duration-300 outline-none hover:text-gray-50 active:text-white w-11 h-11 rounded-full mx-5 border-2 border-gray-500 grid place-items-center font-semibold"
			on:click={() => {
				window.scrollTo({ top: 0, left: 0 });
				PokemonList.set([]);
				offset.set(fetch_items.offset);
				end.set(fetch_items.end);
				wholeList.set(false);
				fetchPokemon(fetch_items.offset, fetch_items.end, fetch_items.wholeList);
			}}
		>
			{i + 1}
		</button>
	{/each}
</div>

<style>
	button {
		outline: none;
	}
</style>
