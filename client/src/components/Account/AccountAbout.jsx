import React, { useState } from "react";
import { selectAuth } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileQuery } from "../../redux/userApi";
import { updateAbout } from "../../redux/accountSlice";

const AccountAbout = () => {
  const { user_id } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const { data: profileData } = useGetProfileQuery(user_id);
  const [about, setAbout] = useState("");
  const submitAbout = (e) => {
    e.preventDefault();
    dispatch(
      updateAbout({
        id: user_id,
        about: about,
      })
    );
    setAbout("");
  };
  return (
    <form id="update_about_form" onSubmit={submitAbout}>
      <textarea
        type="text"
        className="update_about_textarea"
        form="update_about_form"
        placeholder={
          profileData?.about == null || profileData?.about == ""
            ? "tell others about you..."
            : profileData?.about
        }
        onChange={(e) => setAbout(e.target.value)}
        value={about}
      ></textarea>
      <button className="update_about_btn">update</button>
    </form>
  );
};

export default AccountAbout;
