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
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
      font-family: Arial, sans-serif;
    }
  
    th, td {
      border: 1px solid #ccc;
      padding: 12px;
      text-align: left;
    }
  
    th {
      background-color: #f2f2f2;
      color: #333;
      font-weight: bold;
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
  