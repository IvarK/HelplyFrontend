<script lang="ts">
	import moment from 'moment';
	export let ticket: ITicket;

	$: date = moment(ticket.created_at).format('DD.MM.YYYY');
	$: assigneeInitials =
		ticket.reporter
			?.split(' ')
			.map((name) => name[0])
			.join('') ?? '';
</script>

<div class="w-full rounded-xl border border-slate-200 bg-white p-3 flex flex-col gap-2">
	<div class="flex items-center gap-3">
		<div
			data-severity={ticket.severity}
			class="w-3 h-3 rounded-full data-[severity=low]:bg-sky-400 data-[severity=medium]:bg-amber-400 data-[severity=high]:bg-rose-500"
		/>
		<span class="uppercase text-xs text-black/50 font-medium"
			>{ticket.severity ?? 'unclassified'}</span
		>
	</div>
	<h2>{ticket.name}</h2>
	<span>{date} {ticket.status}</span>
	<div class="assignee">
		<div class="assignee-avatar">{assigneeInitials}</div>
		<div>{ticket.reporter ?? 'Unassigned'}</div>
	</div>
</div>
