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
    <title>Galleria - Ristorante Aquazzurra</title>
    <meta name="description" content="Scopri immagini e video del nostro ristorante e del bellissimo luogo in cui si trova.">
</svelte:head>

<!-- Content -->
<div class="row mx-3 mx-lg-5" style="min-height: 80vh">
    <div class="col">

        <div class="row">
            <div class="col">

                <!-- Sezione galleria -->
                <div class="row mt-4 mb-4 shadow rounded p-1 pt-3 pb-3 shadow rounded" data-aos="fade-up">
                    <div class="col">
                        <h1 class="text-center" style="color: #7BB5D3;">Galleria</h1>
                        <p class="text-center thin-text">Scopri immagini e video del nostro ristorante e del bellissimo luogo in cui si trova.</p>
                    </div>
                </div>

                <div class="row shadow rounded pt-2 pb-2" data-aos="fade-up" data-aos-delay="100">
                    <div class="col">
                        <ul class="nav nav-pills justify-content-center" id="gallery-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="exterior-tab" data-bs-toggle="pill"
                                        data-bs-target="#exterior" type="button" role="tab" aria-controls="exterior"
                                        aria-selected="true" style="transition: opacity 0.3s ease-in-out;"><i
                                        class="fas fa-building"></i>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="interior-tab" data-bs-toggle="pill"
                                        data-bs-target="#interior"
                                        type="button" role="tab" aria-controls="interior" aria-selected="false"
                                        style="transition: opacity 0.3s ease-in-out;"><i
                                        class="fas fa-utensils"></i>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="location-tab" data-bs-toggle="pill"
                                        data-bs-target="#location"
                                        type="button" role="tab" aria-controls="location" aria-selected="false"
                                        style="transition: opacity 0.3s ease-in-out;"><i
                                        class="fas fa-map-signs"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="row mt-3 shadow rounded pt-3 pb-3" data-aos="fade-up" data-aos-delay="150">
                    <div class="col">
                        <div class="tab-content" id="gallery-tabContent">
                            <div class="tab-pane fade show active" id="exterior" role="tabpanel"
                                 aria-labelledby="exterior-tab">
                                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

                                    <!-- Copiare l'intero DIV e incollarlo, e poi modificare src="..." per aggiungere -->
                                    <div class="col">
                                        <div class="card h-100 shadow rounded">
                                            <a href="media/photos/webp/0008-optimized.webp" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Clicca per aprire">
                                                <img src="media/photos/webp/0008-optimized.webp"
                                                     class="card-img rounded img-fluid w-100 h-100 object-fit-cover"
                                                     alt="immagine">
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="card h-100 shadow rounded">
                                            <a href="media/photos/webp/0007-optimized.webp" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Clicca per aprire">
                                                <img src="media/photos/webp/0007-optimized.webp"
                                                     class="card-img rounded img-fluid w-100 h-100 object-fit-cover"
                                                     alt="immagine">
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="card h-100 shadow rounded">
                                            <a href="media/photos/webp/0006-optimized.webp" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Clicca per aprire">
                                                <img src="media/photos/webp/0006-optimized.webp"
                                                     class="card-img rounded img-fluid w-100 h-100 object-fit-cover"
                                                     alt="immagine">
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="card h-100 shadow rounded">
                                            <a href="media/photos/webp/0022-optimized.webp" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Clicca per aprire">
                                                <img src="media/photos/webp/0022-optimized.webp"
                                                     class="card-img rounded img-fluid w-100 h-100 object-fit-cover"
                                                     alt="immagine">
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="card h-100 shadow rounded">
                                            <a href="media/photos/webp/0023-optimized.webp" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Clicca per aprire">
                                                <img src="media/photos/webp/0023-optimized.webp"
                                                     class="card-img rounded img-fluid w-100 h-100 object-fit-cover"
                                                     alt="immagine">
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="tab-pane fade" id="interior" role="tabpanel" aria-labelledby="interior-tab">
                                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

                                    <!-- Copiare l'intero DIV e incollarlo, e poi modificare src="..." per aggiungere -->
                                    <div class="col">
                                        <div class="card h-100 shadow rounded">
                                            <a href="media/photos/webp/0010-optimized.webp" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Clicca per aprire">
                                                <img src="media/photos/webp/0010-optimized.webp"
                                                     class="card-img rounded img-fluid w-100 h-100 object-fit-cover"
                                                     alt="Immagine">
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="card h-100 shadow rounded">
                                            <a href="media/photos/webp/0032-optimized.webp" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Clicca per aprire">
                                                <img src="media/photos/webp/0032-optimized.webp"
                                                     class="card-img rounded img-fluid w-100 h-100 object-fit-cover"
                                                     alt="immagine">
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="tab-pane fade" id="location" role="tabpanel" aria-labelledby="location-tab">
                                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

                                    <!-- Copiare l'intero DIV e incollarlo, e poi modificare src="..." per aggiungere -->
                                    <div class="col">
                                        <div class="card h-100 shadow rounded">
                                            <a href="media/photos/webp/0013-optimized.webp" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Clicca per aprire">
                                                <img src="media/photos/webp/0013-optimized.webp"
                                                     class="card-img rounded img-fluid w-100 h-100 object-fit-cover"
                                                     alt="immagine">
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="card h-100 shadow rounded">
                                            <a href="media/photos/webp/0019-optimized.webp" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Clicca per aprire">
                                                <img src="media/photos/webp/0019-optimized.webp"
                                                     class="card-img rounded img-fluid w-100 h-100 object-fit-cover"
                                                     alt="immagine">
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="card h-100 shadow rounded">
                                            <a href="media/photos/webp/0015-optimized.webp" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Clicca per aprire">
                                                <img src="media/photos/webp/0015-optimized.webp"
                                                     class="card-img rounded img-fluid w-100 h-100 object-fit-cover"
                                                     alt="immagine">
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="card h-100 shadow rounded">
                                            <a href="media/photos/webp/0014-optimized.webp" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Clicca per aprire">
                                                <img src="media/photos/webp/0014-optimized.webp"
                                                     class="card-img rounded img-fluid w-100 h-100 object-fit-cover"
                                                     alt="immagine">
                                            </a>
                                        </div>
                                    </div>


                                    <div class="col">
                                        <div class="card h-100 shadow rounded">
                                            <a href="media/photos/webp/0026-optimized.webp" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Clicca per aprire">
                                                <img src="media/photos/webp/0026-optimized.webp"
                                                     class="card-img rounded img-fluid w-100 h-100 object-fit-cover"
                                                     alt="immagine">
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="card h-100 shadow rounded">
                                            <a href="media/photos/webp/0029-optimized.webp" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Clicca per aprire">
                                                <img src="media/photos/webp/0029-optimized.webp"
                                                     class="card-img rounded img-fluid w-100 h-100 object-fit-cover"
                                                     alt="immagine">
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="row mt-5 mb-4 shadow rounded p-1 pt-3 pb-2 shadow rounded" data-aos="fade-up">
            <div class="col">
                <h1 class="text-center" style="color: #7BB5D3;">Video</h1>
            </div>
        </div>

        <!-- Sezione video -->
        <div class="row mt-3 shadow rounded pt-3 pb-3" data-aos="fade-up" data-aos-delay="150">
            <div class="col">
                <div class="row row-cols-1 g-4 justify-content-center">

                    <!-- Copiare l'intero DIV e incollarlo, e poi modificare src="..." per aggiungere -->
                    <div class="col text-center">
                        <video class="p-0 rounded w-auto mx-auto h-100 shadow" controls
                               preload="metadata" style="max-height: 85vh; max-width: 85vw">
                            <source src="media/videos/editing/montage-1.webm" type="video/webm">
                            Your browser does not support the video tag.
                        </video>
                    </div>

                </div>
            </div>
        </div>

        <!-- Disclaimer/Avviso -->
        <div class="row mt-5 p-4 shadow rounded" data-aos="fade-up" data-aos-delay="200">
            <div class="col">
                <div class="row mt-2">
                    <div class="col">
                        <h2 class="text-center mb-4"
                            style="background: linear-gradient(to right, #7bb5d3, #a1d8f1); box-shadow: 0 4px 15px rgba(123, 181, 211, 0.6); color: white; padding: 0.5rem; border-radius: 0.5rem;">
                            Avviso</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p class="text-center thin-text">Le immagini e i video presenti nella sezione galleria sono
                            solo a scopo illustrativo e non rappresentano necessariamente i piatti o i servizi
                            offerti dal ristorante. Le immagini potrebbero essere state modificate o sostituite in
                            qualsiasi momento senza preavviso. Non ci assumiamo alcuna responsabilità per eventuali
                            discrepanze tra le immagini e la realtà.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

<style>

    .card-img {
        transition: all 0.2s ease-in-out;
    }

    .card-img:hover {
        transform: scale(1.1);
    }

    .tab-pane {
        transition: opacity 0.3s ease-in-out;
    }

    .tab-pane.fade {
        opacity: 0;
    }

    .tab-pane.fade.show {
        opacity: 1;
    }

    .nav-pills .nav-link {
        color: #7BB5D3;
    }

    .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
        color: #fff;
        background-color: #7BB5D3;
    }
</style>