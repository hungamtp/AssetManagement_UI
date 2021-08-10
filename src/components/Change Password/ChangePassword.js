import React, { Component, useEffect, useState } from 'react'
import Navbar from "../Navbar";
import Menu from "../Menu";
import * as business from "../../constants/Business";
import './ChangePassword.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ButtonToggle } from "reactstrap";
import axios from 'axios';
import { useCookies } from "react-cookie";

const ChangePassword = () => {
	const [user, setUser] = useState(false);
	const [username, setUsername] = useState("");
	const [cookies, setCookie, removeCookie] = useCookies(["user"]);
	const [newPassword, setNewPassword] = useState("");
	const [oldPassword, setOldPassword] = useState("");
	const [isDisabled, setIsDisable] = useState(true);
	
	useEffect(() => {
		//getuser and set username
		setUser(cookies.user);
		setUsername(cookies.user.username);
	}, [])

	useEffect(() => {
		if (newPassword.length > 0 && oldPassword.length > 0)
			setIsDisable(false)
		else setIsDisable(true);
	}, [newPassword, oldPassword])

	const handleChangePassword = () => {
		let Url = "http://localhost:9994/asset-management/user/password/" + username;
		let data = {
			oldPassword, newPassword
		}
		axios.put(Url, data, {
			headers: {
				'Authorization': `${user.type} ${user.token}`
			}
		})
			.then(() => alert("Change Password OK!"))
			.catch(err => console.log(err));
	}

	const handleCancelChangePassword = () => {
		//cancel
	}
	
	return (
		<div id = "Change-password">
			<div id="changepassword-title">
				<p>Change Password</p>
			</div>
			<div id="changepassword-form">
				<form>
				<div className="changepassword-data">
					<label htmlFor="old">Old Password</label>
					<input type="password" name="old" value={oldPassword}
						onChange={({ target }) => setOldPassword(target.value)}/>
				</div>
				<div className="changepassword-data">
					<label htmlFor="new">New Password</label>
					<input type="password" name="new" value={newPassword}
						onChange={({ target }) => setNewPassword(target.value)}/>
				</div>
				</form>
				<div className="changepassword-btn">
					<button className="save-btn" disabled={isDisabled} onClick={handleChangePassword}>SAVE</button>
					<button className="cancel-btn" onClick={handleCancelChangePassword}>CANCEL</button>
				</div>
			</div>
		</div>
	)
}

export default ChangePassword;
