import axios from 'axios';
import authHeader from './auth-header';

let header = {
    headers: authHeader()
};

class TransactionsService {


    makeTransaction(loan) {
        return axios.post('api/transactions', {
            amount: loan.amount,
            time: loan.time,
            reference: loan.reference,
        }, header);
    }

    userTransactions() {
        return axios.get('api/transactions',  header);
    }
}

export default new TransactionsService();
