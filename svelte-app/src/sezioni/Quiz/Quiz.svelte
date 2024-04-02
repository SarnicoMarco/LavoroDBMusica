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

<style>
    :root {
        --main-color: #6c5ce7;      
        --background-color: #f8f9fa;
        --nav-green: #28a745;       
        --black: #000000;            
        --white: #ffffff;            
        --selected-green: #218838;   
    }

    .quiz-container {
        display: flex;
        flex-direction: column;   
        justify-content: center;  
        align-items: center;      
        height: 100vh;           
        background-color: var(--background-color);  
        color: var(--white);             
    }

    .quiz-container > button {
        padding: 10px 20px;
        margin-bottom: 20px;
        border: none;
        border-radius: 4px;
        background-color: var(--main-color);
        color: var(--white);
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .quiz-container > button:hover {
        background-color: var(--selected-green);
    }

    .quiz-container > div {
        text-align: center;     
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #333;   
        margin-bottom: 20px;      
    }

    .quiz-container > div p {
        margin-bottom: 10px;
    }

    .quiz-container > div input {
        width: 100%;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid #ccc;
        font-size: 16px;
        margin-bottom: 10px;
    }

    .quiz-container > div button {
        padding: 10px 20px;
        margin-right: 10px;
        border: none;
        border-radius: 4px;
        background-color: var(--main-color);
        color: var(--white);
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .quiz-container > div button:hover {
        background-color: var(--selected-green);
    }
</style>

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
