import React, { useState } from "react";
import {
  useGetProfileQuery,
  useUpdateProfilePicMutation,
} from "../../redux/accountApi";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlice";

const AccountProfPic = () => {
  const { user_id } = useSelector(selectAuth);
  const { data: profileData } = useGetProfileQuery(user_id);
  //   console.log(profileData?.profile_pic);
  const [img, setImg] = useState("");
  const [updateProfilePic] = useUpdateProfilePicMutation();
  const handleImg = async (e) => {
    await e.preventDefault();
    // console.log(e.target.files[0]);
    if (img) {
      await updateProfilePic({
        ...profileData,
        profile_pic: `http://127.0.0.1:8000/media/images/${img}`,
      });
      setImg("");
    }
  };
  return (
    <div className="prof_pic_wrapper">
      <form onSubmit={handleImg}>
        {/* <label htmlFor="prof_pic_file" onSubmit={handleImg}> */}
        <img
          src={profileData?.profile_pic}
          alt="user profile picture"
          className="profile_pic"
        />
        {/* </label> */}
        <input
          type="file"
          name="file"
          id="prof_pic_file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <button>update pic</button>
      </form>
    </div>
  );
};

export default AccountProfPic;
