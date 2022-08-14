import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Player from "../Player";
import "./index.css";

const Music = ({ songs }) => {
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[0]);

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

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });

    if (duration === ct) {
      setisplaying(false);
    }
  };

  return (
    <div
      className="music-container"
      style={isplaying ? { zIndex: "initial" } : { zIndex: "1" }}
    >
      <div className={isplaying ? "cd animate" : "cd"} />
      <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
      <p>
        ESO 靈魂出竅 Outta Body <br />
        <span className="song-title">{currentSong.title}</span>
      </p>
      <Player
        songs={songs}
        isplaying={isplaying}
        setisplaying={setisplaying}
        audioElem={audioElem}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    selectedSong: state.selectedSong.selectedSong,
    songs: state.songs,
  };
};

export default connect(mapStateToProps)(Music);
