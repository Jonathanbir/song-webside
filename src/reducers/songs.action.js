import { createAction } from "./reducer.utils";
import { SONGS_ACTION_TYPES } from "./songs.types";

export const setPlaySong = (boolean) =>
  createAction(SONGS_ACTION_TYPES.SET_PLAY_SONG, boolean);

export const setCurrentSong = (song) =>
  createAction(SONGS_ACTION_TYPES.SET_CURRENT_SONG, song);
