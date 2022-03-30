export const useGetSupplierByName = (name, suppliers) =>{
let supplier ={};
    suppliers.map(sup => {
        if(sup.name == name){
            supplier = sup;
                return sup;
    } })
    return supplier;
}
