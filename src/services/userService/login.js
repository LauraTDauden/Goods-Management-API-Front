export const login = (e) => {
    console.log(loginData)
    fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData),
    }).then(res => res.json())
        .then(res => {
            console.log(res);
            isAuthorized(res);
        });
}