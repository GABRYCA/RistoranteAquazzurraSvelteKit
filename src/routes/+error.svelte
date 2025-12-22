<script>
    import { onMount } from "svelte";
    import { t } from '$lib/translations';

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
            <h1 class="display-1 text-danger">{$t('locale.Error404Title')}</h1>
            <h2 class="h1 mb-4 thin-text">{$t('locale.Error404Subtitle')}</h2>
            <p class="h4 mb-4 thin-text">{$t('locale.Error404Text')}</p>
            <a href="/" class="btn btn-outline-primary w-100">{$t('locale.Error404Button')}</a>
        </div>
    </div>
</div>

<style>

    .text-danger {
        color: #0d6efd;
    }
</style>