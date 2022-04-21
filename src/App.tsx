import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import FormPageLayout from "./pages/Layout";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignupForm";
import Dashboard from "./pages/Dashboard";
import VerifyPage from "./pages/VerifyPage";
import { isLogin } from "./helpers";

const ProtectedRoute = ({
  user,
  redirectPath = "/dashboard",
  children,
}: any) => {
  if (user()) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

const PrivateRoute = ({ user, children }: any) => {
  if (!user()) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  return (
    <Routes>
      <Route element={<FormPageLayout />}>
        <Route path="signup" element={<SignUpForm />} />
        <Route element={<ProtectedRoute user={isLogin} />}>
          <Route path="/" element={<LoginForm />} />
          <Route path="verified" element={<VerifyPage />} />
        </Route>
      </Route>
      <Route
        path="dashboard"
        element={
          <PrivateRoute user={isLogin}>
            <Dashboard />
          </PrivateRoute>
        }
      />
      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
}

export default App;
