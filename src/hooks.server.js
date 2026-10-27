import { paraglideMiddleware } from '#lib/paraglide/server.js';

/** @type {import('@sveltejs/kit/hooks').Handle} */
const handleParaglide = ({ event, resolve }) => paraglideMiddleware(event.request, ({ request, locale }) => {
	return resolve(
		{ ...event, request },
		{
			transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
		}
	);
});

/** @type {import('@sveltejs/kit/hooks').Handle} */
export const handle = handleParaglide;
