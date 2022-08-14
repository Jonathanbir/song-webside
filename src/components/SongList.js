import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../reducers/reducer.utils";
import { connect } from "react-redux";
import { selectSong } from "../reducers/songs.action";

const SongList = ({ songs }) => {
  const dispatch = useDispatch();

  return (
    <div className="ui divided list">
      {songs.map((song) => {
        return (
          <div className="item" key={song.title}>
            <div className="right floated content">
              <button
                className="ui button primary"
                onClick={() => dispatch(selectSong(song))}
              >
                Select
              </button>
            </div>
            <div className="content">{song.title}</div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
