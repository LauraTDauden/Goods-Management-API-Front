import React, { useContext } from 'react'
import { UserContext, UserDispatchContext } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';

export const Login = () => {

    const [loginData, handleInputChange, reset] = useForm({
        "username": "",
        "password": ""
    });

    const userDetails = useContext(UserContext);
    const setUserDetails = useContext(UserDispatchContext);

    const isAuthorized = (res) => {
        if (res === "Authorized") {
            setUserDetails({
                username: loginData.username,
                authorized: true
            })
        }
    }

    const login = (e) => {
        console.log(loginData)
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData),
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                isAuthorized(res);
            });
    }

    const handleSubmit = (e) => {
        //e.preventDefault();
        login(e);
    }

    const handleLogout = (e) => {
        reset();
        setUserDetails({
            username: "",
            authorized: false
        })
    }

    return (
        <div>
            {!userDetails.authorized ? <div className="login">
                <h3>Login</h3>
                <hr />
                <div className="login-c">
                    <label>User:</label>
                    <br />
                    <input
                        placeholder="   Insert your username"
                        type="text"
                        onChange={handleInputChange}
                        value={loginData.username}
                        name="username"
                    />
                    <br />
                </div>
                <div className="login-c">
                    <label>Password:</label>
                    <br />
                    <input
                        placeholder="   Insert your password"
                        type="password"
                        onChange={handleInputChange}
                        value={loginData.password}
                        name="password"
                    />
                    <br />
                </div>
                <button
                    className="btn btn-primary"
                    onClick={handleSubmit}>
                    Login
                        </button>
            </div>
                :
                <div className="welcome">
                    <h3>{`Welcome, ${userDetails.username}`}</h3>
                    <button
                        className="btn btn-primary"
                        onClick={handleLogout}>
                        Logout
                        </button>
                </div>}
        </div>
    )
}
