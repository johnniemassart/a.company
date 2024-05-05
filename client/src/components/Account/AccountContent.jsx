import React, { useState } from "react";
import { useGetProfileQuery } from "../../redux/accountApi";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlice";
import AccountProfPic from "./AccountProfPic";
import AccountAbout from "./AccountAbout";
import AccountUsername from "./AccountUsername";

const AccountContent = () => {
  const { user_id } = useSelector(selectAuth);
  const { data: profileData } = useGetProfileQuery(user_id);
  //   console.log(profileData);
  return (
    <div className="account_content_wrapper">
      <div className="update_account_wrapper">
        <AccountProfPic />
        <AccountAbout />
      </div>
      <AccountUsername />
    </div>
  );
};

export default AccountContent;
