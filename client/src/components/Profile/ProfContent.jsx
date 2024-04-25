import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlice";
import {
  usePostDataQuery,
  useFollowingPostDataQuery,
} from "../../redux/postApi";
import { useAccessUsernameQuery } from "../../redux/profileApi";
import Accordion from "../global/Accordion";

const ProfContent = () => {
  const user = useSelector(selectAuth);
  const { data: followingPostData, isSuccess: userFollowingPostSuccess } =
    useFollowingPostDataQuery(user.user_id);
  //   console.log(followingPostData[0]?.user);
  //   const { data: usernameData } = useAccessUsernameQuery();
  // const { data: usernameData } = useAccessUsernameQuery(
  //   followingPostData[0]?.user
  // );
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
            />
          );
        })}
    </div>
  );
};

export default ProfContent;
