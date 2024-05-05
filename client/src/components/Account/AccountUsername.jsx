import React, { useState } from "react";
import {
  useGetUserQuery,
  useUpdateUsernameMutation,
} from "../../redux/authApi";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlice";

const AccountUsername = () => {
  const { user_id } = useSelector(selectAuth);
  const { data: userData } = useGetUserQuery(user_id);
  const [updateUsernaming] = useUpdateUsernameMutation(user_id);
  const [usernaming, setUsernaming] = useState("");

  const usernameSubmit = async (e) => {
    await e.preventDefault();
    if (usernaming) {
      await updateUsernaming({ ...userData, username: usernaming });
      setUsernaming("");
    }
  };

  return (
    <form onSubmit={usernameSubmit}>
      <label>update username</label>
      <input
        type="text"
        onChange={(e) => setUsernaming(e.target.value)}
        value={usernaming}
      />
      <button>update</button>
    </form>
  );
};

export default AccountUsername;
