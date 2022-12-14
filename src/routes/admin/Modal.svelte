<script lang="ts">
	import moment from 'moment';
	import { modalNotes, modalTicket, ticketColumns } from '$lib/stores';
	import Button from '$lib/Button.svelte';
	import NoteForm from './NoteForm.svelte';
	import Avatar from '$lib/Avatar.svelte';
	import Api from '$lib/api';
	import { onMount } from 'svelte';

	export let ticket: ITicket;

	const descriptionBreakPoint = 200;

	const currentUser = Api.currentUser;

	let showFullDescription = false;

	let notes: INote[] = [];

	onMount(async () => {
		const [_, ticketNotes] = await Api.getSingleTicket(ticket.id);
		notes = ticketNotes;
		modalNotes.set(ticketNotes);
	})

	modalNotes.subscribe((newNotes) => {
		notes = newNotes;
	})

	const getAbsoluteDate = (date: string) => moment(date).format('D.M.YYYY');
	const getRelativeDate = (date: string) => moment(date).fromNow();

	const closeModal = (e: MouseEvent) => {
		if (e.target === e.currentTarget) {
			modalTicket.set(null);
		}
	};

	const assignMe = async () => {
		const newTicket = await Api.updateTicket({
			id: ticket.id,
			assigned_to: Api.currentUser,
			status: 'assigned'
		});

		modalTicket.set(newTicket);
		ticketColumns.update((columns) => {
			const newColumns = { ...columns };
			const newTickets = newColumns['New'].filter((t) => t.id !== newTicket.id);
			newColumns['New'] = newTickets;
			newColumns['Mine'] = [...newColumns['Mine'], newTicket];
			return newColumns;
		});
	};

	const unassign = async () => {
		const newTicket = await Api.updateTicket({
			id: ticket.id,
			assigned_to: null,
			status: 'new'
		});

		modalTicket.set(newTicket);
		ticketColumns.update((columns) => {
			const newColumns = { ...columns };
			const newTickets = newColumns['Mine'].filter((t) => t.id !== newTicket.id);
			newColumns['Mine'] = newTickets;
			newColumns['New'] = [...newColumns['New'], newTicket];
			return newColumns;
		});
	};

  const markCompleted = async () => {
    if (!ticket.assigned_to) return;

    const newTicket = await Api.updateTicket({
      id: ticket.id,
      status: 'completed'
    });

    modalTicket.set(newTicket);
    ticketColumns.update((columns) => {
      const newColumns = { ...columns };
      const newTickets = newColumns['Mine'].filter((t) => t.id !== newTicket.id);
      newColumns['Mine'] = newTickets;
      newColumns['Completed'] = [...newColumns['Completed'], newTicket];
      return newColumns;
    });
  };

	$: shortDescription =
		ticket.description.length > descriptionBreakPoint
			? ticket.description.slice(0, descriptionBreakPoint) + '...'
			: ticket.description;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center"
	on:click={closeModal}
>
	<div
		class="w-full px-6 py-4 bg-white rounded-xl border-slate-200 shadow absolute max-w-2xl max-h-[90vh] flex flex-col gap-2 overflow-y-auto"
	>
		<div class="flex items-center gap-3">
			<div
				data-severity={ticket.severity}
				class="w-3 h-3 rounded-full bg-slate-200 data-[severity=low]:bg-sky-400 data-[severity=medium]:bg-amber-400 data-[severity=high]:bg-rose-500"
			/>
			<span class="uppercase text-xs text-black/50 font-medium"
				>{ticket.severity ?? 'Unclassified'} priority</span
			>
		</div>

		<h2 class="text-xl font-semibold">{ticket.name}</h2>
		<hr class="my-4" />

		<div class="flex justify-between">
			<div class="flex items-center gap-2 pt-2">
				{#if ticket.assigned_to}
					<Avatar name={ticket.assigned_to} />
					<div class="flex flex-col">
						<p class="text-sm text-black/50">Assigned to</p>
						<p class="text-sm text-black/80 font-medium">{ticket.assigned_to}</p>
					</div>
				{:else}
					<div class="w-10 h-10 bg-slate-100 rounded-full" />
					<div class="flex flex-col">
						<p class="text-sm text-black/50">Assigned to</p>
						<p class="text-sm text-black/50 font-medium">Unassigned</p>
					</div>
				{/if}
			</div>
			{#if ticket.assigned_to}
				<Button variant="secondary" on:click={unassign} disabled={ticket.status === 'completed'}
					>Unassign</Button
				>
			{:else}
				<Button variant="secondary" on:click={assignMe} disabled={ticket.status === 'completed'}
					>Assign me</Button
				>
			{/if}
		</div>

		<hr class="my-4" />

		<p class="text-black/70 font-medium uppercase text-sm pb-2">Details</p>

		<div class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1">
			<p class="text-black/60">Email</p>
			<p class="text-black/70 font-medium underline">{ticket.email}</p>
			<p class="text-black/60">Created</p>
			<p class="text-black/70 font-medium">
				{getAbsoluteDate(ticket.created_at)}
				<span class="font-normal text-black/60 pl-2 capitalize"
					>({getRelativeDate(ticket.created_at)})</span
				>
			</p>
			<p class="text-black/60">Status</p>
			<p class="text-black/70 font-medium capitalize">{ticket.status}</p>
			<p class="text-black/60">Reporter</p>
			<p class="text-black/70 font-medium">{ticket.reporter ?? 'Anonymous'}</p>
			<p class="text-black/60">Reporter email</p>
			<p
				class="text-black/70 font-medium data-[enabled=true]:underline"
				data-enabled={!!ticket.reporter_email}
			>
				{ticket.reporter_email ?? 'Not given'}
			</p>
			<p class="text-black/60">Reporter estimate</p>
			<p class="text-black/70 font-medium">{`${ticket.reporter_estimate}/5` ?? 'Not given'}</p>
			<p class="text-black/60">Description</p>
		</div>

		<p class="text-black/60 pl-4 border-l-2 border-l-slate-200">
			{showFullDescription ? ticket.description : shortDescription}
			{#if ticket.description.length > descriptionBreakPoint}
				<button
					class="text-sm uppercase font-medium px-2 inline"
					on:click={() => (showFullDescription = !showFullDescription)}
				>
					{showFullDescription ? 'Show less' : 'Show more'}
				</button>
			{/if}
		</p>

		<hr class="my-4" />

		<p class="text-black/70 font-medium uppercase text-sm pb-2">Notes</p>
		{#each notes as note}
			<div class="flex flex-col gap-4 pb-4">
				<div class="flex items-center gap-2">
					<Avatar name={note.author} />
					<div class="flex flex-col">
						<p class="text-sm text-black/70 font-medium">{note.author}</p>
						<p class="text-sm text-black/60 capitalize">
							{getAbsoluteDate(note.created_at)} ({getRelativeDate(note.created_at)})
						</p>
					</div>
				</div>
				<p class="text-black/60 pl-4 border-l-2 border-l-slate-200">
					{note.text}
				</p>
			</div>
		{/each}

		{#if !notes.length}
			<div
				class="my-4 w-full rounded-xl border border-slate-200 p-3 flex items-center justify-center text-black/50 border-dashed"
			>
				No notes
			</div>
		{/if}
		<NoteForm {ticket} {notes}/>

		<hr class="my-4" />

		{#if !ticket.assigned_to}
			<p class="text-black/50">The ticket must be assigned before it can be completed.</p>
		{/if}


		{#if ticket.assigned_to !== currentUser}
      <p class="text-black/50">You cannot mark someone else's ticket as completed!</p>
    {/if}

		<div class="flex items-center justify-between gap-4">
      {#if ticket.status !== 'completed'}
        <Button on:click={markCompleted} disabled={!ticket.assigned_to || ticket.assigned_to !== currentUser}>Mark as completed</Button>
      {:else}
        <span></span>
      {/if}
      
			<button on:click={() => modalTicket.set(null)}>Close</button>
		</div>
	</div>
</div>
