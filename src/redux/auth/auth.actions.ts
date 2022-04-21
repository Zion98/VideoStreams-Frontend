import { authActionTypes } from "./auth.types";
import axios from "axios";
import requests from "../../requests";

export const signUpStart = () => ({
  type: authActionTypes.SIGN_UP_START,
});

export const signUpSuccess = (user: any) => ({
  type: authActionTypes.SIGN_UP_SUCCESS,
  payload:  user,
});

export const signUpFailure = (error: any) => ({
  type: authActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const signInSuccess = (user: any) => ({
  type: authActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error: any) => ({
  type: authActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const signOutStart = () => ({
  type: authActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: authActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error: any) => ({
  type: authActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUp = (userDetails: any,reset:()=>void) => {
  return async (dispatch: any) => {
    dispatch(signUpStart());
    try {
       axios
        .post(`${requests.SIGNUP_URL}`, userDetails)
        .then(function (response) {
          console.log(response.data)
          console.log(response.data.message)
          dispatch(signUpSuccess(response.data.message));
          reset();
        })
        .catch(function (error) {
          dispatch(signUpFailure(error.response.data.message));
        });
    } catch (error) {
      signUpFailure(error);
      throw error;
    }
  };
};

export const loginUser = (userDetails: any) => {
  return async (dispatch: any) => {
    dispatch(signUpStart());
    try {
     axios
        .post(`${requests.LOGIN_URL}`, userDetails)
        .then(function (response) {
          console.log(response);
          localStorage.setItem("tyUser", JSON.stringify(response.data.data));
          dispatch( signInSuccess(response.data))
          window.location.href = "/dashboard";
        })
        .catch(function (error) {
          dispatch(signInFailure(error.response.data.message));
        });
    } catch (error) {
      dispatch(signUpFailure(error));
      throw error;
    }
  };
};
