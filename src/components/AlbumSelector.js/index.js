import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  setCurrentAlbum,
  setPlaySong,
  setIsAlbumOpen,
} from "../../reducers/songs.action";
import { selectIsAlbumOpen } from "../../reducers/songs.selector";
import "./index.css";

const AlbumSelector = ({ page }) => {
  const dispatch = useDispatch();

  const isAlbumOpen = useSelector(selectIsAlbumOpen);
  return (
    <>
      {!isAlbumOpen ? (
        <motion.div
          className="album-btn"
          initial={{ opacity: 0, x: -100, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          onClick={() => dispatch(setIsAlbumOpen(true))}
        />
      ) : (
        <div
          className={
            page === "Music" ? "album-music-selector" : "album-selector"
          }
        >
          <motion.div
            className="album-select-ball album-ball-01"
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{ duration: 0.5 }}
            onClick={() => {
              dispatch(setCurrentAlbum("EarthBound"));
              dispatch(setPlaySong(false));
              dispatch(setIsAlbumOpen(false));
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
              dispatch(setIsAlbumOpen(false));
            }}
          />
        </div>
      )}
    </>
  );
};
export default AlbumSelector;
