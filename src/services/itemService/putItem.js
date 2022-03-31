
export const putItem = (id, itemData, isUpdated) => {
    fetch(`http://localhost:8080/items/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemData),
    }).then(res => res.json())
        .then(res => {
            if (res == "1"){
                isUpdated.current = true;
            }
        });
}