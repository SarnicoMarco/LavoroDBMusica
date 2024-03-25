<script>
	let songs = [];
  
	// Funzione per caricare il file JSON
	async function loadSongs() {
	  const response = await fetch('songs.json');
	  songs = await response.json();
	}
  
	// Carica i dati quando il componente viene montato
	import { onMount } from 'svelte';
	onMount(loadSongs);
  </script>
  
  <style>
	table {
	  width: 100%;
	  border-collapse: collapse;
	  margin-top: 20px;
	}
  
	th, td {
	  border: 1px solid #ccc;
	  padding: 8px;
	  text-align: left;
	}
  
	th {
	  background-color: #f2f2f2;
	}
  </style>
  
  <h1>Elenco Canzoni</h1>
  
  <table>
	<thead>
	  <tr>
		<th>Artista</th>
		<th>Titolo</th>
		<th>Anno</th>
		<th>Vendite</th>
		<th>Ascolti</th>
		<th>Download</th>
		<th>Riproduzioni in Radio</th>
		<th>Valutazione</th>
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
		</tr>
	  {/each}
	</tbody>
  </table>
  