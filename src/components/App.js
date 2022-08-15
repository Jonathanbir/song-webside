import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Home";
import Music from "./Music";
import Menu from "./Menu";
import { selectIsMenuOpen } from "../reducers/songs.selector";
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
  const isMenuOpen = useSelector(selectIsMenuOpen);
  return (
    <>
      {isMenuOpen && <Menu />}
      <Wrapper>
        <Routes>
          <Route index element={<Home />} />
          <Route path="music" element={<Music />} />
        </Routes>
      </Wrapper>
    </>
  );
};

export default App;
