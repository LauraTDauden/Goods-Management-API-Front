export const getSuppliers = async () => {

    const url = 'http://localhost:8080/suppliers/';
    const resp = await fetch(url);
    const data  = await resp.json();

    const items = data.map(supplier => {
        return {
            supplier_id: supplier.supplier_id,
            name: supplier.name,
            country: supplier.country      
        }
    })
    return items;
}