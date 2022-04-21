import { moviesActionTypes } from "./movies.types";
import axios from "axios";
import requests from "../../requests";

export const fetchAllMoviesRequest = () => ({
  type: moviesActionTypes.FETCH_ALL_MOVIES_REQUEST,
});

export const fetchAllMoviesSuccess = (movies: any) => ({
  type: moviesActionTypes.FETCH_ALL_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchAllMoviesFailure = (error: any) => ({
  type: moviesActionTypes.FETCH_ALL_MOVIES_FAILURE,
  payload: error,
});

export const fetchAllMoviesAsync = () => {
  return (dispatch: any) => {
    dispatch(fetchAllMoviesRequest());

    const getToken = JSON.parse(localStorage.getItem("tyUser") || "{}");

    console.log(getToken.token);
    axios
      .get(requests.FETCH_ALL_MOVIES, {
        headers: {
          Authorization: `Bearer ${getToken.token}`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        dispatch(fetchAllMoviesSuccess(res.data.data));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchAllMoviesFailure(errorMessage));
      });
  };
};

export const bookmarkMovies = (moviesObj: {
  moviesid: string;
  userid: string;
}) => {
  return (dispatch: any) => {
    // dispatch(fetchAllMoviesRequest());

    const getToken = JSON.parse(localStorage.getItem("tyUser") || "{}");

    console.log(getToken.token);
    axios
      .post(
        requests.BOOKMARK_MOVIES,
        {
          ...moviesObj,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);
        // dispatch(fetchAllMoviesSuccess(res.data.data));
      })
      .catch((error) => {
        // const errorMessage = error.message;
        console.log(error)
        // dispatch(fetchAllMoviesFailure(errorMessage));
      });
  };
};

// // Adventure
// export const fetchAdventureMoviesRequest = () => ({
//   type: moviesActionTypes.FETCH_ADVENTURE_MOVIES_REQUEST,
// });

// export const fetchAdventureMoviesSuccess = (adventureMovies, isPage) => ({
//   type: isPage
//     ? moviesActionTypes.FETCH_ADVENTURE_MOVIES_SUCCESS
//     : moviesActionTypes.LOAD_MORE_ADVENTURE_MOVIES_SUCCESS,
//   payload: adventureMovies,
// });

// export const fetchAdventureMoviesFailure = (error) => ({
//   type: moviesActionTypes.FETCH_ADVENTURE_MOVIES_FAILURE,
//   payload: error,
// });
