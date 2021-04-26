<script>
	import { Icon } from 'sveltestrap';
	export let title = 'My mock title super good';
	export let description =
		'Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui.';
</script>

<div class="row">
	<div class="col-12">
		<a sveltekit:prefetch href="/"><Icon name="arrow-bar-left" /> Home</a>
	</div>
</div>
<div class="row">
	<div class="col-md-5">
		<h1>{title}</h1>
	</div>
	<div class="col-md-7">
		<p>
			{description}
		</p>
	</div>
</div>
