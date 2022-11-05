<script lang="ts">
	export let name: string = '';
	export let size: 'default' | 'small' = 'default';

	$: avatarUrl = `https://avatars.dicebear.com/api/croodles/${encodeURIComponent(name)}12.svg`;
</script>

{#if size === 'default'}
	<span
		class="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border border-slate-200"
	>
		<img src={avatarUrl} alt="User" />
	</span>
{:else}
	<span
		class="w-7 h-7 rounded-full flex items-center justify-center overflow-hidden border border-slate-200"
	>
		<img src={avatarUrl} alt="User" />
	</span>
{/if}
