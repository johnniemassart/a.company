import React from "react";
import { Link, useParams } from "react-router-dom";

const PostNav = () => {
  const { username } = useParams();
  return (
    <div className="post_nav_wrapper">
      <Link to={`/${username}`}>back to profile</Link>
    </div>
  );
};

export default PostNav;
