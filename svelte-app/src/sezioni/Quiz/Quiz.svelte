<!-- src/sezioni/Quiz/Quiz.svelte -->

<script>
    import { onMount } from 'svelte';
    
    let selectedSong = null;
    let userGuess = '';
    let isAnswered = false;
    let isCorrect = false;
    let songs = [];

    onMount(async () => {
        try {
            const response = await fetch('/songs.json');
            if (!response.ok) {
                throw new Error('Errore nel caricamento dei dati delle canzoni');
            }
            songs = await response.json();
        } catch (error) {
            console.error(error.message);
        }
    });

    function generateRandomSong() {
        const randomIndex = Math.floor(Math.random() * songs.length);
        selectedSong = songs[randomIndex];
        isAnswered = false;
        isCorrect = false;
        userGuess = '';
    }

    function checkGuess() {
        if (userGuess.toLowerCase() === selectedSong.Title.toLowerCase()) {
            isCorrect = true;
        } else {
            isCorrect = false;
        }
        isAnswered = true;
    }
</script>

<div class="quiz-container">
    <button on:click={generateRandomSong}>Genera indovinello</button>

    {#if selectedSong}
        <div class="song-details">
            <p>Data di uscita: {selectedSong.Year}</p>
            <p>Artista: {selectedSong.Artist}</p>
        </div>

        {#if !isAnswered}
            <div>
                <input bind:value={userGuess} placeholder="Indovina la canzone..." />
                <button on:click={checkGuess}>Indovina</button>
                <button on:click={() => isAnswered = true}>Risposta</button>
            </div>
        {:else}
            <div>
                {#if isCorrect}
                    <p>HAI INDOVINATO!</p>
                {:else}
                    <p>Il titolo della canzone era: {selectedSong.Title}</p>
                {/if}
                <button on:click={generateRandomSong}>Prossimo indovinello</button>
            </div>
        {/if}
    {/if}
</div>

<style>

</style>
