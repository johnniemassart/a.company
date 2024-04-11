import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectAuth } from "../redux/authSlice";
import { Link, useNavigate } from "react-router-dom";
import "../css/Profile.css";
import UpdateUsername from "../components/UpdateUsername";
import ProfileAbout from "../components/ProfileAbout";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user_id, first_name, last_name, username, email } =
    useSelector(selectAuth);
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
        {/* <Link to={} /> */}
      </div>
      <br />
      <ProfileAbout />
      <br />
      <UpdateUsername />
      <br />
      <br />
      <br />
      <button onClick={handleLogout}>log out</button>
    </div>
  );
};

export default Profile;
