<script context="module">
	// import * as d3 from 'd3';
	// export const hydrate = false;
	// export async function load({ page, fetch }) {
	// 	const res = await fetch(`emotions.tsv`);
	// 	const dataTable = await res.text();

	// 	return {
	// 		props: {
	// 			emotions: d3.tsvParse(dataTable, d3.autoType)
	// 		}
	// 	};
	// }
</script>

<script>
	export let emotions = [];
	import Streamgraph from '$lib/streamgraph/Streamgraph.svelte';
</script>

{#if emotions && emotions.length}
	<Streamgraph superdata={emotions} />
{/if}
