import React from "react";
import SongList from "../SongList";
import SongDetail from "../SongDetail";
import "./index.css";

const Music = () => {
  return (
    <div className="music-container">
      <SongList />
      <div className="cd"></div>
    </div>
  );
};

export default Music;
