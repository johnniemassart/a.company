import React from "react";
import { Link } from "react-router-dom";

const LogInOrSignUp = () => {
  return (
    <div className="li_su_positioning">
      <div className="li_su_wrapper">
        <h3 className="welcome">welcome to a.company</h3>
        <div className="link_wrapper">
          <Link to="/login" className="link_btn">
            Log In
          </Link>
          <Link to="/signup" className="link_btn">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogInOrSignUp;
