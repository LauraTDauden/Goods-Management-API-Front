import axios from 'axios';

const URL = "http://localhost:8080/items";

export default class ItemService {
    static async getAllItems() {
        return axios.get(URL);
    }

    static async editItem(item) {
        return axios.put(URL + '/' + item.code, item);
    }

    static async deactivateItem(item, reason) {
        return axios.put(URL + '/deactivate/' + item.code, reason);
    }

    static async removeItem(code) {
        return axios.delete(URL + '/' + code);
    }

    static async addItem(item) {
        return axios.post(URL, item);
    }
}