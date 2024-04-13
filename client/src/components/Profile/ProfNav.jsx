import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

const ProfNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    console.log("log out successful");
    navigate("/login");
  };
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
      <button onClick={handleLogout} className="prof_nav_link nav_btn">
        log out
      </button>
    </div>
  );
};

export default ProfNav;
