import { writable } from 'svelte/store';

export const PokemonList = writable([]);
export const PokemonWholeList = writable([]);
export let offset = writable(0);
export let end = writable(200);
export let wholeList = writable(false);

export const fetchPokemon = async (offset, end, wholeList) => {
	const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${end}`;
	const res = await fetch(url);
	const data = await res.json();
	const pokemon_list = data.results.map((data) => {
		return {
			name: data.name,
			id: data.url.match(/\/[\d]+\/$/g)[0].replaceAll('/', ''),
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.url
				.match(/\/[\d]+\/$/g)[0]
				.replaceAll('/', '')}.png`
		};
	});
	if (wholeList) PokemonWholeList.set(pokemon_list);
	else PokemonList.set(pokemon_list);
};
