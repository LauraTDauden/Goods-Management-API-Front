export const getAllItemSuppliers = async (id) => {

    const url = `http://localhost:8080/items/${id}/suppliers`;
    const resp = await fetch(url);
    const data  = await resp.json();

    const suppliers = data.map(supplier => {
        return {
            id: supplier.id,
            name: supplier.name,
            country: supplier.country      
        }
    })
    return suppliers;
}