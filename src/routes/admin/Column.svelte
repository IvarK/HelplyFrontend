<script lang="ts">
	import { modalTicket } from '$lib/stores';
	import Ticket from './Ticket.svelte';

	export let category: string;
	export let tickets: ITicket[];

	function showModal(ticket: ITicket): void {
		modalTicket.set(ticket);
		console.log('asdfgfd');
	}
</script>

<div class="flex flex-col gap-4 items-stretch">
	<div class="flex items-center gap-4">
		<h3 class="uppercase font-medium text-sm">{category}</h3>
		<p class="text-sm opacity-60">{tickets.length}</p>
	</div>
	{#if tickets.length > 0}
		{#each tickets as ticket}
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
