<script context="module">
	import { base } from '$app/paths';
    import { dev } from '$app/env';

	export async function load({ page, fetch }) {
		const baseUrl = dev?page.path:base+page.path
		const res = await fetch(`${baseUrl}/data.json`);
		const res2 = await fetch(`${baseUrl}.json`);
		//const res = await fetch(`/circlepack.tsv`);
		const info = await res2.json();
		const dataTable = await res.json();
		return {
			props: {
				emotions: dataTable.emotions,
				info: info.data
			}
		};
	}
</script>

<script>
	import { extent } from 'd3';
    import Streamgraph from '$lib/streamgraph/Streamgraph.svelte';
    import LinechartStream from '$lib/LinechartStream.svelte';
	import PageIntro from '$lib/PageIntro.svelte';
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';
	export let emotions;
	export let info;
	let w;
	let h;
    let languages = Object.keys(emotions)
	let selectedLanguage = languages[0];
	
    let macroCategories = ['all',...new Set(emotions[selectedLanguage].evolution.map(d=>d.Macrocategory))];
    let selectedMacroCategory = macroCategories[0]

	$: data = emotions[selectedLanguage].evolution
		.map((d) => {
            return {...d, date:new Date(d.date)}
		})
		.filter((d) => selectedMacroCategory !== 'all'?selectedMacroCategory === d.Macrocategory:true);
    
    $: dataLinechart = emotions[selectedLanguage].valid
		.map((d) => {
            return {y: d.value, x:new Date(d.Date)}
		})
    
    $: setContext('brushExtentDefault', extent(dataLinechart, d=>d.x));

    $: brushExtentStore = writable(extent(dataLinechart, d=>d.x));
	$: setContext('brushExtent', brushExtentStore);

</script>

<div class="container">
	<PageIntro title={info.title} />
</div>
<div class="bg-light w-100 containerViz">
	<div class="container h-100 d-flex flex-column">
		<div class="row border-bottom py-2">
			<div class="col-md-3">
				<div class="mb-3">
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
			</div>
			<div class="col-md-4">
				<div class="mb-3">
					<label for="macroCategory" class="form-label">Macro category</label>
					<select bind:value={selectedMacroCategory} class="form-select" id="macroCategory" aria-label="macroCategory">
						{#each macroCategories as macroCategory}
							<option value={macroCategory}>
								{macroCategory}
							</option>
						{/each}
					</select>
				</div>
			</div>
		</div>
		<div class="row flex-grow-1">
			<div class="col-12">
				<div bind:clientWidth={w} bind:clientHeight={h} class="w-100 h-100">
					<Streamgraph width={w} height={h} {data} />
				</div>
			</div>
		</div>
		<div class="row py-2 border-top">
            <div class="col-12">
                <p class="text-muted mb-0"><small>Valid tweets</small></p>
                <LinechartStream width={w} data={dataLinechart}></LinechartStream>
            </div>
		</div>
	</div>
</div>

<style>
	.containerViz {
		height: calc(100vh - 76px);
	}
</style>
