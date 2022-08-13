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

const Home = () => {
  return (
    <div className="container">
      <BackGround />
      <Eso />
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
