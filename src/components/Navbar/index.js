import React, { Component, useEffect, useState } from "react";
import "./Navbar.css";
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import Logout from "../Logout";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

const Navbar = (props) => {
  const [isShowLogout, setIsShowLogout] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [user, setUser] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  let history = useHistory();

  useEffect(() => {
    setUser(cookies.user);
    if (cookies.user.firstLogin)
      setDisabled(false)
    else setDisabled(true);
  }, [])

  const handleLogoutShow = () => {
    setIsShowLogout(isShowLogout => !isShowLogout);
  }

  const handleChangpassword = () => {
    history.push("/changepassword")
  }

  return (
    <div id="narbav_ecg">
      <svg className="Rectangle_329_ech">
        <rect id="Rectangle_329_ech" rx="0" ry="0" x="0" y="0" width="1920" height="72"></rect>
      </svg>
      <div id="Manage_Assignment__Create_New__eci">
        {/* <span>Manage Assignment {`>`} Create New Assignment</span> */}
        <span>{props.businessName}</span>
      </div>
      <UncontrolledButtonDropdown className="dropdown">
        <DropdownToggle caret color="#CF2338">
          {user.username}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem onClick={handleLogoutShow}>Log Out</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={handleChangpassword} disabled={disabled}>Change Password</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
      <Logout isShowLogout={isShowLogout} handleLogoutShow={handleLogoutShow}/>
    </div>
  );
}

export default Navbar;
