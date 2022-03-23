import axios from 'axios'

const ITEMS_REST_API_URL = 'http://localhost:8080/api/items';

class ItemService {

    getItems(){
        return axios.get(ITEMS_REST_API_URL);
    }
}

export default ItemService();