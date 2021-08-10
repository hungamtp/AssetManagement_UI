import React from "react";
import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import * as business from "../../constants/Business";
import ChangePassword from "../../components/Change Password/ChangePassword";

const ChangePassword_Page = () => {
    return (
      <div id="ChangePassword">
        <Navbar businessName="Name of you businessName eg: Manage Assignment > Create New Assignment"/>
        <Menu business={business.HOME}/>
        <ChangePassword/>
        
      </div>
    );
}

export default ChangePassword_Page;
