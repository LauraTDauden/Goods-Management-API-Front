export const deleteUser = (id) => {
    fetch(`http://localhost:8080/users/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(res => {
            if (res == "1"){
                console.log("Deleted")
            }
        });
}