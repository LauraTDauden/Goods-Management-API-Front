import {isCreated} from '../../components/items/ItemCreation';

export const postItem = (formData, isCreated) => {
    fetch('http://localhost:8080/items', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
    }).then(res => res.json())
        .then(res => {
            if (res == "1"){
                isCreated.current = true;
            }
        });
}