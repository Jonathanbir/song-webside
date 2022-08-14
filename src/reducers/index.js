import { combineReducers } from "redux";
import { SONGS_ACTION_TYPES } from "./songs.types";

const songsReducer = () => {
  return [
    {
      title: "Change",
      src: "https://beardbarnmusicbucket.s3.amazonaws.com/The+Wild+Horse",
    },
    {
      title: "Wait",
      src: "https://beardbarnmusicbucket.s3.amazonaws.com/The+Wild+Horse",
    },
    {
      title: "伯父",
      src: "https://beardbarnmusicbucket.s3.amazonaws.com/The+Wild+Horse",
    },
    {
      title: "我的癮",
      src: "https://beardbarnmusicbucket.s3.amazonaws.com/The+Wild+Horse",
    },
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
