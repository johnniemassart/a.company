import React from "react";
import "../css/Account.css";
import "../css/Profile.css";
import "../css/Post.css";
import ProfNav from "../components/Profile/ProfNav";
import AccountWelcome from "../components/Account/AccountWelcome";
import AccountContent from "../components/Account/AccountContent";

const Account = () => {
  return (
    <div className="account_wrapper">
      <ProfNav />
      <AccountWelcome />
      <AccountContent />
    </div>
  );
};

export default Account;
