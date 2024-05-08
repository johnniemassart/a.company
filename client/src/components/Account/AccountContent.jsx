import React from "react";
import AccountProfPic from "./AccountProfPic";
import AccountAbout from "./AccountAbout";
import AccountUsername from "./AccountUsername";
import AccountUpdateHeader from "./AccountUpdateHeader";

const AccountContent = () => {
  return (
    <div className="account_content_wrapper">
      <div className="update_account_wrapper">
        <AccountUpdateHeader />
        <AccountProfPic />
        <AccountUsername />
        <AccountAbout />
      </div>
    </div>
  );
};

export default AccountContent;
