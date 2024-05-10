import React from "react";
import "../css/CreatePost.css";
import CreatePostForm from "../components/CreatePost/CreatePostForm";

const CreatePost = () => {
  return (
    <div className="create_post_wrapper">
      <CreatePostForm />
    </div>
  );
};

export default CreatePost;
