require('dotenv').config()
const sendEmail = require('../utils/nodemailer')


const orderEmail = async (order, cart) => {
    let prodDetail = ''
    let numTotalProd = 0
    let totalProdPrice = 0

    cart.products.forEach(prod => {
        numTotalProd += prod.qty
        totalProdPrice += prod.totalPrice
        prodDetail += `<div> Producto : ${prod.title}, Precio unitario : ${prod.priceUnit}, Cantidad: ${prod.qty}, Precio total: ${prod.totalPrice} </div>`
    })

    let emailRecipient = process.env.ADMIN_MAIL + ' , ' + order.user
    let tittleEmail = `Orden generada número: ${order.orderNumber}`
    let bodyEmail = `<h1>Se ha realizado la siguiente orden de compra:</h1>
                    <p>Número de orden: ${order.orderNumber}</p>
                    <p>Estado de la orden: ${order.orderState}</p>
                    <p>Fecha de la orden: ${order.dateOrder}</p>
                    <p>Usuario: ${order.user}</p>
                    <p>Dirección: ${order.address}</p>
                    <p>Productos: ${prodDetail}</p>
                    <p>Cantidad total: ${numTotalProd}</p>
                    <p>Precio total: ${totalProdPrice}</p>`

    await sendEmail(emailRecipient, bodyEmail, tittleEmail)
}

module.exports = orderEmail