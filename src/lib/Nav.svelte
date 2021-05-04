<script>
	import undpLogo from '$lib/assets/undp_logo.png';
	import dliLogo from '$lib/assets/dli_logo.png';
	export let section;
</script>

<nav class="navbar navbar-expand-md sticky-top navbar-light bg-white shadow-sm">
	<div class="container-fluid">
		<a class="navbar-brand" sveltekit:prefetch href="/">
			<img src={undpLogo} class="me-3" alt="UNDP logo" width="auto" height="50" />
			<img src={dliLogo} alt="DLI logo" width="auto" height="38" />
		</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
				<li class="nav-item">
					<a sveltekit:prefetch href="/about" class="nav-link" class:active={section === 'about'}
						>About the project</a
					>
				</li>
				<li class="nav-item">
					<a href="/" download class="btn btn-sm btn-outline-primary" role="button"
						>Download the report</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
