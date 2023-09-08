<script>
    import {onMount} from "svelte";

    onMount(() => {
        // Init tooltips
        let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    });
</script>

<svelte:head>
    <title>Home - Ristorante Aquazzurra</title>
</svelte:head>

<!-- Content -->
<div class="row mx-1 mx-lg-4">
    <div class="col">

        <!-- HERO -->
        <div class="row mt-4 align-items-center">
            <div class="col">
                <div id="hero-carousel" class="carousel slide shadow" data-bs-ride="carousel" data-aos="fade-up">
                    <div class="carousel-inner rounded" style="max-height: 89vh">
                        <div class="carousel-item active">
                            <div class="d-flex align-items-center justify-content-center">
                                <img src="/media/photos/webp/0008-optimized.webp" alt="Carousel 1" loading="lazy" class="d-block rounded w-100" />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="d-flex align-items-center justify-content-center">
                                <img src="/media/photos/webp/0010-optimized.webp" alt="Carousel 2" class="d-block rounded w-100" />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="d-flex align-items-center justify-content-center">
                                <img src="/media/photos/webp/0022-optimized.webp" alt="Carousel 3" class="d-block rounded w-100" />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="d-flex align-items-center justify-content-center">
                                <img src="/media/photos/webp/0007-optimized.webp" alt="Carousel 4" class="d-block rounded w-100" />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="d-flex align-items-center justify-content-center">
                                <img src="/media/photos/webp/0005-optimized.webp" alt="Carousel 5" loading="lazy" class="d-block rounded w-100" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-caption w-100 d-sm-block d-md-block d-flex align-items-center">
                        <h1 class="carousel-title pb-0 display-3 text-uppercase text-shadow text-center" style="font-family: Baskervville;" data-aos="zoom-in" data-aos-duration="750">Ristorante Aquazzurra</h1>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Precedente</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Successivo</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Sezione chi siamo -->
        <div class="row mt-4">
            <div class="col">
                <div class="row p-4 m-0 rounded shadow" style="background-color: #F2F2F2;" data-aos="fade-up" data-aos-duration="700">
                    <div class="col-md-12 text-center mb-3 rounded-5 pt-1 shadow text-light" style="background-color: #7BB5D3">
                        <h2 class="pt-1">Chi siamo</h2>
                    </div>
                    <div class="col-12 col-lg-5 p-0 p-md-auto mb-3 mb-lg-0">
                        <div class="row p-4 m-0 me-lg-3 h-100 rounded shadow" style="background-color: #F2F2F2;">
                            <div class="col-md-12 d-flex justify-content-center align-items-center text-center h-auto mb-3 rounded-5 pt-1 shadow">
                                <h2>Il Ristorante Aquazzurra</h2>
                            </div>
                            <div class="col-md-12 d-flex justify-content-center align-items-center px-0 px-md-auto">
                                <p class="text-center fs-5">Il Ristorante Aquazzurra è un ristorante situato nel resort Aquazzurra a Cannobio, sul Lago Maggiore. Il ristorante è aperto a tutti, non solo agli ospiti del resort, e offre un'ampia scelta di piatti della cucina italiana, preparati con ingredienti freschi e di qualità. Il ristorante è aperto tutti i giorni, a pranzo e a cena.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-7">
                        <div class="row p-5 h-100 rounded shadow" style="background-image: url('/media/photos/webp/0010-optimized.webp'); background-size: cover; background-attachment: fixed; background-position: bottom; min-height: 30vh">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sezione cibi -->
        <div class="row mt-4">
            <div class="col" data-aos="fade-up" data-aos-duration="700">
                <div class="row justify-content-around p-4 m-0 rounded shadow" data-aos="fade-in" style="background-color: #F2F2F2;">
                    <div class="col-md-12 text-center mb-3 rounded-5 pt-1 shadow text-light" style="background-color: #7BB5D3">
                        <h2>I nostri piatti</h2>
                    </div>
                    <!-- Antipasti -->
                    <div class="col-md-5 col-xxl-2 text-center mb-4 pt-3 rounded shadow food-bg" style="background-image: url('/media/photos/webp/antipasto-optimized.webp'); background-size: cover;">
                        <i class="fas fa-seedling fa-3x bg-light p-4 pb-3 pt-3 rounded-top" style="color: #7BB5D3;"></i>
                        <h4 class="bg-light rounded-top mb-0 pb-2 pt-2">Antipasti</h4>
                        <p class="bg-light rounded-bottom pb-2 px-2">Scopri i nostri antipasti freschi e gustosi, preparati con ingredienti di stagione e di qualità. Abbiamo una vasta scelta di insalate, verdure, formaggi, salumi e crostini.</p>
                    </div>
                    <!-- Primi -->
                    <div class="col-md-5 col-xxl-2 text-center mb-4 pt-3 rounded shadow food-bg" style="background-image: url('/media/photos/webp/primo-optimized.webp'); background-size: cover;">
                        <i class="fas fa-concierge-bell fa-3x p-4 pb-3 pt-3 bg-white rounded-top" style="color: #7BB5D3;"></i>
                        <h4 class="bg-white rounded-top mb-0 pb-2 pt-2">Primi</h4>
                        <p class="bg-white rounded-bottom pb-2 px-2">Non perderti i nostri primi piatti, dal sapore casalingo e ricco di tradizione. Ti proponiamo pasta fresca fatta in casa, risotti cremosi, gnocchi, lasagne e molto altro.</p>
                    </div>
                    <!-- Secondi -->
                    <div class="col-md-5 col-xxl-2 text-center mb-4 pt-3 rounded shadow food-bg" style="background-image: url('/media/photos/webp/secondo-optimized.webp'); background-size: cover;">
                        <i class="fas fa-drumstick-bite fa-3x p-4 pt-3 pb-3 bg-white rounded-top" style="color: #7BB5D3;"></i>
                        <h4 class="bg-white rounded-top mb-0 pb-2 pt-2 ">Secondi</h4>
                        <p class="bg-white rounded-bottom pb-2 px-2">Sfiziosi e succulenti, i nostri secondi piatti sapranno soddisfare il tuo appetito. Puoi scegliere tra carne alla griglia, pesce del lago, polpette, arrosti e contorni vari.</p>
                    </div>
                    <!-- Dolci -->
                    <div class="col-md-5 col-xxl-2 text-center mb-4 pt-3 rounded shadow food-bg" style="background-image: url('/media/photos/webp/dolce-optimized.webp'); background-size: cover;">
                        <i class="fas fa-birthday-cake fa-3x p-4 pt-3 pb-3 bg-white rounded-top" style="color: #7BB5D3;"></i>
                        <h4 class="bg-white rounded-top mb-0 pb-2 pt-2">Dolci</h4>
                        <p class="bg-white rounded-bottom pb-2 px-2">Dolcissima tentazione, i nostri dolci sono il modo perfetto per concludere il tuo pasto. Abbiamo torte, gelati, mousse, tiramisù, panna cotta e tante altre delizie.</p>
                    </div>
                    <!-- Bere -->
                    <div class="col-md-12 text-center mb-4 pt-3 rounded shadow food-bg" style="background-image: url('/media/photos/webp/bere-optimized.webp'); background-size: cover;">
                        <i class="fas fa-wine-glass-alt fa-3x p-4 pt-3 pb-3 bg-white rounded-top" style="color: #7BB5D3;"></i>
                        <h4 class="bg-white rounded-top mb-0 pb-2 pt-2">Bere</h4>
                        <p class="bg-white rounded-bottom pb-2 px-2">Per accompagnare i tuoi piatti, ti offriamo una selezione di vini locali e nazionali, birre artigianali, succhi di frutta, acqua minerale e caffè.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sezione mappe -->
        <div class="row m-0 mt-4 text-center">
            <div class="col">
                <div class="row justify-content-center" data-aos="fade-up">
                    <iframe class="col-12 col-lg-4 mb-4 mb-lg-0 p-0 rounded shadow" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1260.0995627918023!2d8.695776109231604!3d46.06681115229856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4785c56b2ce59811%3A0xfd8f2e372b58c029!2sRistorante%20Aquazzurra!5e0!3m2!1sit!2sit!4v1693565301234!5m2!1sit!2sit" style="min-height: 40vh" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-bs-toggle="tooltip" data-bs-placement="top" title="Google Maps"></iframe>
                    <div class="col-12 col-lg-8 text-end position-relative pe-0 ps-0 ps-lg-2">
                        <img src="/media/photos/webp/0013-optimized.webp" loading="lazy" class="img-fluid rounded shadow" alt="Location" style="min-height: 40vh; max-height: 80vh;">
                        <div class="bg-light position-absolute top-50 start-50 translate-middle p-3 text-center rounded shadow" data-aos="zoom-in">
                            <h3 class="pt-1">Cannobio, VB</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sezione Contatti -->
        <div class="row mx-auto mt-4 p-5 d-flex align-items-center justify-content-center rounded shadow" style="background-image: url('/media/photos/webp/0014-optimized.webp'); background-size: cover; background-attachment: fixed; min-height: 40vh;">
            <div class="col">
                <div class="row bg-white w-100 pt-3 pb-4 m-0 rounded" data-aos="zoom-in">
                    <div class="col">
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <h2>Contattaci</h2>
                            </div>
                        </div>
                        <div class="row mt-auto mt-lg-1 justify-content-center">
                            <div class="col-md-5 d-flex flex-column align-items-center mt-3 mt-lg-auto text-center">
                                <div class="d-flex flex-row align-items-center">
                                    <i class="fas fa-map-marker-alt fa-2x mb-2" style="color: #7BB5D3;"></i>
                                    <p class="fs-5 mt-2 ms-2">Cannobio, VB</p>
                                </div>
                                <span class="text-center thin-text">Viale Vittorio Veneto 37, 28822</span>
                            </div>
                            <div class="col-md-5 d-flex flex-column align-items-center mt-4 mt-lg-auto text-center">
                                <div class="d-flex flex-row align-items-center">
                                    <i class="fas fa-phone fa-2x mb-2" style="color: #7BB5D3;"></i>
                                    <p class="fs-5 mt-2 text-center ms-2">Prenota ora</p>
                                </div>
                                <span><a class="link-body-emphasis thin-text" href="tel:+3903231991099" style="text-decoration: none;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Componi numero">+39 0323 1991099</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>