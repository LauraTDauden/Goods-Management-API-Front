import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/iteminfo.css';

export const ItemCard = ({
    id,
    code,
    description,
    price,
    state,
    suppliers,
    price_reductions,
    creation_date,
    creator
}) => {

    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-text">Item Code: {code}</h5>
                    <p className="card-text">Description: {description}</p>
                    <hr/>
                    <p className="card-text">State: {state}</p>
                    <p className="card-text">Price: {price.toFixed(2)} €</p>
                    <p className="card-text">{creation_date}</p>
                    <p className="card-text">{creator.username}</p>
                    <Link to={`/products/${id}`}>
                        More information
                            </Link>
                </div>
            </div>
        </div>

    )
}