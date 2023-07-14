const mongoose = require('mongoose')

let menuSchema = new mongoose.Schema({
    name: {type:String, require: true}
    icon: {type:String, require: true}
    menu: {type:String, require: true}
    url:  {type:String, require: true}
    entryDate: {}
})