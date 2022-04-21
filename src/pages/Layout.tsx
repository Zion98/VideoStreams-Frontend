import React from "react";
// import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import movieHeader from "../assets/movie.svg";
// import SignUpForm from "../components/SignupForm";
// import VerifyPage from "./VerifyPage";

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col justify-center h-screen items-center">
      <img src={movieHeader} alt="movie" className="mb-16" />
     
      <Outlet />
    </div>
  );
};

export default Dashboard;
