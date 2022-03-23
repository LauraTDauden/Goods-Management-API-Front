import { useEffect, useState } from "react";
import { getItems } from "../services/getItems";



export const useFetchItems = () => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getItems()
            .then(items => {

                setstate({
                    data: items,
                    loading: false
                })

            })

    }, []);

    return state;
}

