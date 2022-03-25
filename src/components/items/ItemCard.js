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

    const date = `${new Date(creation_date).getDate()}/${new Date(creation_date).getMonth()+1}/${new Date(creation_date).getFullYear()}`;
    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <p className="card-text"><span>Item Code:</span> {code}</p>
                    <p className="card-text"><span>Description: </span>{description}</p>
                    <hr/>
                    <p className="card-text"><span>State:</span> {state}</p>
                    <p className="card-text"><span>Price:</span> {price.toFixed(2)} €</p>
                    <p className="card-text"><span>Creation date: </span>{date}</p>
                    <p className="card-text"><small><span>Creator:</span> {creator}</small></p>
                    <Link to={`/products/${id}`}>
                        More information
                            </Link>
                </div>
            </div>
        </div>

    )
}