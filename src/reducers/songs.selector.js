import { createSelector } from "reselect";

const songsReducer = (state) => {
  return state.songs;
};

export const selectCurrentSong = createSelector(
  [songsReducer],
  (state) => state.currentSong
);

export const selectIsPlaySong = createSelector(
  [songsReducer],
  (state) => state.isplaying
);

export const selectIsMenuOpen = createSelector(
  [songsReducer],
  (state) => state.isMenuOpen
);
