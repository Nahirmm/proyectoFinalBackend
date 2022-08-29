const express =  require('express')
const routesCart = express.Router()

const cartControllers = require('../controllers/cartController')
const cartsControllers = cartControllers.getInstance()

//RUTAS CARRITOS
routesCart.get('/', cartsControllers.getAllCarts)
routesCart.post('/', cartsControllers.addCart)
routesCart.delete('/:id', cartsControllers.deleteCart)
routesCart.get('/:id/products', cartsControllers.productsinCart)
routesCart.post('/:id/products', cartsControllers.addProductInCart)
routesCart.delete('/:idcart/products/:idprod', cartsControllers.deleteProductInCart)


module.exports = { routesCart }