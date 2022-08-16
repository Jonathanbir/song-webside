import { combineReducers } from "redux";
import { SONGS_ACTION_TYPES } from "./songs.types";
import { songs01 } from "../api";

const albums = ["OuttaBody", "EarthBound"];

const SONGS_INITIAL_STATE = {
  songs: songs01,
  currentSong: songs01[0],
  currentAlbum: albums[0],
  isplaying: false,
  isMenuOpen: false,
};

const songsReducer = (state = SONGS_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SONGS_ACTION_TYPES.SET_IS_MENU_OPNE:
      return {
        ...state,
        isMenuOpen: payload,
      };
    case SONGS_ACTION_TYPES.SET_CURRENT_ALBUM:
      return {
        ...state,
        currentAlbum: payload,
      };
    case SONGS_ACTION_TYPES.SET_ALBUM_SONGS:
      return {
        ...state,
        songs: payload,
      };
    case SONGS_ACTION_TYPES.SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: payload,
      };
    case SONGS_ACTION_TYPES.SET_PLAY_SONG:
      return {
        ...state,
        isplaying: payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  songs: songsReducer,
});
