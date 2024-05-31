import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlice";
import axios from "axios";

const CreatePostForm = () => {
  const { user_id } = useSelector(selectAuth);
  const { username } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState(null);
  const openBrace = "{";
  const closedBrace = "}";
  const handleCreatePost = async (e) => {
    await e.preventDefault();
    if (title && content) {
      let formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("user", user_id);
      for (let i = 0; i < images.length; i++) {
        formData.append(`uploaded_images`, images[i]);
      }
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      await axios
        .post("http://127.0.0.1:8000/api/posts/", formData, config)
        .then((res) => {
          console.log(res.data);
          setTitle("");
          setContent("");
          setImages(null);
          navigate(`/${username}`);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("error");
    }
  };
  return (
    <form className="create_post_form" onSubmit={handleCreatePost}>
      <div className="create_post_content_wrapper">
        <input
          name="title"
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
        <label htmlFor="post_files" className="add_files_label">
          add files {openBrace}
          {images != null &&
            [...images].map((image, idx) => {
              return (
                <span key={idx} className="post_files_name">
                  {image.name}
                  {idx + 1 < images.length && ", "}
                </span>
              );
            })}
          {closedBrace}
        </label>
        <input
          type="file"
          name="uploaded_images"
          id="post_files"
          style={{ display: "none" }}
          multiple
          onChange={(e) => setImages(e.target.files)}
        />
      </div>
      <button className="create_post_btn">post</button>
    </form>
  );
};

export default CreatePostForm;
