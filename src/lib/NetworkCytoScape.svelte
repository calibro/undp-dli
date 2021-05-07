<script>
	import cytoscape from 'cytoscape';
	import { getContext } from 'svelte';
	import { onMount } from 'svelte';

	export let data;
	let container;

	const hovered = getContext('hovered');

	const cyElements = [];

	data.nodes.forEach((d) => {
		const elm = {
			group: 'nodes',
			data: d,
			position: { x: d.x, y: d.y },
			locked: true,
			grabbable: false,
			selectable: false,
			pannable: true
		};

		cyElements.push(elm);
	});

	data.edges.forEach((d) => {
		const elm = {
			group: 'edges',
			data: d,
			locked: true,
			grabbable: false,
			selectable: false
		};

		cyElements.push(elm);
	});

	onMount(async () => {
		// const module = await import('sigma');
		// Sigma = module.default;
		// const renderer = new Sigma.Sigma(graph, container, settings);
		// renderer.on('clickNode', ({ node, captor, event }) => {
		// 	console.log('Clicking:', node);
		// });
		const cy = cytoscape({
			container: container, // container to render in
			elements: cyElements,
			layout: {
				name: 'preset',
				fit: true
			},
			minZoom: 0.1,
			maxZoom: 2,
			userZoomingEnabled: true,
			boxSelectionEnabled: false,

			style: [
				{
					selector: 'node',
					style: {
						label: 'data(id)',
						width: 'data(size)',
						height: 'data(size)',
						'border-width': 1,
						'border-color': '#fff'
						//'overlay-color': '#fff'
					}
				},
				{
					selector: 'node.highlight',
					style: {
						'background-color': '#0d6efd'
					}
				},
				{
					selector: 'node.semitransp',
					style: { opacity: 0.2 }
				},
				{
					selector: 'edge',
					style: {
						width: 'data(size)',
						'line-color': '#ccc',
						opacity: 0.5
					}
				},
				{
					selector: 'edge.semitransp',
					style: { opacity: 0.2 }
				},
				{
					selector: 'label',
					style: {
						'text-outline-color': '#fff',
						'text-outline-width': 1
					}
				},
				{
					selector: 'core',
					style: {
						'active-bg-size': 0
					}
				}
			]
		});
		cy.on('tap', 'node', function (evt) {
			var node = evt.target;
			const id = node.id();
			hovered.set(id);
			console.log('tapped ' + node.id());
		});
		cy.on('mouseover', 'node', function (e) {
			var sel = e.target;
			// cy.elements()
			// 	.difference(sel.outgoers().union(sel.incomers()))
			// 	.not(sel)
			// 	.addClass('semitransp');
			sel.addClass('highlight'); //.outgoers().union(sel.incomers()).addClass('highlight');
		});
		cy.on('mouseout', 'node', function (e) {
			var sel = e.target;
			//cy.elements().removeClass('semitransp');
			sel.removeClass('highlight'); //.outgoers().union(sel.incomers()).removeClass('highlight');
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
