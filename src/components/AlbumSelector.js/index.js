import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { setCurrentAlbum, setPlaySong } from "../../reducers/songs.action";
import "./index.css";

const AlbumSelector = ({ page }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={page === "Music" ? "album-music-selector" : "album-selector"}
    >
      <motion.div
        className="album-select-ball album-ball-01"
        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{ duration: 0.5 }}
        onClick={() => {
          dispatch(setCurrentAlbum("EarthBound"));
          dispatch(setPlaySong(false));
        }}
      />
      <motion.div
        className="album-select-ball album-ball-02"
        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{ duration: 0.5 }}
        onClick={() => {
          dispatch(setCurrentAlbum("OuttaBody"));
          dispatch(setPlaySong(false));
        }}
      />
    </div>
  );
};
export default AlbumSelector;
