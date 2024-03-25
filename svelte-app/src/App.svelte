<script>
	import SongsTable from './SongsTable.svelte';
	import SearchBar from './SearchBar.svelte';
	import { onMount } from 'svelte';
  
	let searchText = '';
  
	onMount(async () => {
	  // Carica i dati quando il componente viene montato
	  // Implementa qui la logica per caricare i dati iniziali
	});
  </script>
  
  <h1>Elenco Canzoni</h1>
  
  <!-- Utilizzo del componente SearchBar -->
  <SearchBar bind:searchText />
  
  <SongsTable {searchText} />
  