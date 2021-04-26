<script context="module">
	export async function load({ fetch }) {
		const getData = (resourceName) => fetch(resourceName).then((res) => res.json());
		const data = await getData(`/visualisations.json`);
		//console.log(data.visualisations);
		return {
			props: {
				visualisations: data.visualisations
			}
		};
	}
</script>

<script>
	import VizCard from '$lib/VizCard.svelte';
	export let visualisations;

	$: console.log(visualisations);
</script>

<div class="bg-dark">
	<div class="container text-white">
		<div class="row">
			<div class="col-12 text-center">
				<h1>Digital Lighthouse Initiative</h1>
				<p>Monitoring Hate Speech Using Big Data and Machine Learning</p>
			</div>
		</div>
	</div>
</div>

<div class="container">
	<div class="row">
		<div class="col-3">
			<h6 class="text-info">Introduction</h6>
		</div>
		<div class="col-6">
			<p>
				Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel
				scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras
				justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante
				venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac,
				vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere
				consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Maecenas
				faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes,
				nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
				vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
				tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
				risus.
			</p>
		</div>
	</div>
	<div class="row">
		{#each visualisations as visualisation, i}
			<div class="col-3">
				<VizCard title={visualisation.title} number={i} route={visualisation.route} />
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
</style>
