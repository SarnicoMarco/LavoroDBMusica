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


