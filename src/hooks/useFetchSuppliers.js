import { useEffect, useState } from "react";
import { getSuppliers } from "../services/supplierService/getSuppliers";

export const useFetchSuppliers = () => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getSuppliers()
            .then(suppliers => {

                setstate({
                    data: suppliers,
                    loading: false
                })
            })
    }, []);

    return state;
}

