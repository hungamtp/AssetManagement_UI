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
        {/* layout mẫu mn cu v mà làm nha */}
      </div>
    );
  }
}
