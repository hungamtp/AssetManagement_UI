import React, { Component } from "react";
import "./Home.css";
import Navbar from "../Navbar";
import Menu from "../Menu";
import * as business from "../../constants/Business";
import Logout from "../Logout";

export default class index extends Component {
  render() {
    return (
      <div id="Home">
        <Navbar businessName="Home"/>
        <Menu business={business.HOME}/>
        {/* menu co prop là business tương ứng HOME, MANAGE_USER, ... mn xem them trong const */}
        {/* layout mẫu mn cu v mà làm nha */}
        
      </div>
    );
  }
}
