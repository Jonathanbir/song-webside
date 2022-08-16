import React, { useRef } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { motion } from "framer-motion";
import { selectCurrentSong } from "../../reducers/songs.selector";
import { setCurrentSong, setPlaySong } from "../../reducers/songs.action";
import "./index.css";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsFillSkipEndCircleFill,
} from "react-icons/bs";

const Player = ({ audioElem, isplaying, songs }) => {
  const dispatch = useDispatch();
  const clickRef = useRef();
  const currentSong = useSelector(selectCurrentSong);

  const PlayPause = () => {
    dispatch(setPlaySong(!isplaying));
  };

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
  };

  const skipBack = () => {
    dispatch(setPlaySong(false));
    const index = songs.findIndex((x) => x.title === currentSong.title);
    if (index === 0) {
      dispatch(setCurrentSong(songs[songs.length - 1]));
    } else {
      dispatch(setCurrentSong(songs[index - 1]));
    }
    audioElem.current.currentTime = 0;

    dispatch(setPlaySong(false));

    setTimeout(() => {
      dispatch(setPlaySong(true));
    }, 500);
  };

  const skiptoNext = () => {
    const index = songs.findIndex((x) => x.title === currentSong.title);

    if (index === songs.length - 1) {
      dispatch(setCurrentSong(songs[0]));
    } else {
      dispatch(setCurrentSong(songs[index + 1]));
    }
    audioElem.current.currentTime = 0;

    dispatch(setPlaySong(false));

    setTimeout(() => {
      dispatch(setPlaySong(true));
    }, 500);
  };

  return (
    <motion.div
      className="player_container"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="navigation">
        <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
          <div
            className="seek_bar"
            style={{ width: `${currentSong.progress + "%"}` }}
          ></div>
        </div>
      </div>
      <div className="controls">
        <BsFillSkipStartCircleFill className="btn_action" onClick={skipBack} />
        {isplaying ? (
          <BsFillPauseCircleFill
            className="btn_action pp"
            onClick={PlayPause}
          />
        ) : (
          <BsFillPlayCircleFill className="btn_action pp" onClick={PlayPause} />
        )}
        <BsFillSkipEndCircleFill className="btn_action" onClick={skiptoNext} />
      </div>
    </motion.div>
  );
};

const mapStateToProps = (state) => {
  return {
    songs: state.songs.songs,
    isplaying: state.songs.isplaying,
  };
};

export default connect(mapStateToProps)(Player);
