import React from "react";
import { useRef } from "react";
import Menu from "../Menu";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../../hooks/useDimensions";
import { MenuToggle } from "../MenuToggle";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaSoundcloud,
  FaSpotify,
} from "react-icons/fa";
import "./index.css";

const Navigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  console.log("isOpen", isOpen);

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
        delay: 0,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <div className="nav-container">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="menu-background" variants={sidebar} />
        {isOpen && <Menu />}
        <MenuToggle className="menu" toggle={() => toggleOpen()} />
      </motion.nav>
      <motion.div
        className="social-media"
        initial={{ opacity: 0, scale: 0.5, y: -300 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100044618191037"
          rel="noreferrer"
        >
          <FaFacebookF
            className="font-icon"
            style={isOpen && { color: "#000" }}
          />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCauJBNTS5kTXwoGoPSquEog"
          rel="noreferrer"
        >
          <FaYoutube
            className="font-icon"
            style={isOpen && { color: "#000" }}
          />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/mjfceo/"
          rel="noreferrer"
        >
          <FaInstagram
            className="font-icon"
            style={isOpen && { color: "#000" }}
          />
        </a>
        <a
          target="_blank"
          href="https://www.kkbox.com/tw/tc/playlist/4nY2BbS42aVxbP4QBC"
          rel="noreferrer"
        >
          <FaSoundcloud
            className="font-icon"
            style={isOpen && { color: "#000" }}
          />
        </a>
        <a
          target="_blank"
          href="https://open.spotify.com/artist/2qXGNIlmY3JrYkxOWyXZsd"
          rel="noreferrer"
        >
          <FaSpotify
            className="font-icon"
            style={isOpen && { color: "#000" }}
          />
        </a>
      </motion.div>
    </div>
  );
};
export default Navigation;
