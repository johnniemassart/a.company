import React from "react";
import "../css/UsersList.css";
import { useGetUserQuery, useGetUsersQuery } from "../redux/userApi";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/authSlice";

const UsersList = () => {
  const { data: usersData, isSuccess: usersDataSuccess } = useGetUsersQuery();
  const { user_id } = useSelector(selectAuth);
  const { data: loggedInUser } = useGetUserQuery(user_id);
  let userFollowList = loggedInUser?.profile.follows;
  const handleFollow = () => {};
  return (
    <div className="userslist_wrapper">
      {usersDataSuccess ? (
        usersData?.map((user) => {
          return (
            <React.Fragment key={user.id}>
              <div className="user_wrapper">
                <img
                  src={user.profile.profile_pic}
                  alt={`${user.first_name} profile picture`}
                  className="user_img"
                />
                <div className="user_username">{user.username}</div>
                <button className="user_follow" onClick={handleFollow}>
                  {userFollowList.includes(user.id) ? "unfollow" : "follow"}
                </button>
              </div>
            </React.Fragment>
          );
        })
      ) : (
        <div className="users_list_failed">failed to load</div>
      )}
    </div>
  );
};

export default UsersList;
