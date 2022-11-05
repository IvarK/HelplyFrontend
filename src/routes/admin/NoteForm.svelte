<script lang="ts">
	let input = '';

	async function handleSubmit() {
		const res = await fetch('/');
	}
</script>

<form class="flex" on:submit|preventDefault={handleSubmit}>
	<textarea
		placeholder="Start writing your note..."
		rows="3"
		bind:value={input}
		class="flex-1 rounded-l-xl bg-slate-100 pt-2 pb-8 px-4"
		type="text"
	/>
	<div class="bg-slate-100 px-4 py-2 rounded-r-xl flex flex-col justify-end">
		<button class="font-medium uppercase text-primary"> Save </button>
	</div>
</form>
