<script>
    import { onMount } from 'svelte';
    import { favoriteSongs } from '../../store/store.js';

    let songs = [];
    let favoriteList = [];
    let isLoading = true;
    let selectedColumn = "Anno";
    let sortOrder = "Crescente";
    let filteredSongs = [];
    let searchText = "";

    onMount(async () => {
        const response = await fetch('/songs.json');
        songs = await response.json();
        favoriteList = $favoriteSongs;
        isLoading = false;
    });

    function toggleFavorite(song) {
        if (favoriteList.includes(song)) {
            favoriteList = favoriteList.filter(fav => fav !== song);
        } else {
            favoriteList = [...favoriteList, song];
        }
        favoriteSongs.set(favoriteList);
    }

    function isFavorite(song) {
        return favoriteList.includes(song);
    }

    function compareValues(key, order = 'Crescente') {
        return function innerSort(a, b) {
            let varA = a[key];
            let varB = b[key];

            // Converte le stringhe numeriche in numeri per le colonne numeriche
            if (["Year", "Sales", "Streams", "Downloads", "Radio Plays", "Rating"].includes(key)) {
                varA = parseFloat(varA.replace(',', ''));
                varB = parseFloat(varB.replace(',', ''));
            }

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (order === 'Crescente') ? comparison : (comparison * -1);
        };
    }

    $: filteredSongs = [...songs]
        .filter(song => song.Artist.toLowerCase().includes(searchText.toLowerCase()))
        .sort(compareValues(selectedColumn, sortOrder));
</script>

<!-- Resto del codice rimane invariato -->

<div class="background">
    <h2>Canzoni</h2>

    <input type="text" placeholder="Cerca per artista..." bind:value={searchText}>

    {#if isLoading}
        <div class="loading">Caricamento...</div>
    {:else}
        <table>
            <thead>
                <tr>
                    <th>Artista</th>
                    <th>Titolo</th>
                    <th>Anno</th>
                    <th>Vendite</th>
                    <th>Ascolti</th>
                    <th>Download</th>
                    <th>Radio Plays</th>
                    <th>Rating</th>
                    <th>Azione</th>
                </tr>
            </thead>
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
                        <td>
                            <button class="favorite-button square added" on:click={() => toggleFavorite(song)}>&#43;</button>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {/if}
</div>

<style>
    /* Stili rimangono invariati */
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

    .favorite-button {
        padding: 8px 12px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
        border-radius: 4px;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .favorite-button.square {
        background-color: transparent;
    }

    .favorite-button.added {
        color: #ffffff; 
        background-color: #4CAF50; 
    }
</style>
