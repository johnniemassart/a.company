import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlice";
import { useProfileDataQuery } from "../../redux/profileApi";

const ProfWelcome = () => {
  const user = useSelector(selectAuth);
  const { data: profData } = useProfileDataQuery(user.user_id);
  let prof_username = profData?.username;
  return (
    <div className="prof_welcome_wrapper">
      <p>_{prof_username}</p>
    </div>
  );
};

export default ProfWelcome;
