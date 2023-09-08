<script>
    import {onMount} from "svelte";
    import { browser } from '$app/environment';
    import '$lib/i18n';
    import { locale, waitLocale } from 'svelte-i18n';

    export const load = async () => {
        if (browser) {
            locale.set(window.navigator.language);
        }
        await waitLocale();
    }

    onMount(() => {
        // Close navbar when open another page, with animation
        document.querySelectorAll('.nav-link').forEach((element) => {
            element.addEventListener('click', () => {
                document.querySelector('.navbar-collapse').classList.remove('show');
            });
        });

        // Init Bootstrap Tooltip
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });

        // Init AOS
        AOS.init({
            once: true,
        });
    });
</script>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light pb-2 pt-2 pb-lg-1 pt-lg-1 shadow">
    <div class="container">
        <a class="navbar-brand" href="/">Ristorante Aquazzurra</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link rounded-5 px-lg-4" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link rounded-5 px-lg-4" href="/galleria">Galleria</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link rounded-5 px-lg-4" href="/contatti">Posizione e Contatti</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link rounded-5 px-lg-4" href="/orari">Orari di Apertura</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<slot></slot>

<!-- Footer -->
<footer class="footer pb-3 pt-4 mt-5 shadow">
    <div class="container text-center">
        <p class="thin-text">&copy; 2023 Ristorante Aquazzurra. Tutti i diritti riservati. - Viale Vittorio Veneto 37 - 28822 Cannobio (VB) - Italia - +39 0323 1991099 - <a class="link-body-emphasis" href="https://anonymousgca.eu" target="_blank" style="text-decoration: none !important;" data-bs-toggle="tooltip" data-bs-placement="top" title="Developer">credits</a></p>
    </div>
</footer>