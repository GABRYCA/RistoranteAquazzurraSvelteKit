import { deLocalizeUrl } from '#lib/paraglide/runtime.js';

/** @type {import('@sveltejs/kit/hooks').Reroute} */
export const reroute = ({ url }) => deLocalizeUrl(url).pathname;
