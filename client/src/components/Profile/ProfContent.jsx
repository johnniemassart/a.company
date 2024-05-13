import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlice";
import { useGetProfileFollowingPostsQuery } from "../../redux/postApi";
import Post from "../global/Post";

const ProfContent = () => {
  const { user_id } = useSelector(selectAuth);
  const { data: followingPostData, isSuccess: userFollowingPostSuccess } =
    useGetProfileFollowingPostsQuery(user_id);
  const displayUser = true;
  return (
    <div className="prof_cont_wrapper">
      <h1 className="prof_content_header">who's creating</h1>
      {userFollowingPostSuccess && followingPostData.length > 0 ? (
        followingPostData?.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              created={post.created_at}
              user={post.user}
              displayUser={displayUser}
            />
          );
        })
      ) : (
        <p className="prof_no_content">no content to show</p>
      )}
    </div>
  );
};

export default ProfContent;
