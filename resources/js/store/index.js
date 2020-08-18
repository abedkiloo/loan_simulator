import Vue from 'vue';
import Vuex from 'vuex';

import {auth} from './auth.module';
import {loan} from './loan.module';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth, loan
    }
});
