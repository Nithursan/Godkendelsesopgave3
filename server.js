//gemmer express-library i variabel
const express = require("express");

//initialiserer express-server
const app = express();
const PORT = process.env.PORT || 3000

//henter controller fra sti
let userController = require('./Controller/userController')

//read endpoint på routen '/'
server.get('/', userController)

//server aktiveres
server.listen(PORT, () => console.log('Server running on port 3000'));