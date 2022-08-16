import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector, connect } from "react-redux";
import { useMedia } from "../../hooks/useMedia";
import {
  selectCurrentSong,
  selectCurrentAlbum,
  selectIsAlbumOpen,
} from "../../reducers/songs.selector";
import {
  setCurrentSong,
  setPlaySong,
  setIsAlbumOpen,
} from "../../reducers/songs.action";
import Navigation from "../Navigation";
import AlbumSelector from "../AlbumSelector.js";
import Player from "../Player";
import "./index.css";

const Music = ({ songs, isplaying }) => {
  const dispatch = useDispatch();
  const media = useMedia();
  const currentSong = useSelector(selectCurrentSong);
  const currentAlbum = useSelector(selectCurrentAlbum);
  const isAlbumOpen = useSelector(selectIsAlbumOpen);
  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying]);

  useEffect(() => {
    if (media === "phone") {
      dispatch(setIsAlbumOpen(true));
    }
  }, [dispatch, media, isAlbumOpen]);

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
      dispatch(setPlaySong(false));
    }
  };

  return (
    <div
      className={
        currentAlbum === "OuttaBody"
          ? "music-container"
          : "music-container black"
      }
      style={isplaying ? { zIndex: "initial" } : { zIndex: "1" }}
    >
      <Navigation />
      <AlbumSelector page="Music" />
      <Link className="link-logo" to="/">
        <motion.div
          className="logo music-logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </Link>
      <motion.div
        className={
          currentAlbum === "OuttaBody"
            ? isplaying
              ? "cd cd01 animate"
              : "cd cd01"
            : isplaying
            ? "cd cd02 animate"
            : "cd cd02"
        }
        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{ duration: 0.5 }}
      />
      <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
      <motion.p
        className="music-title"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={currentAlbum === "OuttaBody" ? {} : { color: "#fff" }}
      >
        ESO 靈魂出竅 Outta Body <br />
        <span className="song-title">{currentSong.title}</span>
      </motion.p>
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
