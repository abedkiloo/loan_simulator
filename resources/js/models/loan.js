export default class Loan {
    constructor(amount, customer_id, status, created_at) {
        this.amount = amount;
        this.customer_id = customer_id;
        this.status = status;
        this.created_at = created_at;
    }
}
