import React from "react";
import "../css/PostPage.css";
import { Link, useParams } from "react-router-dom";
import { useGetPostQuery } from "../redux/postApi";

const PostPage = () => {
  const { username, author, postid } = useParams();
  const { data: postData, isSuccess: postDataSuccess } =
    useGetPostQuery(postid);
  return (
    <div className="post_page_wrapper">
      <h1>{postData?.user}</h1>
      <p>{postData?.title}</p>
      <p>{postData?.content}</p>
      <Link to={`/${username}`}>Back to profile</Link>
    </div>
  );
};

export default PostPage;
