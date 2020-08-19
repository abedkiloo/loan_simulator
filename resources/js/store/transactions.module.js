import TransactionsService from '../services/transactions.service';

const initialState = {}

export const transactions = {
    namespaced: true,
    state: initialState,
    actions: {
        make_transaction({commit}, transaction) {
            console.log("arrived")
            return TransactionsService.makeTransaction(transaction).then(
                transaction => {
                    commit('transactionSuccess', transaction);
                    return Promise.resolve(transaction);
                },
                error => {
                    commit('transactionFailure');
                    return Promise.reject(error);
                }
            );
        },
    },
    mutations: {
        transactionSuccess(state, loan) {
            state.transacted = true;
            state.loan = loan;
        },
        transactionFailure(state) {
            state.transacted = false;
            state.loan = null;
        },
    }
};
