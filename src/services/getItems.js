export const getItems = async () => {

    const url = 'http://localhost:8080/items/';
    const resp = await fetch(url);
    const data  = await resp.json();

    const items = data.map(item => {
        return {
            id: item.item_id,
            code: item.item_code,
            description: item.description
        }

    })

    return items;
}