<script>
	import '../app.css';
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
							<a href="/" class="text-white hover:bg-white hover:text-blue-600 font-semibold"
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
		<!-- Page content here -->
		<div class="container mx-auto"><slot /></div>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu p-4 w-80 bg-blue-600">
			<!-- Sidebar content here -->
			<li><a href="/" class="text- hover:bg-white hover:text-blue-600 font-semibold">Home</a></li>
			<li>
				<a href="/" class="text-white hover:bg-white hover:text-blue-600 font-semibold">News</a>
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
