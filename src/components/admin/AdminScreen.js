import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';
import '../../assets/admin.css';
import { UserCreation } from './UserCreation';
import { useFetchUsers } from '../../hooks/useFetchUsers';
import { ListUsers } from './ListUsers';

export const AdminScreen = () => {
    const userDetails = useContext(UserContext);
    const authorized = userDetails.authorized && userDetails.username === 'admin';
    //if (!authorized) return <Navigate to='/login' />

    const [userData, handleInputChange, reset] = useForm({
        "username": "",
        "password": "",
        "role": "MEMBER"
    });
    const [button, setButton] = useState(0);

    const [allUsers, setAllUsers] = useState();
    const { data: users, loading } = useFetchUsers();

    const usersRef = useRef({});

    useEffect(() => {
        setAllUsers(users);
    })

    const handleCreateBtn = (e) => {
        setButton(1);
    }

    const handleListBtn = (e) => {
        setButton(2);
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
                allUsers = {allUsers}
            />}

            <button className="btn btn-success btnadmin"
            onClick={handleListBtn}
            > List users </button>
            {
                button == 2 && <ListUsers
                allUsers = {allUsers}
                />
            }
        </div>
    )
}
