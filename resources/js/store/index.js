import Vue from 'vue';
import Vuex from 'vuex';

import {auth} from './auth.module';
import {loan} from './loan.module';
import {transactions} from './transactions.module';
import {payments} from './payments.module';
import {loan_funding} from './loanFunding.module';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth, loan, transactions, payments, loan_funding
    }
});
