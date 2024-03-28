<script>
    import { onMount } from 'svelte';
  
    let jsonData = []; // JSON data
    let sortedData = []; // Sorted data
    let sortOrder = 'asc'; // Initial sort order
  
    // Function to fetch JSON data
    async function fetchData() {
      const response = await fetch('songs.json'); // Assuming data.json is your JSON file
      jsonData = await response.json();
      sortData();
    }
  
    // Function to sort data based on year attribute
    function sortData() {
      sortedData = [...jsonData].sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.year - b.year;
        } else {
          return b.year - a.year;
        }
      });
    }
  
    // Function to toggle sort order
    function toggleSortOrder() {
      sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
      sortData();
    }
  
    onMount(fetchData);
  </script>
  
  {#if sortedData.length > 0}
    <button on:click={toggleSortOrder}>Scegli l'ordine</button>
    <ul>
      {#each sortedData as item}
        <li>{item.year}: {item.name}</li>
      {/each}
    </ul>
  {:else}
    <p>Loading...</p>
  {/if}
  