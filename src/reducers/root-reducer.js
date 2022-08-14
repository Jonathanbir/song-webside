import { combineReducers } from "redux";
import { SONGS_ACTION_TYPES } from "./songs.types";

const SONGS_INITIAL_STATE = {
  songs: [
    { title: "Change", src: "4:05" },
    {
      title: "Wait",
      src: "https://rr2---sn-ipoxu-un5es.googlevideo.com/videoplayback?expire=1660429940&ei=FNL3YomAMpfv2roP0cm8qAE&ip=2001%3Ab011%3A200f%3A185f%3Aeced%3A7d4f%3Ac0e7%3Ad42c&id=o-AJQuaL_09qwrVTGpjkcTKsBLXFstu2_F7Q4w9x0qK4rB&itag=251&source=youtube&requiressl=yes&mh=-S&mm=31%2C29&mn=sn-ipoxu-un5es%2Csn-un57ene6&ms=au%2Crdu&mv=m&mvi=2&pl=55&initcwndbps=737500&spc=lT-KhgibmahzVNjY-XLI0kXLysI6uzLE-qVih1De2dWs&vprv=1&mime=audio%2Fwebm&ns=eiT2ZQwAv5TQUZqKmjKZgrMH&gir=yes&clen=3363891&dur=203.781&lmt=1604146966712819&mt=1660407892&fvip=1&keepalive=yes&fexp=24001373%2C24007246&beids=23886213&c=WEB&rbqsm=fr&txp=5531432&n=HyITQfT9P0yDUg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgSHlIzjjTO_Eq3REWEHRi2rbtsjQYG3e3BlbEZB7qTKoCIAWktswV0zVfwXf1YL8gY-ik_Bb3x8bT4b4bapia1zPu&alr=yes&sig=AOq0QJ8wRgIhAPU3AQPLFfY0ewNY0dIALDBv_oRvYCtdhFSW3K8Yrb8FAiEA7XyzklWlWnUTQ5FszODGdYk-_klL2Zx8ASKqPNu0qVk%3D&cpn=zmUZOGWW1PdHxtq6&cver=2.20220809.02.00&range=0-66148&rn=2&rbuf=0",
    },
    { title: "伯父", src: "3:15" },
    { title: "我的癮", src: "1:45" },
  ],
  selectedSong: "Change",
  songIsPlaying: false,
};

const selectedSongReducer = (state = SONGS_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SONGS_ACTION_TYPES.SET_SONGS:
      return payload.title;
    case SONGS_ACTION_TYPES.SET_SONG_SELECTED:
      return {
        ...state,
        selectedSong: payload.title,
      };
    case SONGS_ACTION_TYPES.SET_SONG_PLAY:
      return {
        ...state,
        songIsPlaying: !payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  songs: selectedSongReducer,
});
