<script lang="ts">
	import { modalTicket } from "$lib/stores";

  export let ticket: ITicket;
</script>

<div class="modal-bg">
  <div class="modal"> 
    <h1>{ticket.name}</h1>
    <div on:click={() => modalTicket.set(null)}>x</div>
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