
import { getItemByCode } from "../services/itemService/getItemByCode";

export const validateItem = (itemList, formData) => {

    const validation = {
        valid: false,
        code_number: false,
        code_unique: true,
        code: false,
        description: false,
        price: false
    }

    
        if (getItemByCode(formData.item_code, itemList)){
            validation.code_unique = false;
        }

        if (/^\d+$/.test(formData.item_code)){
            validation.code_number = true;
        }    

        if (formData.item_code && validation.code_number && validation.code_unique){
        validation.code = true;}
            
    if (formData.description){
        validation.description = true;
    }
        

    if (formData.price > 0){
        validation.price = true;
    }
    
    if(validation.code_number && validation.code_unique && validation.code && validation.description && validation.price)
        validation.valid = true;

    return validation;
}