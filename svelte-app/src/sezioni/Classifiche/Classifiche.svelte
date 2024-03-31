<script>
    export let songs = [];

    // Raggruppa le canzoni per artista e calcola la media del Rating
    const artists = songs.reduce((acc, song) => {
        if (!acc[song.Artist]) {
            acc[song.Artist] = {
                totalRating: 0,
                songCount: 0,
                averageRating: 0
            };
        }
        acc[song.Artist].totalRating += parseFloat(song.Rating);
        acc[song.Artist].songCount++;
        acc[song.Artist].averageRating = acc[song.Artist].totalRating / acc[song.Artist].songCount;
        return acc;
    }, {});

    // Converti l'oggetto degli artisti in un array e ordina per averageRating
    const sortedArtists = Object.entries(artists)
        .sort((a, b) => b[1].averageRating - a[1].averageRating)
        .slice(0, 20);

    // Ordina le canzoni per Rating
    const sortedSongs = songs
        .sort((a, b) => parseFloat(b.Rating) - parseFloat(a.Rating))
        .slice(0, 20);
</script>

<style>
    /* Stili per la classifica */
    .background {
        max-width: 800px;
        margin: 40px auto;
        text-align: center;
    }

    h2 {
        color: var(--main-color);
        margin-bottom: 20px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }

    th, td {
        padding: 8px 12px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }
</style>

<div class="background">
    <h2>Classifica degli Artisti per Media del Rating</h2>
    <!-- Tabella Artisti -->
    <table>
        <thead>
            <tr>
                <th>Artista</th>
                <th>Media Rating</th>
            </tr>
        </thead>
        <tbody>
            {#each sortedArtists as [artist, data]}
                <tr>
                    <td>{artist}</td>
                    <td>{data.averageRating.toFixed(2)}</td>
                </tr>
            {/each}
        </tbody>
    </table>

    <h2>Top 20 Canzoni per Rating</h2>
    <!-- Tabella Canzoni -->
    <table>
        <thead>
            <tr>
                <th>Artista</th>
                <th>Titolo</th>
                <th>Rating</th>
            </tr>
        </thead>
        <tbody>
            {#each sortedSongs as song}
                <tr>
                    <td>{song.Artist}</td>
                    <td>{song.Title}</td>
                    <td>{song.Rating}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
