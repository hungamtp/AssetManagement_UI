import React, { Component, useEffect, useState } from 'react'
import Navbar from "../Navbar";
import Menu from "../Menu";
import * as business from "../../constants/Business";
import './ChangePassword.css'
import { useHistory, useParams } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { put } from '../../httpHelper';

const ChangePassword = () => {
	const [user, setUser] = useState(false);
	const [username, setUsername] = useState("");
	const [cookies, setCookie, removeCookie] = useCookies(["user"]);
	const [newPassword, setNewPassword] = useState("");
	const [oldPassword, setOldPassword] = useState("");
	const [isDisabled, setIsDisable] = useState(true);
	
	let history = useHistory();

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
		let Url = "admin/password/" + username;	
		let data = {
			oldPassword, newPassword
		}
		put(Url, data)
		.then(() => alert("Change Password Successfull!"))
		.catch(err => console.log(err));
		history.push("/admin");			
	}
	const handleUserChangePassword = () => {
		let Url = "user/password/" + username;
		let data = {
			oldPassword, newPassword
		}
		put(Url, data)
		.then(() => alert("Change Password Successfull!"))
		.catch(err => console.log(err));			
	}

	const handleCancelChangePassword = () => {
		//cancel
		history.push("/admin");
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
					<button className="save-btn" disabled={isDisabled} onClick={handleUserChangePassword} onClick={handleChangePassword}>SAVE</button>
					<button className="cancel-btn" onClick={handleCancelChangePassword}>CANCEL</button>
				</div>
			</div>
		</div>
	)
}

export default ChangePassword;
