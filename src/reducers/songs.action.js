import { createAction } from "./reducer.utils";
import { SONGS_ACTION_TYPES } from "./songs.types";

export const selectSong = (song) =>
  createAction(SONGS_ACTION_TYPES.SET_SONG_SELECTED, song);

export const setIsMenuOpen = (boolean) =>
  createAction(SONGS_ACTION_TYPES.SET_IS_MENU_OPNE, boolean);

export const setCurrentSong = (song) =>
  createAction(SONGS_ACTION_TYPES.SET_CURRENT_SONG, song);
