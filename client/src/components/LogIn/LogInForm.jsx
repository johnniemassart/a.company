import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../../redux/authApi";
import { useNavigate, Link } from "react-router-dom";
import { setUser } from "../../redux/authSlice";
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
          user_id: jwtDecode(loginData.access).user_id,
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
      <Link to="/signup" className="signup_btn">
        sign up
      </Link>
      <form className="login_form">
        <p className="log_in_msg">welcome to log in page</p>
        <div className="input_content_wrapper">
          <div className="input_wrapper">
            <input
              type="text"
              placeholder="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="log_in_btn_wrapper">
            <button className="login_btn">enter</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
