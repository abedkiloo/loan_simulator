require('./bootstrap');

window.Vue = require('vue');

//Import Vue Filter
require('./filter');

//Import progressbar
require('./progressbar');

//Setup custom events
require('./customEvents');

//Import View Router
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//Import Sweetalert2
import Swal from 'sweetalert2'
import Router from 'vue-router';

window.Swal = Swal
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
window.Toast = Toast

//Import v-from
import {Form, HasError, AlertError} from 'vform'

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.use(Router);

//Routes
import {routes} from './routes';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {
    faHome,
    faUser,
    faUserPlus,
    faSignInAlt,
    faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);
//Register Routes
const router = new Router({
    // new VueRouter({
    routes,
    store,
    mode: 'history',

})
router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/home'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
    router,
    store,
});
