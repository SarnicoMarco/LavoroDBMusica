<!-- src/Navbar.svelte -->

<script>
    export let currentSection;
    export let navigateTo;

    function isActive(section) {
        return currentSection === section;
    }
</script>

<div class="nav-bar">
    <button on:click={() => navigateTo('Home')} class:selected={isActive('Home')}>Home</button>
    <button on:click={() => navigateTo('Canzoni')} class:selected={isActive('Canzoni')}>Canzoni</button>
    <button on:click={() => navigateTo('Quiz')} class:selected={isActive('Quiz')}>Quiz</button>
    <button on:click={() => navigateTo('Classifiche')} class:selected={isActive('Classifiche')}>Classifiche</button> 
</div>

<style>
    /* Colori principali */
    :root {
        --main-color: #6c5ce7;      /* Colore principale */
        --background-color: #f8f9fa; /* Colore di sfondo */
    }

    .nav-bar {
        background-color: var(--main-color);  /* Colore principale */
        padding: 10px;
        border-radius: 8px;
        margin-bottom: 20px;
    }

    .selected {
        background-color: var(--background-color); /* Colore di sfondo */
        color: var(--main-color);                   /* Colore principale */
        border: 2px solid var(--main-color);         /* Colore principale */
        padding: 10px 20px;
        border-radius: 4px;
        margin-right: 10px;
    }

    button {
        background-color: transparent;
        color: var(--background-color);  /* Colore di sfondo */
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: var(--main-color); /* Colore principale */
        color: var(--background-color);      /* Colore di sfondo */
    }
</style>
