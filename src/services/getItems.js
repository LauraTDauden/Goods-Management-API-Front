export const getItems = async () => {

    const url = 'http://localhost:8080/items/';
    const resp = await fetch(url);
    const data  = await resp.json();

    const items = data.map(item => {
        return {
            id: item.item_id,
            code: item.item_code,
            description: item.description,
            state: item.state,
            price: item.price,
            creation_date: item.creation_date,
            creator: item.creator.username,
            suppliers: item.suppliers,
            price_reductions: item.price_reductions
            
        }

    })
    return items;
}