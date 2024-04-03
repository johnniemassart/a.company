import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../redux/authApi";
import { useNavigate, Link } from "react-router-dom";
import { setUser } from "../redux/authSlice";
import { jwtDecode } from "jwt-decode";

const LogInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [
    loginUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
      error: loginError,
    },
  ] = useLoginUserMutation();
  const handleSubmit = async (e) => {
    await e.preventDefault();
    if (username && password) {
      await loginUser({ username, password });
    } else {
      console.log("error occured");
    }
  };
  useEffect(() => {
    if (isLoginSuccess) {
      dispatch(
        setUser({
          first_name: jwtDecode(loginData.access).first_name,
          last_name: jwtDecode(loginData.access).last_name,
          username: jwtDecode(loginData.access).username,
          email: jwtDecode(loginData.access).email,
          refresh: loginData["refresh"],
          access: loginData["access"],
        })
      );
      setUsername("");
      setPassword("");
      console.log("log in success");
      navigate("/profile");
    }
  }, [isLoginSuccess]);
  return (
    <div className="login_wrapper" onSubmit={handleSubmit}>
      <form className="login_form">
        <h3 className="log_in">welcome to log in page</h3>
        <div className="input_content_wrapper">
          <label>Enter Username:</label>
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <label>Enter Password:</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="login_btn">Log In</button>
        </div>
        <Link to="/signup" className="signup_btn">
          Sign Up
        </Link>
      </form>
    </div>
  );
};

export default LogInForm;
