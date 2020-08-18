import axios from 'axios';


class AuthService {
    login(user) {
        return axios
            .post('api/login', {
                email: user.email,
                password: user.password
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post('api/register', {
            name: user.name,
            email: user.email,
            type: user.type,
            password: user.password
        });
    }
}

export default new AuthService();
