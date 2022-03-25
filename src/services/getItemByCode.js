export const getItemByCode = (code, items) =>{
    let found = false;
    items.map(item => {
        if(item.code == code){
            found = true
        }

    })   
    return found;
}