<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Transactions </h3>

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
                                    <th>Reference</th>
                                    <th>Transacted At</th>
                                    <th>Created  At</th>
                                </tr>

                                <tr v-for="transaction in transactions" :key="transaction.id">
                                    <td>{{ transaction.id }}</td>
                                    <td>Kshs . {{ transaction.amount }}</td>
                                    <td>{{ transaction.time }}</td>
                                    <td>{{ transaction.created_at | formatDate }}</td>

                                    <td>
                                        <a href="#" data-id="user.id" @click="editModalWindow(transaction)">
                                            <i class="fa fa-edit blue"></i>Edit
                                        </a>
                                        <!--                                        |-->
                                        <!--                                        <a href="#" @click="deleteLoan(transaction.id)">-->
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

                                <h5 v-show="!editMode" class="modal-title" id="addNewLabel">Add New Transaction</h5>
                                <h5 v-show="editMode" class="modal-title" id="addNewLabel">Update Transaction</h5>

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <form name="form" @submit.prevent="editMode ? updateLoan() : handleMakeTransaction()">
                                <div class="modal-body">
                                    <div v-if="!successful">
                                        <div class="form-group">
                                            <label for="amount">Amount</label>
                                            <input
                                                v-model="transaction.amount"
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
                                            <label for="reference">Reference</label>
                                            <input
                                                v-model="transaction.reference"
                                                v-validate="'required'"
                                                type="text"
                                                class="form-control"
                                                name="reference"
                                            />
                                            <div
                                                v-if="submitted && errors.has('reference')"
                                                class="alert-danger"
                                            >{{ errors.first('reference') }}
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="time">Time</label>
                                            <input
                                                v-model="transaction.time"
                                                v-validate="'required'"
                                                type="date"
                                                format="yyyy-MM-dd HH:mm"

                                                class="form-control"
                                                name="time"
                                            />
                                            <div
                                                v-if="submitted && errors.has('time')"
                                                class="alert-danger"
                                            >{{ errors.first('time') }}
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <button class="btn btn-primary btn-block">Apply Loan</button>
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
import Transction from "../../models/transction";
import TransactionsService from "../../services/transactions.service";

export default {
    data() {
        return {
            transaction: new Transction('', '', ''),
            submitted: false,
            successful: false,
            message: '',
            transactions: {},
            form: new Form({}),
            editMode: false,

        }
    }, mounted() {
        TransactionsService.userTransactions().then(
            response => {
                this.transactions = response.data;
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


        handleMakeTransaction() {
            this.message = '';
            this.submitted = true;
            this.$validator.validate().then(isValid => {
                if (isValid) {
                    this.$store.dispatch('transactions/make_transaction', this.transaction).then(
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

            return this.$store.state.transactions.applied;
        }
    },
    created() {

    }
}
</script>
