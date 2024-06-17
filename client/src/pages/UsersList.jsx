import React from "react";
import "../css/UsersList.css";
import {
  useGetUserQuery,
  useGetUsersQuery,
  usePostFollowMutation,
} from "../redux/userApi";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/authSlice";

const UsersList = () => {
  const {
    data: usersData,
    isSuccess: usersDataSuccess,
    refetch,
  } = useGetUsersQuery();
  const { user_id } = useSelector(selectAuth);
  const { data: loggedInUser } = useGetUserQuery(user_id);
  let userFollowList = loggedInUser?.profile.follows;
  let follow_user_id = null;
  const [postFollow] = usePostFollowMutation();
  const handleFollow = async () => {
    // console.log(follow_user_id);
    let formData = new FormData();
    formData.append("id", user_id);
    formData.append("follows", follow_user_id);
    await postFollow({ id: user_id, follows: follow_user_id });
    await refetch();
  };
  return (
    <div className="userslist_wrapper">
      {usersDataSuccess ? (
        usersData?.map((user) => {
          follow_user_id = user.id;
          return (
            <div key={user.id}>
              {user.id != user_id && (
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
              )}
            </div>
          );
        })
      ) : (
        <div className="users_list_failed">failed to load</div>
      )}
    </div>
  );
};

export default UsersList;
