<script lang="ts">
	import { modalTicket } from "$lib/stores";
	import Ticket from "./Ticket.svelte";

  export let category: string;
  export let tickets: ITicket[];

  function showModal(ticket: ITicket): void {
    modalTicket.set(ticket);
    console.log("asdfgfd")
  };
</script>

<div class="column">
  <h3>{category}</h3>
  {#if tickets.length > 0}
    {#each tickets as ticket}
    <div on:click={() => showModal(ticket)}>
      <Ticket ticket={ticket}/>
    </div>
    {/each}
  {:else}
    <div class="empty">No tickets</div>
  {/if}
</div>