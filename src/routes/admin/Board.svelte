<script lang="ts">
	import Api from '$lib/api';
	import sortTickets from '$lib/sort';
	import { modalTicket, ticketColumns, storeTickets } from '$lib/stores';
	import { onMount } from 'svelte';
	import Column from './Column.svelte';
	import Modal from './Modal.svelte';

	export let visibleColumns: TColumn[];

	onMount(async () => {
		const tickets = await Api.getTickets();

		storeTickets.set(tickets);
	});

	let currentTicket: ITicket | null = null;

	modalTicket.subscribe((ticket) => {
		currentTicket = ticket;
	});
</script>

<div>
	<div class="grid grid-cols-4 gap-6">
		{#each visibleColumns as column}
			<Column category={column} />
		{/each}
	</div>

	{#if currentTicket}
		<Modal ticket={currentTicket} />
	{/if}
</div>
