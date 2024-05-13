import React from "react";
import { useDeletePostMutation } from "../../redux/postApi";
import { Link, useNavigate, useParams } from "react-router-dom";

const Post = ({ id, title, content, created, user, displayUser }) => {
  const year_created_sliced = created.slice(0, 4);
  const navigate = useNavigate();
  const { username } = useParams();
  const handlePostPage = () => {
    navigate(`/${username}/${user}/${id}`);
  };
  return (
    <div className="post_wrapper" onClick={handlePostPage}>
      <h1 className="post_content_title">{title}</h1>
      <div className="post_details_wrapper">
        <p className="post_user_info">
          _{user}, {year_created_sliced}.
        </p>
      </div>
    </div>
  );
};

export default Post;
