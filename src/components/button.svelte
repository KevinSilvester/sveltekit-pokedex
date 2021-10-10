<script>
	export let tag;
	export let image_index;
	export let max;
	export let length;

	let prevClicked = false;
	let nextClicked = false;

	$: {
		if (prevClicked) {
			document.querySelector('.next').removeAttribute('disabled');
			image_index -= 1;
			if (image_index <= 0) document.querySelector('.prev').setAttribute('disabled', '');
		} else if (nextClicked) {
			document.querySelector('.prev').removeAttribute('disabled');
			image_index += 1;
			if (image_index >= max) document.querySelector('.next').setAttribute('disabled', '');
		}
		prevClicked = nextClicked = false;
	}
</script>

{#if length === 0}
	{#if tag === 'next'}
		<button
			disabled
			class="{tag} border-2 border-gray-500 bg-gray-300 hover:bg-gray-400 active:bg-gray-500 duration-300 outline-none hover:text-gray-50 active:text-white disabled:opacity-40 disabled:hover:bg-gray-300 disabled:active:bg-gray-300 disabled:hover:text-black disabled:active:text-black"
		>
			<slot name="icon" />
		</button>
	{/if}

	{#if tag === 'prev'}
		<button
			disabled
			class="{tag} border-2 border-gray-500 bg-gray-300 hover:bg-gray-400 active:bg-gray-500 duration-300 outline-none hover:text-gray-50 active:text-white disabled:opacity-40 disabled:hover:bg-gray-300 disabled:active:bg-gray-300 disabled:hover:text-black disabled:active:text-black"
		>
			<slot name="icon" />
		</button>
	{/if}
{:else}
	{#if tag === 'next'}
		<button
			on:click={() => (nextClicked = true)}
			class="{tag} border-2 border-gray-500 bg-gray-300 hover:bg-gray-400 active:bg-gray-500 duration-300 outline-none hover:text-gray-50 active:text-white disabled:opacity-40 disabled:hover:bg-gray-300 disabled:active:bg-gray-300 disabled:hover:text-black disabled:active:text-black"
		>
			<slot name="icon" />
		</button>
	{/if}

	{#if tag === 'prev'}
		<button
			on:click={() => (prevClicked = true)}
			disabled
			class="{tag} border-2 border-gray-500 bg-gray-300 hover:bg-gray-400 active:bg-gray-500 duration-300 outline-none hover:text-gray-50 active:text-white disabled:opacity-40 disabled:hover:bg-gray-300 disabled:active:bg-gray-300 disabled:hover:text-black disabled:active:text-black"
		>
			<slot name="icon" />
		</button>
	{/if}
{/if}

<!-- <button 
   on:click={() => tag === 'next' ? nextClicked = true : prevClicked = true}
   bind:this={prevButton}
   class="{ tag } bg-gray-300 hover:bg-gray-400 active:bg-gray-500 duration-300 outline-none hover:text-gray-50 active:text-white disabled:opacity-40 disabled:hover:bg-gray-300 disabled:active:bg-gray-300 disabled:hover:text-black disabled:active:text-black">
      <slot name="icon"></slot>
</button> -->
ctive:text-black">
      <slot name="icon"></slot>
</button> -->ctive:text-black">
      <slot name="icon"></slot>
</button> -->ctive:text-black">
      <slot name="icon"></slot>
</button> -->ctive:text-black">
      <slot name="icon"></slot>
</button> -->