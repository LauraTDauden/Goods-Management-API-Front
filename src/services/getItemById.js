export const getItemById = (id, items) =>{

    let found = "";
    items.map(item => {
        if(item.id == id){
            //console.log(item)
            found = item;
        }

    })   
    return found;
}