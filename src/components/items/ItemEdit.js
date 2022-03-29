import React, { useContext, useEffect, useRef, useState } from 'react'
import { Navigate, useParams } from 'react-router';
import { ItemContext } from '../../context/ItemContext';
import { useForm } from '../../hooks/useForm';
import { getItemById } from '../../services/itemService/getItemById';
import '../../assets/iteminfo.css';
import { NewSupplier } from './NewSupplier';
import { NewPrice } from './NewPrice';

export const ItemEdit = () => {
    const { itemId } = useParams();
    const itemList = useContext(ItemContext);

    const currentItem = useRef({});


    if (!itemList) return <Navigate to='/products' />
    let item = getItemById(itemId, itemList)
    useEffect(() => {

        item = getItemById(itemId, itemList)
        currentItem.current = item;
    }, [formData]);
    if (!item) return <Navigate to='/products' />

    const {
        id,
        code,
        description,
        price,
        state,
        suppliers,
        price_reductions,
        creation_date,
        creator
    } = item;

    //currentItem.current = item;

    const date = `${new Date(creation_date).getDate()}/${new Date(creation_date).getMonth() + 1}/${new Date(creation_date).getFullYear()}`;

    const [formData, handleInputChange, reset] = useForm({
        "item_code": code,
        "description": description,
        "price": price.toFixed(2),
        "state": state,
        "creation_date": date,
        "creator": {
            "username": creator
        },
        "suppliers": 
            suppliers.map(supplier => (
                {
                    "name": supplier.name,
                    "country": supplier.country
                }
            ))
        ,
        "price_reductions": 
            price_reductions.map(prices => (
                {
                    "reduced_price": prices.reduced_price,
                    "start_date": `${new Date(prices.start_date).getDate()}/${new Date(prices.start_date).getMonth() + 1}/${new Date(prices.start_date).getFullYear()}`,
                    "end_date": `${new Date(prices.end_date).getDate()}/${new Date(prices.end_date).getMonth() + 1}/${new Date(prices.end_date).getFullYear()}`
                }
            ))
        
    });



    const [addSupplier, setAddSupplier] = useState(false);
    const [addPrice, setAddPrice] = useState(false);

    const toggleSupplier = () => {
        setAddSupplier(!addSupplier);
    }

    const togglePrice = () => {
        setAddPrice(!addPrice);
    }

    const handleSubmit = (e) => {
        console.log("Editado!")
    }
    return (
        <div className="row mt-5">
            <div className="col-4">
            </div>
            <div>
                <div className="itemscreen">
                    <h3>Edit item information</h3>
                    <ul className="list-group list-group-flush topform">
                        <li className="list-group-item"><b>Code: </b> {code}</li>
                        <li className="list-group-item"><b className="editdesclabel">Description: </b>
                            <input
                                className="editinput"
                                type="text"
                                onChange={handleInputChange}
                                value={formData.description}
                                name="description"
                            ></input></li>
                        <li className="list-group-item"><b className="editpricelabel">Price: </b>
                            <input
                                className="editinput"
                                type="text"
                                onChange={handleInputChange}
                                value={formData.price}
                                name="price"
                            ></input></li>
                        <li className="list-group-item"><b>State: </b> {state} <button className="btn btn-danger deactbtn">Deactivate</button></li>
                        <li className="list-group-item"><b>Creation date: </b>
                            <input
                                className="editinput"
                                type="text"
                                onChange={handleInputChange}
                                value={formData.creation_date}
                                name="creation_date"
                            ></input></li>

                        <li className="list-group-item"><b>Creator: </b> {creator}</li>
                    </ul>
                    <hr/>
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
                    <button
                        className="btn btn-success addbtn"
                        onClick={toggleSupplier}
                    >+ Add supplier</button>
                    
                    {
                        addSupplier && <NewSupplier
                            formData={formData}
                            handleInputChange={handleInputChange}
                        />
                    }
                    <hr/>
                    <h5 className="mt-3">Price reductions</h5>
                    {
                        price_reductions.map(prices =>

                            <ul className="list-group list-group-flush"
                                key={prices.priceReduction_id}>
                                <li className="list-group-item"><b>Reduced price:</b> {prices.reduced_price.toFixed(2) + "€"}</li>
                                <li className="list-group-item"><b>Start date:</b> {`${new Date(prices.start_date).getDate()}/${new Date(prices.start_date).getMonth() + 1}/${new Date(prices.start_date).getFullYear()}`}</li>
                                <li className="list-group-item"><b>End date:</b> {`${new Date(prices.start_date).getDate()}/${new Date(prices.start_date).getMonth() + 1}/${new Date(prices.start_date).getFullYear()}`}</li>
                                <p></p>
                            </ul>
                        )
                    }
                    <button
                        className="btn btn-success addbtn"
                        onClick={togglePrice}
                    >+ Add price reduction</button>
                    {
                        addPrice && <NewPrice
                            formData={formData}
                            handleInputChange={handleInputChange}
                        />
                    }
                    <hr/>
                </div>
                <button
                    className="btn btn-primary sendbtn"
                    onClick={handleSubmit}
                >
                    Save item
                </button>
            </div>
        </div>
    )
}
