<script lang="ts">
	import Api from "$lib/api";
	import { modalTicket } from "$lib/stores";
	import { onMount } from "svelte";
	import Column from "./Column.svelte";
	import Modal from "./Modal.svelte";

  let tickets: ITicket[] = [];

  const currentUser = "Ivar Kerajärvi";

  onMount(async () => {
    tickets = await Api.getTickets();
  });

  let currentTicket: ITicket | null = null;

  modalTicket.subscribe(ticket => {
    currentTicket = ticket;
    console.log("asd")
  });

  $: newTickets = tickets.filter((ticket) => ticket.status === "new");
  $: mineTickets = tickets.filter((ticket) => ticket.status === "assigned" && ticket.reporter === currentUser);
  $: othersTickets = tickets.filter((ticket) => ticket.status === "assigned" && ticket.reporter !== currentUser);
</script>

<div>
  <div class="colums">
    <Column category="New" tickets={newTickets}/>
    <Column category="Mine" tickets={mineTickets}/>
    <Column category="Assigned to others" tickets={othersTickets}/>
  </div>

  {#if currentTicket}
    <Modal ticket={currentTicket}/>
  {/if}
</div>