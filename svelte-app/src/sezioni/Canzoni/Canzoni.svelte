<!-- Canzoni.svelte -->

<script>
    import { onMount } from 'svelte';
    import { favoriteSongs } from '../../store/store.js';

    let songs = [];
    let favoriteList = [];
    let isLoading = true;

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
        color: #ffffff; /* bianco */
        background-color: #4CAF50; /* verde */
    }
</style>

<div class="background">
    <h2>Canzoni</h2>
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
                {#each songs as song}
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
