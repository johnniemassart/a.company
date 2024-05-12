import React, { useEffect, useState } from "react";
import { useGetUserQuery, usePutUserMutation } from "../../redux/userApi";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, setUser } from "../../redux/authSlice";
import { updateUsername } from "../../redux/userSlice";

const AccountUsername = () => {
  const { user_id, first_name, last_name, email, refresh, access } =
    useSelector(selectAuth);
  const dispatch = useDispatch();
  const { data: userData } = useGetUserQuery(user_id);
  //   const [updateUsername, { isSuccess: isUpdateUsernameSuccess }] =
  //     usePutUserMutation(user_id);
  const [username, setUsername] = useState("");
  const usernameSubmit = (e) => {
    e.preventDefault();
    if (username) {
      //   await updateUsername({ ...userData, username: username });
      dispatch(updateUsername({ id: user_id, username: username }));
      dispatch(
        setUser({
          user_id,
          first_name,
          last_name,
          email,
          refresh,
          access,
          username: username,
        })
      );
      console.log("New username");
      setUsername("");
    }
  };

  //   const { id, first_name, last_name, email } = { ...userData };
  //   console.log(id, first_name, last_name, email);

  //   useEffect(() => {
  //     if (isUpdateUsernameSuccess) {
  //       dispatch(
  //         setUser({
  //           user_id,
  //           first_name,
  //           last_name,
  //           email,
  //           refresh,
  //           access,
  //           username: username,
  //         })
  //       );
  //       console.log("New username");
  //     }
  //   }, [isUpdateUsernameSuccess]);

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
