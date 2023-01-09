<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="carousel w-full mt-5">
	{#if data && data.response?.length}
		{#each data.response as carousel}
			<div id={`item${carousel.id}`} class="carousel-item w-full">
				<img src={carousel.url} alt="..." class="w-full" />
			</div>
		{/each}
	{/if}
</div>
<div class="flex justify-center w-full py-2 gap-2">
	{#if data && data.response?.length}
		{#each data.response as carousel}
			<a href={`#item${carousel.id}`} class="btn btn-xs">{carousel.id}</a>
		{/each}
	{/if}
</div>
