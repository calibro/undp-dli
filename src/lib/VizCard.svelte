<script>
	export let title;
	export let route;
	export let img;
	export let number;
</script>

<div class="d-flex flex-column">
	{#if img}
		<img src={img} alt={title} />
	{/if}

	<h4>{number + 1} - {title}</h4>

	<a sveltekit:prefetch href={route} class="btn btn-primary" role="button">Discover</a>
</div>

<style>
</style>
