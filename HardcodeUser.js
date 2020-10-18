const User = require('./Model/user');
const CreditCard = require('./Model/CreditCard');
const Image = require('./Model/Image');
const Interest = require('./Model/Interest');
const PaymentUser = require('./Model/PaymentUser')


let CreditCard1 = new CreditCard(1234567890, "Nithursan", 303, "09/23")
let CreditCard2 = new CreditCard(0987654321, "Simone", 949, "10/22")

let Image1 = new Image("instagram.com/nithursan")
let Image2 = new Image("instagram.com/simone")

let Interest1 = new Interest("lasagne", "videogames", "football", "HA(it)")
let Interest2 = new Interest("Burger", "fitness", "tennis", "IB")

let userArray = []
let User1 = new User("Nithursan", "Sivalingam", "19", "København", "Ung og frisk dreng", "kode123", Image1, Interest1);
let User2 = new User("Simone", "Larsen", "22", "Holstebro", "Love fitness", "kode321", Image2, Interest2)

let paidUser1 = new PaymentUser(User1)
let paidUser2 = new PaymentUser(User2)

userArray = [paidUser1, paidUser2]

module.exports = userArray