class PaymentUser extends User {
    constructor(firstname, lastname, age, city, bio, password, image, interest) {
        super(firstname, lastname, age, city, bio, password, image, interest);
        this.paid = true;
    }
}

module.exports = PaymentUser;