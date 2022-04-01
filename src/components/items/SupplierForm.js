import React from 'react'

export const SupplierForm = ({ itemData, toggleSupplier }) => {
    return (
        <div>
            <h5 className="mt-3">Suppliers</h5>
            {
                itemData.suppliers.map(supplier => (
                    <ul className="list-group list-group-flush"
                        key={supplier.name}>
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
        </div>
    )
}
