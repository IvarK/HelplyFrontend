<script lang="ts">
	import Button from '$lib/Button.svelte';
	import { goto } from '$app/navigation';
	import Api from '$lib/api';

	let friendName = '';
	let friendEmail = '';
	let urgency = 1;
	let description = '';
	let myName = '';
	let myEmail = '';

	async function handleSubmit() {
		const data: ITicketBody = {
			name: friendName,
			email: friendEmail,
			reporter_estimate: urgency,
			description,
			reporter: myName,
			reporter_email: myEmail,
			created_at: new Date().toISOString(),
			status: 'new',
		};

		const res = await Api.addTicket(data);

		goto('/thank-you');
	}
</script>

<form class="py-16 flex flex-col gap-16 max-w-2xl" on:submit|preventDefault={handleSubmit}>
	<div class="flex flex-col gap-4">
		<label class="text-primary" for="friendName">What is your friend's name?</label>
		<input
			placeholder="John Doe"
			bind:value={friendName}
			class="rounded-xl bg-slate-100 py-2 px-4"
			id="friendName"
			type="text"
		/>
	</div>
	<div class="flex flex-col gap-4">
		<label class="text-primary" for="friendEmail">What is your friend's email address?</label>
		<p class="opacity-50">Provide @aalto.fi email address</p>
		<input
			placeholder="john.doe@aalto.fi"
			bind:value={friendEmail}
			class="rounded-xl bg-slate-100 py-2 px-4"
			id="friendEmail"
			type="text"
		/>
	</div>
	<div class="flex flex-col gap-4">
		<label class="text-primary" for="urgency">How urgently should we act?</label>
		<p class="opacity-50">
			Please provide your best estimate on how urgently we should contact your friend.
		</p>
		<div class="flex items-center justify-between">
			{#each [1, 2, 3, 4, 5] as _urgency}
				<button
					type="button"
					class="px-6 py-4 rounded-xl border border-slate-200 aria-selected:border-primary"
					aria-selected={urgency === _urgency}
					on:click={() => {
						urgency = _urgency;
					}}
				>
					{_urgency}
				</button>
			{/each}
		</div>
		<div class="flex items-center justify-between">
			<span class="opacity-50">In a few weeks</span>
			<span class="opacity-50">Immediately</span>
		</div>
	</div>
	<div class="flex flex-col gap-4">
		<label class="text-primary" for="description">Why does your friend need help?</label>
		<textarea
			placeholder="My friend..."
			rows="10"
			bind:value={description}
			class="rounded-xl bg-slate-100 py-2 px-4"
			id="description"
			type="text"
		/>
	</div>
	<div class="h-[2px] w-48 bg-primary" />
	<div class="space-y-4">
		<p class="opacity-50">
			The fields below here are optional and you can choose to remain fully anonymous if you want
			to.
		</p>
		<p class="opacity-50">
			We will only use your information if we cannot reach your friend to ask you for mode help on
			contacting your friend.
		</p>
	</div>
	<div class="flex flex-col gap-4">
		<label class="text-primary" for="myName">(Optional) What is your name?</label>
		<input bind:value={myName} class="rounded-xl bg-slate-100 py-2 px-4" id="myName" type="text" />
	</div>
	<div class="flex flex-col gap-4">
		<label class="text-primary" for="myEmail">(Optional) What is your email address?</label>
		<input
			bind:value={myEmail}
			class="rounded-xl bg-slate-100 py-2 px-4"
			id="myEmail"
			type="text"
		/>
	</div>
	<Button type="submit">Send the call for help</Button>
</form>
