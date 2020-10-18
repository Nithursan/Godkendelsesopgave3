//henter User model
const User = require('../Model/user');
const users = require('../HardcodeUser');

//controller
function userController(req, res) {
    res.json(users);
}

//tilføje ny bruger
function addNewUser(req, res) {
    console.log(req.body.lastname)
    const user = new User(req.body.firstname, req.body.lastname)
    users.push(user)
    res.sendStatus(200);
}

//slette en bruger
function deleteUser(req, res) {
    const firstname = req.params.id
    console.log(firstname)
    service.removeByAttr(users, 'firstname', `${firstname}`)
    res.sendStatus(200);
}

//eksporter nu funktionerne
module.exports = {
    userController,
    addNewUser,
    deleteUser
}