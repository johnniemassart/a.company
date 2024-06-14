import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlice";
import { useGetProfilePostsQuery } from "../../redux/postApi";
import Post from "../global/Post";

const AccountPosts = () => {
  const { user_id } = useSelector(selectAuth);
  const user_id_num = Number(user_id);
  const {
    data: userPosts,
    isSuccess: userPostsSuccess,
    refetch,
  } = useGetProfilePostsQuery(user_id);
  const displayUser = false;
  return (
    <>
      <h1 className="account_posts_header">my posts</h1>
      {userPostsSuccess && userPosts.length > 0 ? (
        userPosts?.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              user_id_num={user_id_num}
              title={post.title}
              content={post.content}
              created={post.created_at}
              user={post.user}
              favorites={post.favorites}
              displayUser={displayUser}
              refetch={refetch}
            />
          );
        })
      ) : (
        <p className="account_no_posts">no posts to show</p>
      )}
    </>
  );
};

export default AccountPosts;
