const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const orderSchema = new mongoose.Schema({
    timestamp: {type: Date, default: Date.now, required: true},
    // items: [{type: Schema.Types.Array, ref: 'products'}],
    // products: [{type: Schema.Types.Array, ref: 'products'}],
    // address: {type: String, required: true}
})

const orderModel = mongoose.model('orders', orderSchema);

module.exports = { orderModel }