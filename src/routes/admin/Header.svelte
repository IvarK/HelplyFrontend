<script>
	import Avatar from '$lib/Avatar.svelte';
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
			<li class="flex items-center gap-4">
				<Avatar name="Hackathon Demo" />
				<span>Hackathon Demo</span>
			</li>
		</ul>

		<Button variant="secondary">Sign out</Button>
	</nav>
</header>
