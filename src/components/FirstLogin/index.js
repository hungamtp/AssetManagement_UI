import React, { Component } from "react";
import Navbar from "../Navbar";
import Menu from "../Menu";
import "./FirstLogin.css";
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { withRouter, Redirect } from "react-router-dom";
import * as business from "../../constants/Business";
import axios from "axios";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import { put } from "../../httpHelper";
import * as URL from "../../constants/URL";
import * as role from "../../constants/Business";

class index extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      password: "",
      isFailed: false,
      messageFail: "",
      user: this.props.cookies.get("user") || "",
    };
  }

  changePassword(e) {
    e.preventDefault();
    if (this.state.user.role === "ROLE_ADMIN") {
      let url = "admin/password/first";
      let body = {
        staffCode: `${this.state.user.staffCode}`,
        newPassword: e.target.password.value,
      };
      put(url, body)
        .then((response) => {
          if (response.status === 200) {
            if (response.data.successCode === "CHANGE_PASSWORD_SUCCESS") {
              this.props.cookies.set("user", JSON.stringify(response.data.data), { path: "/" });
              this.props.history.push("/admin");
            }
          }
        })
        .catch((err) => {
          if (err.response) {
            switch (err.response.data.errorCode) {
              case "USER_NOT_FOUND":
                this.setState({ messageFail: "User not found." });
                break;
              case "USER_IS_DISABLED":
                this.setState({ messageFail: "User is disabled." });
                break;
              case "PASSWORD_IS_EMPTY":
                this.setState({ messageFail: "Password is empty." });
                break;
              case "SAME_PASSWORD":
                this.setState({ messageFail: "New password must be different the old one." });
                break;
              default:
                this.setState({ messageFail: "Error to change password." });
            }
          } else {
            this.setState({ messageFail: "Fail to change password." });
          }
          this.setState({ isFailed: true });
        });
    } else if (this.state.user.role === "ROLE_USER") {
      let url = "user/password/first";
      let body = {
        staffCode: `${this.state.user.staffCode}`,
        newPassword: e.target.password.value,
      };
      put(url, body)
        .then((response) => {
          if (response.status === 200) {
            if (response.data.successCode === "CHANGE_PASSWORD_SUCCESS") {
              this.props.cookies.set("user", JSON.stringify(response.data.data), { path: "/" });
              this.props.history.push("/user");
            }
          }
        })
        .catch((err) => {
          if (err.response) {
            switch (err.response.data.errorCode) {
              case "USER_NOT_FOUND":
                this.setState({ messageFail: "User not found." });
                break;
              case "USER_IS_DISABLED":
                this.setState({ messageFail: "User is disabled." });
                break;
              case "PASSWORD_IS_EMPTY":
                this.setState({ messageFail: "Password is empty." });
                break;
              case "SAME_PASSWORD":
                this.setState({ messageFail: "New password must be different the old one." });
                break;
              default:
                this.setState({ messageFail: "Error to change password." });
            }
          } else {
            this.setState({ messageFail: "Fail to change password." });
          }
          this.setState({ isFailed: true });
        });
    }
  }

  handleChange(e, key) {
    this.setState({ [key]: e.target.value }, () => {
      if (this.state.password.trim().length > 0) {
        this.setState({ isDisabled: false });
      } else {
        this.setState({ isDisabled: true });
      }
    });
  }

  componentDidMount() {
    if (this.state.user.role === role.ROLE_ADMIN && this.state.user.firstLogin === true) {
      this.props.history.push(URL.HOME_ADMIN);
    } else if (this.state.user.role === role.ROLE_STAFF && this.state.user.firstLogin === true) {
      this.props.history.push(URL.HOME_USER);
    }
  }

  render() {
    return (
      <div>
        <Navbar businessName="Home" />
        <div id="Login_the_first_time">
          <div id="Login_mph" className="Login">
            <svg className="header_mpi">
              <rect id="header_mpi" rx={10} ry={10} x={0} y={0} width="465.649" height={64}></rect>
            </svg>
            <svg className="background_mpj" viewBox="0 0 465.648 228.959">
              <path
                id="background_mpj"
                d="M 0 0 L 465.6484680175781 0 L 465.6484680175781 222.9495544433594 C 465.6484680175781 226.2684936523438 461.30517578125 228.958984375 455.9474182128906 228.958984375 L 9.701008796691895 228.958984375 C 4.343289375305176 228.958984375 0 226.2684936523438 0 222.9495544433594 L 0 0 Z"
              ></path>
            </svg>
            <Form inline onSubmit={(e) => this.changePassword(e)}>
              <div id="Save_btn_mpk" className="Save_btn">
                <div id="Primary__#CF2338_mpl" className="Save_btn">
                  <Button className=" btn-block" color="danger" disabled={this.state.isDisabled}>
                    Save
                  </Button>
                </div>
              </div>
              <div id="PW_mpn">
                <div id="New_password_">
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <span style={{ color: "rgba(233,66,77,1)" }}>*</span>
                    <Label className="mr-sm-2" for="pw">
                      New password
                    </Label>
                    <Input type="password" name="password" id="pw" onChange={(e) => this.handleChange(e, "password")} />
                  </FormGroup>
                </div>
              </div>
            </Form>
            <div id="username_mpt">
              <div id="This_is_the_first_time_you_log">
                <span>
                  This is the first time you logged in.
                  <br />
                  You have to change your password to continue.
                </span>
              </div>
            </div>
            <div id="Change_password_mpv">
              <span>Change password</span>
            </div>
          </div>
        </div>
        <Modal isOpen={this.state.isFailed}>
          <ModalHeader>Notice</ModalHeader>
          <ModalBody>
            <p style={{ color: "red" }}>{this.state.messageFail}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.setState({ isFailed: false })}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default withCookies(withRouter(index));
