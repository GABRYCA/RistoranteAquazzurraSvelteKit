<script>
    import {onMount} from "svelte";
    import { t } from '$lib/translations';

    onMount(() => {
        window.$('[data-bs-toggle="tooltip"]').tooltip();
    });

    let hour = new Date().getHours();
    let openingHour = 8;
    let closingHour = 22;
    let isOpen = hour >= openingHour && hour < closingHour;
    let statusMessage = isOpen ? $t('locale.TimetablesOpen') : $t('locale.TimetablesClosed');
    let sunIconVisible = isOpen;
    let moonIconVisible = !isOpen;

    $: {
        hour = new Date().getHours();
        isOpen = hour >= openingHour && hour < closingHour;
        statusMessage = isOpen ? 'Aperti' : 'Chiusi';
        sunIconVisible = isOpen;
        moonIconVisible = !isOpen;
    }
</script>

<svelte:head>
    <title>Orari - Ristorante Aquazzurra</title>
    <meta name="description" content="Orari di apertura del Ristorante Aquazzurra Aquazzurra di Cannobio, sul Lago Maggiore. Il ristorante è aperto tutti i giorni dalle 8:00 alle 22:00.">
</svelte:head>

<!-- Content -->
<div class="row mx-3 mx-lg-5 align-content-center">
    <div class="col px-0">

        <!-- Titolo pagina e orari -->
        <div class="row">
            <div class="col">
                <h1 class="text-center my-4 shadow rounded pt-1 pb-1" data-aos="fade-up"><i class="fas fa-utensils me-2" style="color: #7bb5d3"></i> {$t('locale.TimetablesPageTitle')} <i class="fas fa-clock ms-2" style="color: #7bb5d3"></i></h1>
                <div class="card shadow p-4" data-aos="fade-up" data-aos-delay="100">
                    <div class="card-body">
                        <p class="card-text text-center fs-4">{$t('locale.TimetablesTextTimeTitle')}</p>
                        <div class="d-flex justify-content-center align-items-center mb-3">
                            <span class="badge bg-success me-2 fs-5">8:00</span>
                            <i class="fas fa-long-arrow-alt-right"></i>
                            <span class="badge bg-danger ms-2 fs-5">22:00</span>
                        </div>
                        <p class="card-text text-center thin-text fs-4">{$t('locale.TimetablesTextTimeBookInfo')} <br><a class="link-dark text-decoration-none" href="tel:+3903231991099" data-bs-toggle="tooltip" data-bs-placement="top" title="{$t('locale.TimetablesUsDialNumber')}">+39 0323 199 1099</a></p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Schema orario -->
        <div class="row">
            <div class="col">
                <div class="card shadow p-4 mt-4" data-aos="fade-up" data-aos-delay="200">
                    <div class="card-body">
                        <h2 class="text-center mb-4" style="color: white; padding: 0.5rem; border-radius: 0.5rem;">{$t('locale.TimetablesTitle')}</h2>
                        <div class="d-flex justify-content-center align-items-center">
                            <div class="circle bg-success" data-aos="zoom-in" data-aos-delay="300"><span class="hour">8</span></div>
                            <div class="line bg-success" data-aos="fade-right" data-aos-delay="400"></div>
                            <div class="circle bg-danger" data-aos="zoom-in" data-aos-delay="500"><span class="hour">22</span></div>
                        </div>
                        <div class="d-flex justify-content-center align-items-center mt-3">
                            <i class="fas fa-sun fa-2x me-3" style="color: #ffc058;" data-aos="fade-right" data-aos-delay="800"></i>
                            <p class="fs-4 mt-3 text-center thin-text">{$t('locale.TimetablesOpeningHours')}</p>
                            <i class="fas fa-moon fa-2x ms-3" style="color: #8ac5ff;" data-aos="fade-left" data-aos-delay="900"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sezione dinamica -->
        <div class="row">
            <div class="col">
                <div class="card shadow p-4 mt-4" data-aos="fade-up" data-aos-delay="300">
                    <div class="card-body">
                        <h2 class="text-center mb-4" style="background: linear-gradient(to right, #7bb5d3, #a1d8f1); box-shadow: 0 4px 15px rgba(123, 181, 211, 0.6); color: white; padding: 0.5rem; border-radius: 0.5rem;">{$t('locale.TimetablesStatusTitle')}</h2>
                        <div class="d-flex justify-content-center align-items-center">
                            {#if sunIconVisible}
                                <i class="fas fa-sun fa-3x me-3 rounded-5 p-2" id="sun-icon" style="color: #ffc058;"></i>
                            {/if}
                            <p class="fs-4 me-3 mt-3" style="color: {sunIconVisible ? '#ffc058' : '#8ac5ff'}">{statusMessage}</p>
                            {#if moonIconVisible}
                                <i class="fas fa-moon fa-3x ms-3 rounded-5 p-2" id="moon-icon" style="color: #8ac5ff;"></i>
                            {/if}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Disclaimer -->
        <div class="row">
            <div class="col">
                <div class="card shadow p-4 mt-4" data-aos="fade-up" data-aos-delay="400">
                    <div class="card-body">
                        <h2 class="text-center mb-4" style="background: linear-gradient(to right, #7bb5d3, #a1d8f1); box-shadow: 0 4px 15px rgba(123, 181, 211, 0.6); color: white; padding: 0.5rem; border-radius: 0.5rem;">{$t('locale.TimetablesDisclaimerTitle')}</h2>
                        <p class="card-text text-center thin-text fs-6">{$t('locale.TimetablesDisclaimerText1')}</p>
                        <p class="card-text text-center thin-text fs-6">{$t('locale.TimetablesDisclaimerText2')}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

<style>

    .bg-success {
        background: linear-gradient(to right, #7bb5d3, #a1d8f1);
    }

    .bg-danger {
        background: linear-gradient(to right, #a1d8f1, #7bb5d3);
    }

    h2 {
        background: linear-gradient(to right, #7bb5d3, #a1d8f1);
        box-shadow: 0 4px 15px rgba(123, 181, 211, 0.6);
    }

    @keyframes color-change-sun {
        0% { background-color: #ffc058; }
        25% { background-color: #f0f8ff; }
        50% { background-color: #c6eaf5; }
        75% { background-color: #a1d8f1; }
        100% { background-color: #8ac5ff; }
    }

    @keyframes color-change-moon {
        0% { background-color: #8ac5ff; }
        25% { background-color: #a1d8f1; }
        50% { background-color: #c6eaf5; }
        75% { background-color: #f0f8ff; }
        100% { background-color: #ffc058; }
    }

    #sun-icon {
        animation-name: color-change-sun;
        animation-duration: 24s;
        animation-iteration-count: infinite;
        animation-direction: alternate-reverse;
    }

    #moon-icon {
        animation-name: color-change-moon;
        animation-duration: 24s;
        animation-iteration-count: infinite;
        animation-direction: alternate-reverse;
    }
</style>