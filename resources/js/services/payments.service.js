import axios from 'axios';
import authHeader from './auth-header';

let header = {
    headers: authHeader()
};

class PaymentsService {


    makePayment(loan) {
        return axios.post('api/payments', {
            amount: loan.amount,
            time: loan.time,
            reference: loan.reference,
        }, header);
    }

    userPayments() {
        return axios.get('api/payments',  header);
    }
}

export default new PaymentsService();
