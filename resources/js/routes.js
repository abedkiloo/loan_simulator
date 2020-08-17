// import Dashboard from './components/admin/DashboardComponent.vue'
// import Profile from './components/admin/ProfileComponent.vue'
// import User from './components/admin/UserComponent.vue'

export const routes = [

    {
        path: "/",
        alias: "/customers",
        name: "customers",
        component: () => import("./components/customer/UserComponent")
    },


];
