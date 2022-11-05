<script>
	import Button from '$lib/Button.svelte';
</script>

<svelte:head>
	<title>Helply - Thank you</title>
</svelte:head>

<section class="flex items-start justify-between py-24">
	<div class="flex flex-col gap-16 max-w-2xl">
		<h1 class="text-6xl font-semibold text-left">Thank you for reaching out!</h1>

		<div class="space-y-4">
			<h2 class="font-semibold">What now?</h2>
			<p class="opacity-60">
				You have just sent a call for help. You might’ve just made the first push on a small
				snowball that ends up being the avalanche that changes your friend’s life for the better.
			</p>
		</div>

		<div class="space-y-4">
			<h2 class="font-semibold">What's next?</h2>
			<p class="opacity-60">
				You have done everything you can. Any moment now a professional will see your message and we
				will immediately start the process of reaching out to your friend and ensuring he gets the
				help he needs.
			</p>
		</div>

		<a data-sveltekit-prefetch href="/" class="flex flex-col items-stretch max-w-md">
			<Button>Return home</Button>
		</a>
	</div>
</section>
