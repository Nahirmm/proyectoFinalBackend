const mongoose = require('mongoose') 
const { Schema } = require('mongoose')

const UserModel = mongoose.model('User', new mongoose.Schema({
    name: {type: String, required: true},
    lastname: {type: String, required: false},
    phone: {type: Number, required: false},
    address: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
}))

module.exports = { UserModel }