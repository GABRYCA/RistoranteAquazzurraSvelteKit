<script>
    import {onMount} from "svelte";
    import 'bootstrap/dist/css/bootstrap.min.css';
    import scriptSrc from 'bootstrap/dist/js/bootstrap.bundle.min.js?url';
    import '@fortawesome/fontawesome-free/css/all.min.css';
    import { t, locale, locales } from '$lib/translations';
    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();

    const handleChange = ({ currentTarget }) => {
        const { value } = currentTarget;
        document.cookie = `lang=${value} ;`;
        window.location.reload();
    };

    onMount(() => {
        // Close navbar when open another page, with animation
        document.querySelectorAll('.nav-link').forEach((element) => {
            element.addEventListener('click', () => {
                document.querySelector('.navbar-collapse').classList.remove('show');
            });
        });

        window.$('[data-bs-toggle="tooltip"]').tooltip();

        // Init AOS
        AOS.init({
            once: true,
        });
    });
</script>

<svelte:head>
    <title>Ristorante Aquazzurra</title>
    <meta name="description" content="Ristorante Aquazzurra" />
    <script rel="preload" src={scriptSrc}></script>
</svelte:head>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light pb-2 pt-2 pb-lg-1 pt-lg-1 shadow">
    <div class="container">
        <a class="navbar-brand" href="/">{$t('locale.NavbarTitle')}</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link rounded-5 px-lg-4" href="/">{$t('locale.NavbarHome')}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link rounded-5 px-lg-4" href="/galleria">{$t('locale.NavbarGallery')}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link rounded-5 px-lg-4" href="/contatti">{$t('locale.NavbarContacts')}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link rounded-5 px-lg-4" href="/orari">{$t('locale.NavbarTimetables')}</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

{@render children?.()}

<!-- Footer -->
<footer class="footer pb-3 pt-4 mt-5 shadow">
    <div class="container text-center">
        <p class="thin-text">{@html $t('locale.FooterMessage')}</p>
    </div>
    <select class="form-select" bind:value="{$locale}" onchange={handleChange}>
        {#each $locales as value}
            <option value="{value}">{$t(`lang.${value}`)}</option>
        {/each}
    </select>
</footer>