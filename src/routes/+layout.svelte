<script>
	import { page } from '$app/state';
	import { locales, localizeHref, setLocale, getLocale } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages.js';
	import { onMount } from "svelte";
	import 'bootstrap/dist/css/bootstrap.min.css';
	import scriptSrc from 'bootstrap/dist/js/bootstrap.bundle.min.js?url';
	import '@fortawesome/fontawesome-free/css/all.min.css';

	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();

	let currentLocale = $state(getLocale());

	/**
	 * @param {{ currentTarget: HTMLSelectElement }} event
	 */
	const handleChange = (event) => {
		const { value } = event.currentTarget;
		setLocale(/** @type {any} */ (value));
		window.location.reload();
	};

	onMount(() => {
		currentLocale = getLocale();

		// Close navbar when open another page, with animation
		document.querySelectorAll('.nav-link').forEach((element) => {
			element.addEventListener('click', () => {
				const navbarCollapse = document.querySelector('.navbar-collapse');
				if (navbarCollapse) {
					navbarCollapse.classList.remove('show');
				}
			});
		});

		// @ts-ignore - jQuery and Bootstrap tooltip
		if (window.$ && window.$('[data-bs-toggle="tooltip"]').tooltip) {
			window.$('[data-bs-toggle="tooltip"]').tooltip();
		}

		// @ts-ignore - AOS library
		if (typeof AOS !== 'undefined') {
			AOS.init({ once: true });
		}
	});

	/**
	 * Get language name for display
	 * @param {string} lang
	 */
	function getLangName(lang) {
		switch(lang) {
			case 'it': return m.LangIt();
			case 'en': return m.LangEn();
			case 'de': return m.LangDe();
			default: return lang;
		}
	}
</script>

<svelte:head>
	<title>Ristorante Aquazzurra</title>
	<meta name="description" content="Ristorante Aquazzurra" />
	<script src={scriptSrc}></script>
</svelte:head>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light pb-2 pt-2 pb-lg-1 pt-lg-1 shadow">
	<div class="container">
		<a class="navbar-brand" href="/">{m.NavbarTitle()}</a>
		<button
			class="navbar-toggler navbar-toggler-right"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item">
					<a class="nav-link rounded-5 px-lg-4" href="/">{m.NavbarHome()}</a>
				</li>
				<li class="nav-item">
					<a class="nav-link rounded-5 px-lg-4" href="/galleria">{m.NavbarGallery()}</a>
				</li>
				<li class="nav-item">
					<a class="nav-link rounded-5 px-lg-4" href="/contatti">{m.NavbarContacts()}</a>
				</li>
				<li class="nav-item">
					<a class="nav-link rounded-5 px-lg-4" href="/orari">{m.NavbarTimetables()}</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

{@render children?.()}

<!-- Footer -->
<footer class="footer pb-3 pt-4 mt-5 shadow">
	<div class="container text-center">
		<p class="thin-text">
			{m.FooterCopyright()} - {m.FooterAddress()} - <a class="link-body-emphasis" href="https://anonymousgca.eu" target="_blank" style="text-decoration: none !important;" data-bs-toggle="tooltip" data-bs-placement="top" title={m.FooterCreditsTooltip()}>{m.FooterCredits()}</a>
		</p>
	</div>
	<select class="form-select" value={currentLocale} onchange={handleChange}>
		{#each locales as lang (lang)}
			<option value={lang}>{getLangName(lang)}</option>
		{/each}
	</select>
</footer>

<!-- Hidden links for locale alternatives (SEO) -->
<div style="display:none">
	{#each locales as locale (locale)}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>
