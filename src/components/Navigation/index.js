import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsMenuOpen } from "../../reducers/songs.selector";
import { setIsMenuOpen } from "../../reducers/songs.action";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaSoundcloud,
  FaSpotify,
} from "react-icons/fa";
import "./index.css";

const Navigation = () => {
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const dispatch = useDispatch();
  const toggleisMenuOpen = () => dispatch(setIsMenuOpen(!isMenuOpen));

  return (
    <div className="nav-container">
      <div className="menu" onClick={toggleisMenuOpen}>
        <div className="menu-line" />
      </div>
      <div className="social-media">
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100044618191037"
          rel="noreferrer"
        >
          <FaFacebookF className="font-icon" />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCauJBNTS5kTXwoGoPSquEog"
          rel="noreferrer"
        >
          <FaYoutube className="font-icon" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/mjfceo/"
          rel="noreferrer"
        >
          <FaInstagram className="font-icon" />
        </a>
        <a
          target="_blank"
          href="https://www.kkbox.com/tw/tc/playlist/4nY2BbS42aVxbP4QBC"
          rel="noreferrer"
        >
          <FaSoundcloud className="font-icon" />
        </a>
        <a
          target="_blank"
          href="https://open.spotify.com/artist/2qXGNIlmY3JrYkxOWyXZsd"
          rel="noreferrer"
        >
          <FaSpotify className="font-icon" />
        </a>
      </div>
    </div>
  );
};
export default Navigation;
