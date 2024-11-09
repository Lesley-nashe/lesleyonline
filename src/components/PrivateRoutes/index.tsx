import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const PrivateRoute = () => {
  const { currentUser } = useAuthContext()
  if(!currentUser.username) return <Navigate to="/login" />;
  else return <Outlet />;
};

export default PrivateRoute;