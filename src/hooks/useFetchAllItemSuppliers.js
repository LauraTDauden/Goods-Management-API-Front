import { useEffect, useState } from "react";
import { getAllItemSuppliers } from "../services/supplierService/getAllItemSuppliers";

export const useFetchAllItemSuppliers = () => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getAllItemSuppliers()
            .then(suppliers => {

                setstate({
                    data: suppliers,
                    loading: false
                })
            })
    }, []);

    return state;
}

