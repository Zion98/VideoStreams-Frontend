import { createSelector } from "reselect";

export const selectAllMovies = (state: any) => state.movies;

export const selectBookmarkedMovies = (state: any) =>
  state.movies.bookmarkedMovies;

export const selectAllSeries = (state: any) => state.movies.allSeries;

export const selectBookmarkedSeries = (state: any) =>
  state.movies.bookmarkedSeries;

export const selectAllMoviesSelector = createSelector(
  [selectAllMovies],
  (allMovies) => allMovies.data
);

export const selectBookmarkedMoviesSelector = createSelector(
  [selectBookmarkedMovies],
  (bookmarkedMovies) => bookmarkedMovies.data
);

export const selectBookmarkedSeriesSelector = createSelector(
  [selectBookmarkedSeries],
  (bookmarkedSeries) => bookmarkedSeries.data
);

export const selectAllSeriesSelector = createSelector(
  [selectAllSeries],
  (allSeries) => allSeries.data
);
