import React from 'react';
import './Logout.css';

const Logout = () => {
    return (
        <div id="logout">
            <div className="logout-header">
                <p>Are you sure?</p>
            </div>
            <div className="logout-body">
                <p>Do you want to log out?</p>
                <div className="button-flex">
                    <button className="logout-btn">Log out</button>
                    <button className="cancel-btn">Cancel</button>
                </div>
            </div>
	    </div>
    )
}

export default Logout;