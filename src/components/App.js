import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Music from "./Music";
import "../App.css";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="music" element={<Music />} />
    </Routes>
  );
};

export default App;
