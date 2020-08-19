<template>

    <div class="container">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <a href class="navbar-brand" @click.prevent>$Dollar-Loaner</a>
            <div class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="/loans" class="nav-link">
                        <font-awesome-icon icon="home"/>
                        Loans
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link v-if="currentUser" to="/profile" class="nav-link">Profile</router-link>
                </li>
                <li class="nav-item">
                    <router-link v-if="currentUser" to="/transaction" class="nav-link">Transaction</router-link>
                </li>
                <li class="nav-item">
                    <router-link v-if="currentUser" to="/payment" class="nav-link">Payment</router-link>
                </li>
                <li class="nav-item">
                    <router-link v-if="currentUser" to="/loan-funding" class="nav-link">Loan Funding</router-link>
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

        <div class="row mt-5">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Loan Funding </h3>

                        <div class="card-tools">
                            <button class="btn btn-success" data-toggle="modal" data-target="#addNew">Add New <i
                                class="fas fa-user-plus fa-fw"></i></button>
                        </div>
                    </div>

                    <div class="card-body table-responsive p-0">
                        <div class="card-body table-responsive p-0">
                            <table class="table table-hover">
                                <tbody>
                                <tr>
                                    <th>Amount</th>
                                    <th>Loan Amount</th>
                                    <th>Lender</th>
                                    <th>Created At</th>
                                </tr>

                                <tr v-for="loan_fund in allLoanFunding" :key="loan_fund.id">
                                    <td>Kshs .{{ loan_fund.amount }}</td>
                                    <td> {{ loan_fund.loan.amount }}</td>
                                    <td>{{ loan_fund.lender.name }}</td>
                                    <td>{{ loan_fund.created_at | formatDate }}</td>

                                    <td>
                                        <a href="#" data-id="user.id" @click="editModalWindow(transaction)">
                                            <i class="fa fa-edit blue"></i>Edit
                                        </a>
                                        <!--                                        |-->
                                        <!--                                        <a href="#" @click="deletePayment(transaction.id)">-->
                                        <!--                                            <i class="fa fa-trash red"></i>-->
                                        <!--                                        </a>-->

                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="card-footer">

                    </div>
                </div>
                <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel"
                     aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">

                                <h5 v-show="!editMode" class="modal-title" id="addNewLabel">Add New Loan Funding</h5>
                                <h5 v-show="editMode" class="modal-title" id="addNewLabel">Update Loan Funding</h5>

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <form name="form" @submit.prevent="editMode ? updatePayment() : handleLoanFunding()">
                                <div class="modal-body">
                                    <div v-if="!successful">
                                        <div class="form-group">
                                            <label for="amount">Amount</label>
                                            <input
                                                v-model="loanFunding.amount"
                                                v-validate="'required'"
                                                type="number"
                                                class="form-control"
                                                name="amount"
                                            />
                                            <div
                                                v-if="submitted && errors.has('amount')"
                                                class="alert-danger"
                                            >{{ errors.first('amount') }}
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="lender_id">Lender</label>
                                            <select
                                                name="lender_id"
                                                v-model="loanFunding.lender_id"
                                                id="lender_id"
                                                v-validate="'required'"
                                                class="form-control">
                                                <option value="">Select Loan</option>
                                                <option v-for="user in users" :key="user.id" :value="user.id">
                                                    {{ user.name }}
                                                </option>
                                            </select>
                                            <div
                                                v-if="submitted && errors.has('lender_id')"
                                                class="alert-danger"
                                            >{{ errors.first('lender_id') }}
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="lender_id">Loan</label>
                                            <select
                                                name="loan_id"
                                                v-model="loanFunding.loan_id"
                                                id="loan_id"
                                                v-validate="'required'"
                                                class="form-control">
                                                <option value="">Select Loan</option>
                                                <option v-for="loan in loans" :key="loan.id" :value="loan.id">
                                                    {{ loan.amount }}({{ loan.customer.name }})
                                                </option>
                                            </select>
                                            <div
                                                v-if="submitted && errors.has('loan_id')"
                                                class="alert-danger"
                                            >{{ errors.first('loan_id') }}
                                            </div>
                                        </div>


                                        <div class="form-group">
                                            <button class="btn btn-primary btn-block">Submit Payment</button>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal-footer">

                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                    <button v-show="editMode" type="submit" class="btn btn-primary">Update</button>
                                    <button v-show="!editMode" type="submit" class="btn btn-primary">Create</button>
                                </div>


                            </form>
                            <div
                                v-if="message"
                                class="alert"
                                :class="successful ? 'alert-success' : 'alert-danger'"
                            >{{ message }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoanFunding from "../../models/loanFunding";
import LoanFundingService from "../../services/loanFunding.service";
import UserService from "../../services/user.service";
import LoanService from "../../services/loans.service";

export default {
    data() {
        return {
            loanFunding: new LoanFunding('', '', ''),
            submitted: false,
            successful: false,
            message: '',
            allLoanFunding: {},
            loans: {},
            users: {},
            form: new Form({}),
            editMode: false,

        }
    }, mounted() {
        UserService.getAll().then(
            response => {
                this.users = response.data;
            },
            error => {
                this.content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
            }
        );
        LoanFundingService.allLoanFunding().then(
            response => {
                this.allLoanFunding = response.data;
            },
            error => {
                this.content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
            }
        );
        LoanService.userLoans().then(
            response => {
                this.loans = response.data;
            },
            error => {
                this.content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
            }
        );
    },
    methods: {
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        },
        editModalWindow(user) {
            this.form.clear();
            this.editMode = true
            this.form.reset();
            $('#addNew').modal('show');
            this.form.fill(user)
        },

        openModalWindow() {
            this.editMode = false
            this.form.reset();
            $('#addNew').modal('show');
        },


        handleLoanFunding() {
            this.message = '';
            this.submitted = true;
            this.$validator.validate().then(isValid => {
                if (isValid) {
                    this.$store.dispatch('loan_funding/submit_loan_funding', this.loanFunding).then(
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
        },

    },
    computed: {
        applied() {
            return this.$store.state.transactions.transacted;
        }, currentUser() {
            return this.$store.state.auth.user;
        },
    },
    created() {

    }
}
</script>
