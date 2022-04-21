import { authActionTypes } from "./auth.types";

const initialState = {
  currentUser: null,
  error: null,
  success:"",
  loading: false,
};
interface Action {
  type: string;
  payload: string;
}

const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case authActionTypes.SIGN_UP_START:
      return {
        ...state,
        loading: true,
      };
    case authActionTypes.SIGN_IN_SUCCESS:
    case authActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        success:action.payload,
        error: null,
      };
    case authActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        loading: false,
        error: null,
      };
    case authActionTypes.SIGN_IN_FAILURE:
    case authActionTypes.SIGN_UP_FAILURE:
    case authActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
