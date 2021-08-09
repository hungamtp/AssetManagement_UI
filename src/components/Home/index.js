import React, { Component } from "react";
import "./Home.css";
import Navbar from "../Navbar";
import Menu from "../Menu";
import * as business from "../../constants/Business";
import { Redirect } from "react-router-dom";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }


  render() {
    return (
      <div id="Home">
        <Navbar businessName="Admin Home Page"/>
        <Menu business={business.HOME}/>
        {/* menu co prop là business tương ứng HOME, MANAGE_USER, ... mn xem them trong const */}
        {/* layout mẫu mn cu v mà làm nha */}
        {
          localStorage.getItem('accessToken') != null &&
          localStorage.getItem('role') === 'ROlE_ADMIN' &&
          localStorage.getItem('firstLogin') === 'false' &&
          <Redirect to="/first"/>
        }
        {
          localStorage.getItem('accessToken') == null &&
          localStorage.getItem('role') !== 'ROlE_ADMIN' &&
          <Redirect to="/"/>
        }
      </div>
    );
  }
}
