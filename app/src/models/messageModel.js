const mongoose = require('mongoose') 
const { Schema } = require('mongoose')

//email - tipo (usuario para preguntas, sistema para respuestas) - timestamp - cuerpo del mensaje
const Message = mongoose.model('Messages', new mongoose.Schema({
    name: String,
    lastNames: String, 
    address: String,
    age: Number,
    email: String,
    phone: Number,
    image: String,
    username: String,
    password: String
}))

module.exports = { Message }