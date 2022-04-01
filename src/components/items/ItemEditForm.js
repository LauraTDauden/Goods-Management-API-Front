import React, { useContext, useRef, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useForm } from '../../hooks/useForm';
import { deactivateItem } from '../../services/itemService/deactivateItem';
import { useNavigate } from 'react-router';
import '../../assets/iteminfo.css';

export const ItemEditForm = ({ handleInputChange, formData, itemData, state }) => {

    const deactivated = useRef(false);
    const userDetails = useContext(UserContext);
    const [activeReason, setActiveReason] = useState(false);
    const [reasonData, handleReason] = useForm({
        "reason": ""
    });

    const toggleDeact = () => {
        setActiveReason(!activeReason);
    }
    const deactivate = () => {
        if (reasonData.reason != "") {
            deactivateItem(itemData.item_id, reasonData, userDetails.username, deactivated);
            if (deactivated) {
                handleReturn();
            }
        } else {
            console.log("Must specify a reason!")
        }
    }

    const navigate = useNavigate();
    const handleReturn = () => {
        navigate("/products/deactivated");
    }
    return (
        <div>
            <h3>Edit item information</h3>
            <ul className="list-group list-group-flush topform">
                <li className="list-group-item"><b>Code: </b> {itemData.item_code}</li>
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
                <li className="list-group-item"><b>State: </b> {state}

                    <button
                        className="btn btn-danger deactbtn"
                        onClick={toggleDeact}
                    > Deactivate</button>
                    {
                        activeReason &&
                        <>
                            <label className="reason">Specify reason for deactivation: </label>
                            <input
                                type="text"
                                onChange={handleReason}
                                value={reasonData.reason}
                                name="reason"
                            ></input>
                            <button
                                className="btn btn-danger deactbtn"
                                onClick={deactivate}
                            > OK </button>
                        </>
                    }
                </li>
                <li className="list-group-item"><b>Creation date: </b>
                    <input
                        className="editinput"
                        type="date"
                        onChange={handleInputChange}
                        value={formData.creation_date}
                        name="creation_date"
                    ></input></li>
                <li className="list-group-item"><b>Creator: </b> {itemData.creator.username}</li>
            </ul>
        </div>
    )
}
