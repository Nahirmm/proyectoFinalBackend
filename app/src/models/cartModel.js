const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const cartSchema = new mongoose.Schema({
    user: {type: String, required: true},
    address: {type: String, required: true},
    timestamp: {type: Date, default: Date.now, required: true},
    products: [{type: Schema.Types.Array, ref: 'products'}]
})

const cartModel = mongoose.model('cart', cartSchema);

module.exports = { cartModel }