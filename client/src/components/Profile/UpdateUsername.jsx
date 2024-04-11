import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useUpdateUsernameMutation } from "../../redux/authApi";
import { selectAuth, setUser } from "../../redux/authSlice";
import { useSelector } from "react-redux";
import { useProfileDataQuery } from "../../redux/profileApi";

const UpdateUsername = () => {
  const dispatch = useDispatch();
  const [myUsername, setMyUsername] = useState("");
  const user = useSelector(selectAuth);
  const { data: dataUsername } = useProfileDataQuery(user.user_id);
  const [updateUsername] = useUpdateUsernameMutation();

  const handleSubmit = async (e) => {
    await e.preventDefault();
    if (myUsername) {
      await updateUsername({ ...dataUsername, username: myUsername });
      dispatch(setUser({ ...user, username: myUsername }));
      setMyUsername("");
    }
  };

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
        <button>update</button>
      </div>
    </form>
  );
};

export default UpdateUsername;
