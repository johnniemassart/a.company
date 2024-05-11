import React, { useState } from "react";
import { useGetProfileQuery } from "../../redux/userApi";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlice";
import { updateProfilePic } from "../../redux/accountSlice";

const AccountProfPic = () => {
  const { user_id } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const { data: profileData } = useGetProfileQuery(user_id);
  const [img, setImg] = useState("");
  const submitProfilePic = (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("profile_pic", img);
    // console.log(formData);
    dispatch(
      updateProfilePic({
        id: user_id,
        profile_pic: img,
      })
    );
    setImg("");
  };
  return (
    <div className="prof_pic_wrapper">
      <form onSubmit={submitProfilePic} encType="multipart/form-data">
        <label htmlFor="prof_pic_file">
          <img
            src={profileData?.profile_pic}
            alt="user profile picture"
            className="profile_pic"
          />
        </label>
        <input
          style={{ display: "none" }}
          type="file"
          name="file"
          id="prof_pic_file"
          onChange={(e) => setImg(e.target.files[0].name)}
        />
        {/* <button>update</button> */}
      </form>
    </div>
  );
};

export default AccountProfPic;
