import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Authentication/AuthProvider";

const PrivateRoute = () => {
  const user = useAuth();
  return <Outlet />;
};

export default PrivateRoute;