import { paraglideVitePlugin } from '@inlang/paraglide-js';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import devtoolsJson from 'vite-plugin-devtools-json';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the app, except for dependencies. Can be removed in Svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				fallback: undefined,
				precompress: true,
				strict: true
			}),
			prerender: {
				handleHttpError: 'warn',
				handleMissingId: 'warn'
			},
			paths: {
				origin: 'https://ristoranteaquazzurrasveltekit.netlify.app'
			}
		}),
		devtoolsJson(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		})
	]
});
