<script context="module">
	import * as d3 from 'd3';
	export const hydrate = false;
	export async function load({ page, fetch }) {
		const res = await fetch(`https://archive.org/metadata/fuori-fase`);
		const metadata = await res.json();
		return {
			props: {
				files: metadata.files
			}
		};
	}
</script>

<script>
	export let files;
</script>

<h1>viz 1</h1>

{#if files.length}
	{#each files as file}
		<h6>{file.name}</h6>
	{/each}
{/if}
