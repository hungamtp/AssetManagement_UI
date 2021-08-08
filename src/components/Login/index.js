import React, { Component } from "react";
import "./Login.css";
import logo from "../../images/Logo_lk.png";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ButtonToggle } from "reactstrap";


export default class index extends Component {
  render() {
    return (
      <div id="OAM_Login">
        <div id="Navbar_mjg" className="Navbar">
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
          <div id="Login_btn"  className="Save_btn" onclick="application.goToTargetView(event)">
					<ButtonToggle className=" btn-block" color="danger" > Login </ButtonToggle>
					</div>
         
          <div id="PW_mj">
            <div id="Password_">
              <Form inline>
								<FormGroup className="mb-2 mr-sm-2 mb-sm-0" style={{position:"relative", left:"4%"}}><span style={{ color: "rgba(233,66,77,1)" }}>*</span>
									<Label className="mr-sm-2">Password </Label>
									<Input type="password"/>
								</FormGroup>
							</Form>
            </div>
          </div>
          <div id="username">
            <div id="Username_">
            <Form inline>
								<FormGroup className="mb-2 mr-sm-2 mb-sm-0"><span style={{ color: "rgba(233,66,77,1)" }}>*</span>
									<Label className="mr-sm-2">Username</Label>
									<Input type="test"/>
								</FormGroup>
							</Form>
              </div>
          </div>
          <div id="Welcome_to_Online_Asset_Manage">
            <span>Welcome to Online Asset Management</span>
          </div>
        </div>
     
      </div>
      
    );
  }
}
