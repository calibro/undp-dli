import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter(),
		paths: { base: "/undp-dli" },
		vite: {
			ssr: { noExternal: ["d3","graphology"] }
		},
	},
	
};

export default config;
