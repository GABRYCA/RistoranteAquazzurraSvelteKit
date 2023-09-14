<script>
    import { onMount } from "svelte";

    onMount(() => {
        window.$('[data-bs-toggle="tooltip"]').tooltip();
    });
</script>

<svelte:head>
    <title>Non trovato - Ristorante Aquazzurra</title>
</svelte:head>

<div class="container my-5">
    <div class="row justify-content-center px-3 px-sm-auto">
        <div class="col-md-6 text-center p-3 pb-4 mx-lg-auto rounded border border-primary">
            <h1 class="display-1 text-danger">404</h1>
            <h2 class="h1 mb-4 thin-text">Oops! Pagina non trovata</h2>
            <p class="h4 mb-4 thin-text">Ci dispiace, ma la pagina che hai richiesto non è stata trovata.</p>
            <a href="/" class="btn btn-outline-primary w-100">Torna alla homepage</a>
        </div>
    </div>
</div>

<style>
    body {
        background-color: #f8f9fa;
    }

    .btn-primary {
        background-color: #0d6efd;
        border-color: #0d6efd;
    }

    .btn-primary:hover {
        background-color: #0b5ed7;
        border-color: #0b5ed7;
    }

    .btn-primary:focus {
        box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.5);
    }

    .text-danger {
        color: #0d6efd;
    }
</style>