import axios from 'axios';

const URL = "http://localhost:8080/users";

export default class ItemService {
    static async getAllUsers() {
        return axios.get(URL);
    }

    static async deleteUser(username) {
        return axios.delete(URL + '/' + username);
    }

    static async addUser(user) {
        return axios.post(URL, user);
    }
}