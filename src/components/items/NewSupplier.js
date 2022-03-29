import React, { useEffect, useState } from 'react'
import { useFetchSuppliers } from '../../hooks/useFetchSuppliers';
import '../../assets/iteminfo.css';
import { ToggleAddSupplier } from '../utils/ToggleAddSupplier';
import { useForm } from '../../hooks/useForm';

export const NewSupplier = ({ formData }, { handleInputChange }) => {

    const { data: suppliers, loading } = useFetchSuppliers();

    const [selected, setSelected] = useState(true);

    const [SupplierData, handleSupplierChange, reset] = useForm({
        "name": "",
        "country": ""
    })


    const toggle = () => {
        setSelected(!selected);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedSupplier)
        console.log(SupplierData)

    }

    const handleOption = (e) => {
        setSelectedSupplier(e.target.value);
    }

    const [selectedSupplier, setSelectedSupplier] = useState("none");
    return (
        <div>
            <h4>Associate supplier</h4>
            <div className="top-container">
                <ToggleAddSupplier
                    selected={selected}
                    toggle={toggle}
                />
            </div>
            <form 
            className = "supplierform"
            onSubmit={handleSubmit}>
                {selected &&
                    <div>
                        <select
                        onChange = {handleOption}
                        value = {selectedSupplier}
                        >
                            <option default value="none">Associate existing supplier</option>
                            {
                                suppliers.map(supplier => (
                                    <option
                                        key={supplier.name}
                                        value={supplier.name}                                      
                                        > 
                                        {supplier.name}
                                    </option>
                                ))
                            }
                        </select>
                        <br />
                    </div>

                }

                {!selected &&
                    <div>
                        <p>
                            <label className="supplierFormName">Name</label>
                            <input
                                type="text"
                                onChange={handleSupplierChange}
                                value={SupplierData.name}
                                name="name"
                                required
                            ></input>
                        </p>
                        <br />
                        <p>
                            <label>Country</label>
                            <input
                                type="text"
                                onChange={handleSupplierChange}
                                value={SupplierData.country}
                                name="country"
                                required
                            ></input>
                        </p>
                        <br />
                    </div>}

                <button className="btn btn-primary btncreate"
                    type="submit"
                    onClick={(e) =>handleSubmit(e)}
                >Add</button>
            </form>
        </div>
    )
}
