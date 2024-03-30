<!-- src/App.svelte -->

<script>
    import { onMount } from 'svelte';
    import Home from './sezioni/Home.svelte';
    import Canzoni from './sezioni/Canzoni/Canzoni.svelte';
    import Quiz from './sezioni/Quiz/Quiz.svelte';
    import Navbar from './Navbar.svelte';
    import { currentSection } from './store/store.js';

    onMount(() => {
        currentSection.set('Home');
    });

    function navigateTo(section) {
        currentSection.set(section);
    }
</script>

<div class="page-container">
    <!-- NavBar -->
    <Navbar {currentSection} {navigateTo} />

    <!-- Sezione dinamica -->
    {#if $currentSection === 'Home'}
        <Home />
    {:else if $currentSection === 'Canzoni'}
        <Canzoni />
    {:else if $currentSection === 'Quiz'}
        <Quiz />
    {/if}
</div>


<style>
    /* Colori principali */
    :root {
        --main-color: #6c5ce7;      /* Colore principale */
        --background-color: #f8f9fa; /* Colore di sfondo */
        --nav-green: #28a745;        /* Verde della navbar */
        --black: #000000;            /* Nero */
        --white: #ffffff;            /* Bianco */
        --selected-green: #218838;   /* Verde selezionato */
    }

    .page-container {
        background-color: var(--background-color); /* Colore di sfondo */
        padding: 20px;
        border-radius: 8px;
    }

    /* Aggiungi altri stili necessari per armonizzare con il design generale */

</style>