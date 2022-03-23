import { createContext, useState } from 'react'

const UserContext = createContext();
const UserDispatchContext = createContext();

const UserProvider = ({children}) => {
    const [userDetails, setUserDetails] = useState({
        username: "",
        authorized: false
    });
return (
    <UserContext.Provider value = {userDetails}>
        <UserDispatchContext.Provider value = {setUserDetails}>
            {children}
        </UserDispatchContext.Provider>
    </UserContext.Provider>
);
}
export {UserProvider, UserContext, UserDispatchContext};


