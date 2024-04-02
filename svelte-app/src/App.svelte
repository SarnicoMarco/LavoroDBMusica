<script>
    import { onMount } from 'svelte';
    import Home from './sezioni/Home.svelte';
    import Canzoni from './sezioni/Canzoni/Canzoni.svelte';
    import Quiz from './sezioni/Quiz/Quiz.svelte';
    import Classifiche from './sezioni/Classifiche/Classifiche.svelte';  
    import Preferiti from './sezioni/Preferiti/Preferiti.svelte';  // Importa la nuova sezione Preferiti
    import Navbar from './Navbar.svelte';
    import Footer from './Footer.svelte';
    import { currentSection } from './store/store.js';

    let songs = [];

    onMount(async () => {
        currentSection.set('Home');
        
        // Carica i dati delle canzoni
        const response = await fetch('/songs.json');
        songs = await response.json();
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
        <Canzoni {songs} />
    {:else if $currentSection === 'Quiz'}
        <Quiz />
    {:else if $currentSection === 'Classifiche'}
        <Classifiche {songs} />
    {:else if $currentSection === 'Preferiti'}  <!-- Aggiunta la nuova sezione Preferiti -->
        <Preferiti />
    {/if}
    <Footer />
</div>
