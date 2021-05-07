<script>
	import { getContext } from 'svelte';
	import { area, curveStep, scaleLinear, scaleBand, max, extent, format } from 'd3';
	export let data;
	export let width;
	export let height;

	const margin = {
		top: 10,
		right: 10,
		bottom: 20,
		left: 30
	};

	console.log(data);
	const chartHeight = height - margin.top - margin.bottom;

	$: chartWidth = width - margin.left - margin.right;

	$: xScale = scaleBand()
		.domain(data.map((d) => d.x))
		.range([0, chartWidth]);

	$: yScale = scaleLinear()
		.domain([0, max(data, (d) => d.y)])
		.range([chartHeight, 0]);

	let path = area()
		.defined((d) => !isNaN(d.y))
		.x((d) => xScale(d.x))
		.y1((d) => yScale(d.y))
		.y0((d) => yScale(0))
		.curve(curveStep);

	$: yTicks = yScale.ticks(3);
	$: xTicks = [xScale.domain()[0], 0, xScale.domain()[1]];

	const hovered = getContext('hovered');
</script>

{#if width && height && data}
	<svg {width} {height}>
		<g transform="translate({margin.left}, {margin.top})">
			{#each yTicks as y}
				<g class="tick" opacity="1" transform="translate(0,{yScale(y)})">
					<line stroke="#DEE2E6" x2={chartWidth} />
					<text
						dominant-baseline="middle"
						text-anchor="end"
						fill="currentColor"
						x="-3"
						font-size="10px"
					>
						{y}
					</text>
				</g>
			{/each}
		</g>

		<!-- <g transform="translate({margin.left}, {chartHeight + margin.top})">
		{#each xTicks as x}
			<g transform="translate({xScale(x)},0)">
				<text
					dominant-baseline="hanging"
					fill="currentColor"
					text-anchor="middle"
					y={6}
					font-size="10px"
				>
					{x ? format('+')(x) : x}
				</text>
			</g>
		{/each}
	</g> -->

		<g transform="translate({margin.left},{margin.top})">
			<path d={path(data)} class="evolution" />
			{#if $hovered}
				<line
					class="selectedDay"
					x1={xScale($hovered)}
					y1="0"
					x2={xScale($hovered)}
					y2={chartHeight}
				/>
			{/if}
		</g>
	</svg>
{/if}

<style>
	.evolution {
		fill: var(--bs-info);
	}

	.selectedDay {
		stroke: var(--bs-danger);
	}
</style>
