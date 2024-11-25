import React from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Protected = ({ children }) => {
  const { pathname } = useLocation();
  const { user, isLoading } = useAuthContext();

  if (isLoading) return null;
  if (!user) return <Navigate to={`/login?redirectTo=${encodeURIComponent(pathname)}`} />;

  return children;
};

export default Protected;
