<script lang="ts">
	import Board from "./Board.svelte";
	import Column from "./Column.svelte";

  let visibleColumns: TColumn[] = ["New", "Mine", "Assigned to others"];

  function toggleColumn(column: TColumn): void {
    if (visibleColumns.includes(column)) {
      visibleColumns = visibleColumns.filter((c) => c !== column);
    } else {
      const columnsOrder: TColumn[] = ["New", "Mine", "Assigned to others", "Completed"];
      visibleColumns = columnsOrder.filter((c: TColumn) => visibleColumns.includes(c) || c === column);
    }
  }
</script>

<div>
  <div class="breadcrumbs">
    <a href="/#">Admin</a>
    <span class="separator">></span>
    <a href="/#">Aalto University</a>
    <span class="separator">></span>
    <a href="/#">Dashboard</a>
  </div>
  <h2>Aalto University Admin Dashboard</h2>

  <div>
    <div class="filter-container">
      <div class="filter" on:click={() => toggleColumn("New")}>New</div>
      <div class="filter" on:click={() => toggleColumn("Mine")}>Mine</div>
      <div class="filter" on:click={() => toggleColumn("Assigned to others")}>Assigned to others</div>
      <div class="filter" on:click={() => toggleColumn("Completed")}>Completed</div>
    </div>

    <button class="button">Settings</button>

    <Board {visibleColumns}/>
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