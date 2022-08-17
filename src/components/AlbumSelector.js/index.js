import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMedia } from "../../hooks/useMedia";
import { motion } from "framer-motion";
import {
  setCurrentAlbum,
  setPlaySong,
  setIsAlbumOpen,
} from "../../reducers/songs.action";
import {
  selectIsAlbumOpen,
  selectCurrentAlbum,
} from "../../reducers/songs.selector";
import { FaWindowClose } from "react-icons/fa";
import "./index.css";

const AlbumSelector = ({ page }) => {
  const dispatch = useDispatch();
  const media = useMedia();

  const isAlbumOpen = useSelector(selectIsAlbumOpen);
  const currentAlbum = useSelector(selectCurrentAlbum);
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
          {page === "Music" && media === "phone" ? (
            <></>
          ) : (
            <FaWindowClose
              className={
                currentAlbum === "OuttaBody"
                  ? "selector-close-btn grey"
                  : "selector-close-btn white"
              }
              onClick={() => dispatch(setIsAlbumOpen(false))}
            />
          )}
          <motion.div
            className={
              currentAlbum === "EarthBound"
                ? "album-select-ball album-ball-01 select-border"
                : "album-select-ball album-ball-01"
            }
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
            className={
              currentAlbum === "OuttaBody"
                ? "album-select-ball album-ball-02 select-border"
                : "album-select-ball album-ball-02"
            }
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
