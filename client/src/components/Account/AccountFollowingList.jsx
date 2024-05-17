import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlice";
import { useGetFollowingsQuery, useGetProfileQuery } from "../../redux/userApi";
import { Link, useParams } from "react-router-dom";

const AccountFollowingList = () => {
  const { user_id } = useSelector(selectAuth);
  const { data: followingData, isSuccess: followingDataSuccess } =
    useGetFollowingsQuery(user_id);
  const { data: profileData, isSuccess: profileDataSuccess } =
    useGetProfileQuery(user_id);
  const params = useParams();
  const loggedInUsername = params.username;
  return (
    <div>
      <h1 className="account_following_header">
        following
        {profileDataSuccess && `, {${profileData?.following_count - 1}}`}
      </h1>
      {followingDataSuccess && followingData?.follows.length > 1 ? (
        followingData?.follows.map((following, idx) => {
          return (
            <div key={following.id}>
              {followingData?.user != following.id && (
                <div className="account_following_wrapper">
                  <img
                    className="account_following_img"
                    src={following.profile_pic}
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
        })
      ) : (
        <p className="account_not_following">not following anyone yet</p>
      )}
    </div>
  );
};

export default AccountFollowingList;
