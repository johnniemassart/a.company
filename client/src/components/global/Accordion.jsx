import React, { useState } from "react";

const Accordion = ({ id, title, content, created }) => {
  const [clicked, setClicked] = useState(false);
  const year_created_sliced = created.slice(0, 4);
  return (
    <div className="accordion" key={id} onClick={() => setClicked(!clicked)}>
      <div className="accordion_header">
        <p className="accordion_title">{title}</p>
        <p className="accordion_year">{year_created_sliced}</p>
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
