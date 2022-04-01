import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

export const NavBar = () => {

    const userDetails = useContext(UserContext);
    const routesList = [
        {
            path: '/',
            title: 'Home',
            key: 'Home'
        },
        {
            path: '/login',
            title: 'Login',
            key: 'Login'
        },
        {
            path: '/products',
            title: 'Products',
            key: 'Products'
        },
    ]

    return (
        <nav>
            {
                routesList.map(route => (
                    <NavLink className="nav"
                        to={route.path}
                        key={route.key}
                    >{route.title}</NavLink>
                )
                )
            }
            {userDetails.authorized &&
                <NavLink
                    className = "nav user"
                    to = {"/admin"}
                    key = "login"
                ><p>{userDetails.username}</p></NavLink>}
        </nav>
    )
}
