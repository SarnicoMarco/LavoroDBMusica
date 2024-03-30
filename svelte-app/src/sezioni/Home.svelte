<!-- src/sezioni/Home.svelte -->

<script>
    // Puoi aggiungere qui la logica necessaria per la sezione Home
</script>

<div class="home-container">
    <h1>Benvenuto nel mio Sito!</h1>
    <p>Questo è un sito di esempio dedicato alla musica. Scopri le ultime novità, sfida te stesso con il nostro quiz e tanto altro!</p>

    <h2>Sezioni Disponibili:</h2>
    <ul>
        <li>Canzoni - Esplora la nostra vasta collezione di canzoni e artisti.</li>
        <li>Quiz - Testa la tua conoscenza musicale con i nostri quiz interattivi.</li>
    </ul>

    <h2>Perché Scegliere il Nostro Sito?</h2>
    <p>Il nostro sito offre una vasta gamma di contenuti musicali, dalle ultime hit alle classiche indimenticabili. Con il nostro quiz, puoi mettere alla prova la tua conoscenza musicale e imparare nuove curiosità sul mondo della musica.</p>

    <h2>Unisciti a Noi!</h2>
    <p>Non perdere tempo, esplora le nostre sezioni e immergiti nell'emozionante mondo della musica con noi!</p>
</div>

<style>
    /* Colori principali */
    :root {
        --main-color: #6c5ce7;      /* Colore principale */
        --background-color: #f8f9fa; /* Colore di sfondo */
        --nav-green: #28a745;        /* Verde della navbar */
        --black: #000000;            /* Nero */
        --white: #ffffff;            /* Bianco */
        --selected-green: #218838;   /* Verde selezionato */
    }

    .home-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
    }

    h1 {
        color: var(--main-color);
        margin-bottom: 20px;
    }

    p {
        color: var(--black);
        line-height: 1.5;
        margin-bottom: 20px;
    }

    h2 {
        color: var(--main-color);
        margin-top: 30px;
        margin-bottom: 15px;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin-bottom: 20px;
    }

    li {
        margin-bottom: 10px;
        color: var(--black);
    }
</style>
