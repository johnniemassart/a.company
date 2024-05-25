import React from "react";
import { useParams } from "react-router-dom";

const PostFooter = () => {
  const { author } = useParams();
  return (
    <div className="post_footer_wrapper">
      <h1 className="post_author">{author}</h1>
    </div>
  );
};

export default PostFooter;
