import React, { useRef } from 'react'
import { validateUser } from '../../validators/validateUser';
import {postUser} from '../../services/userService/postUser';

export const UserCreation = ({ userData, handleInputChange, setButton, allUsers }) => {

    const isCreated = useRef(false);

    const handleCreate = (e) => {
        e.preventDefault();
        if (validateUser(userData, allUsers)) {
            postUser(userData, isCreated);
            console.log(userData)
        }
        if (isCreated) {
           console.log("Created!");        
           setButton(0);
         }
    }

    return (
        <div>
            <h4>User creation</h4>
            <form className="createuser">
                <div className="creatediv" >
                    <label>User:</label>
                    <br />
                    <input
                        placeholder="Insert username"
                        type="text"
                        onChange={handleInputChange}
                        value={userData.username}
                        name="username" />
                </div>
                <div >
                    <label>Password:</label>
                    <br />
                    <input
                        placeholder="Insert password"
                        type="password"
                        onChange={handleInputChange}
                        value={userData.password}
                        name="password" />
                </div>
                <section className="createsection">
                    <input
                        type="radio"
                        onChange={handleInputChange}
                        value={'MEMBER'}
                        name="role"
                        id="member-role"
                        checked={userData.role === 'MEMBER'} />
                    <label htmlFor="member-role">Member </label>
                    <input
                        type="radio"
                        onChange={handleInputChange}
                        value={'ADMIN'}
                        name="role"
                        id="admin-role"
                        checked={userData.role === 'ADMIN'} />
                    <label htmlFor="admin-role">Admin </label>
                </section>
                <button className="btn btn-primary createbtn"
                    onClick={handleCreate}
                >Create</button>
            </form>
        </div>
    )
}
