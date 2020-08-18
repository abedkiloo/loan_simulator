import axios from 'axios';

class loansService {
    getAll() {
        return axios.get("/loans");
    }

    get(id) {
        return axios.get(`/loans/${id}`);
    }

    create(data) {
        return axios.post("/loans", data);
    }

    update(id, data) {
        return axios.put(`/loans/${id}`, data);
    }

    delete(id) {
        return axios.delete(`/loans/${id}`);
    }

    deleteAll() {
        return axios.delete(`/loans`);
    }

}

export default new loansService();
