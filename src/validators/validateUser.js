
export const validateUser = (user, allUsers) => {
    let valid = true;
    if (user.username.trim() < 1 || user.password.trim() < 1){
        console.log("Fields can't be empty.");
        valid = false;
    } else {
        allUsers.map (u =>{
            if (u.username === user.username.toLowerCase()){
                console.log("Username already exists.");
                valid = false;
                return;
            }
        })
    }
    return valid;
}