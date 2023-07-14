const mongoose = require('mongoose')

let menuSchema = new mongoose.Schema({
    name: {type:String, require: true},
    icon: {type:String, require: true}\,
    menu: {type:String, require: true},
    url:  {type:String, require: true},
    entryDate: {type: DAte, default:Date.now}
})

let userSchema = new mongoose.Schema({
    email: {type:String, require: true},
    pwd:  {type:String, require: true},
    entryDate: {type: DAte, default:Date.now}
})

//export both schemas as a single object, so we only need to go to object and grab the schema we want everytime we want to ref. a schema
let menu = mongoose.model('menu', menuSchema, 'menu');
let users = mongoose.model('users', menuSchema, 'users');
let mySchemsa = {
    "menu" : menu,
    'users' : users
}

module.exports = mySchemas