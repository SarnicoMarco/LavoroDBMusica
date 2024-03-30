<!-- src/sezioni/Home.svelte -->

<script>
    // Puoi aggiungere qui la logica necessaria per la sezione Home
</script>

<div>
    <h1>Benvenuto nel mio Sito!</h1>
    <p>Questo è un sito di esempio. Puoi navigare tra diverse sezioni utilizzando la barra di navigazione in alto.</p>

    <h2>Sezioni Disponibili:</h2>
    <ul>
        <li>Canzoni</li>
        <li>Quiz</li>
    </ul>
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


    h1 {
        color: var(--black); /* Nero */
    }

    p {
        color: var(--black); /* Nero */
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin-bottom: 10px;
    }
</style>