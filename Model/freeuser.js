class FreeUser extends User {
    constructor(firstname, lastname, age, city, bio, password, image, interest) {
        super(firstname, lastname, age, city, bio, password, image, interest);
        this.paid = false;
    }
}

module.exports = FreeUser;