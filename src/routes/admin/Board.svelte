<script lang="ts">
	import Api from '$lib/api';
	import { modalTicket, ticketColumns } from '$lib/stores';
	import { onMount } from 'svelte';
	import Column from './Column.svelte';
	import Modal from './Modal.svelte';

	export let visibleColumns: TColumn[];

	const currentUser = 'Hackathon Demo';

	const ticketSeverityValues: { [K in Severity]: number } = {
		low: 1,
		medium: 2,
		high: 3
	};

	onMount(async () => {
		const tickets = await Api.getTickets();

		tickets.sort((a, b) => {
			if (!b.severity) return -1;
			if (!a.severity) return 1;

			return ticketSeverityValues[b.severity] - ticketSeverityValues[a.severity];
		});

		ticketColumns.set({
			New: tickets.filter((ticket) => ticket.status === 'new'),
			Mine: tickets.filter(
				(ticket) => ticket.status === 'assigned' && ticket.assigned_to === currentUser
			),
			'Assigned to others': tickets.filter(
				(ticket) => ticket.status === 'assigned' && ticket.assigned_to !== currentUser
			),
			Completed: tickets.filter((ticket) => ticket.status === 'completed')
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
