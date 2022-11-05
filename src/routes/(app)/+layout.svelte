<script>
	import Footer from '$lib/Footer.svelte';
	import Header from './Header.svelte';
	import '$lib/styles.css';
</script>

<main class="min-h-screen mx-auto w-[90%] max-w-6xl">
	<Header />

	<slot />

	<Footer />
</main>
