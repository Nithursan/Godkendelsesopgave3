const hardcodeInterest = require('../HardcodeInterest')
const Interest = require('../Model/Interest')

//controller
function interestController(req, res) {
    res.json(hardcodeInterest);
}

//tilføje interest
function addInterest(req, res) {
    const interest = new Interest(req.body.hobby)
    hardcodeInterest.push(interest)
    res.sendStatus(200);
}

module.exports = {
    interestController,
    addInterest,
}