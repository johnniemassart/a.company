import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlice";
import { useGetProfilePostsQuery } from "../../redux/postApi";
import Accordion from "../global/Accordion";

const AccountPosts = () => {
  const { user_id } = useSelector(selectAuth);
  const { data: userPosts, isSuccess: userPostsSuccess } =
    useGetProfilePostsQuery(user_id);
  const displayUser = false;
  return (
    <div>
      <h1 className="account_posts_header">my posts</h1>
      {userPostsSuccess && userPosts.length > 0 ? (
        userPosts?.map((post) => {
          return (
            <Accordion
              key={post.id}
              title={post.title}
              content={post.content}
              created={post.created_at}
              user={post.user}
              displayUser={displayUser}
            />
          );
        })
      ) : (
        <h1>no posts to show</h1>
      )}
    </div>
  );
};

export default AccountPosts;
