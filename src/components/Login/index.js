import React, { Component } from "react";
import "./Login.css";
import logo from "../../images/Logo_lk.png";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      username: '',
      password: '',
      isFailed: false
    }
  }

  handleLogin(e) {
    e.preventDefault();
    const api = 'http://localhost:9994/asset-management/user/signin';
    axios.post(api, {
      username: e.target.username.value,
      password: e.target.password.value
    })
      .then(response => {
        if (response.status === 200) {
          if (response.data.successCode === 'USER_LOGIN_SUCCESS') {
            localStorage.setItem('accessToken', response.data.data.token);
            localStorage.setItem('id', response.data.data.staffCode);
            localStorage.setItem('firstLogin', response.data.data.firstLogin);
            localStorage.setItem('role', response.data.data.role);
            localStorage.setItem('username', response.data.data.username);
            this.props.onLogin();
          }
        }
      })
      .catch(() => {
        this.setState({
          isFailed: true
        })
      })
  }

  handleChange(e, key) {
    this.setState({ [key]: e.target.value }, () => {
      if (this.state.username.trim().length > 0 && this.state.password.trim().length > 0) {
        this.setState({ isDisabled: false })
      }
      else {
        this.setState({ isDisabled: true })
      }
    });
  }

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
          <Form inline onSubmit={(e) => this.handleLogin(e)}>
            <div id="Login_btn" className="Save_btn">
              <Button className=" btn-block" color="danger" disabled={this.state.isDisabled}>
                Login
              </Button>
            </div>
            <div id="PW_mj">
              <div id="Password_">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0" style={{ position: "relative", left: "4%" }}><span style={{ color: "rgba(233,66,77,1)" }}>*</span>
                  <Label className="mr-sm-2" for="pw">Password </Label>
                  <Input
                    type="password"
                    name="password"
                    id="pw"
                    onChange={(e) => this.handleChange(e, "password")} />
                </FormGroup>
              </div>
            </div>
            <div id="username">
              <div id="Username_">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0"><span style={{ color: "rgba(233,66,77,1)" }}>*</span>
                  <Label className="mr-sm-2" for="un">Username</Label>
                  <Input
                    type="text"
                    name="username"
                    id="un"
                    onChange={(e) => this.handleChange(e, "username")} />
                </FormGroup>
              </div>
            </div>
          </Form>
          <div id="Welcome_to_Online_Asset_Manage">
            <span>Welcome to Online Asset Management</span>
          </div>

        </div>
        <Modal isOpen={this.state.isFailed} >
          <ModalHeader>Notice</ModalHeader>
          <ModalBody>
            <p style={{ color: 'red' }}>
              Username or Password is incorrect. Please try again.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.setState({ isFailed: false })}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
