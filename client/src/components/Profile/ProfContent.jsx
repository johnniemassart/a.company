import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlice";
import {
  usePostDataQuery,
  useFollowingPostDataQuery,
} from "../../redux/postApi";
import Accordion from "../global/Accordion";

const ProfContent = () => {
  const { user_id } = useSelector(selectAuth);
  const { data: followingPostData, isSuccess: userFollowingPostSuccess } =
    useFollowingPostDataQuery(user_id);
  const displayUser = true;
  return (
    <div className="prof_cont_wrapper">
      <h1 className="prof_content_header">my content</h1>
      {userFollowingPostSuccess &&
        followingPostData?.map((post) => {
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
        })}
    </div>
  );
};

export default ProfContent;
