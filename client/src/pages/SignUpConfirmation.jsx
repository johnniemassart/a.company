import React, { useEffect } from "react";
import "../css/SignUpConfirmation.css";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const SignUpConfirmation = () => {
  const navigate = useNavigate();
  const application = JSON.parse(localStorage.getItem("application")) || "";
  const handleExit = () => {
    navigate("/");
    localStorage.clear();
  };
  useEffect(() => {
    window.addEventListener("beforeunload", () => localStorage.clear());
  }, []);
  return (
    <>
      <div>
        thank you for signing up, {application.first_name}. your application
        needs to be reviewed.
      </div>
      <button onClick={handleExit}>exit</button>
    </>
  );
};

export default SignUpConfirmation;
