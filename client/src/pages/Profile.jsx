import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectAuth } from "../redux/authSlice";
import { Link, useNavigate } from "react-router-dom";
import "../css/Profile.css";
import UpdateUsername from "../components/Profile/UpdateUsername";
import ProfileAbout from "../components/Profile/ProfileAbout";
import ProfNav from "../components/Profile/ProfNav";
import ProfContent from "../components/Profile/ProfContent";
import ProfWelcome from "../components/Profile/ProfWelcome";

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
      {/* <div>
        Profile:
        <p>first name: {first_name}</p>
        <p>last name: {last_name}</p>
        <p>username: {username}</p>
        <p>email: {email}</p>
      </div>
      <br />
      <ProfileAbout />
      <br />
      <UpdateUsername />
      <br />
      <br />
      <br />
      <button onClick={handleLogout}>log out</button> */}
      <ProfNav />
      <ProfWelcome />
      <ProfContent />
    </div>
  );
};

export default Profile;
