import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../redux/authApi";
import { setUser } from "../../redux/authSlice";
import { jwtDecode } from "jwt-decode";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [
    registerUser,
    {
      data: registerData,
      isSuccess: isRegisterSuccess,
      isError: isRegisterError,
      error: registerError,
    },
  ] = useRegisterUserMutation();
  const handleSignUp = async (e) => {
    await e.preventDefault();
    if (password != confirmPassword) {
      console.log("Password and Confirm Password do not match");
    } else if (
      firstName &&
      lastName &&
      username &&
      email &&
      password &&
      confirmPassword
    ) {
      await registerUser({
        first_name: firstName,
        last_name: lastName,
        username: username,
        email: email,
        password: password,
      });
    } else {
      console.log("error occured");
    }
  };
  useEffect(() => {
    if (isRegisterSuccess) {
      //   dispatch(
      //     setUser({
      //       user_id: jwtDecode(registerData.access).user_id,
      //       first_name: jwtDecode(registerData.access).first_name,
      //       last_name: jwtDecode(registerData.access).last_name,
      //       username: jwtDecode(registerData.access).username,
      //       email: jwtDecode(registerData.access).email,
      //     })
      //   );
      setFirstName("");
      setLastName("");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate(`/signupconfirmation`);
      console.log("sign up success");
    }
  }, [isRegisterSuccess]);
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
            <button className="signup_submit_btn" onClick={handleSignUp}>
              sign up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
