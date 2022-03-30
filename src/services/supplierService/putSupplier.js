
export const putSupplier = (id, supplierData) => {
    fetch(`http://localhost:8080//items/${id}/suppliers`, {
        method: 'PUT',
        headers: {
           
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(supplierData),
    }).then(res => res.json())
        .then(res => {
            console.log(res);
            if (res == "1"){
                //isCreated.current = true;
            }
        });
}