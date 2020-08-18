<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Loans </h3>

                        <div class="card-tools">
                            <button class="btn btn-success" data-toggle="modal" data-target="#addNew">Add New <i
                                class="fas fa-user-plus fa-fw"></i></button>
                        </div>
                    </div>

                    <div class="card-body table-responsive p-0">



                        <form name="form" @submit.prevent="handleApplyLoan">
                            <div v-if="!successful">
                                <div class="form-group">
                                    <label for="amount">Amount</label>
                                    <input
                                        v-model="loan.amount"
                                        v-validate="'required'"
                                        type="text"
                                        class="form-control"
                                        name="name"
                                    />
                                    <div
                                        v-if="submitted && errors.has('amount')"
                                        class="alert-danger"
                                    >{{ errors.first('amount') }}
                                    </div>
                                </div>

                                <div class="form-group">
                                    <button class="btn btn-primary btn-block">Apply Loan</button>
                                </div>
                            </div>
                        </form>

                    </div>

                    <div class="card-footer">

                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
import Loan from "../../models/Loan";
import LoanService from "../../services/loans.service";

export default {
    data() {
        return {
            loan: new Loan('', '', ''),
            submitted: false,
            successful: false,
            message: '',
            loans: {},
            form: new Form({})
        }
    }, mounted() {
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
        handleApplyLoan() {
            this.message = '';
            this.submitted = true;
            this.$validator.validate().then(isValid => {
                if (isValid) {
                    this.$store.dispatch('loan/apply_loan', this.loan).then(
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

    },
    computed: {
        applied() {
            console.log(this.$store.state.loan.applied);

            return this.$store.state.loan.applied;
        }
    },
    created() {

    }
}
</script>
