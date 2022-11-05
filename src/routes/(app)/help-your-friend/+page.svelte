<script lang="ts">
	import rocks from '$lib/images/stupidmentalhealthrocks.png';
	import HelpForm from './HelpForm.svelte';
</script>

<svelte:head>
	<title>Helply - Call for help</title>
</svelte:head>

<section class="flex items-start justify-between py-24">
	<div class="flex flex-col">
		<h1 class="text-6xl font-semibold max-w-3xl text-left">Tell us about your friend</h1>
		<HelpForm />
	</div>
	<div class="relative">
		<img src={rocks} alt="" class="-translate-x-4 -translate-y-4 rounded-xl" />
		<div class="absolute inset-0 bg-primary -z-10 rounded-xl" />
	</div>
</section>
