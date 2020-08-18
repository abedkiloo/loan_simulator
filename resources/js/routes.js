export const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./components/Home")
    },
    {
        path: "/login",
        name: "login",
        component: () => import("./components/customer/UserLogin")
    }, {
        path: "/register",
        name: "register",
        component: () => import("./components/customer/UserRegister")
    }, {
        path: "/profile",
        name: "profile",
        component: () => import("./components/customer/UserProfile")
    }, {
        path: "/customer",
        name: "customers",
        component: () => import("./components/customer/UserComponent")
    },
    {
        path: "/loans",
        alias: "/loans",
        name: "loans",
        component: () => import("./components/loans/LoansComponent")
    },


];

