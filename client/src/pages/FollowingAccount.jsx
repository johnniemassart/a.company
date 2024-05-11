import React from "react";
import "../css/FollowingAccount.css";
import { Link, useParams } from "react-router-dom";
import { useGetUserQuery } from "../redux/userApi";
import defaultImage from "/src/assets/default_img.png";

const FollowingAccount = () => {
  const { username, id } = useParams();
  const { data: followingAccountData, isSuccess: followingAccountDataSuccess } =
    useGetUserQuery(id);
  return (
    <div className="following_account_wrapper">
      <div className="following_account_content_wrapper">
        <img
          src={
            followingAccountData?.profile.profile_pic != null
              ? followingAccountData?.profile.profile_pic
              : defaultImage
          }
          alt="profile pic"
          className="following_account_img"
        />
        <p>
          {followingAccountData?.first_name} {followingAccountData?.last_name}
        </p>
        <p>_{followingAccountData?.username}</p>
        <p>{followingAccountData?.profile.about}</p>
        <Link to={`/${username}/account`}>Back to account</Link>
      </div>
    </div>
  );
};

export default FollowingAccount;
