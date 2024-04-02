<!-- Preferiti.svelte -->

<script>
    import { onMount } from 'svelte';
    import { favoriteSongs } from '../../store/store.js';

    let favoriteList = [];

    onMount(() => {
        favoriteList = $favoriteSongs; // Ottieni le canzoni preferite dallo store
    });

    function removeFromFavorites(song) {
        // Rimuovi la canzone dai preferiti
        favoriteList = favoriteList.filter(fav => fav !== song);
        favoriteSongs.set(favoriteList); // Aggiorna lo store dei preferiti
    }
</script>

<style>
    /* Stili per la tabella */
    .background {
        max-width: 100%;
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        font-family: Arial, sans-serif;
    }

    th, td {
        padding: 12px 15px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    tr:nth-child(even) {
        background-color: #f8f8f8;
    }

    tr:hover {
        background-color: #f1f1f1;
    }

    button {
        padding: 8px 12px;
        background-color: #f44336;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #d32f2f;
    }
</style>

<div class="background">
    <h2>Preferiti</h2>
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
            {#each favoriteList as song}
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
                        <button on:click={() => removeFromFavorites(song)}>&#8722;</button> <!-- Pulsante per rimuovere dai preferiti -->
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
