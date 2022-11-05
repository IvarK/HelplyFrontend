<script lang="ts">
	import moment from 'moment';
	export let ticket: ITicket;

	$: dateString = moment(ticket.created_at).fromNow();
	$: assigneeInitials =
		ticket.reporter
			?.split(' ')
			.map((name) => name[0])
			.join('') ?? '';
</script>

<button
	class="w-full rounded-xl border border-slate-200 bg-white p-3 flex flex-col gap-2 duration-100 hover:scale-[103%] active:scale-[98%] active:opacity-70 focus:outline outline-primary"
>
	<div class="flex items-center gap-3">
		<div
			data-severity={ticket.severity}
			class="w-3 h-3 rounded-full data-[severity=low]:bg-sky-400 data-[severity=medium]:bg-amber-400 data-[severity=high]:bg-rose-500"
		/>
		<span class="uppercase text-xs text-black/50 font-medium"
			>{ticket.severity ?? 'unclassified'}</span
		>
	</div>
	<h3 class="text-lg font-medium">{ticket.name}</h3>
	<div class="flex items-center gap-2">
		<span class="uppercase text-xs text-black/50 font-medium">{dateString}</span>
		<span class="uppercase text-xs text-black/50 font-medium">·</span>
		<span class="uppercase text-xs text-black/50 font-medium">{ticket.status}</span>
	</div>
	<div class="flex items-center gap-2 pt-2">
		{#if ticket.reporter}
			<div
				class="text-sm w-7 h-7 text-black/70 font-medium bg-secondary rounded-full flex items-center justify-center"
			>
				{assigneeInitials}
			</div>
			<p class="text-sm text-black/80 font-medium">{ticket.reporter}</p>
		{:else}
			<div class="w-7 h-7 bg-slate-100 rounded-full" />
			<p class="text-sm text-black/50 font-medium">Unassigned</p>
		{/if}
	</div>
</button>
