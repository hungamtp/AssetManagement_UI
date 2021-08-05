import React, { Component } from 'react'
import Navbar from "../Navbar";
import Menu from "../Menu";
import * as business from "../../constants/Business";
import './Changepw.css'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export default class ChangePassword extends Component {
    render() {
        return (
            <div>
                <Navbar businessName="Home"/>
                <Menu business={business.HOME}/>
                <div id="change_pw_lh" class="change_pw">
		<svg class="header_lj">
			<rect id="header_lj" rx="10" ry="10" x="0" y="0" width="446.649" height="64">
			</rect>
		</svg>
		<svg class="background_lj" viewBox="0 0 446.649 228.959">
			<path id="background_lj" d="M 0 0 L 446.648681640625 0 L 446.648681640625 222.9495544433594 C 446.648681640625 226.2684936523438 442.4826049804688 228.958984375 437.3434753417969 228.958984375 L 9.305180549621582 228.958984375 C 4.166070938110352 228.958984375 0 226.2684936523438 0 222.9495544433594 L 0 0 Z">
			</path>
		</svg>
		<div id="Save_btn_lk" class="Save_btn">
			<svg class="Primary__007BFF_ll" viewBox="0 0 68 37">
				<path id="Primary__007BFF_ll" d="M 5 0 L 63 0 C 65.76142120361328 0 68 2.238576173782349 68 5 L 68 32 C 68 34.76142501831055 65.76142120361328 37 63 37 L 5 37 C 2.238576173782349 37 0 34.76142501831055 0 32 L 0 5 C 0 2.238576173782349 2.238576173782349 0 5 0 Z">
				</path>
			</svg>
			<div id="Save_lm">
				<span>Save</span>
			</div>
		</div>
		<div onclick="application.goToTargetView(event)" id="Cancel_btn_ln" class="Cancel_btn">
			<svg class="Secondary__6C757D_lo">
				<rect id="Secondary__6C757D_lo" rx="5" ry="5" x="0" y="0" width="82" height="37">
				</rect>
			</svg>
			<div id="Cancel_lp">
				<span>Cancel</span>
			</div>
		</div>
		<div id="PW">
			<div id="New_password">
				<span>New password</span>
			</div>
			<svg class="Rectangle_330_ls">
				<rect id="Rectangle_330_ls" rx="5" ry="5" x="0" y="0" width="219" height="35">
				</rect>
			</svg>
			<div id="eye-fill">
				<svg class="Path_24" viewBox="5.5 5.5 5 5">
					<path id="Path_24" d="M 10.5 8 C 10.50000095367432 9.380711555480957 9.380712509155273 10.5 8.000000953674316 10.5 C 6.619288921356201 10.5 5.500000953674316 9.380711555480957 5.500000953674316 8 C 5.500000953674316 6.619287967681885 6.619289398193359 5.5 8.000000953674316 5.5 C 9.380712509155273 5.5 10.50000095367432 6.619288444519043 10.50000095367432 8 Z">
					</path>
				</svg>
				<svg class="Path_25" viewBox="0 2.5 16 11">
					<path id="Path_25" d="M 0 8 C 0 8 3 2.5 8 2.5 C 13 2.5 16 8 16 8 C 16 8 13 13.5 8 13.5 C 3 13.5 0 8 0 8 Z M 8 11.5 C 9.93299674987793 11.5 11.5 9.93299674987793 11.5 8 C 11.5 6.06700325012207 9.93299674987793 4.5 8 4.5 C 6.06700325012207 4.5 4.5 6.06700325012207 4.5 8 C 4.5 9.93299674987793 6.06700325012207 11.5 8 11.5 Z">
					</path>
				</svg>
			</div>
		</div>
		<div id="PW_lw">
			<div id="Old_password">
				<span>Old password</span>
			</div>
			<svg class="Rectangle_330_ly">
				<rect id="Rectangle_330_ly" rx="5" ry="5" x="0" y="0" width="219" height="35">
				</rect>
			</svg>
			<div id="eye-fill_lz">
				<svg class="Path_24_l" viewBox="5.5 5.5 5 5">
					<path id="Path_24_l" d="M 10.5 8 C 10.50000095367432 9.380711555480957 9.380712509155273 10.5 8.000000953674316 10.5 C 6.619288921356201 10.5 5.500000953674316 9.380711555480957 5.500000953674316 8 C 5.500000953674316 6.619287967681885 6.619289398193359 5.5 8.000000953674316 5.5 C 9.380712509155273 5.5 10.50000095367432 6.619288444519043 10.50000095367432 8 Z">
					</path>
				</svg>
				<svg class="Path_25_l" viewBox="0 2.5 16 11">
					<path id="Path_25_l" d="M 0 8 C 0 8 3 2.5 8 2.5 C 13 2.5 16 8 16 8 C 16 8 13 13.5 8 13.5 C 3 13.5 0 8 0 8 Z M 8 11.5 C 9.93299674987793 11.5 11.5 9.93299674987793 11.5 8 C 11.5 6.06700325012207 9.93299674987793 4.5 8 4.5 C 6.06700325012207 4.5 4.5 6.06700325012207 4.5 8 C 4.5 9.93299674987793 6.06700325012207 11.5 8 11.5 Z">
					</path>
				</svg>
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
