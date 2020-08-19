import axios from 'axios';
import authHeader from "./auth-header";

let header = {
    headers: authHeader()
};

class UserService {
    getAll() {
        return axios.get("api/customer", header);
    }

    get(id) {
        return axios.get(`api/customer/${id}`, header);
    }

    create(data) {
        return axios.post("api/customer", data);
    }

    update(id, data) {
        return axios.put(`api/customer/${id}`, data, header);
    }

    delete(id) {
        return axios.delete(`api/customer/${id}`, header);
    }

    deleteAll() {
        return axios.delete(`api/customer`, header);
    }

    getPublicContent() {
        return "axios.get( 'all');"
    }


}

export default new UserService();
