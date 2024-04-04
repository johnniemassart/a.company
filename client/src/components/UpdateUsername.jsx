import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useUpdateUsernameMutation } from "../redux/authApi";
import { selectAuth, setUser } from "../redux/authSlice";
import { useSelector } from "react-redux";

const UpdateUsername = () => {
  const dispatch = useDispatch();
  const [myUsername, setMyUsername] = useState("");
  const user = useSelector(selectAuth);
  //   console.log(user);
  const [updateUsername] = useUpdateUsernameMutation();

  const handleSubmit = async (e) => {
    await e.preventDefault();
    if (myUsername) {
      //   await updateUsername(user);
      await updateUsername({ ...user, username: myUsername });
      await dispatch(setUser({ ...user, username: myUsername }));
      await setMyUsername("");
    }
  };

  //   useEffect(() => {
  //     if (isUpdateSuccess) {
  //       dispatch(setUser({ ...user, username: myUsername }));
  //       setMyUsername("");
  //     } else {
  //       console.log("error");
  //     }
  //   }, [isUpdateSuccess]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="update_wrapper">
        <label>update username</label>
        <input
          type="text"
          name="new_username"
          onChange={(e) => setMyUsername(e.target.value)}
          value={myUsername}
        />
      </div>
    </form>
  );
};

export default UpdateUsername;
