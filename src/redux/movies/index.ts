import { moviesActionTypes } from "./movies.types";

const initialState = {
  loading: false,
  error: "",
  data: [],
};

interface Action {
  type: string;
  payload: string;
}

const allMoviesReducer = (state = initialState, action: Action) => {
  // const {type,payload}=action;
  switch (action.type) {
    case moviesActionTypes.FETCH_ALL_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case moviesActionTypes.FETCH_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "",
      };
    case moviesActionTypes.LOAD_MORE_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        // data: [...state.data, ...action.payload],
        loading: false,
        error: "",
      };
    case moviesActionTypes.FETCH_ALL_MOVIES_FAILURE:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default allMoviesReducer;
