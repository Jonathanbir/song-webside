import { createSelector } from "reselect";

const songsReducer = (state) => {
  return state.songs;
};

export const selectIsMenuOpen = createSelector(
  [songsReducer],
  (state) => state.isMenuOpen
);

export const selectIsAlbumOpen = createSelector(
  [songsReducer],
  (state) => state.isAlbumOpen
);

export const selectCurrentAlbum = createSelector(
  [songsReducer],
  (state) => state.currentAlbum
);

export const selectCurrentSong = createSelector(
  [songsReducer],
  (state) => state.currentSong
);

export const selectIsPlaySong = createSelector(
  [songsReducer],
  (state) => state.isplaying
);
