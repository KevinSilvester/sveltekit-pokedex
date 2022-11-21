<script>
   import { PokemonList, PokemonWholeList, fetchPokemon, offset, end, wholeList } from '../stores'
   import Header from '../components/header.svelte'
   import PokemonProfile from '../components/pokemonProfile.svelte'
   import Search from '../components/search.svelte'
   import Results from '../components/results.svelte'
   import Loader from '../components/loader.svelte'
   import Pagination from '../components/pagination.svelte'

   let searchTerm = ''
   let filteredPokemon = []
   let inFocus = false

   fetchPokemon($offset, $end, $wholeList)

   $: {
      if (searchTerm) {
         filteredPokemon = $PokemonWholeList.filter(pokemon => {
            return (
               pokemon.name.toLowerCase().match(new RegExp(`^${searchTerm.toLowerCase()}`, 'gi')) ||
               pokemon.id == searchTerm
            )
         })
      } else {
         filteredPokemon = []
      }
   }
</script>

<svelte:head>
   <title>SvelteKit Pokedex</title>
</svelte:head>

<Header>SvelteKit Pokedex</Header>

<Search bind:searchTerm bind:inFocus />

{#if filteredPokemon.length !== 0}
   <Results {filteredPokemon} />
{/if}

<div data-info="deck-container-wrapper" class="w-auto h-auto z-0 relative">
   {#if $PokemonList.length === 0}
      <Loader
         fillColor="rgb(209, 213, 219)"
         classes="h-40 absolute"
         styles="top: 50%; left: 50%; transform: translate(-50%, 20%)"
      />
   {:else}
      <Pagination />
      <div
         data-info="deck-container"
         class="grid gap-4 md:grid-cols-2 grid-cols-1 py-4 z-0 relative"
      >
         {#each $PokemonList as pokemon}
            <PokemonProfile {pokemon} />
         {/each}
      </div>
      <Pagination />
   {/if}
</div>
