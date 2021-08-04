import React, { Component } from "react";
import "./Menu.css";
import logo from "../../images/Logo_lk@2x.png";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import { Redirect, withRouter } from "react-router-dom";

class index extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      cus: this.props.cookies.get("user") || "",
      homeClassName: "",
      manageUserClassName: "",
      manageAssetclassName: "",
      manageAssignmentClassName: "",
      requestForReturningClassName: "",
      reportClassName: "",
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div id="Menu_mis">
          <div id="Report_mit" className="Report">
            <svg className="Path_1_miu" viewBox="0 0 262 60">
              <path id="Path_1_miu" d="M 0 0 L 262 0 L 262 60 L 0 60 L 0 0 Z"></path>
            </svg>
            <div id="Report_miv">
              <span>Report</span>
            </div>
          </div>
          <div id="Request_for_Returning_miw" className="Request_for_Returning">
            <svg className="Path_1_mix" viewBox="0 0 262 60">
              <path id="Path_1_mix" d="M 0 0 L 262 0 L 262 60 L 0 60 L 0 0 Z"></path>
            </svg>
            <div id="Request_for_Returning_miy">
              <span>Request for Returning</span>
            </div>
          </div>
          <div id="Manage_Assignment_miz" className="Manage_Assignment">
            <svg className="Path_1_mi" viewBox="0 0 262 60">
              <path id="Path_1_mi" d="M 0 0 L 262 0 L 262 60 L 0 60 L 0 0 Z"></path>
            </svg>
            <div id="Manage_Assignment_mi">
              <span>Manage Assignment</span>
            </div>
          </div>
          <div id="Manage_Asset_mi" className="Manage_Asset">
            <svg className="Path_1_mja" viewBox="0 0 262 60">
              <path id="Path_1_mja" d="M 0 0 L 262 0 L 262 60 L 0 60 L 0 0 Z"></path>
            </svg>
            <div id="Manage_Asset_mja">
              <span>Manage Asset</span>
            </div>
          </div>
          <div id="Manage_User_mi" className="Manage_User">
            <svg className="Path_1_mjb" viewBox="0 0 262 60">
              <path id="Path_1_mjb" d="M 0 0 L 262 0 L 262 60 L 0 60 L 0 0 Z"></path>
            </svg>
            <div id="Manage_User_mja">
              <span>Manage User</span>
            </div>
          </div>
          <div id="Home_mi" className="Home">
            <svg className="Path_1_mjc" viewBox="0 0 262 60">
              <path id="Path_1_mjc" d="M 0 0 L 262 0 L 262 60 L 0 60 L 0 0 Z"></path>
            </svg>
            <div id="Home_mja">
              <span>Home</span>
            </div>
          </div>
        </div>
        <div id="Logo_mjb">
          <div id="Online_Asset_Management_mjc">
            <span>Online Asset Management</span>
          </div>
          <img id="Logo_mjd" src={logo} />
        </div>
      </div>
    );
  }
}

export default withCookies(withRouter(index));