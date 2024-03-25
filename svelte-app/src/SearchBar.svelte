<!-- SearchBar.svelte -->
<script>
    export let searchText = '';
  </script>
  
  <input type="text" bind:value={searchText} placeholder="Cerca per nome...">
  