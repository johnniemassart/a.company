import React, { useState } from "react";
import { useDeletePostMutation } from "../../redux/postApi";

const Accordion = ({ id, title, content, created, user, displayUser }) => {
  const [clicked, setClicked] = useState(false);
  const year_created_sliced = created.slice(0, 4);
  const [deletePost] = useDeletePostMutation();
  const handleDelete = () => {
    setClicked(false);
    deletePost(id);
  };
  return (
    <div className="accordion" key={id} onClick={() => setClicked(!clicked)}>
      <div className="accordion_header">
        <p className="accordion_title">{title}</p>
        {displayUser && <p className="accordion_username">{user}</p>}
        <p className="accordion_year">{year_created_sliced}</p>
        {!displayUser && <button onClick={handleDelete}>X</button>}
      </div>
      <div className={`accordion_body ${clicked && "show"}`}>
        <div className="accordion_content_wrapper">
          <p className="accordion_content">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
