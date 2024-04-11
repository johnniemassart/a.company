import React from "react";
import { Link } from "react-router-dom";

const ProfNav = () => {
  return (
    <div className="prof_nav_wrapper">
      <Link to="#" className="prof_nav_link a_company">
        a.company
      </Link>
      <Link to="/profile" className="prof_nav_link">
        feed
      </Link>
      <Link to="#" className="prof_nav_link">
        account
      </Link>
    </div>
  );
};

export default ProfNav;
