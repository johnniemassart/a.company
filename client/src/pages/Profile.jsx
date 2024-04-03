import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectAuth } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { first_name, last_name, username, email } = useSelector(selectAuth);
  const handleLogout = () => {
    dispatch(logout());
    console.log("log out successful");
    navigate("/login");
  };
  return (
    <div className="profile_wrapper">
      <div>
        Profile:
        <p>first name: {first_name}</p>
        <p>last name: {last_name}</p>
        <p>username: {username}</p>
        <p>email: {email}</p>
      </div>
      <button onClick={handleLogout}>log out</button>
    </div>
  );
};

export default Profile;
