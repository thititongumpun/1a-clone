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

<footer class="footer p-10 bg-gray-50 text-neutral-content">
  <div>
    <span class="footer-title font-semibold text-blue-500">Our industries</span> 
    <div class="divider lg:divider-horizontal border"></div> 
    <a href="/" class="link link-hover text-blue-500">Travel agencies</a>
    <a href="/" class="link link-hover text-blue-500">Corporations</a>
    <a href="/" class="link link-hover text-blue-500">Car rental</a>
    <a href="/" class="link link-hover text-blue-500">Hotels</a>
  </div> 
  <div>
    <span class="footer-title font-semibold text-blue-500">Information for</span> 
    <div class="divider lg:divider-horizontal border"></div> 
    <a href="/" class="link link-hover text-blue-500">Business managers</a>
    <a href="/" class="link link-hover text-blue-500">Sales managers</a>
    <a href="/" class="link link-hover text-blue-500">IT professionals</a>
  </div> 
  <div>
    <span class="footer-title font-semibold text-blue-500">Why Amadeus</span> 
    <div class="divider lg:divider-horizontal border"></div> 
    <a href="/" class="link link-hover text-blue-500">Let's shape the future of travel</a>
    <a href="/" class="link link-hover text-blue-500">Our ambition</a>
    <a href="/" class="link link-hover text-blue-500">Our values</a>
  </div>
  <div>
    <span class="footer-title font-semibold text-blue-500">AboUt us</span> 
    <div class="divider lg:divider-horizontal border"></div> 
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
