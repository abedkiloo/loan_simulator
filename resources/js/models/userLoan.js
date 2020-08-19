// import Customer from "./customer"

export default class UserLoan {
    constructor(amount, customer_id, status, created_at, id) {
        this.amount = amount;
        // this.Customer = Customer;
        this.customer_id = customer_id;
        this.status = status;
        this.created_at = created_at;
        this.id = id;

    }
}
