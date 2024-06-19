import React from "react";
import "../css/SignUpConfirmation.css";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/authSlice";

const SignUpConfirmation = () => {
  //   const { first_name } = useSelector(selectAuth);
  return (
    <div>
      thank you for signing up, name. your application needs to be reviewed.
    </div>
  );
};

export default SignUpConfirmation;
