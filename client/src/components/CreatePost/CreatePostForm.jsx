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
  const [img, setImg] = useState([]);
  const [postPost, { isSuccess: postPostSuccess }] = usePostPostMutation();
  const handleImages = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      setImg((old) => [...old, `${e.target.files[i].name}`]);
      console.log(e.target.files[i]);
    }
  };
  const handleCreatePost = async (e) => {
    await e.preventDefault();
    if (title && content) {
      let formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("user", user_id);
      if (img.length > 0) {
        for (let i = 0; i < img.length; i++) {
          formData.append("uploaded_images", img[i]);
        }
      }
      await postPost(formData);
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
          add files:
        </label>
        {/* <div>
          {img.map((im, i) => {
            return <div key={i}>{im},</div>;
          })}
        </div> */}
        <input
          type="file"
          name="uploaded_images"
          id="post_files"
          style={{ display: "none" }}
          multiple
          onChange={handleImages}
        />
      </div>
      <button className="create_post_btn">post</button>
    </form>
  );
};

export default CreatePostForm;
