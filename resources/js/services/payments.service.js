import axios from 'axios';
import authHeader from './auth-header';

let header = {
    headers: authHeader()
};

class PaymentsService {


    makePayment(loan) {
        console.log(loan)
        return axios.post('api/payments', {
            loan_id: loan.loan_id,
            transaction_id: loan.transaction_id,
        }, header);
    }

    userPayments() {
        return axios.get('api/payments',  header);
    }
}

export default new PaymentsService();
