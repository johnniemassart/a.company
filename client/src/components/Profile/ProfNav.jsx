import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  const params = useParams();
  return (
    <div className="prof_nav_wrapper">
      <Link to={`/${params.username}`} className="prof_nav_link a_company">
        a.company
      </Link>
      <div className="other_nav_link_wrapper">
        <Link to={`/${params.username}/create`} className="prof_nav_link">
          create post
        </Link>
        <Link to={`/${params.username}/account`} className="prof_nav_link">
          account
        </Link>
        <button onClick={handleLogout} className="prof_nav_link nav_btn">
          log out
        </button>
      </div>
    </div>
  );
};

export default ProfNav;
