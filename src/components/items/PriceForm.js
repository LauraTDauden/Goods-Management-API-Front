import React from 'react'

export const PriceForm = ({itemData, togglePrice}) => {
    return (
        <div>
            <h5 className="mt-3">Price reductions</h5>
            {
                itemData.price_reductions.map(prices =>
                    

                    <ul className="list-group list-group-flush"
                        key={prices.priceReduction_id}>
                        <li className="list-group-item"><b>Reduced price:</b> {prices.reduced_price}</li>
                        <li className="list-group-item"><b>Start date:</b> {prices.start_date}</li>
                        <li className="list-group-item"><b>End date:</b> {prices.end_date}</li>
                        <p></p>
                    </ul>
                )
            }
            <button
                className="btn btn-success addbtn"
                onClick={togglePrice}
            >+ Add price reduction</button>
        </div>
    )
}
