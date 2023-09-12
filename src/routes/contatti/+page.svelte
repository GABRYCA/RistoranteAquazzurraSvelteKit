<script>
    import {onMount} from "svelte";

    onMount(() => {
        window.$('[data-bs-toggle="tooltip"]').tooltip();
    });
</script>

<svelte:head>
    <title>Contatti - Ristorante Aquazzurra</title>
    <meta name="description" content="Contattaci per prenotare un tavolo o per chiederci informazioni.">
</svelte:head>

<!-- Content -->
<div class="row mx-1 mx-lg-4">
    <div class="col">

        <!-- Titolo pagina -->
        <div class="row m-0 mt-4 mb-4 pt-3 pb-2 food-bg rounded shadow" data-aos="fade-up">
            <div class="col">
                <h1 class="text-center" style="color: #7BB5D3;">Posizione e contatti</h1>
            </div>
        </div>

        <!-- Sezione mappe -->
        <div class="row m-0 mt-4 text-center">
            <div class="col">
                <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
                    <iframe class="col-12 col-lg-4 mb-4 mb-lg-0 p-0 rounded shadow" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1260.0995627918023!2d8.695776109231604!3d46.06681115229856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4785c56b2ce59811%3A0xfd8f2e372b58c029!2sRistorante%20Aquazzurra!5e0!3m2!1sit!2sit!4v1693565301234!5m2!1sit!2sit" style="min-height: 40vh" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-bs-toggle="tooltip" data-bs-placement="top" title="Google Maps"></iframe>
                    <div class="col-12 col-lg-8 text-end position-relative pe-0 ps-0 ps-lg-2">
                        <img src="media/photos/webp/0013-optimized.webp" loading="lazy" class="img-fluid rounded shadow" alt="Location" style="min-height: 40vh; max-height: 80vh;">
                        <div class="bg-light position-absolute top-50 start-50 translate-middle p-3 text-center rounded shadow" data-aos="zoom-in">
                            <h3 class="pt-1">Cannobio, VB</h3>
                            <h4 class="thin-text mt-3">Viale Vittorio Veneto 37, 28822</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sezione Contatti -->
        <div class="row mx-auto mt-4 p-5 ps-1 ps-md-5 pe-1 pe-md-5 d-flex align-items-center justify-content-center rounded shadow" style="background-image: url('media/photos/webp/0014.webp'); background-size: cover; background-attachment: fixed; min-height: 40vh;">
            <div class="col">
                <div class="row bg-white w-100 pt-3 pb-4 m-0 rounded" data-aos="zoom-in" data-aos-delay="150">
                    <div class="col">
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <h2>Contattaci</h2>
                            </div>
                        </div>
                        <!-- Aggiunta una riga con una breve introduzione -->
                        <div class="row mt-auto mt-lg-1 justify-content-center">
                            <div class="col-md-10 text-center">
                                <p class="thin-text">Se vuoi prenotare un tavolo o chiederci informazioni, puoi contattarci in uno dei seguenti modi:</p>
                            </div>
                        </div>
                        <!-- Modificata la disposizione delle icone e dei testi -->
                        <div class="row mt-auto mt-lg-1 justify-content-center">
                            <div class="col-md-5 d-flex flex-column align-items-center mt-3 mt-lg-auto text-center">
                                <i class="fas fa-map-marker-alt fa-2x mb-2" style="color: #7BB5D3;"></i>
                                <p class="fs-5 mt-2 ms-2">Cannobio, VB</p>
                                <span class="text-center thin-text">Viale Vittorio Veneto 37, 28822</span>
                            </div>
                            <div class="col-md-5 d-flex flex-column align-items-center mt-4 mt-lg-auto text-center">
                                <i class="fas fa-phone fa-2x mb-2" style="color: #7BB5D3;"></i>
                                <p class="fs-5 mt-2 text-center ms-2">Chiamaci</p>
                                <span><a class="link-body-emphasis thin-text" href="tel:+3903231991099" style="text-decoration: none;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Componi numero">+39 0323 1991099</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>