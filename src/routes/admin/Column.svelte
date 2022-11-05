<script lang="ts">
	import sortTickets from '$lib/sort';
	import { modalTicket, ticketColumns } from '$lib/stores';
	import Ticket from './Ticket.svelte';
	export let category: TColumn;

	let tickets: ITicket[] = [];

	ticketColumns.subscribe((columns) => {
		tickets = sortTickets(columns[category]);
	});

	function showModal(ticket: ITicket): void {
		modalTicket.set(ticket);
	}
</script>

<div class="flex flex-col gap-4 items-stretch" data-column={category}>
	<div class="flex items-center gap-4">
		<h3 class="uppercase font-medium text-sm">{category}</h3>
		<p class="text-sm opacity-60">{tickets.length}</p>
	</div>
	{#if tickets.length > 0}
		{#each tickets as ticket}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div on:click={() => showModal(ticket)}>
				<Ticket {ticket} />
			</div>
		{/each}
	{:else}
		<div
			class="w-full rounded-xl border border-slate-200 p-3 flex items-center justify-center text-black/50"
		>
			No tickets
		</div>
	{/if}
</div>
