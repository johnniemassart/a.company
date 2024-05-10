import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAuth } from "../../redux/authSlice";
import { Link } from "react-router-dom";

const CreatePostHeader = () => {
  const { username } = useParams();
  const { first_name } = useSelector(selectAuth);
  return (
    <>
      <h1 className="create_post_header">
        whatchu creating,
        <Link to={`/${username}`} className="create_post_header_name">
          {first_name}
        </Link>
        ?
      </h1>
    </>
  );
};

export default CreatePostHeader;
