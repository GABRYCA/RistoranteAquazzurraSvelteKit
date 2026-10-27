// See https://svelte.dev/docs/kit/types#app
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface Window {
		$: any;
	}

	const AOS: {
		init: (options?: Record<string, unknown>) => void;
	};
}

export {};
