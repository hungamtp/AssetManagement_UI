import React, { Component } from 'react'
import Navbar from "../Navbar";
import Menu from "../Menu";
import * as business from "../../constants/Business";
import './Changepw.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ButtonToggle } from "reactstrap";
export default class ChangePassword extends Component {
	render() {
		return (
			<div>
				<Navbar businessName="Home" />
				<Menu business={business.HOME} />
				<div id="change_pw_lh" className="change_pw">
					<svg className="header_lj">
						<rect id="header_lj" rx="10" ry="10" x="0" y="0" width="446.649" height="64">
						</rect>
					</svg>
					<svg className="background_lj" viewBox="0 0 446.649 228.959">
						<path id="background_lj" d="M 0 0 L 446.648681640625 0 L 446.648681640625 222.9495544433594 C 446.648681640625 226.2684936523438 442.4826049804688 228.958984375 437.3434753417969 228.958984375 L 9.305180549621582 228.958984375 C 4.166070938110352 228.958984375 0 226.2684936523438 0 222.9495544433594 L 0 0 Z">
						</path>
					</svg>
					<div id="Save_btn_lk" className="Save_btn" onclick="application.goToTargetView(event)">
					<ButtonToggle className=" btn-block" color="danger" > Save </ButtonToggle>
					</div>
					<div onclick="application.goToTargetView(event)" id="Cancel_btn_ln" className="Cancel_btn">
					<Button outline color="secondary">Cancel</Button>
					</div>
					<div id="PW">
						<div id="New_password">
							<Form inline>
								<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
									<Label className="mr-sm-2"> <b>Old password  : </b></Label>
									<Input type="password"  placeholder="Old password" />
								</FormGroup>
							</Form>
						</div>
					</div>
					<div id="PW_lw">
						<div id="Old_password">
							<Form inline>
								<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
									<Label className="mr-sm-2"><b>New password:</b></Label>
									<Input type="password"  placeholder="New password" />
								</FormGroup>
							</Form>
						</div>
					</div>
					<div id="Change_password_l">
						<span>Change password</span>
					</div>
				</div>

			</div>
		)
	}
}
