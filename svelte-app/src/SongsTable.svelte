<script>
    export let searchText = '';
    let songs = [];
  
    // Funzione per caricare il file JSON
    async function loadSongs() {
      const response = await fetch('songs.json');
      songs = await response.json();
    }
  
    // Carica i dati quando il componente viene montato
    import { onMount } from 'svelte';
    onMount(loadSongs);
  
    // Funzione per filtrare le canzoni in base al testo di ricerca
    $: filteredSongs = searchText
      ? songs.filter(song => 
          song.Artist.toLowerCase().startsWith(searchText.toLowerCase())
        )
      : songs;
  </script>
  
  <style>
    /* ... (i tuoi stili CSS esistenti) ... */
  </style>
  
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
  