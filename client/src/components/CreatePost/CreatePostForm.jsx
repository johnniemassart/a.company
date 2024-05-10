import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePostPostMutation } from "../../redux/postApi";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlice";

const CreatePostForm = () => {
  const { user_id } = useSelector(selectAuth);
  const { username } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postPost, { isSuccess: postPostSuccess }] = usePostPostMutation();
  const handleCreatePost = async (e) => {
    await e.preventDefault();
    if (title && content) {
      await postPost({ title: title, content: content, user: user_id });
    } else {
      console.log("error");
    }
  };
  useEffect(() => {
    if (postPostSuccess) {
      setTitle("");
      setContent("");
      console.log("post success");
      navigate(`/${username}`);
    }
  }, [postPostSuccess]);
  return (
    <form className="create_post_form" onSubmit={handleCreatePost}>
      <h1 className="create_post_header">create a post</h1>
      <input
        type="text"
        placeholder="title"
        className="create_post_title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea
        name="content"
        id="post_content"
        placeholder="content"
        className="create_post_content"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      ></textarea>
      <button className="create_post_btn">submit</button>
    </form>
  );
};

export default CreatePostForm;
