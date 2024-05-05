import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlice";
import { useGetUserQuery } from "../../redux/authApi";

const AccountWelcome = () => {
  const { user_id } = useSelector(selectAuth);
  //   console.log(user.user_id);
  const { data: usernameData } = useGetUserQuery(user_id);

  //   console.log(user);
  return (
    <div className="account_welcome_wrapper">
      about _{usernameData?.username}
    </div>
  );
};

export default AccountWelcome;
