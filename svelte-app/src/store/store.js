import { writable } from 'svelte/store';

export const currentSection = writable('Home'); 
export const searchText = writable(''); 
export const selectedSong = writable(null); 
export const favoriteSongs = writable([]);