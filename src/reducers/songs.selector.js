import { createSelector } from "reselect";

const selectSongsReducer = (state) => {
  return state.songs;
};

export const selectIsMenuOpen = createSelector(
  [selectSongsReducer],
  (state) => state.isMenuOpen
);
