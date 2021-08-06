import React, { useState } from 'react';
import './CreateNewUser.css';

const CreateNewUser = () => {
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [gender, setGender] = useState("");
    const [joinedDate, setJoinedDate] = useState("");
    const [role, setRole] = useState("");

    return (
        <div id="create-new-user">
            <div id="create-user-title">
                <span>Create New User</span>
            </div>
            <form id="create-user-form">
                <div className="create-user-data">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname" value={firstname}
                        onChange={({ target }) => setFirstname(target.value)}/>
                </div>
                <div className="create-user-data">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" name="lastname" value={lastname}
                        onChange={({ target }) => setLastname(target.value)}/>
                </div>
                <div className="create-user-data">
                    <label htmlFor="dateOfBirth">Date Of Birth</label>
                    <input type="text" name="dateOfBirth" value={dateOfBirth}
                        onChange={({ target }) => setDateOfBirth(target.value)}/>
                </div>
                <div className="create-user-data">
                    <label htmlFor="gender">Gender</label>
                    <input type="text" name="gender" value={gender}
                        onChange={({ target }) => setGender(target.value)}/>
                </div>
                <div className="create-user-data">
                    <label htmlFor="joinedDate">Joined Date</label>
                    <input type="text" name="joinedDate" value={joinedDate}
                        onChange={({ target }) => setJoinedDate(target.value)}/>
                </div>
                <div className="create-user-data">
                    <label htmlFor="role">Type</label>
                    <input type="text" name="role" value={role}
                        onChange={({ target }) => setRole(target.value)}/>
                </div>
            </form>
        </div>
    )
}

export default CreateNewUser;