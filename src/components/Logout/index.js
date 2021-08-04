import React, { useEffect, useState } from 'react';
import { useCookies } from "react-cookie";
import './Logout.css';

const Logout = () => {
    const [isShowLogout, setIsShowLogout] = useState(true);
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    const handleLogout = () => {
        removeCookie("user");
    }

    const handleCancel = () => {
        setIsShowLogout(isShowLogout => !isShowLogout);
    }

    return (
        <div id="logout" className={`${!isShowLogout ? "show" : ""}`}>
            <div className="logout-header">
                <p>Are you sure?</p>
            </div>
            <div className="logout-body">
                <p>Do you want to log out?</p>
                <div className="button-flex">
                    <button className="logout-btn" onClick={handleLogout}>Log out</button>
                    <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
	    </div>
    )
}

export default Logout;