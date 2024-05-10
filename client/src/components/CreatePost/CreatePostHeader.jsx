import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAuth } from "../../redux/authSlice";

const CreatePostHeader = () => {
  //   const { username } = useParams();
  const { first_name } = useSelector(selectAuth);
  return (
    <>
      <h1 className="create_post_header">
        whatchu creating,<span>{first_name}</span>?
      </h1>
    </>
  );
};

export default CreatePostHeader;
