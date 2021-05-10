<script>
	import {rollup,stack,stackOffsetWiggle,stackOrderInsideOut,scaleTime,scaleLinear,min, max, area,scaleOrdinal,schemeCategory10,timeFormat} from 'd3';
	// import { fade } from 'svelte/transition';
	// import { tweened, spring } from 'svelte/motion';
	// import Path from './Path.svelte';
	import { getContext } from 'svelte';
	export let data = [];
	export let width;
	export let height;
	const brushExtent = getContext('brushExtent');
	const margin = { top: 20, right: 0, bottom: 20, left: 0 };
	$: chartWidth = width - margin.left - margin.right;
	$: chartHeight = height - margin.top - margin.bottom;

	$: streams = [...new Set(data.map((d) => d.Category))];
	$: groups = rollup(
		data,
		(v) => {
			const local = rollup(
				v,
				(z) => z[0].frequency,
				(d) => d.Category
			);
			return local;
		},
		(d) => d.date
	);

	$: series = stack()
		.keys(streams)
		.value((data, key) => {
			return data[1].has(key) ? data[1].get(key) : 0;
		})
		.offset(stackOffsetWiggle)
		.order(stackOrderInsideOut)(groups);

	$: xScale = scaleTime()
		//.domain(d3.extent(data, (d) => d.date))
		.domain($brushExtent)
		.range([0, chartWidth]);

	$: yScale = scaleLinear()
		.domain([
			min(series, (d) => min(d, (d) => d[0])),
			max(series, (d) => max(d, (d) => d[1]))
		])
		.range([chartHeight, 0]);

	$: colorScale = scaleOrdinal().domain(streams).range(schemeCategory10);

	$: areaStack = area()
		.x((d) => xScale(d.data[0]))
		.y0((d) => yScale(d[0]))
		.y1((d) => yScale(d[1]));

	$: xTicks = xScale.ticks()
</script>

<svg {width} {height}>
	{#if series.length && width && height}
	<g transform={`translate(${margin.left}, ${margin.top})`}>
		{#each series as stream (stream.key)}
			<path d={areaStack(stream)} fill={colorScale(stream.key)} />
		{/each}
	</g>

	<g transform="translate({margin.left}, {chartHeight + margin.top})">
		{#each xTicks as x}
			<g transform="translate({xScale(x)},0)">
				<line stroke="#DEE2E6" y2={-chartHeight} />
				<text
					dominant-baseline="hanging"
					fill="currentColor"
					text-anchor="middle"
					y={6}
					font-size="10px"
				>
					{timeFormat('%b %Y')(x)}
				</text>
			</g>
		{/each}
	</g>
	{/if}
</svg>
