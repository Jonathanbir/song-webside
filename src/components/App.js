import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./Home";
import Music from "./Music";
import { setCurrentSong, setAlbumSongs } from "../reducers/songs.action";
import { selectCurrentAlbum } from "../reducers/songs.selector";
import { GlobalScrollProvider } from "../hooks/useGlobalScroll";
import { GlobalMouseMoveProvider } from "../hooks/useGlobalMouseMove";
import { songs01, songs02 } from "../api";
import "../App.css";

function Wrapper({ children }) {
  return (
    <GlobalScrollProvider>
      <GlobalMouseMoveProvider>{children}</GlobalMouseMoveProvider>
    </GlobalScrollProvider>
  );
}

const App = () => {
  const dispatch = useDispatch();
  const currentAlbum = useSelector(selectCurrentAlbum);
  useEffect(() => {
    if (currentAlbum === "OuttaBody") {
      dispatch(setAlbumSongs(songs01));
      dispatch(setCurrentSong(songs01[0]));
    } else {
      dispatch(setAlbumSongs(songs02));
      dispatch(setCurrentSong(songs02[0]));
    }
  }, [currentAlbum, dispatch]);

  console.log("currentAlbum", currentAlbum);
  return (
    <>
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
