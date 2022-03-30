
export const validateSupplier = (supplier) => {

    if(supplier.name.length<1 || supplier.country.length<1){
        return false;
    } else return true;
}