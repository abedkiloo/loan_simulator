<template>
    <div>
        <div>
            <nav class="navbar navbar-expand navbar-dark bg-dark">
                <a href class="navbar-brand" @click.prevent>get$</a>
                <div class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link to="/loans" class="nav-link">
                            <font-awesome-icon icon="home"/>
                            Loans
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link v-if="currentUser" to="/transaction" class="nav-link">Transactions</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link v-if="currentUser" to="/profile" class="nav-link">Profile</router-link>
                    </li>
                </div>

                <div v-if="!currentUser" class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/register" class="nav-link">
                            <font-awesome-icon icon="user-plus"/>
                            Sign Up
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link">
                            <font-awesome-icon icon="sign-in-alt"/>
                            Login
                        </router-link>
                    </li>
                </div>

                <div v-if="currentUser" class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/profile" class="nav-link">
                            <font-awesome-icon icon="user"/>
                            {{ currentUser.username }}
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href @click.prevent="logOut">
                            <font-awesome-icon icon="sign-out-alt"/>
                            LogOut
                        </a>
                    </li>
                </div>
            </nav>
        </div>
        <div class="container">
            <div class="row justify-content-center">

                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Example Component</div>

                        <div class="card-body">
                            I'm an example component.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
    },
    methods: {
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        }
    }
};
</script>
