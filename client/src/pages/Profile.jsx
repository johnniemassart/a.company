import React from "react";
import "../css/Profile.css";
import ProfNav from "../components/Profile/ProfNav";
import ProfContent from "../components/Profile/ProfContent";
import ProfWelcome from "../components/Profile/ProfWelcome";

const Profile = () => {
  return (
    <div className="profile_wrapper">
      <ProfNav />
      <ProfWelcome />
      <ProfContent />
    </div>
  );
};

export default Profile;
