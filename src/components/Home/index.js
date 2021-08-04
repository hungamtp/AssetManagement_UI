import React, { Component } from "react";
import "./Home.css";
import Navbar from "../Navbar";
import Menu from "../Menu";

export default class index extends Component {
  render() {
    return (
      <div id="Home">
        <Navbar businessName="Name of you businessName eg: Manage Assignment > Create New Assignment"/>
        <Menu business="home"/>
        {/* menu co prop là business tương ứng home, manage_user, manage_asset, manage_assignment, request_for_returning, report */}
        {/* layout mẫu mn cu v mà làm nha */}
      </div>
    );
  }
}
