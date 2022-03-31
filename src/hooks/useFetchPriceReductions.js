import { useEffect, useState } from "react";
import { getAllItemReducedPrices } from "../services/supplierService/getAllItemReducedPrices";

export const useFetchPriceReductions = () => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getAllItemReducedPrices()
            .then(suppliers => {

                setstate({
                    data: suppliers,
                    loading: false
                })
            })
    }, []);

    return state;
}
