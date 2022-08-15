import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector, connect } from "react-redux";
import Navigation from "../Navigation";
import Player from "../Player";
import { selectCurrentSong } from "../../reducers/songs.selector";
import { setCurrentSong, setPlaySong } from "../../reducers/songs.action";
import "./index.css";

const Music = ({ songs, isplaying }) => {
  const dispatch = useDispatch();
  const currentSong = useSelector(selectCurrentSong);

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    dispatch(
      setCurrentSong({
        ...currentSong,
        progress: (ct / duration) * 100,
        length: duration,
      })
    );

    if (duration === ct) {
      setPlaySong(false);
    }
  };

  return (
    <div
      className="music-container"
      style={isplaying ? { zIndex: "initial" } : { zIndex: "1" }}
    >
      <Navigation />
      <Link className="link-logo" to="/">
        <div className="logo music-logo" />
      </Link>
      <div className={isplaying ? "cd animate" : "cd"} />
      <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
      <p>
        ESO 靈魂出竅 Outta Body <br />
        <span className="song-title">{currentSong.title}</span>
      </p>
      <Player songs={songs} isplaying={isplaying} audioElem={audioElem} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    songs: state.songs.songs,
    isplaying: state.songs.isplaying,
  };
};

export default connect(mapStateToProps)(Music);
