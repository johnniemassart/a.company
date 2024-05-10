import React from "react";
import "../css/CreatePost.css";
import CreatePostForm from "../components/CreatePost/CreatePostForm";
import CreatePostHeader from "../components/CreatePost/CreatePostHeader";

const CreatePost = () => {
  return (
    <div className="create_post_wrapper">
      <CreatePostHeader />
      <CreatePostForm />
    </div>
  );
};

export default CreatePost;
