import React, { Component, useEffect, useState } from "react";
import "./Login.css";
import { useCookies } from "react-cookie";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
import { post } from "../../httpHelper";
import { withRouter, useHistory } from "react-router-dom";

const Login = (props) => {
  const [cookies, setCookie] = useCookies(["user"]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFailed, setIsFailed] = useState(false);
  let history = useHistory();

  useEffect(() => {
    if (username.length > 0 && password.length > 0) setIsDisabled(false);
    else setIsDisabled(true);
  }, [username, password]);

  const handleLogin = (e) => {
    e.preventDefault();
    let url = "signin";
    let body = {
      username,
      password,
    };
    post(url, body)
      .then((response) => {
        if (response.status === 200) {
          if (response.data.successCode === "USER_LOGIN_SUCCESS") {
            setCookie("user", JSON.stringify(response.data.data), {
              path: "/",
            });
            localStorage.setItem("staffcode", response.data.data.staffCode);
            localStorage.setItem("locationId", response.data.data.idLocation);
            // props.onLogin();
            if (response.data.data.firstLogin === false) {
              history.push("/first");
            }
            if (
              response.data.data.firstLogin === true &&
              response.data.data.role === "ROLE_ADMIN"
            ) {
              history.push("/admin");
            }
            if (
              response.data.data.firstLogin === true &&
              response.data.data.role === "ROLE_USER"
            ) {
              history.push("/user");
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setIsFailed(true);
      });
  };

  return (
    <div id="Login" className="Login">
      <div id="Welcome_to_Online_Asset_Manage">
        <p>Welcome to Online Asset Management</p>
      </div>
      <div id="login-form">
        <form>
          <div className="login-data">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div className="login-data">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
        </form>
        <Button
          className="login-btn"
          disabled={isDisabled}
          onClick={handleLogin}
        >
          Login
        </Button>
      </div>
      <Modal isOpen={isFailed}>
        <ModalHeader>Notice</ModalHeader>
        <ModalBody>
          <p style={{ color: "red" }}>
            Username or Password is incorrect. Please try again.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setIsFailed(false)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default withRouter(Login);
