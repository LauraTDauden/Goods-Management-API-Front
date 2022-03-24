import React from 'react';
import '../../assets/toggleButton.css';

export const ToggleState = ({selected, toggle}) => {
    
    return (
        <div className="toggle-container" onClick={toggle}>
            <div className={`dialog-button ${selected ? "" : "disabled"}`}>
                {selected ? "ACTIVE" : "DISCONT"}
            </div>

        </div>
    )
}
