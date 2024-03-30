import { writable } from 'svelte/store';

// Stato globale dell'applicazione
export const currentSection = writable('Home'); // Sezione corrente dell'applicazione
export const searchText = writable(''); // Testo di ricerca per le canzoni
export const selectedSong = writable(null); // Canzone selezionata nel quiz
