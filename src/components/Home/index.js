import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";
import { useGlobalMouseMove } from "../../hooks/useGlobalMouseMove";
import { useMedia } from "../../hooks/useMedia";
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
  return (
    <div className="container">
      <div className="menu">
        <div className="menu-line" />
      </div>
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
          <FontAwesomeIcon
            className="font-icon-headphones"
            icon={faHeadphonesSimple}
          />
          <p>Listen</p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
