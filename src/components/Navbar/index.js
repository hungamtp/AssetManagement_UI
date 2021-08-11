import React, { Component } from "react";
import "./Navbar.css";
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import Logout from "../Logout";



export default class index extends Component {
  state = {
    isShowLogout: false
  }

  handleLogoutShow = () => {
    this.setState({
      isShowLogout: !this.state.isShowLogout
    })
  }

  render() {

    return (
      <div id="narbav_ecg">
        <svg className="Rectangle_329_ech">
          <rect id="Rectangle_329_ech" rx="0" ry="0" x="0" y="0" width="1920" height="72"></rect>
        </svg>
        <div id="Manage_Assignment__Create_New__eci">
          {/* <span>Manage Assignment {`>`} Create New Assignment</span> */}
          <span>{this.props.businessName}</span>
        </div>
        <div id="account_ecj" className="account">
          <div id="account_eck" className="account">
            <div id="binhnv_eco">
              <span>...</span>
            </div>
          </div>
          <div id="log_out_ecp" className="log_out">
            <svg className="Path_1_ecq" viewBox="0 0 198 40">
              <path id="Path_1_ecq" d="M 0 0 L 198 0 L 198 40 L 0 40 L 0 0 Z"></path>
            </svg>
            <div id="Log_out_ecr">
              <span>Log out</span>
            </div>
          </div>
          <div id="change_pw_ecs" className="change_pw">
            <svg className="Path_1_ect" viewBox="0 0 198 40">
              <path id="Path_1_ect" d="M 0 0 L 198 0 L 198 40.00000381469727 L 0 40.00000381469727 L 0 0 Z"></path>
            </svg>
            <div id="Change_password_ecu">
              <span>Change password</span>
              <UncontrolledButtonDropdown>
                <DropdownToggle caret color="#CF2338">
                  Binhnv
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={this.handleLogoutShow}>Log Out</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Change Password</DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </div>
          </div>
        </div>
        <Logout isShowLogout={this.state.isShowLogout} handleLogoutShow={this.handleLogoutShow}/>
      </div>
    );
  }
}
