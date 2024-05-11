import React, { useState } from "react";
import {
  useGetUserQuery,
  useUpdateUsernameMutation,
} from "../../redux/userApi";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlice";

const AccountUsername = () => {
  const { user_id } = useSelector(selectAuth);
  const { data: userData } = useGetUserQuery(user_id);
  const [updateUsername] = useUpdateUsernameMutation(user_id);
  const [username, setUsername] = useState("");

  const usernameSubmit = async (e) => {
    await e.preventDefault();
    if (username) {
      await updateUsername({ ...userData, username: username });
      setUsername("");
    }
  };

  return (
    <form className="update_username_form" onSubmit={usernameSubmit}>
      <input
        type="text"
        className="update_username_input"
        placeholder={userData?.username}
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
    </form>
  );
};

export default AccountUsername;
