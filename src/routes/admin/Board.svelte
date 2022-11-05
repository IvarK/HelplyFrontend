<script lang="ts">
	import Api from '$lib/api';
	import sortTickets from '$lib/sort';
	import { modalTicket, ticketColumns } from '$lib/stores';
	import { onMount } from 'svelte';
	import Column from './Column.svelte';
	import Modal from './Modal.svelte';

	export let visibleColumns: TColumn[];

	const currentUser = 'Hackathon Demo';

	onMount(async () => {
		const tickets = await Api.getTickets();

		const sortedTickets = sortTickets(tickets);

		ticketColumns.set({
			New: sortedTickets.filter((ticket) => ticket.status === 'new'),
			Mine: sortedTickets.filter(
				(ticket) => ticket.status === 'assigned' && ticket.assigned_to === currentUser
			),
			'Assigned to others': sortedTickets.filter(
				(ticket) => ticket.status === 'assigned' && ticket.assigned_to !== currentUser
			),
			Completed: sortedTickets.filter((ticket) => ticket.status === 'completed')
		});
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
