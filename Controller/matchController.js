const hardcodeMatch = require('../HardcodeMatch')
const Match = require('../Model/match')
const users = require('../HardcodeUser')

//controller
function matchController(req, res) {
    res.json(hardcodeMatch)
}

//tilføje match
function addMatch(req, res) {
    const match = new Match(users[0], users[1])
    hardcodeMatch.push(match)
    res.sendStatus(200);
}

//slette en match
function deleteMatch(req, res) {
    delete hardcodeMatch[0]
    res.sendStatus(200);
}

//eksporter nu funktionerne
module.exports = {
    matchController,
    addMatch,
    deleteMatch
}