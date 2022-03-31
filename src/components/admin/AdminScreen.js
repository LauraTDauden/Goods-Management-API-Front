import React, { useContext, useEffect, useRef, useState } from 'react'
import { Navigate } from 'react-router';
import { UserContext } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';
import '../../assets/admin.css';
import { postUser } from '../../services/userService/postUser';
import { UserCreation } from './UserCreation';

export const AdminScreen = () => {
    const userDetails = useContext(UserContext);
    const authorized = userDetails.authorized && userDetails.username === 'admin';
    //if (!authorized) return <Navigate to='/login' />

    const created = useRef(false);
    const [userData, handleInputChange, reset] = useForm({
        "username": "",
        "password": "",
        "role": "MEMBER"
    });
    const [button, setButton] = useState(0);

    const handleCreateBtn = (e) => {
        setButton(1);
    }

    return (
        <div>
            <h4>Admin Screen</h4>

            <button className="btn btn-success btnadmin"
                onClick={handleCreateBtn}
            > Create new user </button>
            {button == 1 && <UserCreation
                userData={userData}
                handleInputChange={handleInputChange}
                setButton={setButton}
            />}

            <button className="btn btn-danger btnadmin"> Delete user </button>

            <button className="btn btn-success btnadmin"> List users </button>
        </div>
    )
}
