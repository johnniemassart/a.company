import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlice";
import {
  usePostDataQuery,
  useFollowingPostDataQuery,
} from "../../redux/postApi";
import Accordion from "../global/Accordion";

const ProfContent = () => {
  const user = useSelector(selectAuth);
  const { data: followingPostData, isSuccess: userFollowingPostSuccess } =
    useFollowingPostDataQuery(user.user_id);
  console.log(followingPostData);
  return (
    <div className="prof_cont_wrapper">
      {userFollowingPostSuccess &&
        followingPostData?.map((post) => {
          return (
            <Accordion
              key={post.id}
              title={post.title}
              content={post.content}
              created={post.created_at}
            />
          );
        })}
    </div>
  );
};

export default ProfContent;
