<!-- src/sezioni/Canzoni/Canzoni.svelte -->

<script>
    export let searchText = '';
    let songs = [];
    let isLoading = true;
    let isError = false;
    let errorMessage = '';

    // Funzione per caricare il file JSON
    async function loadSongs() {
        try {
            const response = await fetch('/songs.json');  // Assumendo che il file sia nella root del server
            if (!response.ok) {
                throw new Error('Errore nel caricamento dei dati delle canzoni');
            }
            songs = await response.json();
            isLoading = false;
        } catch (error) {
            console.error(error.message);
            isLoading = false;
            isError = true;
            errorMessage = 'Si è verificato un errore durante il caricamento dei dati';
        }
    }

    // Carica i dati quando il componente viene montato
    import { onMount } from 'svelte';
    onMount(loadSongs);

    // Funzione per filtrare le canzoni in base al testo di ricerca
    $: filteredSongs = searchText
        ? songs.filter(song => 
            song.Artist.toLowerCase().includes(searchText.toLowerCase()) || 
            song.Title.toLowerCase().includes(searchText.toLowerCase())
        )
        : songs;
</script>

<style>
    /* Stili per la tabella */
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        font-family: Arial, sans-serif;
    }

    td{
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }


    tr:nth-child(even) {
        background-color: #f8f8f8;
    }

    tr:hover {
        background-color: #f1f1f1;
    }

    /* Stili per la barra di ricerca */
    .search-container {
        margin-bottom: 20px;
    }

    .search-bar {
        display: flex;
        align-items: center;
        background-color: #f8f8f8;
        padding: 10px;
        border-radius: 5px;
    }

    .search-bar label {
        margin-right: 10px;
        color: var(--black);
    }

    .search-bar input {
        flex-grow: 1;
        padding: 8px;
        border-radius: 4px;
        border: 1px solid #ccc;
        font-size: 16px;
    }
</style>

<!-- Searchbar -->
<div class="search-container">
    <div class="search-bar">
        <label for="searchInput">Cerca per artista o titolo:</label>
        <input type="text" id="searchInput" bind:value={searchText} placeholder="Inserisci il testo di ricerca...">
    </div>
</div>

<!-- Gestione dell'errore -->
{#if isError}
    <div class="error-message">{errorMessage}</div>
{:else if isLoading}
    <div class="background">Caricamento...</div>
{:else}
    <!-- Sfondo e Tabella delle canzoni -->
    <div class="background">
        <table>
            <tbody>
                {#each filteredSongs as song}
                    <tr>
                        <td>{song.Artist}</td>
                        <td>{song.Title}</td>
                        <td>{song.Year}</td>
                        <td>{song.Sales}</td>
                        <td>{song.Streams}</td>
                        <td>{song.Downloads}</td>
                        <td>{song['Radio Plays']}</td>
                        <td>{song.Rating}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
{/if}
