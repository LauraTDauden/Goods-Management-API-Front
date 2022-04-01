
export const gettAllUsers = async () => {
    
    const url = 'http://localhost:8080/users/';
    const resp = await fetch(url);
    const data  = await resp.json();

    const users = data.map (user => {
        return{
            user_id: user.user_id,
            username: user.username,
            password: user.password,
            role: user.role
        }
    })
    return users;
}