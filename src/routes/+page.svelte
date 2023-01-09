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

<div class="divider" />
<div class="flex flex-wrap md:flex-row justify-around items-end mb-5 mx-auto">
	<img src="https://www.thaiamadeus.com/THILA/img/tm.jpg" alt="..." class="w-auto object-contain" />
	<img
		src="https://www.thaiamadeus.com/THILA/file/mac_team.gif"
		alt="..."
		class="w-auto object-contain"
	/>
	<img
		src="https://www.thaiamadeus.com/THILA/img/checkmytrip.gif"
		alt="..."
		class="w-auto object-contain"
	/>
	<img
		src="https://www.thaiamadeus.com/THILA/img/kb_for_travel_agency.gif"
		alt="..."
		class="w-auto object-contain"
	/>
</div>
<div class="flex flex-col md:flex-row justify-around">
	<img src="https://www.thaiamadeus.com/THILA/img/acb.gif" alt="" class="w-auto object-contain" />
	<img src="https://www.thaiamadeus.com/THILA/img/abs.gif" alt="" class="w-auto object-contain" />
	<img src="https://www.thaiamadeus.com/THILA/img/abm.gif" alt="" class="w-auto object-contain" />
	<img src="https://www.thaiamadeus.com/THILA/img/chil.gif" alt="" class="w-auto object-contain" />
</div>
<div class="divider" />

<footer class="footer p-10 bg-gray-50 text-neutral-content">
	<div>
		<span class="footer-title font-semibold text-blue-500">Our industries</span>
		<div class="divider divider-horizontal border" />
		<a href="/" class="link link-hover text-blue-500">Travel agencies</a>
		<a href="/" class="link link-hover text-blue-500">Corporations</a>
		<a href="/" class="link link-hover text-blue-500">Car rental</a>
		<a href="/" class="link link-hover text-blue-500">Hotels</a>
	</div>
	<div>
		<span class="footer-title font-semibold text-blue-500">Information for</span>
		<div class="divider divider-horizontal border" />
		<a href="/" class="link link-hover text-blue-500">Business managers</a>
		<a href="/" class="link link-hover text-blue-500">Sales managers</a>
		<a href="/" class="link link-hover text-blue-500">IT professionals</a>
	</div>
	<div>
		<span class="footer-title font-semibold text-blue-500">Why Amadeus</span>
		<div class="divider divider-horizontal border" />
		<a href="/" class="link link-hover text-blue-500">Let's shape the future of travel</a>
		<a href="/" class="link link-hover text-blue-500">Our ambition</a>
		<a href="/" class="link link-hover text-blue-500">Our values</a>
	</div>
	<div>
		<span class="footer-title font-semibold text-blue-500">AboUt us</span>
		<div class="divider divider-horizontal border" />
		<a href="/" class="link link-hover text-blue-500">Our company</a>
		<a href="/" class="link link-hover text-blue-500">Our history</a>
		<a href="/" class="link link-hover text-blue-500">Our customers</a>
	</div>
</footer>

<footer class="footer items-center p-4 bg-gray-100 text-neutral-content justify-center">
	<div class="items-center grid-flow-col">
		<p class="text-blue-600">
			© THAI-Amadeus - Privacy Policy // © Amadeus IT Group SA - Legal Notices
		</p>
		<p class="text-blue-600">Security Policy</p>
	</div>
</footer>
