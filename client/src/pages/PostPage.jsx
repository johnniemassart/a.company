import React from "react";
import "../css/PostPage.css";
import PostNav from "../components/Post/PostNav";
import PostContent from "../components/Post/PostContent";
import PostFooter from "../components/Post/PostFooter";

const PostPage = () => {
  return (
    <div className="post_page_wrapper">
      <PostNav />
      <PostContent />
      <PostFooter />
    </div>
  );
};

export default PostPage;
