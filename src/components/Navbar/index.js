import React, { Component } from "react";
import "./Navbar.css";

export default class index extends Component {
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
            <div id="icondropdown_arrowdefault_ecl" className="icon_dropdown_arrow_default">
              <svg className="DropdownButtonCarotDown_backgr_ecm">
                <rect id="DropdownButtonCarotDown_backgr_ecm" rx="0" ry="0" x="0" y="0" width="14" height="14"></rect>
              </svg>
              <svg className="icondropdown_arrow_ecn" viewBox="0.023 -6 12 6">
                <path
                  id="icondropdown_arrow_ecn"
                  d="M 0.02301025576889515 -6 L 12.02301120758057 -6 L 6.002416610717773 1.862645149230957e-09 L 0.02301025576889515 -6 Z"
                ></path>
              </svg>
            </div>
            <div id="binhnv_eco">
              <span>binhnv</span>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
