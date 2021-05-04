<script context="module">
	const images = import.meta.globEager('./_images/*.png');
	export async function load({ fetch, page }) {
		const res = await fetch(`/viz/${page.params.title}.json`);
		const json = await res.json();

		json.data.sections = json.data.sections.map((d) => {
			return { ...d, img_path: images['./_images/' + d.img] };
		});

		return {
			props: {
				data: json.data
			}
		};
	}
</script>

<script>
	import PageIntro from '$lib/PageIntro.svelte';
	import StaticViz from '$lib/StaticViz.svelte';
	export let data;
</script>

<div class="container">
	<PageIntro title={data.title} description={data.description} />
	<StaticViz sections={data.sections} />
</div>
