import React from 'react';
import '../../assets/toggleButton.css';

export const ToggleAddSupplier = ({selected, toggle}) => {
    
    return (
        <div className="toggle-container supplier" onClick={toggle}>
            <div className={`dialog-button ${selected ? "" : "newSupplier"}`}>
                {selected ? "Existing supplier" : "New supplier"}
            </div>

        </div>
    )
}
