<script>
    export let searchText = '';
    let songs = [];
    let isLoading = true;
    let isError = false;
    let errorMessage = '';

    let sortField = 'Rating';
    let sortOrder = 'desc';  // 'asc' o 'desc'

    // Carica i dati dal local storage o effettua una nuova richiesta
    async function loadSongs() {
        try {
            const storedSongs = localStorage.getItem('songs');
            if (storedSongs) {
                songs = JSON.parse(storedSongs);
            } else {
                const response = await fetch('/songs.json');
                if (!response.ok) {
                    throw new Error('Errore nel caricamento dei dati delle canzoni');
                }
                songs = await response.json();
                localStorage.setItem('songs', JSON.stringify(songs));
            }
            isLoading = false;
        } catch (error) {
            console.error(error.message);
            isLoading = false;
            isError = true;
            errorMessage = 'Si è verificato un errore durante il caricamento dei dati';
        }
    }

    import { onMount } from 'svelte';
    onMount(loadSongs);

    // Funzione per filtrare le canzoni in base al testo di ricerca
    $: filteredSongs = searchText
        ? songs.filter(song => 
            song.Artist.toLowerCase().includes(searchText.toLowerCase()) || 
            song.Title.toLowerCase().includes(searchText.toLowerCase())
        )
        : songs;

    // Funzione per ordinare le canzoni in base al campo selezionato e all'ordine
    $: sortedSongs = [...filteredSongs].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a[sortField] - b[sortField];
        } else {
            return b[sortField] - a[sortField];
        }
    });
</script>


<style>
    /* Stili per la tabella */
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        font-family: Arial, sans-serif;
    }

    td {
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

    /* Stili per la barra di ricerca e filtri */
    .search-container {
        margin-bottom: 20px;
    }

    .search-bar, .filter-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #f8f8f8;
        padding: 10px;
        border-radius: 5px;
    }

    .search-bar label, .filter-container label {
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

    .filter-container select {
        padding: 8px;
        border-radius: 4px;
        border: 1px solid #ccc;
        font-size: 16px;
    }
</style>

<!-- Searchbar e Filtro -->
<div class="search-container">
    <div class="search-bar">
        <label for="searchInput">Cerca per artista o titolo:</label>
        <input type="text" id="searchInput" bind:value={searchText} placeholder="Inserisci il testo di ricerca...">
    </div>

    <!-- Filtri -->
    <div class="filter-container">
        <label for="sortField">Ordina per:</label>
        <select id="sortField" bind:value={sortField}>
            <option value="Year">Anno</option>
            <option value="Sales">Vendite</option>
            <option value="Streams">Ascolti</option>
            <option value="Downloads">Download</option>
            <option value="Radio Plays">Radio Plays</option>
            <option value="Rating">Rating</option>
        </select>

        <label for="sortOrder">Ordine:</label>
        <select id="sortOrder" bind:value={sortOrder}>
            <option value="asc">Crescente</option>
            <option value="desc">Decrescente</option>
        </select>
    </div>
</div>

<!-- Gestione dell'errore e Tabella delle canzoni -->
{#if isError}
    <div class="error-message">{errorMessage}</div>
{:else if isLoading}
    <div class="background">Caricamento...</div>
{:else}
    <div class="background">
        <table>
            <thead>
                <tr>
                    <th>#</th> <!-- Indice -->
                    <th>Artista</th>
                    <th>Titolo</th>
                    <th>Anno</th>
                    <th>Vendite</th>
                    <th>Ascolti</th>
                    <th>Download</th>
                    <th>Radio Plays</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {#each sortedSongs as song, index}
                    <tr>
                        <td>{index + 1}</td> <!-- Incrementa l'indice per partire da 1 -->
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
