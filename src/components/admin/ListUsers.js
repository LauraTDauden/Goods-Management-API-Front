import React, { useEffect, useState } from 'react'
import { deleteUser } from '../../services/userService/deleteUser'

export const ListUsers = ({ allUsers, }) => {

    const [users, setUsers] = useState(allUsers);

    const handleDeleteBtn = (id) => {
        deleteUser(id);
        setUsers(allUsers);
    }
    return (
        <div>
            <h4>Users</h4>
            <ol>
                {
                    allUsers.map(user => (
                        <li
                            key={user.user_id}
                        ><p><b>Username: </b>{user.username}</p>
                            <p><b>Role: </b>{user.role}</p>
                            <button className="btn btn-danger btnadmindelete"
                                onClick={() => handleDeleteBtn(user.user_id)}
                            > Delete user </button>
                            <hr/>                        
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}
