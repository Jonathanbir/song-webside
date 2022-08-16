import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMedia } from "../../hooks/useMedia";
import { motion } from "framer-motion";
import { useGlobalMouseMove } from "../../hooks/useGlobalMouseMove";
import { FaHeadphonesAlt } from "react-icons/fa";
import { selectCurrentAlbum } from "../../reducers/songs.selector";
import Navigation from "../Navigation";
import "./index.css";

const BackGround = ({ media, currentAlbum }) => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <div
      className={
        currentAlbum === "OuttaBody"
          ? "home-background home-jungle"
          : "home-background home-planet"
      }
      style={
        media === "desktop"
          ? {
              transform: `translate(${10 * mouseX}px, ${
                -50 * mouseY
              }px) scale(1.2)`,
            }
          : {}
      }
    />
  );
};

const Eso = ({ media, currentAlbum }) => {
  const [mouseX] = useGlobalMouseMove();

  return (
    <motion.div
      className={
        currentAlbum === "OuttaBody" ? "eso eso-original" : "eso eso-astronaut"
      }
      initial={{ opacity: 0, scale: 0.5, y: 1000 }}
      animate={
        media === "desktop"
          ? { opacity: 1, scale: 1, x: 80 * mouseX, y: 0 }
          : { opacity: 1, scale: 1, y: 0 }
      }
      transition={{ duration: 0.5 }}
    />
  );
};

const LeftStuff = ({ media, currentAlbum }) => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <motion.div
      className={
        currentAlbum === "OuttaBody" ? "left-stuff bird" : "left-stuff rock01"
      }
      initial={{ opacity: 0, scale: 0.5, y: 1000 }}
      animate={
        media === "desktop"
          ? { opacity: 1, scale: 1, x: 50 * mouseX, y: -50 * mouseY }
          : { opacity: 1, scale: 1, y: 0 }
      }
      transition={{ duration: 0.5 }}
    />
  );
};

const RightStuff = ({ media, currentAlbum }) => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <motion.div
      className={
        currentAlbum === "OuttaBody" ? "right-stuff tree" : "right-stuff rock02"
      }
      initial={{ opacity: 0, scale: 0.5, y: 1000 }}
      animate={
        media === "desktop"
          ? { opacity: 1, scale: 1, x: 30 * mouseX, y: -50 * mouseY }
          : { opacity: 1, scale: 1, y: 0 }
      }
      transition={{ duration: 0.5 }}
    />
  );
};

const Cloud01 = ({ media, currentAlbum }) => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <motion.div
      className={
        currentAlbum === "OuttaBody"
          ? "cloud-three cloud-01"
          : "cloud-three  planet-01"
      }
      initial={{ opacity: 0, scale: 0.5, y: -100 }}
      animate={
        media === "desktop"
          ? { opacity: 1, scale: 1, x: 30 * mouseX, y: -30 * mouseY }
          : { opacity: 1, scale: 1, y: 0 }
      }
      transition={{ duration: 0.5 }}
    />
  );
};

const Cloud02 = ({ currentAlbum }) => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <motion.div
      className={
        currentAlbum === "OuttaBody"
          ? "cloud-three cloud-02"
          : "cloud-three planet-02"
      }
      initial={{ opacity: 0, scale: 0.5, y: -100 }}
      animate={{ opacity: 1, scale: 1.2, x: 30 * mouseX, y: -30 * mouseY }}
      transition={{ duration: 0.5 }}
    />
  );
};

const Cloud03 = ({ media, currentAlbum }) => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <motion.div
      className={
        currentAlbum === "OuttaBody"
          ? "cloud-one cloud-03"
          : "cloud-one planet-03"
      }
      initial={{ opacity: 0, scale: 0.5, y: -100 }}
      animate={
        media === "desktop"
          ? { opacity: 1, scale: 1, x: 30 * mouseX, y: -30 * mouseY }
          : { opacity: 1, scale: 1, y: 0 }
      }
      transition={{ duration: 0.5 }}
    />
  );
};

const Cloud04 = ({ currentAlbum }) => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <motion.div
      className={
        currentAlbum === "OuttaBody"
          ? "cloud-one cloud-04"
          : "cloud-one planet-04"
      }
      initial={{ opacity: 0, scale: 0.5, y: -100 }}
      animate={{ opacity: 1, scale: 1.2, x: -30 * mouseX, y: 30 * mouseY }}
      transition={{ duration: 0.5 }}
    />
  );
};

const Home = () => {
  const media = useMedia();
  const currentAlbum = useSelector(selectCurrentAlbum);

  return (
    <div
      className={
        currentAlbum === "OuttaBody" ? "container" : "container universe"
      }
    >
      <Navigation />
      <BackGround media={media} currentAlbum={currentAlbum} />
      <Link className="link-logo" to="/">
        <motion.div
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </Link>
      <Eso media={media} currentAlbum={currentAlbum} />
      <Cloud01 media={media} currentAlbum={currentAlbum} />
      <Cloud02 currentAlbum={currentAlbum} />
      <Cloud03 media={media} currentAlbum={currentAlbum} />
      <Cloud04 currentAlbum={currentAlbum} />
      <LeftStuff media={media} currentAlbum={currentAlbum} />
      <RightStuff media={media} currentAlbum={currentAlbum} />
      <Link className="nav-link" to="music">
        <div className="music-btn">
          <FaHeadphonesAlt className="font-icon-headphones" />
          <p>Listen</p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
