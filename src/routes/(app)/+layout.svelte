<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<main class="min-h-screen mx-auto w-[90%] max-w-6xl">
	<Header />

	<slot />

	<footer class="flex flex-col items-center justify-center py-8">
		<p class="opacity-50">Powered by TypeScript, Rust, SvelteKit, TailwindCSS & Vite</p>
		<p class="opacity-50">
			Made by <a href="https://vertics.co" class="underline decoration-primary">Vertics gang</a> lmao
			modern technologies go brrrr
		</p>
	</footer>
</main>
