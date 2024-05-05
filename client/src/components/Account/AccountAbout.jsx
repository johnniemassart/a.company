import React, { useState } from "react";
import { selectAuth } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileQuery } from "../../redux/accountApi";
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
    <form className="about_form" onSubmit={submitAbout}>
      <div className="about_wrapper">
        <label className="prof_about_label">about:</label>
        <input
          className="prof_about_text"
          type="text"
          placeholder={profileData?.about}
          onChange={(e) => setAbout(e.target.value)}
          value={about}
        />
        <button>update</button>
      </div>
    </form>
  );
};

export default AccountAbout;
