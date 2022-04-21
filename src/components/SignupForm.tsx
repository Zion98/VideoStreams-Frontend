import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { signUp } from "../redux/auth/auth.actions";
import { useDispatch, useSelector } from "react-redux";

import Loader from "./Loader";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  selectAuthLoadingState,
  selectAuthErrors,
  selectAuthSuccess,
} from "../redux/auth/auth.selectors";

const SignupForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthLoadingState);
  const authError = useSelector(selectAuthErrors);
  const authSuccess = useSelector(selectAuthSuccess);
  const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    const { firstname, lastname, email, password } = data;
    dispatch(signUp({ firstname, lastname, email, password },reset));
  };

  return (
    <>
      {isLoading && <Loader />}

      <FormDiv className="bg-[#161d2f] w-96 h-100 px-8 py-6 ">
        <h2 className="text-white text-3xl font-extralight">Sign Up</h2>

        <p className="py-2 text-red-600 text-sm">{authError}</p>
        <p className="py-2 text-red-600 text-sm">{authSuccess}</p>
        <form
          className="flex flex-col justify-center items-start"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full bg-[#161d2f] my-4">
            <input
              type="text"
              {...register("firstname")}
              className="input w-full bg-[#161d2f] input-box text-white"
              placeholder="First Name"
            />

            {errors.firstname?.message && (
              <p className="text-xs text-red-500">
                {errors.firstname?.message}
              </p>
            )}
          </div>

          <div className="w-full bg-[#161d2f] my-4">
            <input
              type="text"
              {...register("lastname")}
              className="input w-full bg-[#161d2f] input-box text-white"
              placeholder="Last Name"
            />
            {errors.lastname?.message && (
              <p className="text-xs text-red-500">{errors.lastname?.message}</p>
            )}
          </div>

          <div className="w-full bg-[#161d2f] my-4">
            <input
              type="email"
              {...register("email")}
              className="input w-full bg-[#161d2f] input-box text-white"
              placeholder="Email Address"
            />
            {errors.email?.message && (
              <p className="text-xs text-red-500">{errors.email?.message}</p>
            )}
          </div>

          <div className="w-full bg-[#161d2f] my-4">
            <input
              type="password"
              {...register("password")}
              className="input w-full bg-[#161d2f] input-box text-white"
              placeholder="Password"
            />
            {errors.password?.message && (
              <p className="text-xs text-red-500">{errors.password?.message}</p>
            )}
          </div>

          <div className="w-full bg-[#161d2f] my-4">
            <input
              type="password"
              {...register("confirmPassword")}
              className="input w-full bg-[#161d2f] input-box text-white"
              placeholder="Repeat Password"
            />
            {errors.confirmPassword?.message && (
              <p className="text-xs text-red-500">
                {errors.confirmPassword?.message}
              </p>
            )}
          </div>

          <Button title="Create an account" disabled={isLoading} />

          <p className="text-white text-center w-full mt-8 text-sm font-extralight">
            Already have an account?{" "}
            <Link to="/" className="text-[#fc4747]">
              Sign In
            </Link>
          </p>
        </form>
      </FormDiv>
    </>
  );
};
const FormDiv = styled.div`
  max-width: 90%;

  border-radius: 20px;
  .input-box {
    border-bottom: 1px solid white;
  }
  .input {
    padding-left: 0.6rem;
    border-bottom: 1px solid white;
    &:focus {
      outline: none;
      border-bottom: 1px solid gray;
      background: transparent;
    }
  }

  form ::placeholder {
    color: #fff !important;
    font-weight: 200;
    mix-blend-mode: normal;
    opacity: 0.5;
    padding-left: 0.6rem;
  }
`;

export default SignupForm;
