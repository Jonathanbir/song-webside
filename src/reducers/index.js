import { combineReducers } from "redux";
import { SONGS_ACTION_TYPES } from "./songs.types";

const songsReducer = () => {
  return [
    {
      title: "Change",
      url: "https://fs-preview.kfs.io/201307/1d0rY-kllD8-0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668231151_82ac6fa595b0d8e36dd85dea146fc4f9",
    },
    {
      title: "Wait",
      url: "https://fs-preview.kfs.io/201307/1dkvY-4inToy0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668231465_92897050a05eb65d1912d40e50b00b14",
    },
    {
      title: "Follow You",
      url: "https://fs-preview.kfs.io/201307/1dgpZOkrnzcz0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668231671_c9c4c229fa7d54a882880508c9dbcfba",
    },
    {
      title: "Something I Don't Need",
      url: "https://fs-preview.kfs.io/201307/1dkvY-4inTw10mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668231640_5a26cb021b8171635f90f916c85fbd34",
    },
    {
      title: "伯父",
      url: "https://fs-preview.kfs.io/201307/1dkvY-4inT0x0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668231435_bc38f2ef3047672f1c91a294383fd142",
    },
    {
      title: "太陽",
      url: "https://fs-preview.kfs.io/201307/1dsvYO4rnTk10mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668231355_1d388cde92abbd9620a80dddf4f1bc54",
    },
    {
      title: "她沒在看我",
      url: "https://fs-preview.kfs.io/201307/1dooYOkllTY30mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668231276_50647ce35cf4b64db09063b54247d39d",
    },
    {
      title: "稱讚她的美 ",
      url: "https://fs-preview.kfs.io/201307/1dskZOkllT0_0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668231403_d21ccbf9a6285b013e97eeaa246346e7",
    },
  ];
};

const SONGS_INITIAL_STATE = {
  selectedSong: null,
};

const selectedSongReducer = (state = SONGS_INITIAL_STATE, action) => {
  const { type, payload } = action;
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
