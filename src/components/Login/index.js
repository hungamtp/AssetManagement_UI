import React, { Component } from "react";
import "./Login.css";
import logo from "../../images/Logo_lk.png";

export default class index extends Component {
  render() {
    return (
      <div id="OAM_Login">
        <div id="Navbar_mjg" className="Navbar">
          <div id="Menu_mjh">
            <div id="NavbarCreate_mji" className="Navbar_Create">
              <svg className="transparent_mjj">
                <rect id="transparent_mjj" rx="4" ry="4" x="0" y="0" width="115" height="38"></rect>
              </svg>
              <div id="Create_user_mjk">
                <span>Create user</span>
              </div>
            </div>
            <div id="NavbarView_mjl" className="Navbar_View">
              <svg className="transparent_mjm">
                <rect id="transparent_mjm" rx="4" ry="4" x="0" y="0" width="146" height="38"></rect>
              </svg>
              <div id="View_user_mjn">
                <span>View user</span>
              </div>
            </div>
          </div>
          <div id="Dropusername_mjo" className="Drop_username">
            <svg className="transparent_mjp">
              <rect id="transparent_mjp" rx="4" ry="4" x="0" y="0" width="114" height="38"></rect>
            </svg>
            <div id="Label_mjq">
              <span>Hi, user123</span>
            </div>
            <div id="icondropdown_arrowdefault_mjr" className="icon_dropdown_arrow_default">
              <svg className="DropdownButtonCarotDown_backgr_mjs">
                <rect id="DropdownButtonCarotDown_backgr_mjs" rx="0" ry="0" x="0" y="0" width="14" height="14"></rect>
              </svg>
              <svg className="icondropdown_arrow_mjt" viewBox="0.023 -6 12 6">
                <path
                  id="icondropdown_arrow_mjt"
                  d="M 0.02301025576889515 -6 L 12.02301120758057 -6 L 6.002416610717773 1.862645149230957e-09 L 0.02301025576889515 -6 Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <svg className="Rectangle_329_mju">
          <rect id="Rectangle_329_mju" rx="0" ry="0" x="0" y="0" width="1920" height="72"></rect>
        </svg>
        <div id="Logo_mjv">
          <div id="Online_Asset_Management_mjw">
            <span>Online Asset Management</span>
          </div>
          <img
            id="Logo_mjx"
            src={logo}
          />
        </div>
        <div id="Login" className="Login">
          <svg className="header_mjz">
            <rect id="header_mjz" rx="10" ry="10" x="0" y="0" width="465.649" height="64"></rect>
          </svg>
          <svg className="background_mj" viewBox="0 0 465.648 228.959">
            <path
              id="background_mj"
              d="M 0 0 L 465.6484680175781 0 L 465.6484680175781 222.9495544433594 C 465.6484680175781 226.2684936523438 461.30517578125 228.958984375 455.9474182128906 228.958984375 L 9.701008796691895 228.958984375 C 4.343289375305176 228.958984375 0 226.2684936523438 0 222.9495544433594 L 0 0 Z"
            ></path>
          </svg>
          <div id="Login_btn" className="Login_btn">
            <svg className="Primary__007BFF_mj">
              <rect id="Primary__007BFF_mj" rx="5" ry="5" x="0" y="0" width="71" height="37"></rect>
            </svg>
            <div id="Login_mj">
              <span>Login</span>
            </div>
          </div>
          <div id="PW_mj">
            <div id="Password_">
              <span>Password </span>
              <span style={{ color: "rgba(233,66,77,1)" }}>*</span>
            </div>
            <svg className="Rectangle_330_mj">
              <rect id="Rectangle_330_mj" rx="5" ry="5" x="0" y="0" width="219" height="35"></rect>
            </svg>
            <div id="eye-fill_mj">
              <svg className="Path_24_mj" viewBox="5.5 5.5 5 5">
                <path
                  id="Path_24_mj"
                  d="M 10.5 8 C 10.50000095367432 9.380711555480957 9.380712509155273 10.5 8.000000953674316 10.5 C 6.619288921356201 10.5 5.500000953674316 9.380711555480957 5.500000953674316 8 C 5.500000953674316 6.619287967681885 6.619289398193359 5.5 8.000000953674316 5.5 C 9.380712509155273 5.5 10.50000095367432 6.619288444519043 10.50000095367432 8 Z"
                ></path>
              </svg>
              <svg className="Path_25_mj" viewBox="0 2.5 16 11">
                <path
                  id="Path_25_mj"
                  d="M 0 8 C 0 8 3 2.5 8 2.5 C 13 2.5 16 8 16 8 C 16 8 13 13.5 8 13.5 C 3 13.5 0 8 0 8 Z M 8 11.5 C 9.93299674987793 11.5 11.5 9.93299674987793 11.5 8 C 11.5 6.06700325012207 9.93299674987793 4.5 8 4.5 C 6.06700325012207 4.5 4.5 6.06700325012207 4.5 8 C 4.5 9.93299674987793 6.06700325012207 11.5 8 11.5 Z"
                ></path>
              </svg>
            </div>
          </div>
          <div id="username">
            <div id="Username_">
              <span>Username </span>
              <span style={{ color: "rgba(233,66,77,1)" }}>*</span>
            </div>
            <svg className="Rectangle_330_mkc">
              <rect id="Rectangle_330_mkc" rx="5" ry="5" x="0" y="0" width="219" height="35"></rect>
            </svg>
          </div>
          <div id="Welcome_to_Online_Asset_Manage">
            <span>Welcome to Online Asset Management</span>
          </div>
        </div>
      </div>
    );
  }
}
