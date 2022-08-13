import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Music from "./Music";
import { GlobalScrollProvider } from "../hooks/useGlobalScroll";
import { GlobalMouseMoveProvider } from "../hooks/useGlobalMouseMove";
import "../App.css";

function Wrapper({ children }) {
  return (
    <GlobalScrollProvider>
      <GlobalMouseMoveProvider>{children}</GlobalMouseMoveProvider>
    </GlobalScrollProvider>
  );
}

const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route index element={<Home />} />
        <Route path="music" element={<Music />} />
      </Routes>
    </Wrapper>
  );
};

export default App;
