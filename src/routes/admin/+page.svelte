<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Board from './Board.svelte';
	import Column from './Column.svelte';

	let visibleColumns: TColumn[] = ['New', 'Mine', 'Assigned to others'];

	function toggleColumn(column: TColumn): void {
		if (visibleColumns.includes(column)) {
			visibleColumns = visibleColumns.filter((c) => c !== column);
		} else {
			const columnsOrder: TColumn[] = ['New', 'Mine', 'Assigned to others', 'Completed'];
			visibleColumns = columnsOrder.filter(
				(c: TColumn) => visibleColumns.includes(c) || c === column
			);
		}
	}
</script>

<section>
	<div class="flex flex-col gap-4 py-6">
		<div class="opacity-50 flex items-center gap-4">
			<a href="/#">Admin</a>
			<span class="separator">></span>
			<a href="/#">Aalto University</a>
			<span class="separator">></span>
			<a href="/#">Dashboard</a>
		</div>

		<h1 class="text-3xl font-semibold">Aalto University Admin Dashboard</h1>

		<div class="flex items-center justify-between">
			<div class="border border-slate-100 rounded-2xl p-1 flex items-center gap-4">
				<button
					aria-selected={visibleColumns.includes('New')}
					class="duration-[50ms] aria-selected:bg-secondary font-medium px-4 py-2 rounded-xl"
					on:click={() => toggleColumn('New')}>New</button
				>
				<button
					aria-selected={visibleColumns.includes('Mine')}
					class="duration-[50ms] aria-selected:bg-secondary font-medium px-4 py-2 rounded-xl"
					on:click={() => toggleColumn('Mine')}>Mine</button
				>
				<button
					aria-selected={visibleColumns.includes('Assigned to others')}
					class="duration-[50ms] aria-selected:bg-secondary font-medium px-4 py-2 rounded-xl"
					on:click={() => toggleColumn('Assigned to others')}
				>
					Assigned to others
				</button>
				<button
					aria-selected={visibleColumns.includes('Completed')}
					class="duration-[50ms] aria-selected:bg-secondary font-medium px-4 py-2 rounded-xl"
					on:click={() => toggleColumn('Completed')}>Completed</button
				>
			</div>
			<Button variant="secondary">Settings</Button>
		</div>
		<div class="pt-10 mt-10 relative">
			<div
				class="-z-10 opacity-50 bg-slate-50 border-t border-slate-200 absolute inset-0 scale-x-[400%]"
			/>
			<Board {visibleColumns} />
		</div>
	</div>
</section>
