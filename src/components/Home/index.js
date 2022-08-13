import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
  return (
    <div className="container">
      <div className="eso" />
      <Link className="nav-link" to="music">
        <div className="music-btn">Listen</div>
      </Link>
    </div>
  );
};

export default Home;
