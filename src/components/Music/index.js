import React, { useRef } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import SongList from "../SongList";
import "./index.css";

const Music = ({ songs, selectedSong }) => {
  return (
    <div className="music-container">
      <SongList />
      <div className="cd" />
      <audio src={songs[1].src} />
      <p>
        ESO 靈魂出竅 Outta Body <br />
        <span className="song-title">{selectedSong}</span>
      </p>
      <div className="control-container">
        <FontAwesomeIcon icon={faPlay} className="play-btn" />
      </div>
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
