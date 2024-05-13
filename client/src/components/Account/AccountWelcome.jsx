import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlice";
import { useGetUserQuery } from "../../redux/userApi";

const AccountWelcome = () => {
  const { user_id } = useSelector(selectAuth);
  const { data: usernameData } = useGetUserQuery(user_id);

  return (
    <div className="account_welcome_wrapper">
      <h1 className="account_welcome_username">_{usernameData?.username}</h1>
    </div>
  );
};

export default AccountWelcome;
