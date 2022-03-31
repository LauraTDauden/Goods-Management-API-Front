
export const postUser = (userData, isCreated) => {
    fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData),
    }).then(res => res.json())
        .then(res => {
            if (res == "1"){
                isCreated.current = true;
            }
        });
}