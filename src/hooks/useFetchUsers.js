import { useEffect, useState } from "react";
import { gettAllUsers } from "../services/userService/getAllUsers";


export const useFetchUsers = () => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        gettAllUsers()
            .then(users => {
                setstate({
                    data: users,
                    loading: false
                })
            })
    }, []);

    return state;
}

