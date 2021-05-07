<script>
	import { UndirectedGraph } from 'graphology';
	import { onMount } from 'svelte';

	export let data;
	let container;

	const settings = {};

	const graph = new UndirectedGraph();

	data.nodes.forEach((node) => {
		graph.addNode(node.id, { ...node, size: node.size / 5 });
	});

	data.edges.forEach((edge) => {
		graph.addEdge(edge.source, edge.target, {
			color: '#CCC',
			size: edge.size / 4
		});
	});

	let Sigma;

	onMount(async () => {
		const module = await import('sigma');
		Sigma = module.default;
		const renderer = new Sigma.Sigma(graph, container, settings);
		renderer.on('clickNode', ({ node, captor, event }) => {
			console.log('Clicking:', node);
		});
	});
</script>

<div class="w-100 h-100" bind:this={container} />

<style>
	#network {
		width: 700px;
		height: 700px;
	}
</style>
