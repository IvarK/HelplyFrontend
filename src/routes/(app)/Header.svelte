<script>
	import Button from '$lib/Button.svelte';
	import aalto from '$lib/images/aalto.png';
</script>

<header class="flex items-center justify-between py-4">
	<div class="flex items-center gap-8">
		<a href="/">
			<span class="text-3xl font-semibold text-primary">helply.io</span>
		</a>
		<div class="text-2xl scale-y-[80%]">X</div>
		<img src={aalto} alt="Aalto" class="h-6" />
	</div>
	<nav class="flex items-center gap-8">
		<ul class="flex items-center gap-6">
			<li>
				<a href="/">How does it work</a>
			</li>
			<li>
				<a href="/#">About</a>
			</li>
			<li>
				<a href="/#">For organizations</a>
			</li>
		</ul>

		<a data-sveltekit-prefetch href="/help-your-friend">
			<Button>I'm worried about a friend</Button>
		</a>
	</nav>
</header>
