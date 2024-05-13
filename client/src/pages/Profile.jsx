import React from "react";
import "../css/Profile.css";
import "../css/Post.css";
import ProfNav from "../components/Profile/ProfNav";
import ProfContent from "../components/Profile/ProfContent";
import ProfWelcome from "../components/Profile/ProfWelcome";

const Profile = () => {
  const localStorageValues = JSON.parse(localStorage.getItem("user"));
  const localStorageAccess = localStorageValues.access;
  const localStorageRefresh = localStorageValues.refresh;
  const refresh_access = [localStorageAccess, localStorageRefresh];
  //   console.log(refresh_access);
  return (
    <div className="profile_wrapper">
      <ProfNav />
      <ProfWelcome />
      <ProfContent />
    </div>
  );
};

export default Profile;
