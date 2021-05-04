<script context="module">
	export const ssr = false;
	export async function load({ page, fetch }) {
		const res = await fetch(`${page.path}/data.json`);
		// const res2 = await fetch(`${page.path}.json`);
		// const info = await res2.json();
		const dataTable = await res.json();
		return {
			props: {
				network: dataTable.network
				//info: info.data
			}
		};
	}
</script>

<script>
	import { UndirectedGraph } from 'graphology';
	// import { Sigma } from 'sigma';

	export let network;
	let container;

	console.log(network);

	const graph = new UndirectedGraph();

	network.nodes.forEach((node) => {
		graph.addNode(node.id, node);
	});

	network.edges.forEach((edge) => {
		graph.addEdge(edge.source, edge.target, {
			color: '#CCC',
			size: edge.size
		});
	});

	// graph.addNode('Jessica', {
	// 	label: 'Jessica',
	// 	x: 1,
	// 	y: 1,
	// 	color: '#FF0',
	// 	size: 10
	// });

	// graph.addNode('Truman', {
	// 	label: 'Truman',
	// 	x: 0,
	// 	y: 0,
	// 	color: '#00F',
	// 	size: 5
	// });

	// graph.addEdge('Jessica', 'Truman', {
	// 	color: '#CCC',
	// 	size: 1
	// });

	$: if (container) {
		//const renderer = new Sigma(graph, container);
	}
</script>

<div bind:this={container} id="network" />

<style>
	#network {
		width: 700px;
		height: 700px;
	}
</style>
