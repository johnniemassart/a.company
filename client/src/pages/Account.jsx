import React from "react";
import "../css/Account.css";
import "../css/Profile.css";
import ProfNav from "../components/Profile/ProfNav";
import AccountWelcome from "../components/Account/AccountWelcome";

const Account = () => {
  return (
    <div className="account_wrapper">
      <ProfNav />
      <AccountWelcome />
    </div>
  );
};

export default Account;
