<script lang="ts">
	export let variant: 'primary' | 'secondary' = 'primary';
	export let type: 'button' | 'submit' = 'button';

	$: variantClassName = {
		primary: 'bg-primary text-white',
		secondary: 'bg-secondary text-black'
	}[variant];

	$: className = [
		variantClassName,
		'font-medium flex items-center justify-center gap-4 px-6 py-3 rounded-xl'
	].join(' ');
</script>

<button class={className} {type}>
	<slot />
</button>
