import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { ItemContext } from '../../context/ItemContext';

export const ItemScreen = () => {

    const { itemId } = useParams();

    const itemList = useContext(ItemContext);

    //const [item, setitem] = useState(); 
 
 const navigate = useNavigate();
    const handleReturn = () => {
        navigate(-1);
    }
    let item;

useEffect(() => {
    fetch(`http://localhost:8080/items/${itemId}`, {
        method: 'GET',
    }).then(res => res.json())
        .then(data=> {
            item = data;
        });

}, [])

    if (!item) return <Navigate to='/products' />

    const {
        code,
        description,
        price,
        state,
        suppliers,
        price_reductions,
        creation_date,
        creator
    } = item;

    return (
        <div className="row mt-5">
            <div className="col-4">
            </div>
            <div className="col-8">
                <h3>Item information</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Code: </b> {code}</li>
                    <li className="list-group-item"><b>Description: </b> {description}</li>
                    <li className="list-group-item"><b>Price: </b> {price}</li>
                    <li className="list-group-item"><b>State: </b> {state}</li>
                    <li className="list-group-item"><b>Creation date: </b> {creation_date}</li>
                    <li className="list-group-item"><b>Creator: </b> {creator}</li>
                </ul>
                <h5 className="mt-3">Suppliers</h5>
                {
                    suppliers.map(supplier => (
                        <div
                            key={supplier.supplier_id}>
                            <p>Name: {supplier.name}</p>
                            <p>Name: {supplier.country}</p>
                        </div>

                    ))
                }

                <h5 className="mt-3">Price reductions</h5>
                {
                    price_reductions.map(prices => 
                        <div
                            key={prices.priceReduction_id}>
                            <p>Reduced prices: {prices.reduced_price}</p>
                            <p>Start date: {prices.start_date}</p>
                            <p>End date: {prices.end_date}</p>
                        </div>

                    )
                }
                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}

                >
                    Regresar
                </button>

            </div>

        </div>
    )
}