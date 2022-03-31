
export const deactivateItem = (id, reason, username, deactivated) => {
    fetch(`http://localhost:8080/items/${id}/deactivate?username=${username}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reason),
    }).then(res => res.json())
        .then(res => {
            if (res == "1"){
                deactivated.current = true;
            }
        });
}