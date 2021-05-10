<script context="module">
	import { base } from '$app/paths';
    import { dev } from '$app/env';
	//export const ssr = false;
	export async function load({ page, fetch }) {

		const baseUrl = dev?page.path:base+page.path

		const res = await fetch(`${baseUrl}/data.json`);
		const res2 = await fetch(`${baseUrl}.json`);
		const info = await res2.json();
		const data = await res.json();
		return {
			props: {
				networks: data.networks,
				info: info.data
			}
		};
	}
</script>

<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { descending } from 'd3';
	import NetworkCytoScape from '$lib/NetworkCytoScape.svelte';
	import PageIntro from '$lib/PageIntro.svelte';
	import Areachart from '$lib/Areachart.svelte';
	export let networks;
	export let info;
	let w;
	let languages = Array.from(Object.keys(networks))
	let selectedLanguage = languages[0];


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
			<div class="col-3 overflow-scroll h-100 border-end">
				<div class="my-4">
					<label for="language" class="form-label">Language</label>
					<select
						bind:value={selectedLanguage}
						class="form-select"
						id="language"
						aria-label="Language"
					>
						{#each languages as language}
							<option value={language}>
								{language}
							</option>
						{/each}
					</select>
				</div>
				<div bind:clientWidth={w} class="w-100">
					{#each distributionCharts as chart}
					<div class="mb-4">
						<h5>
							{chart.title}
						</h5>
						<p class="mb-2">{chart.desc}</p>
					
					<div class="bg-white border rounded">
						<Areachart width={w} height={110} data={makeData(networks[selectedLanguage].nodes, chart.key)} />
					</div>
				</div>
				{/each}
				</div>
			</div>
			<div class="col-9">
				<div class="w-100 h-100">
					<NetworkCytoScape data={networks[selectedLanguage]} />
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
