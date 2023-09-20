<script>
    import {onMount} from "svelte";
    import { t } from '$lib/translations';

    onMount(() => {
        window.$('[data-bs-toggle="tooltip"]').tooltip();
    });

    // Define the products vector
    let categories = [
        {
            name: $t('locale.DishesModalWinesRedsTitle'),
            products: [
                {
                    name: "Barolo Germano",
                    icon: "fas fa-wine-bottle"
                },
                {
                    name: "Amarone Leon",
                    icon: "fas fa-wine-bottle"
                },
                {
                    name: "Amarone Astoria",
                    icon: "fas fa-wine-bottle"
                },
                {
                    name: "Bolgheri Podere Roseto",
                    icon: "fas fa-wine-bottle"
                },
                {
                    name: "Chianti Riserva Le Fonti",
                    icon: "fas fa-wine-bottle"
                },
                {
                    name: "Bolgheri Principe",
                    icon: "fas fa-wine-bottle"
                },
                {
                    name: "Nebbiolo Tuke' Pescaja",
                    icon: "fas fa-wine-bottle"
                },
                {
                    name: "Valpolicella Ripasso Domini Veneti",
                    icon: "fas fa-wine-bottle"
                },
                {
                    name: "Barbera Solitera Pescaja",
                    icon: "fas fa-wine-bottle"
                },
                {
                    name: "Chiuchino Valle Asinari",
                    icon: "fas fa-wine-bottle"
                },
                {
                    name: "Nebbiolo Ca' Boschi Viola",
                    icon: "fas fa-wine-bottle"
                },
                {
                    name: "Ruden Astoria",
                    icon: "fas fa-wine-bottle"
                },
                {
                    name: "Morellino Rocca Grimalda",
                    icon: "fas fa-wine-bottle"
                },
                {
                    name: "Dolcetto Blu Ca' Boschi",
                    icon: "fas fa-wine-bottle"
                },
                {
                    name: "Rocche di Mango Ca' Boschi",
                    icon: "fas fa-wine-bottle"
                }
            ]
        },
        {
            name: $t('locale.DishesModalWinesWhitesTitle'),
            products: [
                {
                    name: "Aria Ca' Boschi Chardonnay",
                    icon: "fas fa-wine-bottle"
                },
                {
                    name: "Arneis Terre Alfieri",
                    icon: "fas fa-wine-bottle"
                },
                {
                    name: "Phylika Poggior Rosso",
                    icon: "fas fa-wine-bottle"
                },
                {
                    name: "Arneis Ca' Boschi",
                    icon: "fas fa-wine-bottle"
                },
                {
                    name: "Nuvola Ca' Boschi",
                    icon: "fas fa-wine-bottle"
                },
            ]
        },
        {
            name: $t('locale.DishesModalWinesRoseTitle'),
            products: [
                {
                    name: "Le Flery Pescaja",
                    icon: "fas fa-wine-bottle"
                },
                {
                    name: "Mina Astoria",
                    icon: "fas fa-wine-bottle"
                },
            ]
        },
        {
            name: $t('locale.DishesModalWinesBubblesTitle'),
            products: [
                {
                    name: "Franciacorta",
                    icon: "fas fa-wine-bottle"
                },
                {
                    name: "Astoria Rosè",
                    icon: "fas fa-wine-bottle"
                },
                {
                    name: "Millage D.O.C.G.",
                    icon: "fas fa-wine-bottle"
                },
                {
                    name: "Millage D.O.C.",
                    icon: "fas fa-wine-bottle"
                },
            ]
        }
    ];

    let salads = [
        {
            name: $t('locale.DishesModalSaladCapreseTitle'),
            icon: "fas fa-leaf"
        },
        {
            name: $t('locale.DishesModalSaladMistaTitle'),
            icon: "fas fa-leaf"
        },
        {
            name: $t('locale.DishesModalSaladPomodoriCipolleTitle'),
            icon: "fas fa-leaf"
        },
        {
            name: $t('locale.DishesModalSaladVerdeTitle'),
            icon: "fas fa-leaf"
        },
    ];

    let appetizers = [
        {
            name: $t('locale.DishesModalAppetizersTrisDiMareTitle'),
            icon: "fas fa-utensils"
        },
        {
            name: $t('locale.DishesModalAppetizersTagliereOssolanoTitle'),
            icon: "fas fa-utensils"
        },
        {
            name: $t('locale.DishesModalAppetizersTagliereFormaggiOssolaniTitle'),
            icon: "fas fa-utensils"
        },
        {
            name: $t('locale.DishesModalAppetizersTartareMareTitle'),
            icon: "fas fa-utensils"
        },
        {
            name: $t('locale.DishesModalAppetizersTartareManzoTitle'),
            icon: "fas fa-utensils"
        },
        {
            name: $t('locale.DishesModalAppetizersPolpoPatateTitle'),
            icon: "fas fa-utensils"
        },
    ];

    let firstCourses = [
        {
            name: $t('locale.DishesModalFirstCoursesTaglioniGamberoniPistacchio'),
            icon: "fas fa-utensils"
        },
        {
            name: $t('locale.DishesModalFirstCoursesGnocchiFondutaCapraGranellaFrutta'),
            icon: "fas fa-utensils"
        },
        {
            name: $t('locale.DishesModalFirstCoursesTortelloniTartufoPecorino'),
            icon: "fas fa-utensils"
        },
        {
            name: $t('locale.DishesModalFirstCoursesLasagnaPino'),
            icon: "fas fa-utensils"
        },
        {
            name: $t('locale.DishesModalFirstCoursesSpaghetti'),
            icon: "fas fa-utensils"
        },
        {
            name: $t('locale.DishesModalFirstCoursesBolognese'),
            icon: "fas fa-utensils"
        },
        {
            name: $t('locale.DishesModalFirstCoursesPomodoro'),
            icon: "fas fa-utensils"
        },
        {
            name: $t('locale.DishesModalFirstCoursesAglioOlioPeperoncino'),
            icon: "fas fa-utensils"
        },
    ];

    let hamburgers = [
        {
            name: $t('locale.DishesModalHamburgersVegano'),
            icon: "fas fa-hamburger"
        },
        {
            name: $t('locale.DishesModalHamburgersClassico'),
            icon: "fas fa-hamburger"
        },
    ];

    let secondCourses = [
        {
            name: $t('locale.DishesModalSecondCoursesTomahawak'),
            icon: "fas fa-utensils"
        },
        {
            name: $t('locale.DishesModalSecondCoursesFilettoDuePepi'),
            icon: "fas fa-utensils"
        },
        {
            name: $t('locale.DishesModalSecondCoursesOssobucoVitelloRisotto'),
            icon: "fas fa-utensils"
        },
        {
            name: $t('locale.DishesModalSecondCoursesRibsMaiale'),
            icon: "fas fa-utensils"
        },
        {
            name: $t('locale.DishesModalSecondCoursesTagliataManzo'),
            icon: "fas fa-utensils"
        },
        {
            name: $t('locale.DishesModalSecondCoursesTentacoliPolpoBurratina'),
            icon: "fas fa-utensils"
        },
    ];

    let pizzas = [
        {
            name: $t('locale.DishesModalPizzaMarinaraTitle'),
            icon: "fas fa-pizza-slice",
            description: $t('locale.DishesModalPizzaMarinaraDescription')
        },
        {
            name: $t('locale.DishesModalPizzaMargheritaTitle'),
            icon: "fas fa-pizza-slice",
            description: $t('locale.DishesModalPizzaMargheritaDescription')
        },
        {
            name: $t('locale.DishesModalPizzaProsciuttoTitle'),
            icon: "fas fa-pizza-slice",
            description: $t('locale.DishesModalPizzaProsciuttoDescription')
        },
        {
            name: $t('locale.DishesModalPizzaTonnoCipolleTitle'),
            icon: "fas fa-pizza-slice",
            description: $t('locale.DishesModalPizzaTonnoCipolleDescription')
        },
        {
            name: $t('locale.DishesModalPizzaNapoliTitle'),
            icon: "fas fa-pizza-slice",
            description: $t('locale.DishesModalPizzaNapoliDescription')
        },
        {
            name: $t('locale.DishesModalPizzaDiavolaTitle'),
            icon: "fas fa-pizza-slice",
            description: $t('locale.DishesModalPizzaDiavolaDescription')
        },
        {
            name: $t('locale.DishesModalPizzaProsciuttoFunghiTitle'),
            icon: "fas fa-pizza-slice",
            description: $t('locale.DishesModalPizzaProsciuttoFunghiDescription')
        },
        {
            name: $t('locale.DishesModalPizzaPreziosaBiancaTitle'),
            icon: "fas fa-pizza-slice",
            description: $t('locale.DishesModalPizzaPreziosaBiancaDescription')
        },
        {
            name: $t('locale.DishesModalPizzaBufalaTitle'),
            icon: "fas fa-pizza-slice",
            description: $t('locale.DishesModalPizzaBufalaDescription')
        },
        {
            name: $t('locale.DishesModalPizzaQuattroStagioniTitle'),
            icon: "fas fa-pizza-slice",
            description: $t('locale.DishesModalPizzaQuattroStagioniDescription')
        },
        {
            name: $t('locale.DishesModalPizzaCapricciosaTitle'),
            icon: "fas fa-pizza-slice",
            description: $t('locale.DishesModalPizzaCapricciosaDescription')
        },
        {
            name: $t('locale.DishesModalPizzaFrescaTitle'),
            icon: "fas fa-pizza-slice",
            description: $t('locale.DishesModalPizzaFrescaDescription')
        },
        {
            name: $t('locale.DishesModalPizzaFantasiaTitle'),
            icon: "fas fa-pizza-slice",
            description: $t('locale.DishesModalPizzaFantasiaDescription')
        },
        {
            name: $t('locale.DishesModalPizzaQuattroFormaggiTitle'),
            icon: "fas fa-pizza-slice",
            description: $t('locale.DishesModalPizzaQuattroFormaggiDescription')
        },
        {
            name: $t('locale.DishesModalPizzaVegetarianaTitle'),
            icon: "fas fa-pizza-slice",
            description: $t('locale.DishesModalPizzaVegetarianaDescription')
        },
        {
            name: $t('locale.DishesModalPizzaPericolosaTitle'),
            icon: "fas fa-pizza-slice",
            description: $t('locale.DishesModalPizzaPericolosaDescription')
        },
        {
            name: $t('locale.DishesModalPizzaCrudoRucolaGranaTitle'),
            icon: "fas fa-pizza-slice",
            description: $t('locale.DishesModalPizzaCrudoRucolaGranaDescription')
        },
    ];

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
                        <h1 class="carousel-title pb-0 display-3 text-uppercase text-shadow text-center" style="font-family: Baskervville;" data-aos="zoom-in" data-aos-duration="750">{$t('locale.SlideshowTitle')}</h1>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">{$t('locale.SlideshowPrevious')}</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">{$t('locale.SlideshowNext')}</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Sezione chi siamo -->
        <div class="row mt-4">
            <div class="col">
                <div class="row p-4 m-0 rounded shadow" style="background-color: #F2F2F2;" data-aos="fade-up" data-aos-duration="700">
                    <div class="col-md-12 text-center mb-3 rounded-5 pt-1 shadow text-light" style="background-color: #7BB5D3">
                        <h2 class="pt-1">{$t('locale.WhoWeAreTitle')}</h2>
                    </div>
                    <div class="col-12 col-lg-5 p-0 p-md-auto mb-3 mb-lg-0">
                        <div class="row p-4 m-0 me-lg-3 h-100 rounded shadow" style="background-color: #F2F2F2;">
                            <div class="col-md-12 d-flex justify-content-center align-items-center text-center h-auto mb-3 rounded-5 pt-1 shadow">
                                <h2>{$t('locale.WhoAreWeSubtitle')}</h2>
                            </div>
                            <div class="col-md-12 d-flex justify-content-center align-items-center px-0 px-md-auto">
                                <p class="text-center fs-5 thin-text">{$t('locale.WhoAreWeText')}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-7">
                        <div class="row h-100 rounded shadow">
                            <img class="img-fluid h-auto p-0 rounded" src="/media/photos/webp/0010-optimized.webp" alt="inside restaurant" style="max-height: 50vh; object-fit: cover; object-position: bottom;">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sezione menu -->
        <div class="row mt-4">
            <div class="col" data-aos="fade-up" data-aos-duration="700">
                <div class="row justify-content-around p-4 m-0 rounded shadow" data-aos="fade-in" style="background-color: #F2F2F2;">
                    <div class="col-md-12 text-center mb-3 rounded-5 pt-1 shadow text-light" style="background-color: #7BB5D3">
                        <h2>{$t('locale.DishesTitle')}</h2>
                    </div>
                    <div class="col-md-5 col-xxl-2 mx-0 mx-md-1 text-center mb-4 pt-3 rounded shadow food-bg">
                        <i class="fas fa-wine-bottle fa-3x p-4 pt-3 pb-3 bg-white rounded-top" style="color: #7BB5D3;"></i>
                        <h4 class="bg-white rounded-top mb-0 pb-2 pt-2">{$t('locale.DishesWineTitle')}</h4>
                        <button type="button" class="btn btn-primary mt-3 mb-3 w-100" data-bs-toggle="modal" data-bs-target="#wineModal">
                            {$t('locale.DishesButton')}
                        </button>
                    </div>
                    <div class="col-md-5 col-xxl-2 text-center mb-4 pt-3 rounded shadow food-bg">
                        <i class="fas fa-seedling fa-3x p-4 pt-3 pb-3 bg-white rounded-top" style="color: #7BB5D3;"></i>
                        <h4 class="bg-white rounded-top mb-0 pb-2 pt-2">{$t('locale.DishesSaladsTitle')}</h4>
                        <button type="button" class="btn btn-primary mt-3 mb-3 w-100" data-bs-toggle="modal" data-bs-target="#saladModal">
                            {$t('locale.DishesButton')}
                        </button>
                    </div>
                    <div class="col-md-5 col-xxl-2 text-center mb-4 pt-3 rounded shadow food-bg">
                        <i class="fas fa-cheese fa-3x p-4 pt-3 pb-3 bg-white rounded-top" style="color: #7BB5D3;"></i>
                        <h4 class="bg-white rounded-top mb-0 pb-2 pt-2">{$t('locale.DishesAppetizersTitle')}</h4>
                        <button type="button" class="btn btn-primary mt-3 mb-3 w-100" data-bs-toggle="modal" data-bs-target="#appetizerModal">
                            {$t('locale.DishesButton')}
                        </button>
                    </div>
                    <div class="col-md-5 col-xxl-2 text-center mb-4 pt-3 rounded shadow food-bg">
                        <i class="fas fa-utensils fa-3x p-4 pt-3 pb-3 bg-white rounded-top" style="color: #7BB5D3;"></i>
                        <h4 class="bg-white rounded-top mb-0 pb-2 pt-2">{$t('locale.DishesFirstCoursesTitle')}</h4>
                        <button type="button" class="btn btn-primary mt-3 mb-3 w-100" data-bs-toggle="modal" data-bs-target="#firstCourseModal">
                            {$t('locale.DishesButton')}
                        </button>
                    </div>
                    <div class="col-md-5 col-xxl-2 text-center mb-4 pt-3 rounded shadow food-bg">
                        <i class="fas fa-hamburger fa-3x p-4 pt-3 pb-3 bg-white rounded-top" style="color: #7BB5D3;"></i>
                        <h4 class="bg-white rounded-top mb-0 pb-2 pt-2">{$t('locale.DishesHamburgersTitle')}</h4>
                        <button type="button" class="btn btn-primary mt-3 mb-3 w-100" data-bs-toggle="modal" data-bs-target="#hamburgerModal">
                            {$t('locale.DishesButton')}
                        </button>
                    </div>
                    <div class="col-md-5 col-xxl-2 text-center mb-4 pt-3 rounded shadow food-bg">
                        <i class="fas fa-drumstick-bite fa-3x p-4 pt-3 pb-3 bg-white rounded-top" style="color: #7BB5D3;"></i>
                        <h4 class="bg-white rounded-top mb-0 pb-2 pt-2">{$t('locale.DishesSecondCoursesTitle')}</h4>
                        <button type="button" class="btn btn-primary mt-3 mb-3 w-100" data-bs-toggle="modal" data-bs-target="#secondCourseModal">
                            {$t('locale.DishesButton')}
                        </button>
                    </div>
                    <div class="col-md-5 col-xxl-2 text-center mb-4 pt-3 rounded shadow food-bg">
                        <i class="fas fa-pizza-slice fa-3x p-4 pt-3 pb-3 bg-white rounded-top" style="color: #7BB5D3;"></i>
                        <h4 class="bg-white rounded-top mb-0 pb-2 pt-2">{$t('locale.DishesPizzaTitle')}</h4>
                        <button type="button" class="btn btn-primary mt-3 mb-3 w-100" data-bs-toggle="modal" data-bs-target="#pizzaModal">
                            {$t('locale.DishesButton')}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sezione modal -->
        <div class="row">
            <div class="col">
                <!-- Modali -->
                <!-- Modal wine -->
                <div class="modal fade" id="wineModal" tabindex="-1" aria-labelledby="wineModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header bg-gradient-primary text-white">
                                <h5 class="modal-title" id="wineModalLabel">{$t('locale.DishesWineTitle')}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body bg-gradient-light">

                                <ul class="nav nav-pills mb-4 justify-content-center" id="categoryTab" role="tablist">
                                    {#each categories as category, index}
                                        <li class="nav-item" role="presentation">
                                            <button class={`nav-link ${index === 0 ? 'active' : ''}`} id="{category.name}-tab" data-bs-toggle="tab" data-bs-target="#{category.name}" type="button" role="tab" aria-controls="{category.name}" aria-selected="{index === 0 ? 'true' : 'false'}">{category.name}</button>
                                        </li>
                                    {/each}
                                </ul>

                                <div class="tab-content" id="categoryTabContent">
                                    {#each categories as category, index}
                                        <div class={`tab-pane fade ${index === 0 ? 'show active' : ''}`} id="{category.name}" role="tabpanel" aria-labelledby="{category.name}-tab">
                                            <div class="row row-cols-2 row-cols-md-3 g-4">
                                                {#each category.products as product}
                                                    <div class="col" data-aos="fade-up" data-aos-delay="{50 * index}">
                                                        <div class="card h-100 border-0 shadow bg-white rounded-pill text-center p-3">
                                                            <i class="{product.icon} fa-2x text-primary my-auto" style="color: #7BB5D3 !important;"></i>
                                                            <h6 class="card-title mt-1 my-auto">{product.name}</h6>
                                                        </div>
                                                    </div>
                                                {/each}
                                            </div>
                                        </div>
                                    {/each}
                                </div>

                            </div>
                            <div class="modal-footer bg-gradient-primary text-white">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{$t('locale.DishesModaleButtonClose')}</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="saladModal" tabindex="-1" aria-labelledby="saladModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header bg-gradient-primary text-white">
                                <h5 class="modal-title" id="saladModalLabel">{$t('locale.DishesSaladTitle')}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body bg-gradient-light">
                                <div class="row row-cols-2 row-cols-md-3 g-4">
                                    {#each salads as salad, index}
                                        <div class="col" data-aos="fade-up" data-aos-delay="{50 * index}">
                                            <div class="card h-100 border-0 shadow bg-white rounded-pill text-center p-3">
                                                <i class="{salad.icon} fa-2x text-primary my-auto" style="color: #7BB5D3 !important;"></i>
                                                <h6 class="card-title mt-1 my-auto">{salad.name}</h6>
                                            </div>
                                        </div>
                                    {/each}
                                </div>
                            </div>
                            <div class="modal-footer bg-gradient-primary text-white">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{$t('locale.DishesModaleButtonClose')}</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="appetizerModal" tabindex="-1" aria-labelledby="appetizerModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header bg-gradient-primary text-white">
                                <h5 class="modal-title" id="appetizerModalLabel">{$t('locale.DishesAppetizerTitle')}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body bg-gradient-light">
                                <div class="row row-cols-2 row-cols-md-3 g-4">
                                    {#each appetizers as appetizer, index}
                                        <div class="col" data-aos="fade-up" data-aos-delay="{50 * index}">
                                            <div class="card h-100 border-0 shadow bg-white rounded-pill text-center p-3">
                                                <i class="{appetizer.icon} fa-2x text-primary my-auto" style="color: #7BB5D3 !important;"></i>
                                                <h6 class="card-title mt-1 my-auto">{appetizer.name}</h6>
                                            </div>
                                        </div>
                                    {/each}
                                </div>
                            </div>
                            <div class="modal-footer bg-gradient-primary text-white">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{$t('locale.DishesModaleButtonClose')}</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="firstCourseModal" tabindex="-1" aria-labelledby="firstCourseModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header bg-gradient-primary text-white">
                                <h5 class="modal-title" id="firstCourseModalLabel">{$t('locale.DishesFirstCourseTitle')}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body bg-gradient-light">
                                <div class="row row-cols-2 row-cols-md-3 g-4">
                                    {#each firstCourses as firstCourse, index}
                                        <div class="col" data-aos="fade-up" data-aos-delay="{50 * index}">
                                            <div class="card h-100 border-0 shadow bg-white rounded-pill text-center p-3">
                                                <i class="{firstCourse.icon} fa-2x text-primary my-auto" style="color: #7BB5D3 !important;"></i>
                                                <h6 class="card-title mt-1 my-auto">{firstCourse.name}</h6>
                                            </div>
                                        </div>
                                    {/each}
                                </div>
                            </div>
                            <div class="modal-footer bg-gradient-primary text-white">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{$t('locale.DishesModaleButtonClose')}</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="hamburgerModal" tabindex="-1" aria-labelledby="hamburgerModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header bg-gradient-primary text-white">
                                <h5 class="modal-title" id="hamburgerModalLabel">{$t('locale.DishesHamburgerTitle')}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body bg-gradient-light">
                                <div class="row row-cols-2 row-cols-md-3 g-4">
                                    {#each hamburgers as hamburger, index}
                                        <div class="col" data-aos="fade-up" data-aos-delay="{50 * index}">
                                            <div class="card h-100 border-0 shadow bg-white rounded-pill text-center p-3">
                                                <i class="{hamburger.icon} fa-2x text-primary my-auto" style="color: #7BB5D3 !important;"></i>
                                                <h6 class="card-title mt-1 my-auto">{hamburger.name}</h6>
                                            </div>
                                        </div>
                                    {/each}
                                </div>
                            </div>
                            <div class="modal-footer bg-gradient-primary text-white">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{$t('locale.DishesModaleButtonClose')}</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="secondCourseModal" tabindex="-1" aria-labelledby="secondCourseModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header bg-gradient-primary text-white">
                                <h5 class="modal-title" id="secondCourseModalLabel">{$t('locale.DishesSecondCourseTitle')}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body bg-gradient-light">
                                <div class="row row-cols-2 row-cols-md-3 g-4">
                                    {#each secondCourses as secondCourse, index}
                                        <div class="col" data-aos="fade-up" data-aos-delay="{50 * index}">
                                            <div class="card h-100 border-0 shadow bg-white rounded-pill text-center p-3">
                                                <i class="{secondCourse.icon} fa-2x text-primary my-auto" style="color: #7BB5D3 !important;"></i>
                                                <h6 class="card-title mt-1 my-auto">{secondCourse.name}</h6>
                                            </div>
                                        </div>
                                    {/each}
                                </div>
                            </div>
                            <div class="modal-footer bg-gradient-primary text-white">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{$t('locale.DishesModaleButtonClose')}</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="pizzaModal" tabindex="-1" aria-labelledby="pizzaModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header bg-gradient-primary text-white">
                                <h5 class="modal-title" id="pizzaModalLabel">{$t('locale.DishesPizzaTitle')}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body bg-gradient-light">
                                <div class="row row-cols-1 row-cols-md-2 g-4">
                                    {#each pizzas as pizza, index}
                                        <div class="col" data-aos="fade-up" data-aos-delay="{50 * index}">
                                            <div class="card h-100 border-0 shadow bg-white rounded text-center p-3">
                                                <i class="{pizza.icon} fa-2x text-primary my-auto" style="color: #7BB5D3 !important;"></i>
                                                <h6 class="card-title mt-1 my-auto">{pizza.name}</h6>
                                                <p class="card-text my-auto thin-text">{pizza.description}</p>
                                            </div>
                                        </div>
                                    {/each}
                                </div>
                            </div>
                            <div class="modal-footer bg-gradient-primary text-white">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{$t('locale.DishesModaleButtonClose')}</button>
                            </div>
                        </div>
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
                                <h2>{$t('locale.ContactUsTitle')}</h2>
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
                                    <p class="fs-5 mt-2 text-center ms-2">{$t('locale.ContactUsBookNow')}</p>
                                </div>
                                <span><a class="link-body-emphasis thin-text" href="tel:+3903231991099" style="text-decoration: none;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="{$t('locale.ContactUsDialNumber')}">+39 0323 1991099</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .btn-primary {
        background-color: #7BB5D3;
        border-color: #7BB5D3;
    }

    .btn-primary:hover {
        background-color: #6aa7c5;
        border-color: #6aa7c5;
    }

    .btn-primary:focus {
        background-color: #6aa7c5;
        border-color: #6aa7c5;
    }

    .btn-primary:active {
        background-color: #6aa7c5;
        border-color: #6aa7c5;
    }

    .nav-pills .nav-link {
        color: #7BB5D3;
    }

    .nav-pills .nav-link.active {
        color: #fff;
        background-color: #7BB5D3;
    }
</style>