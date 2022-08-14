import { createAction } from "./reducer.utils";
import { SONGS_ACTION_TYPES } from "./songs.types";

export const selectSong = (song) =>
  createAction(SONGS_ACTION_TYPES.SET_SONG_SELECTED, song);