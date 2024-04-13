import React from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlice";
import { usePostDataQuery } from "../../redux/postApi";

const ProfContent = () => {
  const user = useSelector(selectAuth);
  const { data: userPostData, isSuccess: userPostSuccess } = usePostDataQuery(
    user.user_id
  );
  //   console.log(userPostData);
  return (
    <div className="prof_cont_wrapper">
      {userPostSuccess &&
        userPostData?.map((post) => {
          return (
            <div className="user_post_wrapper" key={post.id}>
              <br />
              <p className="user_posts">
                {post.title}: {post.content}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default ProfContent;
