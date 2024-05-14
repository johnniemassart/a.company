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
  const [deletePost] = useDeletePostMutation();
  const handleDelete = () => {
    deletePost(id);
  };
  return (
    <div className="post_outer_wrapper">
      <div className="post_wrapper" onClick={handlePostPage}>
        <h1 className="post_content_title">{title}</h1>
        <div className="post_details_wrapper">
          {displayUser && <p className="post_user_info">_{user},</p>}
          <p className="post_user_info">{year_created_sliced}</p>
        </div>
      </div>
      {!displayUser && (
        <button onClick={handleDelete} className="post_delete_btn">
          X
        </button>
      )}
    </div>
  );
};

export default Post;
