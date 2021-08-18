import React, { Component } from "react";
import Navbar from "../Navbar";
import Menu from "../Menu";
import * as business from "../../constants/Business";
import { withRouter } from "react-router-dom";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import OwnAssignment from "../OwnAssignment";

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
      <div>
        <Navbar businessName="Admin Home Page" />
        <Menu business={business.HOME} />
        {/* menu co prop là business tương ứng HOME, MANAGE_USER, ... mn xem them trong const */}
        {/* layout mẫu mn cu v mà làm nha */}
        <OwnAssignment/>
      </div>
    );
  }
}

export default withCookies(withRouter(index));
