<template>
    <div class="col-md-12">
        <div class="card card-container">
            <img
                id="profile-img"
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                class="profile-img-card"
            />
            <form name="form" @submit.prevent="handleRegister">
                <div v-if="!successful">
                    <div class="form-group">
                        <label for="name">name</label>
                        <input
                            v-model="user.name"
                            v-validate="'required|min:3|max:20'"
                            type="text"
                            class="form-control"
                            name="name"
                        />
                        <div
                            v-if="submitted && errors.has('name')"
                            class="alert-danger"
                        >{{ errors.first('name') }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                            v-model="user.email"
                            v-validate="'required|email|max:50'"
                            type="email"
                            class="form-control"
                            name="email"
                        />
                        <div
                            v-if="submitted && errors.has('email')"
                            class="alert-danger"
                        >{{ errors.first('email') }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="type">Email</label>

                        <select
                            name="type"
                            v-model="user.type"
                            id="type"
                            v-validate="'required'"
                            class="form-control">
                            <option value="">Select User Role</option>
                            <option value="admin">Admin</option>
                            <option value="user"> Customer</option>
                            <option value="funder">Funder</option>
                        </select>
                        <div
                            v-if="submitted && errors.has('type')"
                            class="alert-danger"
                        >{{ errors.first('type') }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                            v-model="user.password"
                            v-validate="'required|min:6|max:40'"
                            type="password"
                            class="form-control"
                            name="password"
                        />
                        <div
                            v-if="submitted && errors.has('password')"
                            class="alert-danger"
                        >{{ errors.first('password') }}
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary btn-block">Sign Up</button>
                    </div>
                </div>
            </form>
            <div class="form-group">
                <button class="btn btn-secondary btn-block" v-on:click="login">
                    Sign In
                </button>
            </div>

            <div
                v-if="message"
                class="alert"
                :class="successful ? 'alert-success' : 'alert-danger'"
            >{{ message }}
            </div>
        </div>
    </div>
</template>

<script>
import Customer from '../../models/customer';

export default {
    name: 'Register',
    data() {
        return {
            user: new Customer('', '', ''),
            submitted: false,
            successful: false,
            message: ''
        };
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        }
    },
    mounted() {
        if (this.loggedIn) {
            this.$router.push('/profile');
        }
    },
    methods: {
        login() {
            this.$router.push('/login');
        },
        handleRegister() {
            this.message = '';
            this.submitted = true;
            this.$validator.validate().then(isValid => {
                if (isValid) {
                    this.$store.dispatch('auth/register', this.user).then(
                        data => {
                            this.message = data.message;
                            this.successful = true;
                        },
                        error => {
                            this.message =
                                (error.response && error.response.data) ||
                                error.message ||
                                error.toString();
                            this.successful = false;
                        }
                    );
                }
            });
        }
    }
};
</script>
