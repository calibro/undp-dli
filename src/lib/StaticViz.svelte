<script>
	export let sections;
</script>

{#each sections as section}
	<div class="row my-3 border-bottom border-light">
		<div class="col-4">
			<h4>{section.title}</h4>
			<p>{section.description}</p>
		</div>
		<div class="col-8">
			<div class="d-flex justify-content-center">
				<img class="img-fluid" src={section.img_path.default} alt={section.title} />
			</div>
		</div>
	</div>
{/each}
