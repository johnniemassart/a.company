import React from "react";
import "../css/FollowingAccount.css";
import { Link, useParams } from "react-router-dom";
import { useGetUserQuery, usePostFollowMutation } from "../redux/userApi";
import defaultImage from "/src/assets/default_img.png";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/authSlice";

const FollowingAccount = () => {
  const { username, id } = useParams();
  const { user_id } = useSelector(selectAuth);
  const { data: followingAccountData, isSuccess: followingAccountDataSuccess } =
    useGetUserQuery(id);
  const { data: userFollowing, refetch } = useGetUserQuery(user_id);
  let following = userFollowing?.profile.follows.includes(Number(id));
  const [postFollow] = usePostFollowMutation();
  const handleFollow = async () => {
    let formData = new FormData();
    formData.append("id", user_id);
    formData.append("follows", id);
    await postFollow({ id: user_id, follows: id });
    await refetch();
  };
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
        <button onClick={handleFollow}>
          {following ? "unfollow" : "follow"}
        </button>
        <Link to={`/${username}/account`}>Back to account</Link>
      </div>
    </div>
  );
};

export default FollowingAccount;
