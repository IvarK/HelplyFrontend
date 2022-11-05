<script lang="ts">
	import Api from '$lib/api';
	import { modalTicket } from '$lib/stores';
	import { onMount } from 'svelte';
	import Column from './Column.svelte';
	import Modal from './Modal.svelte';

	export let visibleColumns: TColumn[];

	let tickets: ITicket[] = [];

	const currentUser = 'Ivar Kerajärvi';

	onMount(async () => {
		tickets = await Api.getTickets();
	});

	let currentTicket: ITicket | null = null;

	modalTicket.subscribe((ticket) => {
		currentTicket = ticket;
		console.log('asd');
	});

	$: filteredTickets = {
		New: tickets.filter((ticket) => ticket.status === 'new'),
		Mine: tickets.filter(
			(ticket) => ticket.status === 'assigned' && ticket.reporter === currentUser
		),
		'Assigned to others': tickets.filter(
			(ticket) => ticket.status === 'assigned' && ticket.reporter !== currentUser
		),
		Completed: tickets.filter((ticket) => ticket.status === 'completed')
	};
</script>

<div>
	<div class="grid grid-cols-4 gap-6">
		{#each visibleColumns as column}
			<Column category={column} tickets={filteredTickets[column]} />
		{/each}
	</div>

	{#if currentTicket}
		<Modal ticket={currentTicket} />
	{/if}
</div>
