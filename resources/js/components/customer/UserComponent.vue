
<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Customers </h3>

                        <div class="card-tools">
                            <button class="btn btn-success" data-toggle="modal" data-target="#addNew" @click="openModalWindow">Add New <i class="fas fa-user-plus fa-fw"></i></button>
                        </div>
                    </div>

                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover">
                            <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Type</th>
                                <th>Registered At</th>
                                <th>Modify</th>
                            </tr>

                            <tr v-for="customer in customers" :key="customer.id">
                                <td>{{ customer.id }}</td>
                                <td>{{ customer.name }}</td>
                                <td>{{ customer.email }}</td>
                                <td>{{ customer.type | strToUpper}}</td>
                                <td>{{ customer.created_at | formatDate}}</td>

                                <td>
                                    <a href="#" data-id="user.id" @click="editModalWindow(customer)">
                                        <i class="fa fa-edit blue"></i>Edit
                                    </a>
                                    |
                                    <a href="#" @click="deleteCustomer(customer.id)">
                                        <i class="fa fa-trash red"></i>Delete
                                    </a>

                                </td>
                            </tr>
                            </tbody></table>
                    </div>

                    <div class="card-footer">

                    </div>
                </div>

            </div>
        </div>


        <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">

                        <h5 v-show="!editMode" class="modal-title" id="addNewLabel">Add New Customer</h5>
                        <h5 v-show="editMode" class="modal-title" id="addNewLabel">Update Customer</h5>

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <form @submit.prevent="editMode ? updateCustomer() : createCustomer()">
                        <div class="modal-body">
                            <div class="form-group">
                                <input v-model="form.name" type="text" name="name"
                                       placeholder="Name"
                                       class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                                <has-error :form="form" field="name"></has-error>
                            </div>

                            <div class="form-group">
                                <input v-model="form.email" type="email" name="email"
                                       placeholder="Email Address"
                                       class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                                <has-error :form="form" field="email"></has-error>
                            </div>


                            <div class="form-group">
                                <input v-model="form.password" type="password" name="password" id="password" placeholder="Enter password"
                                       class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                                <has-error :form="form" field="password"></has-error>
                            </div>

                            <div class="form-group">
                                <select name="type" v-model="form.type" id="type" class="form-control" :class="{ 'is-invalid': form.errors.has('type') }">
                                    <option value="">Select User Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">Customer</option>
                                </select>
                                <has-error :form="form" field="type"></has-error>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            <button v-show="editMode" type="submit" class="btn btn-primary">Update</button>
                            <button v-show="!editMode" type="submit" class="btn btn-primary">Create</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
import customerService from "../../services/customerService";

export default {
    data() {
        return {
            editMode: false,
            customers: {},
            form: new Form({
                id: '',
                name : '',
                email: '',
                type: '',
                password: '',

            })
        }
    },
    methods: {

        editModalWindow(user){
            this.form.clear();
            this.editMode = true
            this.form.reset();
            $('#addNew').modal('show');
            this.form.fill(user)
        },
        updateCustomer(){
            // this.form.put('api/customer/'+this.form.id)
                customerService.update(this.form.id,this.form)
                .then(()=>{

                    Toast.fire({
                        icon: 'success',
                        title: 'Customer updated successfully'
                    })

                    Fire.$emit('AfterCreatedCustomerLoadIt');

                    $('#addNew').modal('hide');
                })
                .catch(()=>{
                    console.log("Error.....")
                })
        },
        openModalWindow(){
            this.editMode = false
            this.form.reset();
            $('#addNew').modal('show');
        },

        loadCustomer() {
            customerService.getAll().then( data => (this.customers = data.data));
        },

        createCustomer(){

            this.$Progress.start()
                //create customer information
                customerService.create(this.form)
                .then(() => {

                    Fire.$emit('AfterCreatedCustomerLoadIt'); //custom events

                    Toast.fire({
                        icon: 'success',
                        title: 'User created successfully'
                    })

                    this.$Progress.finish()

                    $('#addNew').modal('hide');

                })
                .catch(() => {
                    console.log("Error......")
                })


            //this.loadUsers();
        },
        deleteCustomer(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {

                if (result.value) {
                    //Send Request to server
                    this.form.delete('api/customer/'+id)
                        .then((response)=> {
                            Swal.fire(
                                'Deleted!',
                                'Customer deleted successfully',
                                'success'
                            )
                            this.loadUsers();

                        }).catch(() => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                            footer: '<a href>Why do I have this issue?</a>'
                        })
                    })
                }

            })
        }
    },

    created() {
        this.loadCustomer();

        Fire.$on('AfterCreatedCustomerLoadIt',()=>{ //custom events fire on
            this.loadCustomer();
        });

    }
}
</script>
