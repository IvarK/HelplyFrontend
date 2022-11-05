<script>
	import Button from '$lib/Button.svelte';
	import hands from '$lib/images/hands.png';
	import './styles.css';
</script>

<svelte:head>
	<title>Helply - Home</title>
</svelte:head>

<section class="flex items-start justify-between py-24">
	<div class="flex flex-col items-start gap-8">
		<h1 class="text-6xl font-semibold max-w-xl text-left">Are you worried about your friend?</h1>
		<div class="h-[2px] w-48 bg-primary" />
		<p class="max-w-xl">
			Help a friend and send a call for help. We will reach out to your and ensure he gets the
			professional help he needs in order to turn his life around.
		</p>
		<a data-sveltekit-prefetch href="/help-your-friend">
			<Button>I'm worried about a friend</Button>
		</a>
	</div>
	<div class="relative">
		<img src={hands} alt="" class="-translate-x-4 -translate-y-4 rounded-xl" />
		<div class="absolute inset-0 bg-primary -z-10 rounded-xl" />
	</div>
</section>
