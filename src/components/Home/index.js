import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";
import { useGlobalMouseMove } from "../../hooks/useGlobalMouseMove";
import "./index.css";

const BackGround = () => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <div
      className="home-background"
      style={{
        transform: `translate(${10 * mouseX}px, ${-50 * mouseY}px) scale(1.2)`,
      }}
    />
  );
};

const Eso = () => {
  const [mouseX] = useGlobalMouseMove();

  return (
    <div
      className="eso"
      style={{
        transform: `translate( ${30 * mouseX}px)`,
      }}
    />
  );
};

const Bird = () => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <div
      className="bird"
      style={{
        transform: `translate(${10 * mouseX}px, ${-50 * mouseY}px) scale(1.2)`,
      }}
    />
  );
};

const Tree = () => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <div
      className="tree"
      style={{
        transform: `translate(${10 * mouseX}px, ${
          -50 * mouseY
        }px) scale(1.2) rotate(30deg)`,
      }}
    />
  );
};

const Cloud01 = () => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <div
      className="cloud-01"
      style={{
        transform: `translate(${30 * mouseX}px, ${-30 * mouseY}px) scale(1.2) `,
      }}
    />
  );
};

const Cloud02 = () => {
  const [mouseX, mouseY] = useGlobalMouseMove();

  return (
    <div
      className="cloud-02"
      style={{
        transform: `translate(${-30 * mouseX}px, ${
          30 * mouseY
        }px) scale(1.2) rotate(200deg)`,
      }}
    />
  );
};

const Home = () => {
  return (
    <div className="container">
      <div className="menu">
        <div className="menu-line" />
      </div>
      <BackGround />
      <div className="logo" />
      <Eso />
      <Cloud01 />
      <Cloud02 />
      <Bird />
      <Tree />
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
