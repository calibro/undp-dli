<script context="module">
	export const ssr = false;
	export async function load({ page, fetch }) {
		const res = await fetch(`${page.path}/data.json`);
		const res2 = await fetch(`${page.path}.json`);
		const info = await res2.json();
		const dataTable = await res.json();
		return {
			props: {
				network: dataTable.network,
				info: info.data
			}
		};
	}
</script>

<script>
	import { getContext, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { descending } from 'd3';
	import NetworkCytoScape from '$lib/NetworkCytoScape.svelte';
	import PageIntro from '$lib/PageIntro.svelte';
	import Areachart from '$lib/Areachart.svelte';
	export let network;
	export let info;
	let w;

	let hoveredStore = writable(null);
	setContext('hovered', hoveredStore);

	const distributionCharts = [
		{ title: 'Numbers of Nodes', desc: 'Lorem Ipsum', key: 'n_nodes' },
		{ title: 'Density', desc: 'Lorem Ipsum', key: 'density' },
		{ title: 'Global Clustering', desc: 'Lorem Ipsum', key: 'global_clustering' }
	];

	function makeData(data, key) {
		return data
			.map((d) => {
				return { x: d.id, y: +d.attributes[key] };
			})
			.sort((a, b) => descending(a.y, b.y ? b.y : 0));
	}
</script>

<div class="container">
	<PageIntro title={info.title} />
</div>
<div class="bg-light w-100 containerViz">
	<div class="container h-100 d-flex flex-column">
		<div class="row flex-grow-1 overflow-hidden">
			<div bind:clientWidth={w} class="col-3 overflow-scroll h-100 border-end">
				{#each distributionCharts as chart}
					<div>
						<h5>
							{chart.title}
						</h5>
						<p>{chart.desc}</p>
					</div>
					<Areachart width={w} height={110} data={makeData(network.nodes, chart.key)} />
				{/each}
			</div>
			<div class="col-9">
				<div class="w-100 h-100">
					<!-- <Network data={network} /> -->
					<NetworkCytoScape data={network} />
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.containerViz {
		height: calc(100vh - 76px);
	}
</style>
