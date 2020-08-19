import axios from 'axios';
import authHeader from './auth-header';

let header = {
    headers: authHeader()
};

class LoanFundingService {


    submitLoanFunding(loan) {
        return axios.post('api/loan_funding', {
            amount: loan.amount,
            loan_id: loan.loan_id,
            lender_id: loan.lender_id,
        }, header);
    }

    allLoanFunding() {
        return axios.get('api/loan_funding', header);
    }
}

export default new LoanFundingService();
