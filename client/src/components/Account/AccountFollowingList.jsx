import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlice";
import { useGetFollowingsQuery } from "../../redux/userApi";
import defaultImage from "/src/assets/default_img.png";
import { Link, useParams } from "react-router-dom";

const AccountFollowingList = () => {
  const { user_id } = useSelector(selectAuth);
  const { data: followingData, isSuccess: followingDataSuccess } =
    useGetFollowingsQuery(user_id);
  //   console.log(followingData);
  const params = useParams();
  const loggedInUsername = params.username;
  return (
    <div>
      <h1 className="account_following_header">following</h1>
      {followingDataSuccess &&
        followingData?.follows.map((following, idx) => {
          return (
            <div key={following.user}>
              {followingData?.user != idx + 1 && (
                <div className="account_following_wrapper">
                  <img
                    className="account_following_img"
                    src={
                      following.profile_pic != null
                        ? following.profile_pic
                        : defaultImage
                    }
                    alt={
                      following.profile_pic != null ? following.user : "default"
                    }
                  />
                  <Link
                    className="account_following_user"
                    to={`/${loggedInUsername}/account/${following.id}`}
                  >
                    {following.user}
                  </Link>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default AccountFollowingList;
