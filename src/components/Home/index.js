import React, { Component } from "react";
import "./Home.css";
import Navbar from "../Navbar";
import Menu from "../Menu";
import * as business from "../../constants/Business";
import Users from "../Users";
import { withRouter } from "react-router-dom";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import Logout from "../Logout";
import ManageAsset from "../Manage Asset/ManageAsset";

class index extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      user: this.props.cookies.get("user") || "",
    };
  }

  render() {
    return (
      <div id="Home">
        <Navbar businessName="Admin Home Page" />
        <Menu business={business.HOME} />
        {/* menu co prop là business tương ứng HOME, MANAGE_USER, ... mn xem them trong const */}
        {/* layout mẫu mn cu v mà làm nha */}
      </div>
    );
  }
}

export default withCookies(withRouter(index));
