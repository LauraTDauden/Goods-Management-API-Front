import React from 'react'
import { useForm } from '../../hooks/useForm';

import '../../assets/iteminfo.css';

export const NewPrice = ({ itemData, setItemData, setAddPrice }) => {

    const [PriceData, handlePriceChange, reset] = useForm({
        "priceReduction_id": 0,
        "reduced_price": 0,
        "start_date": "",
        "end_date": ""
    })

    console.log(PriceData)

   const prices = itemData.price_reductions;

    const handleSubmit = (e) => {
        e.preventDefault();
        let validation = validate();
        if (validation != false) {
            setItemData({ ...itemData }, itemData.price_reductions.push(PriceData));
            reset();
            setAddPrice(false);
        }
    }

    const validateDates = () => {
        let validation = true;
        console.log(prices)
        prices.map(price => {
            let newStart = PriceData.start_date;
            let newEnd = PriceData.end_date;
            let oldStart = price.start_date;
            console.log(oldStart)
            let oldEnd = price.end_date;

            if((oldStart < newStart && newStart < oldEnd) || (newStart < oldStart && newEnd > oldStart )){
                console.log("Dates can't overlap with previous price reductions.");
                validation = false;
                return false;
            }
            if (newStart>newEnd){
                console.log("End date must finish later than the start date.");
                validation = false;
                return false;
            }
 
        })
        return validation;
    }


    const validate = () => {
        let validation = true;
        if (PriceData.reduced_price < 1 || PriceData.start_date == "" || PriceData.end_date == "") {
            console.log("You must fill all fields.")
                validation = false
        } else if (!validateDates()){
            validation = false
        } 
        return validation;
    }

    return (
        <div>
            <h4>Associate price reduction</h4>
            <form
                className="supplierform"
                onSubmit={handleSubmit}>
                <div>
                    <p>
                        <label >Reduced price</label>
                        <input
                            type="number"
                            onChange={handlePriceChange}
                            value={PriceData.reduced_price}
                            name="reduced_price"
                            required
                        ></input>
                    </p>
                    <br />
                    <p>
                        <label className="datefield">Start date</label>
                        <input
                            type="date"
                            onChange={handlePriceChange}
                            value={PriceData.start_date}
                            name="start_date"
                            required
                        ></input>
                    </p>
                    <br />
                    <p>
                        <label className="datefield end">End date</label>
                        <input
                            type="date"
                            onChange={handlePriceChange}
                            value={PriceData.end_date}
                            name="end_date"
                            required
                        ></input>
                    </p>
                    <br />
                </div>

                <button className="btn btn-primary btncreate"
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                >Add</button>
            </form>
        </div>
    )
}
