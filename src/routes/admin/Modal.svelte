<script lang="ts">
  import moment from 'moment';
	import { modalTicket } from "$lib/stores";
	import { each } from 'svelte/internal';

  export let ticket: ITicket;

  const descriptionBreakPoint = 200;

  let showFullDescription = false;

  const noteAuthorInitials = (author: string) => {
    return author
      .split(' ')
      .map((name) => name[0])
      .join('');
  };

  const closeModal = (e: PointerEvent) => {
    if (e.target === e.currentTarget) {
      modalTicket.set(null);
    }
  };

  $: shortDescription = 
    ticket.description.length > descriptionBreakPoint
      ? ticket.description.slice(0, descriptionBreakPoint) + "..."
      : ticket.description;

  $: date = moment(ticket.created_at).format('DD.MM.YYYY');
  $: assigneeInitials = ticket.reporter
    ?.split(' ')
    .map((name) => name[0])
    .join('') ?? '';
</script>

<div class="modal-bg" on:click={closeModal}>
  <div class="modal"> 
    <div>x</div>
    <div class={`severity-blob--${ticket.severity}`} />
    <div>{ticket.severity}</div>
    <h1>{ticket.name}</h1>
    <div class="divider"></div>
    <div class="modal-top">
      <div class="gridlmao">
        <div>Email</div><div>{ticket.email}</div>
        <div>Created</div><div>{date}</div>
        <div>Status</div><div>{ticket.status}</div>
        <div>Reporter</div><div>{ticket.reporter_email ?? "Anonymous"}</div>
        <div>Reporter email</div><div>{ticket.email ?? "Not given"}</div>
        <div>Reporter estimate</div><div>{ticket.reporter_estimate}</div>
      </div>
      <div class="assignee-container">
        <div class="assignee-information">
          <div class="assignee-avatar">{assigneeInitials}</div>
          <div>Assigned to <br>{ticket.reporter ?? "Unassigned"}</div>
        </div>
        <button>Unassign</button>
      </div>
    </div>
    <p>Description:</p>
    <p>
      {showFullDescription ? ticket.description : shortDescription}
    </p>
    {#if ticket.description.length > descriptionBreakPoint}
      <button on:click={() => showFullDescription = !showFullDescription}>
        {showFullDescription ? "Read less" : "Read more"}
      </button>
    {/if}
    <h2>Notes</h2>
    {#each ticket.notes as note}
    <div class="note">
      <div class="note-author">
        <div class="assignee-avatar">{noteAuthorInitials(note.author)}</div>
        <div>{note.author}</div>
        <p>{note.text}</p>
      </div>
    </div>
    {/each}
    <button>Add note</button>
    <div class="divider"></div>
    <div class="modal-bottom">
      <button>Mark as completed</button>
      <button on:click={() => modalTicket.set(null)}>close</button>
    </div>
  </div>
</div>

<style>
  .modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: white;
  }
</style>