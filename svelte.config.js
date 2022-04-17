import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: `@import 'src/styles/_mixins.scss';`
		},
		postcss: true
	}),

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$components: resolve('src/components'),
					$assets: resolve('static'),
					$styles: resolve('src/styles')
				}
			}
		}
	},

	compilerOptions: {
		css: true,
	},
};

export default config;
