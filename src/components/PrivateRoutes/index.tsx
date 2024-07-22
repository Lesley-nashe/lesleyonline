import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const localstorageUser = JSON.parse(localStorage.getItem("user") || "{}");
  if(!localstorageUser.username) return <Navigate to="/login" />;
  else return <Outlet />;
};

export default PrivateRoute;