<script lang="ts">
  import moment from 'moment';
  export let ticket: ITicket;

  $: date = moment(ticket.created_at).format('DD.MM.YYYY');
  $: assigneeInitials = ticket.reporter
    ?.split(' ')
    .map((name) => name[0])
    .join('') ?? '';
</script>

<div class="ticket">
  <div class={`severity-blob--${ticket.severity}`}>
    <span class="severity">{ticket.severity ?? "unclassified"}</span>
    <h2>{ticket.name}</h2>
    <span>{date} {ticket.status}</span>
    <div class="assignee">
      <div class="assignee-avatar">{assigneeInitials}</div>
      <div>{ticket.reporter ?? "Unassigned"}</div>
    </div>
  </div>
</div>