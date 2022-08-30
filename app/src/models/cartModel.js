const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const cartSchema = new mongoose.Schema({
    email: {type: String, required: true},
    timestamp: {type: Date, default: Date.now, required: true},
    products: [{type: Schema.Types.Array, ref: 'products'}],
    address: {type: String, required: true}
})

const cartModel = mongoose.model('cart', cartSchema);

module.exports = { cartModel }