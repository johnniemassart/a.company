import React, { useState } from "react";
import AccountPosts from "./AccountPosts";
import AccountFollowingList from "./AccountFollowingList";

const AccountNavBar = () => {
  const [clicked, setClicked] = useState(true);
  return (
    <>
      <div className="account_navbar_wrapper">
        <button
          className="account_navbar_btn"
          onClick={() => setClicked(!clicked)}
          disabled={clicked ? true : false}
        >
          posts
        </button>
        <button
          className="account_navbar_btn"
          onClick={() => setClicked(!clicked)}
          disabled={clicked ? false : true}
        >
          following
        </button>
      </div>
      {clicked ? <AccountPosts /> : <AccountFollowingList />}
    </>
  );
};

export default AccountNavBar;
