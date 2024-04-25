import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="signup_wrapper">
      <Link to="/login" className="to_login_btn">
        log in
      </Link>
      <form className="signup_form">
        <p className="signup_welcome">welcome to sign up page</p>
        <div className="signup_input_btn_wrapper">
          <div className="signup_input_wrapper">
            <input
              type="text"
              placeholder="first name"
              name="first_name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <input
              type="text"
              placeholder="last name"
              name="last_name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <input
              type="text"
              placeholder="username"
              name="username_signup"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <input
              type="password"
              placeholder="confirm password"
              name="confirm_password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>
          <div className="signup_submit_btn_wrapper">
            <button className="signup_submit_btn">sign up</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
