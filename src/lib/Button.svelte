<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let variant: 'primary' | 'secondary' = 'primary';
	export let type: 'button' | 'submit' = 'button';
	export let disabled: boolean = false;

	const dispatch = createEventDispatcher();

	const dispatchClick = () => {
		dispatch('click');
	};

	$: variantClassName = {
		primary: 'bg-primary text-white',
		secondary: 'bg-secondary text-black'
	}[variant];

	$: className = [
		variantClassName,
		'enabled:cursor-pointer font-medium flex items-center justify-center gap-4 px-6 py-3 rounded-xl disabled:opacity-50 disabled:pointer-events-none'
	].join(' ');
</script>

<button class={className} {type} on:click={dispatchClick} {disabled}>
	<slot />
</button>
