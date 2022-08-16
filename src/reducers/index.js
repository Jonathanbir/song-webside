import { combineReducers } from "redux";
import { SONGS_ACTION_TYPES } from "./songs.types";

const albums = ["OuttaBody", "EarthBound"];

const songs = [
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
    title: "Money Bag",
    url: "https://fs-preview.kfs.io/201307/1dkvY-4inT4_0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668427860_a2dc1a497b34d4f2cd97ed1d3fdc96b5",
  },
  {
    title: "So Good To Me",
    url: "https://fs-preview.kfs.io/201307/1dkvY-4inT8w0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668429116_15b5b47d8232297e411c139f4eb6ca9c",
  },
  {
    title: "Something I Don't Need",
    url: "https://fs-preview.kfs.io/201307/1dkvY-4inTw10mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668231640_5a26cb021b8171635f90f916c85fbd34",
  },
  {
    title: "Don't Worry About Me",
    url: "https://fs-preview.kfs.io/201307/1dkvY-4inDgx0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668427760_4a7cd816260bae2f1b1cdb74b6243e3b",
  },
  {
    title: "I Wish I Was There",
    url: "https://fs-preview.kfs.io/201307/1dkvY-4inT400mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668427832_642e67ffba515a5113cbd244f111be10",
  },
  {
    title: "Hello Beautiful",
    url: "https://fs-preview.kfs.io/201307/1dkvY-4inDY30mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668427818_428f9dc97c29bd4cf16c63016fa69d32",
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

const songs02 = [
  {
    title: "Way Up",
    url: "https://fs-preview.kfs.io/201307/2NctZuMnmzg30mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668427488_32ddca85e4b9a49e23d287d069c7894c",
  },
  {
    title: "祖先 ft. HowZ",
    url: "https://fs-preview.kfs.io/201307/2NctZuMnmzg-0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668427559_c3584deadea147f4980fab49750323a3",
  },
  {
    title: "達文西",
    url: "https://fs-preview.kfs.io/201307/2NctZuMnmzkz0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668427583_a6977d8743a1ec27560fb85340ef6887",
  },
  {
    title: "People",
    url: "https://fs-preview.kfs.io/201307/2NctZuMnmzY00mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668427604_db0e8d2d4ae04ec795142c2337e3d858",
  },
  {
    title: "Tiffany",
    url: "https://fs-preview.kfs.io/201307/2NctZuMnmzY_0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668427621_2f974fd25b1103acd38a3c1d812f5548",
  },
  {
    title: "Lucid Dream",
    url: "https://fs-preview.kfs.io/201307/2NctZuMnmzcw0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668427651_3583b7730359c75c150b423625c4bd41",
  },
  {
    title: "Big Girl",
    url: "https://fs-preview.kfs.io/201307/2NctZuMnlD410mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668427672_bbbb1916f25efd74757c2519aab5bb04",
  },
  {
    title: "我的癮",
    url: "https://fs-preview.kfs.io/201307/2NctZuMnlD820mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668427689_c63f6a351168bd079fc525f215f4b032",
  },
  {
    title: "妹妹",
    url: "https://fs-preview.kfs.io/201307/2NctZuMnlD8x0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668427702_c73da43a84b8b49160fadf889ca4069f",
  },
  {
    title: "Married To The Game",
    url: "https://fs-preview.kfs.io/201307/2NctZuMnlDwy0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668427715_983437fabd0478b56f3c82d335a90ed3",
  },
  {
    title: "Amazing",
    url: "https://fs-preview.kfs.io/201307/2NctZuMnlD030mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmo=?__gda__=1668427728_a306cf1f8cb22537f39f731ade616ae2",
  },
];

const SONGS_INITIAL_STATE = {
  songs: songs,
  currentSong: songs[0],
  currentAlbum: albums[0],
  isplaying: false,
};

const songsReducer = (state = SONGS_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SONGS_ACTION_TYPES.SET_CURRENT_ALBUM:
      return {
        ...state,
        currentAlbum: payload,
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
