import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlice";
import {
  useProfileDataQuery,
  useAddProfileMutation,
} from "../../redux/profileApi";

const ProfileAbout = () => {
  const [about, setAbout] = useState("");
  const user = useSelector(selectAuth);
  const { data: profileData } = useProfileDataQuery(user.user_id);
  let current_about = profileData?.profile.about;
  const [addProfile] = useAddProfileMutation();
  const handleAbout = async (e) => {
    await e.preventDefault();
    if (about) {
      await addProfile({ ...user, profile: { about: about } });
      setAbout("");
    }
  };
  return (
    <div>
      <form onSubmit={handleAbout}>
        <label>About Me: {current_about}</label>
        <input
          type="text"
          onChange={(e) => setAbout(e.target.value)}
          value={about}
        />
        <button>About</button>
      </form>
      <form>
        <label>Select image:</label>
        <input type="file" accept="image/*" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ProfileAbout;
