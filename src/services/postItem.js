export const postItem = (e, formData) => {
    fetch('http://localhost:8080/items/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
    }).then(res => res.json())
        .then(res => {
            console.log(res);
        });
}