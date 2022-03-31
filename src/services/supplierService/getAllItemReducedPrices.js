export const getAllItemReducedPrices = async (id) => {

    const url = `http://localhost:8080/items/${id}/prices`;
    const resp = await fetch(url);
    const data  = await resp.json();

    const prices = data.map(price => {
        return {
            "priceReduction_id": price.priceReduction_id,
            "reduced_price": price.name,
            "start_date": price.start_date,
            "end_date": price.end_date             
        }
    })
    return prices;
}