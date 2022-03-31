import React, { useEffect, useState } from 'react'
import { useFetchSuppliers } from '../../hooks/useFetchSuppliers';
import { ToggleAddSupplier } from '../utils/ToggleAddSupplier';
import { useForm } from '../../hooks/useForm';
import { useGetSupplierByName } from '../../services/supplierService/useGetSupplierByName';
import '../../assets/iteminfo.css';
import { validateSupplier } from '../../validators/validateSupplier';

export const NewSupplier = ({ itemData, setItemData, setAddSupplier }) => {

    const { data: suppliers } = useFetchSuppliers();

    //true = existing supplier // false = new supplier
    const [selected, setSelected] = useState(true);

    const [SupplierData, handleSupplierChange, reset] = useForm({
        "supplier_id": 0,
        "name": "",
        "country": ""
    })
    const [selectedSupplier, setSelectedSupplier] = useState("none");

    const toggle = () => {
        setSelected(!selected);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newAssociated = validate();
        if (newAssociated != false) {
            setItemData({ ...itemData }, itemData.suppliers.push(newAssociated));
            reset();
            setAddSupplier(false);
        }
    }

    const handleOption = (e) => {
        setSelectedSupplier(e.target.value);
    }


    //VALIDATIONS
    const verifyOldSupplier = () => {
        let found = false;
        let sup = itemData.suppliers
        sup.map(supplier => {
            if (supplier.name.toLowerCase() == selectedSupplier.toLowerCase()) {
                found = true;
            }
        })
        return found;
    }
    const verifyNewSupplier = () => {
        let found = false;
        let sup = itemData.suppliers
        sup.map(supplier => {
            if (supplier.name.toLowerCase() == SupplierData.name.toLowerCase()) {
                found = true;
            }
        })
        return found;
    }

    const validate = () => {

        if ((selected && verifyOldSupplier()) || (!selected && verifyNewSupplier())) {
            console.log("That supplier is already associated to the item.");
            return false;
        }
        if (selected) {
            console.log(suppliers)
            return useGetSupplierByName(selectedSupplier, suppliers);
        } else if (!selected) {
            if (!validateSupplier(SupplierData)) {
                return "Incomplete supplier data"
            }
            return SupplierData;
        }
    }

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
                className="supplierform"
                onSubmit={handleSubmit}>
                {selected &&
                    <div>
                        <select
                            onChange={handleOption}
                            value={selectedSupplier}
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
                    onClick={(e) => handleSubmit(e)}
                >Add</button>
            </form>
        </div>
    )
}
