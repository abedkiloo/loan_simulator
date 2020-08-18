import axios from 'axios';

class UserService {
    getAll() {
        return axios.get("/customer");
    }

    get(id) {
        return axios.get(`/customer/${id}`);
    }

    create(data) {
        return axios.post("/customer", data);
    }

    update(id, data) {
        return axios.put(`/customer/${id}`, data);
    }

    delete(id) {
        return axios.delete(`/customer/${id}`);
    }

    deleteAll() {
        return axios.delete(`/customer`);
    }
    getPublicContent() {
        return "axios.get( 'all');"
    }


}

export default new UserService();
