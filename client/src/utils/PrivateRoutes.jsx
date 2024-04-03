import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { setUser } from "../redux/authSlice";
import { useDispatch } from "react-redux";

const PrivateRoutes = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
