import React from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Protected = ({ children }) => {
  const { pathname } = useLocation();
  const { user, isLoading } = useAuthContext();

  if (isLoading)
    return (
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="loading loading-lg"></div>
      </div>
    );
  if (!user) return <Navigate to={`/login?redirectTo=${encodeURIComponent(pathname)}`} />;

  return children;
};

export default Protected;
