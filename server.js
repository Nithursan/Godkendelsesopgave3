//gemmer express-library i variabel
const express = require("express");

//initialiserer express-server
const server = express();
const PORT = 3000

//henter controllerne
let userController = require('./Controller/userController');
let matchController = require('./Controller/matchController');
let interestController = require('./Controller/interestController');

//endpoints for mine funktioner/controllers
server.get('/', userController.userController)
server.post('/user', userController.addNewUser)
server.get('/match', matchController.matchController)
server.post('match', matchController.addMatch)
server.delete('/match/delete/:id', matchController.deleteMatch)
server.get('/interest', interestController.interestController)
server.post('/interest', interestController.addInterest)


//server aktiveres
server.listen(PORT, () => console.log('Server running on port 3000 '));