import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';
import '../../assets/createitem.css';
import { validateItem } from '../../validators/validateItem';
import { ItemContext } from '../../context/ItemContext';
import { postItem } from '../../services/itemService/postItem';

export const ItemCreation = () => {

    const userDetails = useContext(UserContext);
    const itemList = useContext(ItemContext);

    const [formData, handleInputChange, reset] = useForm({
        "item_code": "",
        "description": "",
        "price": 0.0.toFixed(2),
        "state": "ACTIVE",
        "creation_date": "",
        "creator": {
            "username": userDetails.username
        }
    });

    const [valid, setValid] = useState({
        valid: false,
        code_number: false,
        code_unique: false,
        code: true,
        description: true,
        price: true
    });

    const created = useRef(false);

    let validation;
    const codeError = () => {
        if (!valid.code_number) {
            return "Incorrect code format.";
        } else if (!valid.code_unique) {
            return "The introduced code already belongs to another item.";
        }
    }

    const descError = "A description is required."

    const priceError = "Incorrect price format."

    const validate = () => {
        validation = validateItem(itemList, formData);
        setValid(validation);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validate();
        if (validation.valid) {
            console.log("VALID!");
            console.log(formData);
            postItem(formData, created);
            if (created) {
                reset();
                console.log("CREATED!");
                created.current = false;
            }
        }
    }
    return (
        <div>
            {userDetails.authorized ?
                <div className="itemcreationdiv">
                    <h4>Add new Item</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <p>
                            <label>Item code (*) </label>
                            <input
                                className={!valid.code ? "invalid" : ""}
                                placeholder="Insert item code"
                                type="text"
                                onChange={handleInputChange}
                                value={formData.item_code}
                                name="item_code"
                                required
                            ></input>
                            {!valid.code && <small>{codeError()}</small>}
                        </p>
                        <br />
                        <p>
                            <label className="pdesc">Description (*) </label>
                            <textarea
                                className={!valid.description ? "invalid" : ""}
                                placeholder="Describe the item"
                                type="text"
                                onChange={handleInputChange}
                                value={formData.description}
                                name="description"
                                required
                            ></textarea>
                            {!valid.description && <small>{descError}</small>}
                        </p>
                        <br />
                        <p>
                            <label>Price </label>
                            <input
                                placeholder="Insert item price"
                                type="number"
                                onChange={handleInputChange}
                                value={formData.price}
                                name="price"
                            ></input>
                            {!valid.price && <small>{priceError}</small>}
                        </p>
                        <br />
                        <p>
                            <label>State </label>
                            <input
                                type="radio"
                                id="active"
                                onChange={handleInputChange}
                                value={'ACTIVE'}
                                name="state"
                                checked={formData.state === 'ACTIVE'}
                            ></input>
                            <label className="radio" htmlFor="active">
                                Active
                        </label>
                            <input
                                type="radio"
                                id="discont"
                                onChange={handleInputChange}
                                value={'DISCONTINUED'}
                                name="state"
                                checked={formData.state === 'DISCONTINUED'}
                            ></input>
                            <label className="radio" htmlFor="active">
                                Discontinued
                        </label>
                        </p>
                        <br />
                        <button className="btn btn-primary btncreate"
                            type="submit"
                            onClick={handleSubmit}
                        >New item</button>
                    </form>
                </div> :
                <div>
                    <h4>You need to be registered in order to add a new item.</h4>
                    <Link to="/login" className="btn btn-primary createlogin">Login</Link>
                </div>}
        </div>
    )
}
