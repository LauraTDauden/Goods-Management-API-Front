import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from "./components/dashboard/Dashboard";
import { UserProvider } from './context/UserContext';
const App = () => {


    return (
        <div>
            <UserProvider>
                <BrowserRouter>
                    <Dashboard />
                </BrowserRouter>
            </UserProvider>
        </div>
    )
}

export default App;