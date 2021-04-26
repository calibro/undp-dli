<script>
	import * as d3 from 'd3';
	import { fade } from 'svelte/transition';
	import { tweened, spring } from 'svelte/motion';
	import Path from './Path.svelte';
	export let superdata = [];

	const width = 700;
	const height = 500;
	const margin = { top: 0, right: 0, bottom: 0, left: 0 };
	const chartWidth = width - margin.left - margin.right;
	const chartHeight = height - margin.top - margin.bottom;

	//let data = spring(superdata, { stiffness: 0.1, damping: 0.6 });
	let data = superdata.map((d) => d);

	function changeData() {
		data = superdata.filter((d, i) => i < 100 + Math.random() * 100);
		//data = superdata.filter((d, i) => d.column !== 'pride');
	}

	$: streams = [...new Set(data.map((d) => d.column))];
	$: groups = d3.rollup(
		data,
		(v) => {
			const local = d3.rollup(
				v,
				(z) => z[0].frequency,
				(d) => d.column
			);
			return local;
		},
		(d) => d.date
	);

	$: series = d3
		.stack()
		.keys(streams)
		.value((data, key) => {
			return data[1].has(key) ? data[1].get(key) : 0;
		})
		.offset(d3.stackOffsetWiggle)
		.order(d3.stackOrderInsideOut)(groups);

	$: xScale = d3
		.scaleTime()
		.domain(d3.extent(data, (d) => d.date))
		.range([0, chartWidth]);

	$: yScale = d3
		.scaleLinear()
		.domain([
			d3.min(series, (d) => d3.min(d, (d) => d[0])),
			d3.max(series, (d) => d3.max(d, (d) => d[1]))
		])
		.range([chartHeight, 0]);

	$: colorScale = d3.scaleOrdinal().domain(streams).range(d3.schemeCategory10);

	// $: area = d3
	// 	.area()
	// 	.x((d) => xScale(d.data[0]))
	// 	.y0((d) => yScale(d[0]))
	// 	.y1((d) => yScale(d[1]));
</script>

<button on:click={changeData}>change data</button>
<svg {width} {height}>
	<g transform={`translate(${margin.left}, ${margin.top})`}>
		{#each series as stream (stream.key)}
			<!-- <path d={area(stream)} fill={color(stream.key)} /> -->
			<Path
				fill={colorScale(stream.key)}
				data={stream.map((d) => {
					return { x: xScale(d.data[0]), y: yScale(d[0]), y1: yScale(d[1]) };
				})}
			/>
		{/each}
	</g>
</svg>
