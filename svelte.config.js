import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: true,
			strict: true
		}),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				console.warn(`Warning: ${message} - ${path} (referenced from ${referrer})`);
			},
			handleMissingId: ({ path, id, referrers, message }) => {
				console.warn(`Warning: ${message} - ${id} in ${path} (referenced from ${referrers})`);
			},
			origin: 'https://ristoranteaquazzurrasveltekit.netlify.app'
		}
	}
};

export default config;
