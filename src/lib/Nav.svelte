<script>
	export let section;
</script>

<nav>
	<ul>
		<li><a sveltekit:prefetch href="/" class:selected={section === 'home'}>home</a></li>
		<li><a sveltekit:prefetch href="/viz1" class:selected={section === 'viz1'}>viz1</a></li>
		<li><a sveltekit:prefetch href="/viz2" class:selected={section === 'viz2'}>viz2</a></li>
		<li>
			<a sveltekit:prefetch href="/events" class:selected={section === 'events'}>events</a>
		</li>
		<li class="about">
			<a sveltekit:prefetch href="/about" class:selected={section === 'about'}>about</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		/* background-color: rgba(255, 102, 0, 0.05); */
		border-bottom: 1px solid #ff6600;
		color: var(--fg-light);
		font-weight: 300;
		padding: 0 1em;
	}
	.icon {
		display: block;
		width: 1em;
		height: 1em;
		float: left;
		font-size: 2em;
		position: relative;
		top: 0.4em;
		box-sizing: border-box;
		margin: 0 0.5em 0 0;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	ul::after {
		content: '';
		display: block;
		clear: both;
	}
	li {
		display: block;
		float: left;
	}
	.about {
		float: right;
	}
	.selected {
		position: relative;
		display: inline-block;
		color: var(--fg);
	}
	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: #ff6600;
		display: block;
		bottom: 0;
	}
	a {
		color: inherit;
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		font-weight: 500;
	}
	@media (min-width: 400px) {
		.icon {
			margin: 0 0.5em 0 0;
		}
		li {
			display: inline-block;
		}
	}
</style>
