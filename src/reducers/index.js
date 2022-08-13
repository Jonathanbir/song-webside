import { combineReducers } from "redux";
import { SONGS_ACTION_TYPES } from "./songs.types";

const songsReducer = () => {
  return [
    { title: "Change", src: "4:05" },
    { title: "Wait", src: "2:30" },
    { title: "伯父", src: "3:15" },
    { title: "我的癮", src: "1:45" },
  ];
};

const SONGS_INITIAL_STATE = {
  selectedSong: null,
};

const selectedSongReducer = (state = SONGS_INITIAL_STATE, action) => {
  const { type, payload } = action;
  console.log("payload", payload);
  switch (type) {
    case SONGS_ACTION_TYPES.SET_SONG_SELECTED:
      return payload.title;
    default:
      return state;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
