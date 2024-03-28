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
</div>

<style>
    .nav-bar {
        background-color: var(--nav-green);
        padding: 10px;
        border-radius: 8px;
        margin-bottom: 20px;
    }

    .selected {
        background-color: var(--black);
        color: var(--white);
        border: 2px solid var(--green);
        padding: 10px 20px;
        border-radius: 4px;
        margin-right: 10px;
    }

    button {
        background-color: transparent;
        color: var(--white);
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: var(--selected-green);
    }
</style>
