import React, { useContext, useEffect, useRef, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router';
import { ItemContext } from '../../context/ItemContext';
import { useForm } from '../../hooks/useForm';
import { getItemById } from '../../services/itemService/getItemById';
import { NewSupplier } from './NewSupplier';
import { NewPrice } from './NewPrice';
import { SupplierForm } from './SupplierForm';
import { PriceForm } from './PriceForm';
import { ItemEditForm } from './ItemEditForm';
import moment from 'moment';
import { putItem } from '../../services/itemService/putItem';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';

import '../../assets/iteminfo.css';

export const ItemEdit = () => {
    const { itemId } = useParams();
    const itemList = useContext(ItemContext);
    const userDetails = useContext(UserContext);

    if (!itemList) return <Navigate to='/products' />
    let item = getItemById(itemId, itemList)


    useEffect(() => {
        let item = getItemById(itemId, itemList)
    }, []);

    if (!item) return <Navigate to='/products' />


    useEffect(() => {
        let item = getItemById(itemId, itemList)
    }, [itemData]);


    const updated = useRef(false);

    const navigate = useNavigate();

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

    //PARA PASAR DE DATE A UNIX TIMESTAMP
    //date = new Date(date).getTime();

    //PARA PASAR DE TIMESTAMP A DATE
    //let date = moment(creation_date).format('L');

    //const date = `${new Date(creation_date).getDate()}/${new Date(creation_date).getMonth() + 1}/${new Date(creation_date).getFullYear()}`;

    const [addSupplier, setAddSupplier] = useState(false);
    const [addPrice, setAddPrice] = useState(false);

    const [formData, handleInputChange, reset] = useForm({
        "item_id": id,
        "item_code": code,
        "description": description,
        "price": price,
        "state": state,
        "creation_date": moment(creation_date).format('YYYY-MM-DD'),
        "creator": {
            "username": creator
        },
        "suppliers":
            suppliers.map(supplier => (
                {
                    "supplier_id": supplier.supplier_id,
                    "name": supplier.name,
                    "country": supplier.country
                }
            ))
        ,
        "price_reductions":
            price_reductions.map(prices => (
                {
                    "priceReduction_id": prices.priceReduction_id,
                    "reduced_price": prices.reduced_price,
                    "start_date": moment(prices.start_date).format('YYYY-MM-DD'),
                    "end_date": moment(prices.end_date).format('YYYY-MM-DD')
                }
            ))
    });

    const [itemData, setItemData] = useState(formData);
    const toggleSupplier = () => {
        setAddSupplier(!addSupplier);
    }
    const togglePrice = () => {
        setAddPrice(!addPrice);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //setItemData({...itemData, "description": formData.description, "price": formData.price, "creation_date": formData.creation_date })
        let updatedItem = { ...itemData, "description": formData.description, "price": formData.price, "creation_date": formData.creation_date };
        console.log(updatedItem);
        putItem(id, updatedItem, updated)
        if (updated) {
            console.log(updatedItem)
            reset();
            console.log("UPDATED!");
            navigate("/products/updated");
        }
    }
    return (
        <>
        {userDetails.authorized ?
            <div className="row mt-5">
                <div className="col-4">
                </div>
                <div>
                    <div className="itemscreen">
                        <ItemEditForm
                            handleInputChange={handleInputChange}
                            formData={formData}
                            itemData={itemData}
                            state={state}
                        />
                        <hr />
                        <SupplierForm
                            itemData={itemData}
                            toggleSupplier={toggleSupplier}
                        />
                        {
                            addSupplier && <NewSupplier
                                itemData={itemData}
                                setItemData={setItemData}
                                setAddSupplier={setAddSupplier}
                            />
                        }
                        <hr />
                        <PriceForm
                            itemData={itemData}
                            togglePrice={togglePrice}
                        />
                        {
                            addPrice && <NewPrice
                                itemData={itemData}
                                setItemData={setItemData}
                                setAddPrice={setAddPrice}
                            />
                        }
                        <hr />
                    </div>
                    <button
                        className="btn btn-primary sendbtn"
                        onClick={handleSubmit}
                    >
                        Save item
                </button>
                </div>
            </div>
            :
            <div>
                <h4>You need to be registered in order to add a new item.</h4>
                <Link to="/login" className="btn btn-primary createlogin">Login</Link>
            </div>}
        </>
    )
}
