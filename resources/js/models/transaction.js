export default class Transaction {
    constructor(amount, customer_id, reference, time,created_at,id) {
        this.amount = amount;
        this.id = id;
        this.customer_id = customer_id;
        this.reference = reference;
        this.created_at = created_at;
        this.time = time;
    }
}
