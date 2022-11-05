<script lang="ts">
	import Api from "$lib/api";
	import { modalTicket, storeTickets, ticketColumns } from "$lib/stores";


	let input = '';

	export let ticket: ITicket;

	async function handleSubmit() {
		const notes = ticket.notes
		const topId = notes.length > 0 ? notes[notes.length - 1].id + 1 : 1;
		notes.push({
			text: input, 
			author: 'Hackathon Demo',
			created_at: new Date().toISOString(), 
			id: topId
		});
		const newTicket = {...ticket, notes }
		const res = await Api.updateTicket(newTicket);
		modalTicket.set(newTicket);

		storeTickets.update((tickets) => {
			const index = tickets.findIndex((t) => t.id === newTicket.id);
			tickets[index] = newTicket;
			return tickets;
		});

		input = '';
	}
</script>

<form class="flex" on:submit|preventDefault={handleSubmit}>
	<textarea
		placeholder="Start writing your note..."
		rows="3"
		bind:value={input}
		class="flex-1 rounded-l-xl bg-slate-100 pt-2 pb-8 px-4"
		type="text"
	/>
	<div class="bg-slate-100 px-4 py-2 rounded-r-xl flex flex-col justify-end">
		<button class="font-medium uppercase text-primary"> Save </button>
	</div>
</form>
