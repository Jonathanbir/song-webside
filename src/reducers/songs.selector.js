import { createSelector } from "reselect";

const selectSongsReducer = (state) => {
  return state.state;
};

export const selectIsMenuOpen = createSelector(
  [selectSongsReducer],
  (state) => state.isMenuOpen
);
