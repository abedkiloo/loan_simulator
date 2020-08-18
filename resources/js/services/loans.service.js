import axios from 'axios';
import authHeader from './auth-header';

let header = {
    headers: authHeader()
};

class LoanService {


    applyApply(loan) {
        return axios.post('api/loans', {
            amount: loan.amount,
        }, header);
    }
    updateLoan(loan) {
        return axios.put('api/loans', {
            amount: loan.amount,
        }, header);
    }

    userLoans(loan) {
        return axios.get('api/loans',  header);
    }
}

export default new LoanService();
