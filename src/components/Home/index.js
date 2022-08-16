import React from "react";
import { Link } from "react-router-dom";
import { useMedia } from "../../hooks/useMedia";
import { motion } from "framer-motion";
import { useGlobalMouseMove } from "../../hooks/useGlobalMouseMove";
import { FaHeadphonesAlt } from "react-icons/fa";
import Navigation from "../Navigation";
import "./index.css";

const BackGround = ({ media }) => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <div
      className="home-background"
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

const Eso = ({ media }) => {
  const [mouseX] = useGlobalMouseMove();

  return (
    <motion.div
      className="eso"
      style={
        media === "desktop"
          ? {
              transform: `translate( ${30 * mouseX}px)`,
            }
          : {}
      }
      initial={{ opacity: 0, scale: 0.5, y: 1000 }}
      animate={
        media === "desktop"
          ? { opacity: 1, scale: 1, x: 100 * mouseX, y: 0 }
          : { opacity: 1, scale: 1, y: 0 }
      }
      transition={{ duration: 0.5 }}
    />
  );
};

const Bird = ({ media }) => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <motion.div
      className="bird"
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

const Tree = ({ media }) => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <motion.div
      className="tree"
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

const Cloud01 = ({ media }) => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <motion.div
      className="cloud-three cloud-01"
      style={
        media === "desktop"
          ? {
              transform: `translate(${30 * mouseX}px, ${
                -30 * mouseY
              }px) scale(1.2) `,
            }
          : {}
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

const Cloud02 = () => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <motion.div
      className="cloud-three cloud-02"
      style={{
        transform: `translate(${-30 * mouseX}px, ${
          30 * mouseY
        }px) scale(1.2) rotate(200deg)`,
      }}
      initial={{ opacity: 0, scale: 0.5, y: -100 }}
      animate={{ opacity: 1, scale: 1.2, x: 30 * mouseX, y: -30 * mouseY }}
      transition={{ duration: 0.5 }}
    />
  );
};

const Cloud03 = ({ media }) => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <motion.div
      className="cloud-one cloud-03"
      style={
        media === "desktop"
          ? {
              transform: `translate(${-30 * mouseX}px, ${
                30 * mouseY
              }px) scale(1.2)`,
            }
          : {}
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

const Cloud04 = () => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <motion.div
      className="cloud-one cloud-04"
      style={{
        transform: `translate(${-30 * mouseX}px, ${30 * mouseY}px) scale(1.2)`,
      }}
      initial={{ opacity: 0, scale: 0.5, y: -100 }}
      animate={{ opacity: 1, scale: 1.2, x: -30 * mouseX, y: 30 * mouseY }}
      transition={{ duration: 0.5 }}
    />
  );
};

const Home = () => {
  const media = useMedia();

  return (
    <div className="container">
      <Navigation />
      <BackGround media={media} />
      <Link className="link-logo" to="/">
        <motion.div
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </Link>
      <Eso media={media} />
      <Cloud01 media={media} />
      {media === "desktop" && <Cloud02 />}
      <Cloud03 media={media} />
      {media === "desktop" && <Cloud04 />}
      <Bird media={media} />
      <Tree media={media} />
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
