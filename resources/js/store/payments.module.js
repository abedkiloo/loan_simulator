import PaymentsService from '../services/payments.service';

const initialState = {}

export const payments = {
    namespaced: true,
    state: initialState,
    actions: {
        make_payment({commit}, payment) {
            console.log("arrived")
            return PaymentsService.makePayment(payment).then(
                payment => {
                    commit('paymentSuccess', payment);
                    return Promise.resolve(payment);
                },
                error => {
                    commit('paymentFailure');
                    return Promise.reject(error);
                }
            );
        },
    },
    mutations: {
        paymentSuccess(state, loan) {
            state.transacted = true;
            state.loan = loan;
        },
        paymentFailure(state) {
            state.transacted = false;
            state.loan = null;
        },
    }
};
