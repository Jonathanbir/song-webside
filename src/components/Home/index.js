import React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import { FaHeadphonesAlt } from "react-icons/fa";
import { useGlobalMouseMove } from "../../hooks/useGlobalMouseMove";
import { useMedia } from "../../hooks/useMedia";
import { useDimensions } from "../../hooks/useDimensions";
import { MenuToggle } from "../MenuToggle";
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
    <div
      className="eso"
      style={
        media === "desktop"
          ? {
              transform: `translate( ${30 * mouseX}px)`,
            }
          : {}
      }
    />
  );
};

const Bird = ({ media }) => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <div
      className="bird"
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

const Tree = ({ media }) => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <div
      className="tree"
      style={
        media === "desktop"
          ? {
              transform: `translate(${10 * mouseX}px, ${
                -50 * mouseY
              }px) scale(1.2) rotate(10deg)`,
            }
          : {}
      }
    />
  );
};

const Cloud01 = ({ media }) => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <div
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
    />
  );
};

const Cloud02 = () => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <div
      className="cloud-three cloud-02"
      style={{
        transform: `translate(${-30 * mouseX}px, ${
          30 * mouseY
        }px) scale(1.2) rotate(200deg)`,
      }}
    />
  );
};

const Cloud03 = ({ media }) => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <div
      className="cloud-one cloud-03"
      style={
        media === "desktop"
          ? {
              transform: `translate(${-30 * mouseX}px, ${
                30 * mouseY
              }px) scale(1.2) `,
            }
          : {}
      }
    />
  );
};

const Cloud04 = () => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <div
      className="cloud-one cloud-04"
      style={{
        transform: `translate(${-30 * mouseX}px, ${30 * mouseY}px) scale(1.2)`,
      }}
    />
  );
};

const Home = () => {
  const media = useMedia();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  console.log("height", height);
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <div className="container">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="menu-background" variants={sidebar} />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
      <BackGround media={media} />
      <Link className="link-logo" to="/">
        <div className="logo" />
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
