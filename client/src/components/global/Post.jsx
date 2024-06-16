import React from "react";
import { useDeletePostMutation } from "../../redux/postApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetUserQuery } from "../../redux/userApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { usePostFavoriteMutation } from "../../redux/authApi";

const Post = ({
  id,
  user_id_num,
  title,
  content,
  created,
  user,
  favorites,
  displayUser,
  refetch,
}) => {
  const year_created_sliced = created.slice(0, 4);
  const navigate = useNavigate();
  const { username } = useParams();
  const { data: userData } = useGetUserQuery(user);
  const user_str = userData?.username;
  const handlePostPage = () => {
    if (typeof user == "number") {
      navigate(`/${username}/${user_str}/${id}`);
    } else {
      navigate(`/${username}/${user}/${id}`);
    }
  };
  const [deletePost] = useDeletePostMutation();
  const handleDelete = () => {
    deletePost(id);
  };
  const [postFavorite] = usePostFavoriteMutation();
  const handleFavorite = async () => {
    let formData = new FormData();
    formData.append("id", id);
    formData.append("favorites", user_id_num);
    await postFavorite({ id: id, favorites: user_id_num });
    await refetch();
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
      <button className="post_favorites_btn" onClick={handleFavorite}>
        {favorites?.includes(user_id_num) ? (
          <FontAwesomeIcon icon={faBookmarkSolid} className="solid" />
        ) : (
          <FontAwesomeIcon icon={faBookmarkRegular} className="regular" />
        )}
      </button>
      {!displayUser && (
        <button onClick={handleDelete} className="post_delete_btn">
          X
        </button>
      )}
    </div>
  );
};

export default Post;
