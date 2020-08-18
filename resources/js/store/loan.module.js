import LoanService from '../services/loans.service';

const initialState = {}

export const loan = {
    namespaced: true,
    state: initialState,
    actions: {
        apply_loan({commit}, loan) {
            return LoanService.applyApply(loan).then(
                user => {
                    commit('applySuccess', user);
                    return Promise.resolve(user);
                },
                error => {
                    commit('applyFailure');
                    return Promise.reject(error);
                }
            );
        }, update_loan({commit}, loan) {
            return LoanService.updateLoan(loan).then(
                user => {
                    commit('updateSuccess', user);
                    return Promise.resolve(user);
                },
                error => {
                    commit('updateFailure');
                    return Promise.reject(error);
                }
            );
        },
    },
    mutations: {
        applySuccess(state, loan) {
            state.applied = true;
            state.loan = loan;
        },
        applyFailure(state) {
            state.applied = false;
            state.loan = null;
        }, updateSuccess(state, loan) {
            state.update = true;
            state.loan = loan;
        },
        updateFailure(state) {
            state.update = false;
            state.loan = null;
        },
    }
};
