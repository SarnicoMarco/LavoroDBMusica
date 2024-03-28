<!-- src/sezioni/Canzoni/Canzoni.svelte -->

<script>
    export let searchText = '';
    let songs = [];

    // Funzione per caricare il file JSON
    async function loadSongs() {
        try {
            const response = await fetch('/songs.json');  // Modificato il percorso
            if (!response.ok) {
                throw new Error('Errore nel caricamento dei dati delle canzoni');
            }
            songs = await response.json();
        } catch (error) {
            console.error(error.message);
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
    /* Stili precedentemente forniti rimangono invariati */
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        font-family: Arial, sans-serif;
    }

    td {
        padding: 12px;
        text-align: left;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    tr:hover {
        background-color: #ddd;
    }

    .search-container {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .search-bar {
        flex: 1;
        margin-right: 10px;
    }

    .search-bar label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }

    .search-bar input {
        width: 100%;
        padding: 10px;
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

<!-- Tabella delle canzoni -->
<table>
    <!-- ... (intestazione della tabella) ... -->
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
