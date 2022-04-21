import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Loader from "./Loader";
import { loginUser } from "../redux/auth/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  selectAuthLoadingState,
  selectAuthErrors,
} from "../redux/auth/auth.selectors";

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthLoadingState);
  const authError = useSelector(selectAuthErrors);

  const [showPassword, setShowPassword] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    const { email, password } = data;
    dispatch(loginUser({ email, password }));
  };

 
  return (
    <>
      {isLoading && <Loader />}

      <FormDiv className="bg-[#161d2f] w-96 h-96 px-8 py-6 ">
        <h2 className="text-white text-3xl font-extralight">Login</h2>
        <p className="py-2 text-red-600 text-sm">{authError}</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-start"
        >
          <div className="w-full bg-[#161d2f]  my-6">
            <input
              type="email"
              autoComplete={"off"}
              {...register("email")}
              className="input w-full input-box bg-[#161d2f] text-white"
              placeholder="Email Address"
            />

            {errors.email?.message && (
              <p className="text-xs text-red-500">{errors.email?.message}</p>
            )}
          </div>

          <div className="w-full bg-[#161d2f] my-6 relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className="input w-full bg-[#161d2f] input-box text-white"
              placeholder="Password"
              // pattern="(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}"
              // title="Must contain at least one number, one symbol one uppercase and lowercase letter, and at least 8 or more characters"
            />
            <i
              style={{
                position: "absolute",
                top: "0rem",
                right: "1rem",
                color: "#000",
              }}
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </i>

            {errors.password?.message && (
              <p className="text-xs text-red-500">{errors.password?.message}</p>
            )}
          </div>

          <Button title="Login to your account" />

          <p className="text-white text-center w-full mt-8 text-sm font-extralight">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#fc4747]">
              Sign Up
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
    /* padding-bottom: 1rem; */
  }
  .input {
    padding-left: 0.6rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid white;
    &:focus {
      outline: none;
      border-bottom: 1px solid gray;
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

export default LoginForm;
