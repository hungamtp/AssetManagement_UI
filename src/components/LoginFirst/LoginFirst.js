import React, { Component } from 'react'
import Navbar from "../Navbar";
import Menu from "../Menu";
import './loginfirst.css'
import { ButtonToggle } from "reactstrap";
import * as business from "../../constants/Business";

import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

export default class LoginFirst extends Component {
    render() {
        return (
            <div>
                <Navbar businessName="Home" />
                <Menu business={business.HOME} />
                <div id="Login_the_first_time">
                    <div id="Login_mph" className="Login">
                        <svg className="header_mpi">
                            <rect id="header_mpi" rx={10} ry={10} x={0} y={0} width="465.649" height={64}>
                            </rect>
                        </svg>
                        <svg className="background_mpj" viewBox="0 0 465.648 228.959">
                            <path id="background_mpj" d="M 0 0 L 465.6484680175781 0 L 465.6484680175781 222.9495544433594 C 465.6484680175781 226.2684936523438 461.30517578125 228.958984375 455.9474182128906 228.958984375 L 9.701008796691895 228.958984375 C 4.343289375305176 228.958984375 0 226.2684936523438 0 222.9495544433594 L 0 0 Z">
                            </path>
                        </svg>
                        <div onclick="application.goToTargetView(event)" id="Save_btn_mpk" className="Save_btn">
                            <div id="Primary__#CF2338_mpl" className="Save_btn" onclick="application.goToTargetView(event)">
					<ButtonToggle className=" btn-block" color="danger"  > Save </ButtonToggle>
					</div>
                        </div>
                        <div id="PW_mpn">
                            <div id="New_password_">
                                <Form inline>
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0"><span style={{ color: 'rgba(233,66,77,1)' }}>*</span>
                                        <Label className="mr-sm-2">New password</Label>
                                        <Input type="password"  />
                                    </FormGroup>
                                </Form>
                            </div>
                        </div>
                        <div id="username_mpt">
                            <div id="This_is_the_first_time_you_log">
                                <span>This is the first time you logged in.<br />You have to change your password to continue.</span>
                            </div>
                        </div>
                        <div id="Change_password_mpv">
                            <span>Change password</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};