import React, { useContext} from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { ItemContext } from '../../context/ItemContext';
import { getItemById } from '../../services/itemService/getItemById';
import '../../assets/iteminfo.css';

export const ItemScreen = () => {

    const { itemId } = useParams();
    const itemList = useContext(ItemContext);

 const navigate = useNavigate();
    const handleReturn = () => {
        navigate(-1);
    }

    if (!itemList) return <Navigate to='/products' />
    const item = getItemById(itemId, itemList)

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

    const date = `${new Date(creation_date).getDate()}/${new Date(creation_date).getMonth()+1}/${new Date(creation_date).getFullYear()}`;

    return (
        <div className="row mt-5">
            <div className="col-4">
            </div>
            <div>
                <div className= "itemscreen">
                <h3>Item information</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Code: </b> {code}</li>
                    <li className="list-group-item"><b>Description: </b> {description}</li>
                    <li className="list-group-item"><b>Price: </b> {price}</li>
                    <li className="list-group-item"><b>State: </b> {state}</li>
                    <li className="list-group-item"><b>Creation date: </b> {date}</li>
                    <li className="list-group-item"><b>Creator: </b> {creator}</li>
                </ul>
                <h5 className="mt-3">Suppliers</h5>
                {
                    suppliers.map(supplier => (
                        <ul className="list-group list-group-flush"
                            key={supplier.supplier_id}>
                            <li className="list-group-item"><b>Name:</b> {supplier.name}</li>
                            <li className="list-group-item"><b>Country:</b> {supplier.country}</li>
                            <p></p>
                        </ul>
                    ))
                }
                <h5 className="mt-3">Price reductions</h5>
                {                  
                    price_reductions.map(prices => 
                                           
                        <ul className="list-group list-group-flush"
                            key={prices.priceReduction_id}>
                            <li className="list-group-item"><b>Reduced price:</b> {prices.reduced_price.toFixed(2) + "€"}</li>
                            <li className="list-group-item"><b>Start date:</b> {`${new Date(prices.start_date).getDate()}/${new Date(prices.start_date).getMonth()+1}/${new Date(prices.start_date).getFullYear()}`}</li>
                            <li className="list-group-item"><b>End date:</b> {`${new Date(prices.start_date).getDate()}/${new Date(prices.start_date).getMonth()+1}/${new Date(prices.start_date).getFullYear()}`}</li>
                            <p></p>
                        </ul>
                    )
                }
                </div>
                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}