import { createAction } from "./reducer.utils";
import { SONGS_ACTION_TYPES } from "./songs.types";

export const setPlaySong = (boolean) =>
  createAction(SONGS_ACTION_TYPES.SET_PLAY_SONG, boolean);

export const setCurrentSong = (song) =>
  createAction(SONGS_ACTION_TYPES.SET_CURRENT_SONG, song);

export const setCurrentAlbum = (album) =>
  createAction(SONGS_ACTION_TYPES.SET_CURRENT_ALBUM, album);

export const setAlbumSongs = (songs) =>
  createAction(SONGS_ACTION_TYPES.SET_ALBUM_SONGS, songs);
