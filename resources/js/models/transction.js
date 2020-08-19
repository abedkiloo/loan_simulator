export default class Transction {
    constructor(amount, customer_id, reference, time,created_at) {
        this.amount = amount;
        this.customer_id = customer_id;
        this.reference = reference;
        this.created_at = created_at;
        this.time = time;
    }
}
