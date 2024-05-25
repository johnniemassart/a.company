import React from "react";
import { useParams } from "react-router-dom";
import { useGetPostQuery } from "../../redux/postApi";

const PostContent = () => {
  const { postid } = useParams();
  const { data: postData, isSuccess: postDataSuccess } =
    useGetPostQuery(postid);
  //   console.log(postData?.images.length > 0);
  return (
    <div className="post_content_wrapper">
      {postDataSuccess && (
        <div>
          {postData?.images.length > 0 &&
            postData?.images.map((img) => {
              return (
                <img
                  key={img.id}
                  src={img.image}
                  alt="post images"
                  className="post_image"
                />
              );
            })}
          <h1>{postData?.title}</h1>
          <h1>{postData?.content}</h1>
        </div>
      )}
    </div>
  );
};

export default PostContent;
