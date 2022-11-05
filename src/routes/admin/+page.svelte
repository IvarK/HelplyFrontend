<script>
	import Board from "./Board.svelte";


</script>

<div>
  <div class="breadcrumbs">
    <a href="/#">Admin</a>
    <span class="separator">></span>
    <a href="/admin/page">Aalto University</a>
    <span class="separator">></span>
    <a href="/#">Dashboard</a>
  </div>
  <h2>Aalto University Admin Dashboard</h2>

  <div>
    <div class="filter-container">
      <div class="filter">New</div>
      <div class="filter">Mine</div>
      <div class="filter">Assigned to others</div>
      <div class="filter">Completed</div>
    </div>

    <button class="button">Settings</button>

    <Board />
  </div>

</div>

<style lang="scss">
  .breadcrumbs {
    margin-top: 40px;

    a {
      color: #000;
      font-weight: lighter;
    }

    .separator {
      margin: 0 0.5rem;
    }
  }
  
  h2 {
    font-size: 2em;
    font-weight: bold;
  }

  .filter-container {
    display: flex;
    flex-direction: row;
    margin-top: 20px;

    .filter {
      margin: 0 10px;
    }
  }
</style>