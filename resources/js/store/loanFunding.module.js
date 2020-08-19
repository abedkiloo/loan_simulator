import LoanFundingService from '../services/loanFunding.service';

const initialState = {}

export const loan_funding = {
    namespaced: true,
    state: initialState,
    actions: {
        submit_loan_funding({commit}, loan_funding) {
            return LoanFundingService.submitLoanFunding(loan_funding).then(
                loan_funding => {
                    commit('loan_fundingSuccess', loan_funding);
                    return Promise.resolve(loan_funding);
                },
                error => {
                    commit('loan_fundingFailure');
                    return Promise.reject(error);
                }
            );
        },
    },
    mutations: {
        loan_fundingSuccess(state, loan) {
            state.transacted = true;
            state.loan = loan;
        },
        loan_fundingFailure(state) {
            state.transacted = false;
            state.loan = null;
        },
    }
};
