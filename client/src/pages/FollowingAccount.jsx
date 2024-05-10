import React from "react";
import "../css/FollowingAccount.css";
import { Link, useParams } from "react-router-dom";
import { useProfileDataQuery } from "../redux/profileApi";

const FollowingAccount = () => {
  const { username, id } = useParams();
  const { data: followingAccountData, isSuccess: followingAccountDataSuccess } =
    useProfileDataQuery(id);
  return (
    <div className="following_account_wrapper">
      <div className="following_account_content_wrapper">
        <img
          src={followingAccountData?.profile.profile_pic}
          alt="profile pic"
          className="following_account_img"
        />
        <p>
          {followingAccountData?.first_name} {followingAccountData?.last_name}
        </p>
        <p>_{followingAccountData?.username}</p>
        <p>{followingAccountData?.profile.about}</p>
        <Link to={`/${username}`}>Home</Link>
      </div>
    </div>
  );
};

export default FollowingAccount;
