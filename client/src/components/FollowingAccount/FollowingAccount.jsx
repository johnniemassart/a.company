import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetUserQuery } from "../../redux/authApi";

const FollowingAccount = () => {
  const params = useParams();
  const loggedInUsername = params.username;
  const followingAccountId = params.id;
  const { data: userData, isSuccess: userDataSuccess } =
    useGetUserQuery(followingAccountId);
  return (
    <div>
      <Link to={`/${loggedInUsername}`}>Home</Link>
      <div>Account for: {params.id} </div>
      <div>Username is: {userData?.username}</div>
    </div>
  );
};

export default FollowingAccount;
