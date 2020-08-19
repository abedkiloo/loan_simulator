export default class Payment {
    constructor(loan_id, transaction_id, created_at, id) {
        this.loan_id = loan_id;
        this.transaction_id = transaction_id;
        this.created_at = created_at;
        this.id = id;

    }
}
