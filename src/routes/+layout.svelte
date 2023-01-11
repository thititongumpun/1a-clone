<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="container mx-auto">
			<div class="w-full navbar bg-blue-600">
				<div class="flex-none lg:hidden">
					<label for="my-drawer-3" class="btn btn-square btn-ghost">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="inline-block w-6 h-6 stroke-current"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/></svg
						>
					</label>
				</div>
				<div class="flex-1 px-2 mx-2 text-white font-bold">1A</div>
				<div class="flex-auto hidden lg:block">
					<ul class="menu menu-horizontal">
						<!-- Navbar menu content here -->
						<li>
							<a href="/" class="text-white hover:bg-white hover:text-blue-600 font-semibold"
								>Home</a
							>
						</li>
						<li>
							<a href="/news" class="text-white hover:bg-white hover:text-blue-600 font-semibold"
								>News</a
							>
						</li>
						<li>
							<a href="/" class="text-white hover:bg-white hover:text-blue-600 font-semibold"
								>Our Portfolio</a
							>
						</li>
						<li>
							<a href="/" class="text-white hover:bg-white hover:text-blue-600 font-semibold"
								>Traning</a
							>
						</li>
						<li>
							<a href="/" class="text-white hover:bg-white hover:text-blue-600 font-semibold"
								>Technical Support</a
							>
						</li>
						<li>
							<a href="/" class="text-white hover:bg-white hover:text-blue-600 font-semibold"
								>Careers</a
							>
						</li>
						<li>
							<a href="/" class="text-white hover:bg-white hover:text-blue-600 font-semibold"
								>Contact us</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="container mx-auto">
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
			<!-- Page content here -->
			<slot />
		</div>
	</div>

	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu p-4 w-80 bg-blue-600">
			<!-- Sidebar content here -->
			<li><a href="/" class="text- hover:bg-white hover:text-blue-600 font-semibold">Home</a></li>
			<li>
				<a href="/news" class="text-white hover:bg-white hover:text-blue-600 font-semibold">News</a>
			</li>
			<li>
				<a href="/" class="text-white hover:bg-white hover:text-blue-600 font-semibold"
					>Our Portfolio</a
				>
			</li>
			<li>
				<a href="/" class="text-white hover:bg-white hover:text-blue-600 font-semibold">Traning</a>
			</li>
			<li>
				<a href="/" class="text-white hover:bg-white hover:text-blue-600 font-semibold"
					>Technical Support</a
				>
			</li>
			<li>
				<a href="/" class="text-white hover:bg-white hover:text-blue-600 font-semibold">Careers</a>
			</li>
			<li>
				<a href="/" class="text-white hover:bg-white hover:text-blue-600 font-semibold"
					>Contact us</a
				>
			</li>
		</ul>
	</div>
</div>

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
