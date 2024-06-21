import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { setUser } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import Profile from "../pages/Profile";

const PrivateRoutes = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user")) || "";
  const application = JSON.parse(localStorage.getItem("application")) || "";

  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return user != "" || application != "" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
