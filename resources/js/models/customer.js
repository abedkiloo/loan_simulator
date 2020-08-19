export default class Customer {
    constructor(name, email, type, password, id) {
        this.name = name;
        this.type = type;
        this.email = email;
        this.id = id;

        this.password = password;
    }
}
