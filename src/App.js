import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from "./components/dashboard/Dashboard";
import { ItemProvider } from './context/ItemContext';
import { UserProvider } from './context/UserContext';
const App = () => {


    return (
        <div>
            <UserProvider>
                <ItemProvider>
                    <BrowserRouter>
                        <Dashboard />
                    </BrowserRouter>
                </ItemProvider>
            </UserProvider>
        </div>
    )
}

export default App;